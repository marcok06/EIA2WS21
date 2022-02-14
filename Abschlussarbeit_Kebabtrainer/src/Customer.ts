namespace Kebabtrainer {
    export class Customer extends Person {

        public ingredientWishes: Ingredient[] = [];
        public timeWaited: number = 0;
        public served: boolean = false;

        constructor(_shop: Shop, _pos: Vector) {
            super(_shop, _pos);

            this.makeRandomWishes();
        }

        public update(): void {
            super.update();

            // Don't do anything if customer is served already
            if (this.served == true) {
                return;
            }

            // Time waited (every 20ms increase of 1)
            this.timeWaited += 1;

            // Change mood depending on time waited
            if (this.timeWaited < 1000) {
                this.mood = Mood.Happy;
            } else if (this.timeWaited < 2000) {
                this.mood = Mood.Neutral;
            } else if (this.timeWaited < 3000) {
                this.mood = Mood.Sad;
            } else {
                this.mood = Mood.Angry;
            }

            this.updatePostion();
        }

        // Set target position for customers.
        public updatePostion(): void {
             // Count which position in queue customer is standing
            for (let i: number = 0; i < this.shop.customers.length; i++) {
                if (this.shop.customers[i] == this) {

                    // Multiply 100 by the index, so customers stand behind each other in a row
                    let position: Vector = new Vector(this.shop.customerWaitingPosition.x + (i * 100), this.shop.customerWaitingPosition.y);

                    // Set target position
                    this.setTarget(position);

                    // Draw ingredient wishes for the first customer in row
                    if (i == 0) {
                        this.drawWishes();
                    }
                }
            }
        }

        public makeRandomWishes(): void {
            // Create random number of wishes
            let numberOfWishes: number = Math.floor(Math.random() * 3) + 1;

            // Choose random ingredient for each wish
            for (let i: number = 0; i < numberOfWishes; i++) {
                let randomIngredient: Ingredient = Math.floor(Math.random() * 5);
                this.ingredientWishes.push(randomIngredient);
            }
        }

        public becomServed(_ingredients: Ingredient[]): void {
            // Set customer as served
            this.served = true;

            // Remove customer from the shop array and add it to the served array
            this.shop.customers.splice(this.shop.customers.indexOf(this), 1);
            this.shop.customersServed.push(this);

            // Check if we have all the ingredients
            let isOrderRight: boolean = true;
            if (_ingredients.length != this.ingredientWishes.length) {
                isOrderRight = false;
            }

            // Update customers mood depending on order correct or not
            if (isOrderRight) {
                this.mood = Mood.Happy;
            } else {
                this.mood = Mood.Angry;
            }

            this.targetPosition = new Vector(this.shop.customerWaitingPosition.x, this.shop.customerWaitingPosition.y + 1000);
        }

        public drawWishes(): void {
            // Draw customers wishes
            for (let i: number = 0; i < this.ingredientWishes.length; i++) {
                switch (this.ingredientWishes[i]) {
                    case Ingredient.Salad:
                        crc2.beginPath();
                        crc2.arc(this.position.x + (i * 50), this.position.y - 50, 10, 0, 2 * Math.PI);
                        crc2.strokeStyle = "black";
                        crc2.stroke();
                        crc2.fillStyle = "green";
                        crc2.fill();
                        crc2.closePath();
                        break;
                    case Ingredient.RedSalad:
                        crc2.beginPath();
                        crc2.arc(this.position.x + (i * 50), this.position.y - 50, 10, 0, 2 * Math.PI);
                        crc2.strokeStyle = "black";
                        crc2.stroke();
                        crc2.fillStyle = "purple";
                        crc2.fill();
                        crc2.closePath();
                        break;
                    case Ingredient.Onions:
                        crc2.beginPath();
                        crc2.arc(this.position.x + (i * 50), this.position.y - 50, 10, 0, 2 * Math.PI);
                        crc2.strokeStyle = "black";
                        crc2.stroke();
                        crc2.fillStyle = "gray";
                        crc2.fill();
                        crc2.closePath();
                        break;
                    case Ingredient.Tomatoes:
                        crc2.beginPath();
                        crc2.arc(this.position.x + (i * 50), this.position.y - 50, 10, 0, 2 * Math.PI);
                        crc2.strokeStyle = "black";
                        crc2.stroke();
                        crc2.fillStyle = "darkred";
                        crc2.fill();
                        crc2.closePath();
                        break;
                    case Ingredient.HotSauce:
                        crc2.beginPath();
                        crc2.arc(this.position.x + (i * 50), this.position.y - 50, 10, 0, 2 * Math.PI);
                        crc2.strokeStyle = "black";
                        crc2.stroke();
                        crc2.fillStyle = "black";
                        crc2.fill();
                        crc2.closePath();
                        break;
                }
            }
        }
    }
}