"use strict";
var Kebabtrainer;
(function (Kebabtrainer) {
    class Worker extends Kebabtrainer.Person {
        task = Kebabtrainer.Task.None;
        stress = 0;
        ingredientsInKebab = [];
        stressFactor = 2;
        activeIngredientToBring = null;
        grabbedIngredient = false;
        activeIngredientToCut = null;
        constructor(_shop, _pos, _stressFactor) {
            super(_shop, _pos);
            this.stressFactor = _stressFactor;
        }
        update() {
            super.update();
            // Which task is active
            switch (this.task) {
                case Kebabtrainer.Task.ServeCustomer:
                    this.serveCustomer();
                    break;
                case Kebabtrainer.Task.BringIngredients:
                    this.bringIngredients();
                    break;
                case Kebabtrainer.Task.CutIngredients:
                    this.cutIngredients();
                    break;
                default:
                    this.takeABreak();
                    break;
            }
            // Add stresslevel if working
            if (this.task != Kebabtrainer.Task.None) {
                this.stress = this.stress + (0.0001 * this.stressFactor);
                this.updateMood();
                // Limit stress level to 1 
                if (this.stress >= 1) {
                    this.stress = 1;
                }
            }
        }
        serveCustomer() {
            // Check if worker is on the way to workplace
            if (this.targetPosition.x != this.shop.counterPosition.x || this.targetPosition.y != this.shop.counterPosition.y) {
                this.setTarget(this.shop.counterPosition);
            }
            // If there are no customers left, there is nothing to do
            if (this.shop.customers.length == 0) {
                return;
            }
            // Save the customer in a variable just so we dont have to write "this.shop.customers" everytime
            let customer = this.shop.customers[0];
            // Create a temporay boolean to check if we have all the ingredients
            let hasAllIngredients = true;
            // Check if we have all the ingredients the customer wants
            for (let ingredientWish of customer.ingredientWishes) {
                // Another temporal variable to check if we have the specific ingredient we are currently looking for
                let hasIngredient = false;
                // Go over all ingredients in kebab and look for the ingredient
                for (let ingredientInKebab of this.ingredientsInKebab) {
                    // Set hasIngredient variable to true if it's found
                    if (ingredientInKebab == ingredientWish) {
                        hasIngredient = true;
                        break;
                    }
                }
                // Set hasIngredient variable to false if it's not found
                if (hasIngredient == false) {
                    hasAllIngredients = false;
                }
            }
            // If we have all the ingredients, set customer to served and reset the ingredients in kebab
            if (hasAllIngredients == true && this.ingredientsInKebab.length >= customer.ingredientWishes.length) {
                customer.becomServed(this.ingredientsInKebab);
                this.ingredientsInKebab = [];
            }
        }
        addIngredientsToKebab(_ingredient) {
            this.ingredientsInKebab.push(_ingredient);
        }
        bringIngredients() {
            // Check if already on the way to get ingredient
            if (this.activeIngredientToBring != null) {
                // Check if we already grabbed the ingredient
                if (this.grabbedIngredient == true) {
                    // If worker grabbed the ingredient, check if worker is at the counter position
                    let distance = this.shop.bringIngredientsPositionCounter.copy();
                    distance.subtract(this.position);
                    if (distance.length < 1) {
                        // If worker is at counter position, add the ingerdient to the ingredientsFill of the counter
                        for (let ingredientFill of this.shop.ingredientsCounter) {
                            if (ingredientFill.ingredient == this.activeIngredientToBring) {
                                // After adding the ingredient, reset active ingredient to bring and the grabbed ingredient variable
                                ingredientFill.fillAmount = this.shop.ingredientsFullAmount;
                                this.activeIngredientToBring = null;
                                this.grabbedIngredient = false;
                                break;
                            }
                        }
                    }
                }
                else {
                    // If ingredient is not grabbed, move towards the cutter position
                    let distance = this.shop.bringIngredientsPositionCutter.copy();
                    distance.subtract(this.position);
                    if (distance.length < 1) {
                        // Grab the ingredient when at cutter position
                        for (let ingredientFill of this.shop.ingredientsCutting) {
                            if (ingredientFill.ingredient == this.activeIngredientToBring && ingredientFill.fillAmount >= this.shop.ingredientsFullAmount) {
                                ingredientFill.fillAmount = 0;
                                this.grabbedIngredient = true;
                                this.setTarget(this.shop.bringIngredientsPositionCounter);
                                break;
                            }
                        }
                    }
                }
            }
            else {
                // If worker is not already on the way to get an ingredient, we are looking for an ingredient to get
                let distance = this.shop.bringIngredientsPositionCounter.copy();
                distance.subtract(this.position);
                if (distance.length < 1) {
                    for (let ingredientFill of this.shop.ingredientsCounter) {
                        if (ingredientFill.fillAmount <= 31) {
                            this.activeIngredientToBring = ingredientFill.ingredient;
                            this.grabbedIngredient = false;
                            this.setTarget(this.shop.bringIngredientsPositionCutter);
                            break;
                        }
                    }
                }
            }
        }
        cutIngredients() {
            // Check if worker is on the way to cutting workplace
            if (this.targetPosition.x != this.shop.ingredientsPosition.x || this.targetPosition.y != this.shop.ingredientsPosition.y) {
                this.setTarget(this.shop.ingredientsPosition);
            }
            // Check if worker is already cutting an ingredient
            if (this.activeIngredientToCut != null) {
                for (let ingredientFill of this.shop.ingredientsCutting) {
                    if (ingredientFill.ingredient == this.activeIngredientToCut) {
                        // Add a little bit to the fill amount, if we found the ingredient we are cutting right now
                        ingredientFill.fillAmount = ingredientFill.fillAmount + 0.1;
                        // After cutting finished, check if container is full and if so we delete it as active ingredient so we can look for a new one
                        if (ingredientFill.fillAmount >= this.shop.ingredientsFullAmount) {
                            this.activeIngredientToCut = null;
                        }
                    }
                }
                // If not we are looking for an ingredientFIll which needs to be filled
            }
            else {
                for (let ingredientFill of this.shop.ingredientsCutting) {
                    if (ingredientFill.fillAmount < this.shop.ingredientsFullAmount) {
                        this.activeIngredientToCut = ingredientFill.ingredient;
                    }
                }
            }
        }
        takeABreak() {
            if (this.stress > 0) {
                this.stress = this.stress - 0.001;
                this.updateMood();
            }
        }
        updateMood() {
            // Update the mood depending on stresslevel
            if (this.stress >= 0.8) {
                this.mood = Kebabtrainer.Mood.Angry;
            }
            else if (this.stress >= 0.5) {
                this.mood = Kebabtrainer.Mood.Sad;
            }
            else if (this.stress >= 0.2) {
                this.mood = Kebabtrainer.Mood.Neutral;
            }
            else {
                this.mood = Kebabtrainer.Mood.Happy;
            }
        }
        draw() {
            super.draw();
            this.drawFillAmount();
        }
        drawFillAmount() {
            // First draw the background of the fillAmount area
            Kebabtrainer.crc2.beginPath();
            Kebabtrainer.crc2.rect(this.position.x + 40, this.position.y - 30, 10, 60);
            Kebabtrainer.crc2.fillStyle = "orange";
            Kebabtrainer.crc2.fill();
            Kebabtrainer.crc2.closePath();
            // Second draw the same, except we multiply the height with the fillAmount
            Kebabtrainer.crc2.beginPath();
            Kebabtrainer.crc2.rect(this.position.x + 40, this.position.y - 30, 10, 60 * this.stress);
            Kebabtrainer.crc2.fillStyle = "green";
            Kebabtrainer.crc2.fill();
            Kebabtrainer.crc2.closePath();
        }
        changeTask(_task) {
            this.task = _task;
        }
    }
    Kebabtrainer.Worker = Worker;
})(Kebabtrainer || (Kebabtrainer = {}));
//# sourceMappingURL=Worker.js.map