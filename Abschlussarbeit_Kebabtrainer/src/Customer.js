"use strict";
var Kebabtrainer;
(function (Kebabtrainer) {
    class Customer extends Kebabtrainer.Person {
        ingredientWishes = [];
        timeWaited = 0;
        served = false;
        constructor(_shop, _pos) {
            super(_shop, _pos);
            this.makeRandomWishes();
        }
        update() {
            super.update();
            // Don't do anything if customer is served already
            if (this.served == true) {
                return;
            }
            // Time waited (every 20ms increase of 1)
            this.timeWaited += 1;
            // Change mood depending on time waited
            if (this.timeWaited < 1000) {
                this.mood = Kebabtrainer.Mood.Happy;
            }
            else if (this.timeWaited < 2000) {
                this.mood = Kebabtrainer.Mood.Neutral;
            }
            else if (this.timeWaited < 3000) {
                this.mood = Kebabtrainer.Mood.Sad;
            }
            else {
                this.mood = Kebabtrainer.Mood.Angry;
            }
            this.updatePostion();
        }
        // Set target position for customers.
        updatePostion() {
            // Count which position in queue customer is standing
            for (let i = 0; i < this.shop.customers.length; i++) {
                if (this.shop.customers[i] == this) {
                    // Multiply 100 by the index, so customers stand behind each other in a row
                    let position = new Kebabtrainer.Vector(this.shop.customerWaitingPosition.x + (i * 100), this.shop.customerWaitingPosition.y);
                    // Set target position
                    this.setTarget(position);
                    // Draw ingredient wishes for the first customer in row
                    if (i == 0) {
                        this.drawWishes();
                    }
                }
            }
        }
        makeRandomWishes() {
            // Create random number of wishes
            let numberOfWishes = Math.floor(Math.random() * 3) + 1;
            // Choose random ingredient for each wish
            for (let i = 0; i < numberOfWishes; i++) {
                let randomIngredient = Math.floor(Math.random() * 5);
                this.ingredientWishes.push(randomIngredient);
            }
        }
        becomServed(_ingredients) {
            // Set customer as served
            this.served = true;
            // Remove customer from the shop array and add it to the served array
            this.shop.customers.splice(this.shop.customers.indexOf(this), 1);
            this.shop.customersServed.push(this);
            // Check if we have all the ingredients
            let isOrderRight = true;
            if (_ingredients.length != this.ingredientWishes.length) {
                isOrderRight = false;
            }
            // Update customers mood depending on order correct or not
            if (isOrderRight) {
                this.mood = Kebabtrainer.Mood.Happy;
            }
            else {
                this.mood = Kebabtrainer.Mood.Angry;
            }
            this.targetPosition = new Kebabtrainer.Vector(this.shop.customerWaitingPosition.x, this.shop.customerWaitingPosition.y + 1000);
        }
        drawWishes() {
            // Draw customers wishes
            for (let i = 0; i < this.ingredientWishes.length; i++) {
                switch (this.ingredientWishes[i]) {
                    case Kebabtrainer.Ingredient.Salad:
                        Kebabtrainer.crc2.beginPath();
                        Kebabtrainer.crc2.arc(this.position.x + (i * 50), this.position.y - 50, 10, 0, 2 * Math.PI);
                        Kebabtrainer.crc2.strokeStyle = "black";
                        Kebabtrainer.crc2.stroke();
                        Kebabtrainer.crc2.fillStyle = "green";
                        Kebabtrainer.crc2.fill();
                        Kebabtrainer.crc2.closePath();
                        break;
                    case Kebabtrainer.Ingredient.RedSalad:
                        Kebabtrainer.crc2.beginPath();
                        Kebabtrainer.crc2.arc(this.position.x + (i * 50), this.position.y - 50, 10, 0, 2 * Math.PI);
                        Kebabtrainer.crc2.strokeStyle = "black";
                        Kebabtrainer.crc2.stroke();
                        Kebabtrainer.crc2.fillStyle = "purple";
                        Kebabtrainer.crc2.fill();
                        Kebabtrainer.crc2.closePath();
                        break;
                    case Kebabtrainer.Ingredient.Onions:
                        Kebabtrainer.crc2.beginPath();
                        Kebabtrainer.crc2.arc(this.position.x + (i * 50), this.position.y - 50, 10, 0, 2 * Math.PI);
                        Kebabtrainer.crc2.strokeStyle = "black";
                        Kebabtrainer.crc2.stroke();
                        Kebabtrainer.crc2.fillStyle = "gray";
                        Kebabtrainer.crc2.fill();
                        Kebabtrainer.crc2.closePath();
                        break;
                    case Kebabtrainer.Ingredient.Tomatoes:
                        Kebabtrainer.crc2.beginPath();
                        Kebabtrainer.crc2.arc(this.position.x + (i * 50), this.position.y - 50, 10, 0, 2 * Math.PI);
                        Kebabtrainer.crc2.strokeStyle = "black";
                        Kebabtrainer.crc2.stroke();
                        Kebabtrainer.crc2.fillStyle = "darkred";
                        Kebabtrainer.crc2.fill();
                        Kebabtrainer.crc2.closePath();
                        break;
                    case Kebabtrainer.Ingredient.HotSauce:
                        Kebabtrainer.crc2.beginPath();
                        Kebabtrainer.crc2.arc(this.position.x + (i * 50), this.position.y - 50, 10, 0, 2 * Math.PI);
                        Kebabtrainer.crc2.strokeStyle = "black";
                        Kebabtrainer.crc2.stroke();
                        Kebabtrainer.crc2.fillStyle = "black";
                        Kebabtrainer.crc2.fill();
                        Kebabtrainer.crc2.closePath();
                        break;
                }
            }
        }
    }
    Kebabtrainer.Customer = Customer;
})(Kebabtrainer || (Kebabtrainer = {}));
//# sourceMappingURL=Customer.js.map