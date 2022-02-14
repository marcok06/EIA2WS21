namespace Kebabtrainer {
    export class Shop extends Drawable {
        // Create arrays for workers and all customers
        public workers: Worker[] = [];
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

            // Set new workers on a random position
            for (let i: number = 0; i < _amountWorkers; i++) {
                let newWorker: Worker = new Worker(this, new Vector(100, 100), _workerStressFactor);
                newWorker.setTarget(new Vector(Math.random() * 500, Math.random() * 500));
                this.workers.push(newWorker);
            }

            // Add new Customers
            for (let i: number = 0; i < 5; i++) {
                this.addCustomer();
            }

            // Just googled and found out i have to "bind(this)" dont know why, but it works
            window.addEventListener("click", this.click.bind(this));

            window.setInterval(this.addCustomer.bind(this), _customerTime);
        }

        public addCustomer(): void {
            let newCustomer: Customer = new Customer(this, new Vector(Math.random() * 500, Math.random() * 500));
            this.customers.push(newCustomer);
        }

        public click(_event: MouseEvent): void {
            // Check if worker is selected
            if (this.selectedWorker != null) {
                // Check if we hit counter area
                if (550 <= _event.x && 650 >= _event.x && 110 <= _event.y && 660 >= _event.y) {
                    this.selectedWorker.changeTask(Task.ServeCustomer);

                    // Check if we hit cutting area
                } else if (100 <= _event.x && 200 >= _event.x && 110 <= _event.y && 660 >= _event.y) {
                    this.selectedWorker.changeTask(Task.CutIngredients);

                    // Check if we hit bring ingredients area
                } else if (250 <= _event.x && 500 >= _event.x && 110 <= _event.y && 210 >= _event.y) {
                    this.selectedWorker.changeTask(Task.BringIngredients);
                    this.selectedWorker.setTarget(this.bringIngredientsPositionCounter);

                    // If we hit outside of working areas, send worker to break
                } else {
                    this.selectedWorker.changeTask(Task.None);
                    this.selectedWorker.setTarget(new Vector(_event.x, _event.y));
                }

                this.selectedWorker = null;
            } else {
                // Go through every worker and check if it's hit by mouse click now
                let hitWorker: boolean = false;
                for (let i: number = 0; i < this.workers.length; i++) {
                    if (this.workers[i].position.x - 40 <= _event.x && this.workers[i].position.x + 40 >= _event.x && this.workers[i].position.y - 40 <= _event.y && this.workers[i].position.y + 40 >= _event.y) {
                        this.selectedWorker = this.workers[i];
                        hitWorker = true;
                    }
                }
                if (hitWorker == false) {
                    let hitIngredient: boolean = false;
                    let hittedIngredient: Ingredient | null = null;
                    // Check if we hit salad
                    if (660 <= _event.x && 740 >= _event.x && 100 <= _event.y && 180 >= _event.y) {
                        if (this.ingredientsCounter[0].fillAmount > 10) {
                            hitIngredient = true;
                            hittedIngredient = Ingredient.Salad;
                        }
                    }

                    // Check if we hit red salad
                    if (660 <= _event.x && 740 >= _event.x && 200 <= _event.y && 280 >= _event.y) {
                        if (this.ingredientsCounter[1].fillAmount > 10) {
                            hitIngredient = true;
                            hittedIngredient = Ingredient.RedSalad;
                        }
                    }

                    // Check if we hit onions
                    if (660 <= _event.x && 740 >= _event.x && 300 <= _event.y && 380 >= _event.y) {
                        if (this.ingredientsCounter[2].fillAmount > 10) {
                            hitIngredient = true;
                            hittedIngredient = Ingredient.Onions;
                        }
                    }

                    // Check if we hit tomatoes
                    if (660 <= _event.x && 740 >= _event.x && 400 <= _event.y && 480 >= _event.y) {
                        if (this.ingredientsCounter[3].fillAmount > 10) {
                            hitIngredient = true;
                            hittedIngredient = Ingredient.Tomatoes;
                        }
                    }

                    // Check if we hit hot sauce
                    if (660 <= _event.x && 740 >= _event.x && 500 <= _event.y && 580 >= _event.y) {
                        if (this.ingredientsCounter[4].fillAmount > 10) {
                            hitIngredient = true;
                            hittedIngredient = Ingredient.HotSauce;
                        }
                    }

                    // If we hit an ingredient we add it to the workers array who is serving the customer
                    if (hitIngredient == true && hittedIngredient != null) {
                        for (let worker of this.workers) {
                            if (worker.task == Task.ServeCustomer) {
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

        public update(): void {
            super.update();

            // Update all Ingredient fills
            for (let i: number = 0; i < this.ingredientsCounter.length; i++) {
                this.ingredientsCounter[i].update();
            }

            for (let i: number = 0; i < this.ingredientsCutting.length; i++) {
                this.ingredientsCutting[i].update();
            }

            // Update all workers
            for (let i: number = 0; i < this.workers.length; i++) {
                this.workers[i].update();
            }

            // Update all customers
            for (let i: number = 0; i < this.customers.length; i++) {
                this.customers[i].update();
            }

            // Update all served customers
            for (let i: number = 0; i < this.customersServed.length; i++) {
                this.customersServed[i].update();
            }
        }

        // Check each workers stress level and add this amount to the counter. Because we are subtracting 1 by the value we are always getting a number beween 0 and 1
        public getWorkerMood(): number {
            let mood: number = 0;
            for (let worker of this.workers) {
                mood += worker.stress;
            }
            return 1 - mood / this.workers.length;
        }

        // Check each customers mood and add the specific amount to the counter. Because we are subtracting 1 by the value we are always getting a number beween 0 and 1
        public getCustomerMood(): number {
            let mood: number = 0;
            for (let customer of this.customers) {
                switch (customer.mood) {
                    case Mood.Angry:
                        mood += 1;
                        break;
                    case Mood.Sad:
                        mood += 0.6;
                        break;
                    case Mood.Neutral:
                        mood += 0.3;
                        break;
                    case Mood.Happy:
                        break;
                }
            }
            return 1 - mood / this.customers.length;
        }

        // Since every customer just gets one item we just count the amount of served customers
        public getSelledItems(): number {
            return this.customersServed.length;
        }

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

            // Draw cut ingredients area
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