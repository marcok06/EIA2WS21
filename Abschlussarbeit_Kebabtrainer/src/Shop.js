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