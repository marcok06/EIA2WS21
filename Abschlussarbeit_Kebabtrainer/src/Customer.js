"use strict";
var Kebabtrainer;
(function (Kebabtrainer) {
    class Customer extends Kebabtrainer.Person {
        ingredientWishes = [];
        timeWaited = 0;
        served = false;
        drawWishes() {
            // Draw ingredients
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