namespace Kebabtrainer {

    export class IngredientFill extends Drawable {
        public ingredient: Ingredient;
        public fillAmount: number = 0.8;
        public full: number = 100;

        constructor(_ingredient: Ingredient, _pos: Vector, _startFill: number, _full: number) {
            super(_pos);
            this.fillAmount = _startFill;
            this.ingredient = _ingredient;
            this.full = _full;
        }

        public draw(): void {
            // Draw the background box for the ingredient
            crc2.beginPath();
            crc2.rect(this.position.x, this.position.y, 80, 80);
            crc2.fillStyle = "red";
            crc2.fill();
            crc2.closePath();

            // Which ingredient to draw
            switch (this.ingredient) {
                case Ingredient.Salad:
                    this.drawSalad();
                    break;
                case Ingredient.RedSalad:
                    this.drawRedSalad();
                    break;
                case Ingredient.Onions:
                    this.drawOnions();
                    break;
                case Ingredient.Tomatoes:
                    this.drawTomatoes();
                    break;
                case Ingredient.HotSauce:
                    this.drawHotSauce();
                    break;
            }

            this.drawFillAmount();
        }

        public drawFillAmount(): void {
            // First draw the background of the fillAmount area
            crc2.beginPath();
            crc2.rect(this.position.x + 80, this.position.y, 10, 80);
            crc2.fillStyle = "orange";
            crc2.fill();
            crc2.closePath();

            // Second draw the same, except we multiply the height with the fillAmount
            crc2.beginPath();
            crc2.rect(this.position.x + 80, this.position.y, 10, (80 / this.full) * this.fillAmount);
            crc2.fillStyle = "green";
            crc2.fill();
            crc2.closePath();
        }

        public drawSalad(): void {
            crc2.beginPath();
            crc2.arc(this.position.x + 40, this.position.y + 40, 30, 0, 2 * Math.PI);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.fillStyle = "green";
            crc2.fill();
            crc2.closePath();
        }

        public drawRedSalad(): void {
            crc2.beginPath();
            crc2.arc(this.position.x + 40, this.position.y + 40, 30, 0, 2 * Math.PI);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.fillStyle = "purple";
            crc2.fill();
            crc2.closePath();
        }

        public drawOnions(): void {
            crc2.beginPath();
            crc2.arc(this.position.x + 40, this.position.y + 40, 30, 0, 2 * Math.PI);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.fillStyle = "gray";
            crc2.fill();
            crc2.closePath();
        }

        public drawTomatoes(): void {
            crc2.beginPath();
            crc2.arc(this.position.x + 40, this.position.y + 40, 30, 0, 2 * Math.PI);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.fillStyle = "darkred";
            crc2.fill();
            crc2.closePath();
        }

        public drawHotSauce(): void {
            crc2.beginPath();
            crc2.arc(this.position.x + 40, this.position.y + 40, 30, 0, 2 * Math.PI);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();
        }
    }
}