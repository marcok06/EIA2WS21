"use strict";
var Kebabtrainer;
(function (Kebabtrainer) {
    class Shop extends Kebabtrainer.Drawable {
        // Create arrays for workers and all customers
        workers = [];
        customers = [];
        customersServed = [];
        // The fills for the ingredients of the shop
        ingredientsCutting = [];
        ingredientsCounter = [];
        // Set positions of the workstations
        ingredientsPosition = new Kebabtrainer.Vector(130, 300);
        counterPosition = new Kebabtrainer.Vector(600, 300);
        bringIngredientsPositionCutter = new Kebabtrainer.Vector(150, 160);
        bringIngredientsPositionCounter = new Kebabtrainer.Vector(600, 160);
        customerWaitingPosition = new Kebabtrainer.Vector(800, 300);
        // Save how much the ingredient fills are filled
        ingredientsFullAmount = 100;
        // The actual clicked worker
        selectedWorker = null;
        constructor(_amountWorkers, _customerTime, _workerStressFactor = 2, _fillMaxAmount = 100) {
            super(new Kebabtrainer.Vector(0, 0));
            // Save the max amount of the ingredient fills
            this.ingredientsFullAmount = _fillMaxAmount;
            // Add Ingredients to the counter
            this.ingredientsCounter.push(new Kebabtrainer.IngredientFill(Kebabtrainer.Ingredient.Salad, new Kebabtrainer.Vector(660, 100), this.ingredientsFullAmount, this.ingredientsFullAmount));
            this.ingredientsCounter.push(new Kebabtrainer.IngredientFill(Kebabtrainer.Ingredient.RedSalad, new Kebabtrainer.Vector(660, 200), this.ingredientsFullAmount, this.ingredientsFullAmount));
            this.ingredientsCounter.push(new Kebabtrainer.IngredientFill(Kebabtrainer.Ingredient.Onions, new Kebabtrainer.Vector(660, 300), this.ingredientsFullAmount, this.ingredientsFullAmount));
            this.ingredientsCounter.push(new Kebabtrainer.IngredientFill(Kebabtrainer.Ingredient.Tomatoes, new Kebabtrainer.Vector(660, 400), this.ingredientsFullAmount, this.ingredientsFullAmount));
            this.ingredientsCounter.push(new Kebabtrainer.IngredientFill(Kebabtrainer.Ingredient.HotSauce, new Kebabtrainer.Vector(660, 500), this.ingredientsFullAmount, this.ingredientsFullAmount));
            // Add Ingredients to the cutting counter
            this.ingredientsCutting.push(new Kebabtrainer.IngredientFill(Kebabtrainer.Ingredient.Salad, new Kebabtrainer.Vector(10, 100), this.ingredientsFullAmount, this.ingredientsFullAmount));
            this.ingredientsCutting.push(new Kebabtrainer.IngredientFill(Kebabtrainer.Ingredient.RedSalad, new Kebabtrainer.Vector(10, 200), this.ingredientsFullAmount, this.ingredientsFullAmount));
            this.ingredientsCutting.push(new Kebabtrainer.IngredientFill(Kebabtrainer.Ingredient.Onions, new Kebabtrainer.Vector(10, 300), this.ingredientsFullAmount, this.ingredientsFullAmount));
            this.ingredientsCutting.push(new Kebabtrainer.IngredientFill(Kebabtrainer.Ingredient.Tomatoes, new Kebabtrainer.Vector(10, 400), this.ingredientsFullAmount, this.ingredientsFullAmount));
            this.ingredientsCutting.push(new Kebabtrainer.IngredientFill(Kebabtrainer.Ingredient.HotSauce, new Kebabtrainer.Vector(10, 500), this.ingredientsFullAmount, this.ingredientsFullAmount));
            // Set new workers on a random position
            for (let i = 0; i < _amountWorkers; i++) {
                let newWorker = new Kebabtrainer.Worker(this, new Kebabtrainer.Vector(100, 100), _workerStressFactor);
                newWorker.setTarget(new Kebabtrainer.Vector(Math.random() * 500, Math.random() * 500));
                this.workers.push(newWorker);
            }
            // Add new Customers
            for (let i = 0; i < 5; i++) {
                this.addCustomer();
            }
            // Just googled and found out i have to "bind(this)" dont know why, but it works
            window.addEventListener("click", this.click.bind(this));
            window.setInterval(this.addCustomer.bind(this), _customerTime);
        }
        addCustomer() {
            let newCustomer = new Kebabtrainer.Customer(this, new Kebabtrainer.Vector(Math.random() * 500, Math.random() * 500));
            this.customers.push(newCustomer);
        }
        click(_event) {
            // Check if worker is selected
            if (this.selectedWorker != null) {
                // Check if we hit counter area
                if (550 <= _event.x && 650 >= _event.x && 110 <= _event.y && 660 >= _event.y) {
                    this.selectedWorker.changeTask(Kebabtrainer.Task.ServeCustomer);
                    // Check if we hit cutting area
                }
                else if (100 <= _event.x && 200 >= _event.x && 110 <= _event.y && 660 >= _event.y) {
                    this.selectedWorker.changeTask(Kebabtrainer.Task.CutIngredients);
                    // Check if we hit bring ingredients area
                }
                else if (250 <= _event.x && 500 >= _event.x && 110 <= _event.y && 210 >= _event.y) {
                    this.selectedWorker.changeTask(Kebabtrainer.Task.BringIngredients);
                    this.selectedWorker.setTarget(this.bringIngredientsPositionCounter);
                    // If we hit outside of working areas, send worker to break
                }
                else {
                    this.selectedWorker.changeTask(Kebabtrainer.Task.None);
                    this.selectedWorker.setTarget(new Kebabtrainer.Vector(_event.x, _event.y));
                }
                this.selectedWorker = null;
            }
            else {
                // Go through every worker and check if it's hit by mouse click now
                let hitWorker = false;
                for (let i = 0; i < this.workers.length; i++) {
                    if (this.workers[i].position.x - 40 <= _event.x && this.workers[i].position.x + 40 >= _event.x && this.workers[i].position.y - 40 <= _event.y && this.workers[i].position.y + 40 >= _event.y) {
                        this.selectedWorker = this.workers[i];
                        hitWorker = true;
                    }
                }
                if (hitWorker == false) {
                    let hitIngredient = false;
                    let hittedIngredient = null;
                    // Check if we hit salad
                    if (660 <= _event.x && 740 >= _event.x && 100 <= _event.y && 180 >= _event.y) {
                        if (this.ingredientsCounter[0].fillAmount > 10) {
                            hitIngredient = true;
                            hittedIngredient = Kebabtrainer.Ingredient.Salad;
                        }
                    }
                    // Check if we hit red salad
                    if (660 <= _event.x && 740 >= _event.x && 200 <= _event.y && 280 >= _event.y) {
                        if (this.ingredientsCounter[1].fillAmount > 10) {
                            hitIngredient = true;
                            hittedIngredient = Kebabtrainer.Ingredient.RedSalad;
                        }
                    }
                    // Check if we hit onions
                    if (660 <= _event.x && 740 >= _event.x && 300 <= _event.y && 380 >= _event.y) {
                        if (this.ingredientsCounter[2].fillAmount > 10) {
                            hitIngredient = true;
                            hittedIngredient = Kebabtrainer.Ingredient.Onions;
                        }
                    }
                    // Check if we hit tomatoes
                    if (660 <= _event.x && 740 >= _event.x && 400 <= _event.y && 480 >= _event.y) {
                        if (this.ingredientsCounter[3].fillAmount > 10) {
                            hitIngredient = true;
                            hittedIngredient = Kebabtrainer.Ingredient.Tomatoes;
                        }
                    }
                    // Check if we hit hot sauce
                    if (660 <= _event.x && 740 >= _event.x && 500 <= _event.y && 580 >= _event.y) {
                        if (this.ingredientsCounter[4].fillAmount > 10) {
                            hitIngredient = true;
                            hittedIngredient = Kebabtrainer.Ingredient.HotSauce;
                        }
                    }
                    // If we hit an ingredient we add it to the workers array who is serving the customer
                    if (hitIngredient == true && hittedIngredient != null) {
                        for (let worker of this.workers) {
                            if (worker.task == Kebabtrainer.Task.ServeCustomer) {
                                worker.addIngredientsToKebab(hittedIngredient);
                                // After adding the ingredient to the kebab, we remove a part from the filled amount
                                for (let ingredientFill of this.ingredientsCounter) {
                                    if (ingredientFill.ingredient == hittedIngredient) {
                                        ingredientFill.fillAmount = ingredientFill.fillAmount - 10;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        update() {
            super.update();
            // Update all Ingredient fills
            for (let i = 0; i < this.ingredientsCounter.length; i++) {
                this.ingredientsCounter[i].update();
            }
            for (let i = 0; i < this.ingredientsCutting.length; i++) {
                this.ingredientsCutting[i].update();
            }
            // Update all workers
            for (let i = 0; i < this.workers.length; i++) {
                this.workers[i].update();
            }
            // Update all customers
            for (let i = 0; i < this.customers.length; i++) {
                this.customers[i].update();
            }
            // Update all served customers
            for (let i = 0; i < this.customersServed.length; i++) {
                this.customersServed[i].update();
            }
        }
        // Check each workers stress level and add this amount to the counter. Because we are subtracting 1 by the value we are always getting a number beween 0 and 1
        getWorkerMood() {
            let mood = 0;
            for (let worker of this.workers) {
                mood += worker.stress;
            }
            return 1 - mood / this.workers.length;
        }
        // Check each customers mood and add the specific amount to the counter. Because we are subtracting 1 by the value we are always getting a number beween 0 and 1
        getCustomerMood() {
            let mood = 0;
            for (let customer of this.customers) {
                switch (customer.mood) {
                    case Kebabtrainer.Mood.Angry:
                        mood += 1;
                        break;
                    case Kebabtrainer.Mood.Sad:
                        mood += 0.6;
                        break;
                    case Kebabtrainer.Mood.Neutral:
                        mood += 0.3;
                        break;
                    case Kebabtrainer.Mood.Happy:
                        break;
                }
            }
            return 1 - mood / this.customers.length;
        }
        // Since every customer just gets one item we just count the amount of served customers
        getSelledItems() {
            return this.customersServed.length;
        }
        draw() {
            // Draw the Background
            Kebabtrainer.crc2.beginPath();
            Kebabtrainer.crc2.rect(0, 0, 1280, 720);
            Kebabtrainer.crc2.fillStyle = "lightblue";
            Kebabtrainer.crc2.fill();
            Kebabtrainer.crc2.closePath();
            // Draw the cut ingredients counter
            Kebabtrainer.crc2.beginPath();
            Kebabtrainer.crc2.rect(0, 0, 100, 720);
            Kebabtrainer.crc2.fillStyle = "grey";
            Kebabtrainer.crc2.fill();
            Kebabtrainer.crc2.closePath();
            // Draw cutt ingredients area
            Kebabtrainer.crc2.beginPath();
            Kebabtrainer.crc2.rect(100, 110, 100, 500);
            Kebabtrainer.crc2.fillStyle = "purple";
            Kebabtrainer.crc2.fill();
            Kebabtrainer.crc2.closePath();
            // Draw the counter
            Kebabtrainer.crc2.beginPath();
            Kebabtrainer.crc2.rect(650, 0, 100, 720);
            Kebabtrainer.crc2.fillStyle = "grey";
            Kebabtrainer.crc2.fill();
            Kebabtrainer.crc2.closePath();
            // Draw counter area
            Kebabtrainer.crc2.beginPath();
            Kebabtrainer.crc2.rect(550, 110, 100, 500);
            Kebabtrainer.crc2.fillStyle = "purple";
            Kebabtrainer.crc2.fill();
            Kebabtrainer.crc2.closePath();
            // Draw bring ingredients area
            Kebabtrainer.crc2.beginPath();
            Kebabtrainer.crc2.rect(250, 110, 250, 100);
            Kebabtrainer.crc2.fillStyle = "purple";
            Kebabtrainer.crc2.fill();
            Kebabtrainer.crc2.closePath();
        }
    }
    Kebabtrainer.Shop = Shop;
})(Kebabtrainer || (Kebabtrainer = {}));
//# sourceMappingURL=Shop.js.map