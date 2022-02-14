"use strict";
var Kebabtrainer;
(function (Kebabtrainer) {
    class IngredientFill extends Kebabtrainer.Drawable {
        ingredient;
        fillAmount = 0.8;
        full = 100;
        constructor(_ingredient, _pos, _startFill, _full) {
            super(_pos);
            this.fillAmount = _startFill;
            this.ingredient = _ingredient;
            this.full = _full;
        }
        draw() {
            // Draw the background box for the ingredient
            Kebabtrainer.crc2.beginPath();
            Kebabtrainer.crc2.rect(this.position.x, this.position.y, 80, 80);
            Kebabtrainer.crc2.fillStyle = "red";
            Kebabtrainer.crc2.fill();
            Kebabtrainer.crc2.closePath();
            // Which ingredient to draw
            switch (this.ingredient) {
                case Kebabtrainer.Ingredient.Salad:
                    this.drawSalad();
                    break;
                case Kebabtrainer.Ingredient.RedSalad:
                    this.drawRedSalad();
                    break;
                case Kebabtrainer.Ingredient.Onions:
                    this.drawOnions();
                    break;
                case Kebabtrainer.Ingredient.Tomatoes:
                    this.drawTomatoes();
                    break;
                case Kebabtrainer.Ingredient.HotSauce:
                    this.drawHotSauce();
                    break;
            }
            this.drawFillAmount();
        }
        drawFillAmount() {
            // First draw the background of the fillAmount area
            Kebabtrainer.crc2.beginPath();
            Kebabtrainer.crc2.rect(this.position.x + 80, this.position.y, 10, 80);
            Kebabtrainer.crc2.fillStyle = "orange";
            Kebabtrainer.crc2.fill();
            Kebabtrainer.crc2.closePath();
            // Second draw the same, except we multiply the height with the fillAmount
            Kebabtrainer.crc2.beginPath();
            Kebabtrainer.crc2.rect(this.position.x + 80, this.position.y, 10, (80 / this.full) * this.fillAmount);
            Kebabtrainer.crc2.fillStyle = "green";
            Kebabtrainer.crc2.fill();
            Kebabtrainer.crc2.closePath();
        }
        drawSalad() {
            Kebabtrainer.crc2.beginPath();
            Kebabtrainer.crc2.arc(this.position.x + 40, this.position.y + 40, 30, 0, 2 * Math.PI);
            Kebabtrainer.crc2.strokeStyle = "black";
            Kebabtrainer.crc2.stroke();
            Kebabtrainer.crc2.fillStyle = "green";
            Kebabtrainer.crc2.fill();
            Kebabtrainer.crc2.closePath();
        }
        drawRedSalad() {
            Kebabtrainer.crc2.beginPath();
            Kebabtrainer.crc2.arc(this.position.x + 40, this.position.y + 40, 30, 0, 2 * Math.PI);
            Kebabtrainer.crc2.strokeStyle = "black";
            Kebabtrainer.crc2.stroke();
            Kebabtrainer.crc2.fillStyle = "purple";
            Kebabtrainer.crc2.fill();
            Kebabtrainer.crc2.closePath();
        }
        drawOnions() {
            Kebabtrainer.crc2.beginPath();
            Kebabtrainer.crc2.arc(this.position.x + 40, this.position.y + 40, 30, 0, 2 * Math.PI);
            Kebabtrainer.crc2.strokeStyle = "black";
            Kebabtrainer.crc2.stroke();
            Kebabtrainer.crc2.fillStyle = "gray";
            Kebabtrainer.crc2.fill();
            Kebabtrainer.crc2.closePath();
        }
        drawTomatoes() {
            Kebabtrainer.crc2.beginPath();
            Kebabtrainer.crc2.arc(this.position.x + 40, this.position.y + 40, 30, 0, 2 * Math.PI);
            Kebabtrainer.crc2.strokeStyle = "black";
            Kebabtrainer.crc2.stroke();
            Kebabtrainer.crc2.fillStyle = "darkred";
            Kebabtrainer.crc2.fill();
            Kebabtrainer.crc2.closePath();
        }
        drawHotSauce() {
            Kebabtrainer.crc2.beginPath();
            Kebabtrainer.crc2.arc(this.position.x + 40, this.position.y + 40, 30, 0, 2 * Math.PI);
            Kebabtrainer.crc2.strokeStyle = "black";
            Kebabtrainer.crc2.stroke();
            Kebabtrainer.crc2.fillStyle = "black";
            Kebabtrainer.crc2.fill();
            Kebabtrainer.crc2.closePath();
        }
    }
    Kebabtrainer.IngredientFill = IngredientFill;
})(Kebabtrainer || (Kebabtrainer = {}));
//# sourceMappingURL=IngredientFill.js.map