namespace Kebabtrainer {
    export class Customer extends Person {

        public ingredientWishes: Ingredient[] = [];
        public timeWaited: number = 0;
        public served: boolean = false;


        public drawWishes(): void {
            // Draw ingredients
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