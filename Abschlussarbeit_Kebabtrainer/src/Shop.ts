namespace Kebabtrainer {
    export class Shop extends Drawable {
        // Create arrays for workers and all customers
        private workers: Worker[] = [];
        public customers: Customer[] = [];
        public customersServed: Customer[] = [];

        // The fills for the ingredients of the shop
        public ingredientsCutting: IngredientFill[] = [];
        public ingredientsCounter: IngredientFill[] = [];

        // Set positions of the workstations
        public ingredientsPosition: Vector = new Vector(130, 300);
        public counterPosition: Vector = new Vector(600, 300);
        public bringIngredientsPositionCutter: Vector = new Vector(150, 160);
        public bringIngredientsPositionCounter: Vector = new Vector(600, 160);
        public customerWaitingPosition: Vector = new Vector(800, 300);

        // Save how much the ingredient fills are filled
        public ingredientsFullAmount: number = 100;

        // The actual clicked worker
        private selectedWorker: Worker | null = null;

        constructor(_amountWorkers: number, _customerTime: number, _workerStressFactor: number = 2, _fillMaxAmount: number = 100) {
            super(new Vector(0, 0));

            // Save the max amount of the ingredient fills
            this.ingredientsFullAmount = _fillMaxAmount;

            // Add Ingredients to the counter
            this.ingredientsCounter.push(new IngredientFill(Ingredient.Salad, new Vector(660, 100), this.ingredientsFullAmount, this.ingredientsFullAmount));
            this.ingredientsCounter.push(new IngredientFill(Ingredient.RedSalad, new Vector(660, 200), this.ingredientsFullAmount, this.ingredientsFullAmount));
            this.ingredientsCounter.push(new IngredientFill(Ingredient.Onions, new Vector(660, 300), this.ingredientsFullAmount, this.ingredientsFullAmount));
            this.ingredientsCounter.push(new IngredientFill(Ingredient.Tomatoes, new Vector(660, 400), this.ingredientsFullAmount, this.ingredientsFullAmount));
            this.ingredientsCounter.push(new IngredientFill(Ingredient.HotSauce, new Vector(660, 500), this.ingredientsFullAmount, this.ingredientsFullAmount));

            // Add Ingredients to the cutting counter
            this.ingredientsCutting.push(new IngredientFill(Ingredient.Salad, new Vector(10, 100), this.ingredientsFullAmount, this.ingredientsFullAmount));
            this.ingredientsCutting.push(new IngredientFill(Ingredient.RedSalad, new Vector(10, 200), this.ingredientsFullAmount, this.ingredientsFullAmount));
            this.ingredientsCutting.push(new IngredientFill(Ingredient.Onions, new Vector(10, 300), this.ingredientsFullAmount, this.ingredientsFullAmount));
            this.ingredientsCutting.push(new IngredientFill(Ingredient.Tomatoes, new Vector(10, 400), this.ingredientsFullAmount, this.ingredientsFullAmount));
            this.ingredientsCutting.push(new IngredientFill(Ingredient.HotSauce, new Vector(10, 500), this.ingredientsFullAmount, this.ingredientsFullAmount));


        public draw(): void {
            // Draw the Background
            crc2.beginPath();
            crc2.rect(0, 0, 1280, 720);
            crc2.fillStyle = "lightblue";
            crc2.fill();
            crc2.closePath();

            // Draw the cut ingredients counter
            crc2.beginPath();
            crc2.rect(0, 0, 100, 720);
            crc2.fillStyle = "grey";
            crc2.fill();
            crc2.closePath();

            // Draw cutt ingredients area
            crc2.beginPath();
            crc2.rect(100, 110, 100, 500);
            crc2.fillStyle = "purple";
            crc2.fill();
            crc2.closePath();

            // Draw the counter
            crc2.beginPath();
            crc2.rect(650, 0, 100, 720);
            crc2.fillStyle = "grey";
            crc2.fill();
            crc2.closePath();

            // Draw counter area
            crc2.beginPath();
            crc2.rect(550, 110, 100, 500);
            crc2.fillStyle = "purple";
            crc2.fill();
            crc2.closePath();

            // Draw bring ingredients area
            crc2.beginPath();
            crc2.rect(250, 110, 250, 100);
            crc2.fillStyle = "purple";
            crc2.fill();
            crc2.closePath();
        }
    }
}