"use strict";
var Kebabtrainer;
(function (Kebabtrainer) {
    class Person extends Kebabtrainer.Moveable {
        mood;
        shop;
        constructor(_shop, _pos) {
            super(_pos);
            this.shop = _shop;
            this.mood = Kebabtrainer.Mood.Happy;
        }
        update() {
            super.update();
            this.draw();
        }
        draw() {
            switch (this.mood) {
                case Kebabtrainer.Mood.Happy:
                    this.drawHappy();
                    break;
                case Kebabtrainer.Mood.Neutral:
                    this.drawNeutral();
                    break;
                case Kebabtrainer.Mood.Sad:
                    this.drawSad();
                    break;
                case Kebabtrainer.Mood.Angry:
                    this.drawAngry();
                    break;
            }
        }
        drawHappy() {
            //Draw circle for face (green for happy)
            Kebabtrainer.crc2.beginPath();
            Kebabtrainer.crc2.arc(this.position.x, this.position.y, 30, 0, 2 * Math.PI);
            Kebabtrainer.crc2.strokeStyle = "black";
            Kebabtrainer.crc2.stroke();
            Kebabtrainer.crc2.fillStyle = "green";
            Kebabtrainer.crc2.fill();
            Kebabtrainer.crc2.closePath();
            //Draw eyes
            Kebabtrainer.crc2.beginPath();
            Kebabtrainer.crc2.arc(this.position.x - 10, this.position.y - 10, 5, 0, 2 * Math.PI);
            Kebabtrainer.crc2.strokeStyle = "black";
            Kebabtrainer.crc2.stroke();
            Kebabtrainer.crc2.fillStyle = "white";
            Kebabtrainer.crc2.fill();
            Kebabtrainer.crc2.closePath();
            Kebabtrainer.crc2.beginPath();
            Kebabtrainer.crc2.arc(this.position.x + 10, this.position.y - 10, 5, 0, 2 * Math.PI);
            Kebabtrainer.crc2.strokeStyle = "black";
            Kebabtrainer.crc2.stroke();
            Kebabtrainer.crc2.fillStyle = "white";
            Kebabtrainer.crc2.fill();
            Kebabtrainer.crc2.closePath();
            // Draw mouth
            Kebabtrainer.crc2.beginPath();
            Kebabtrainer.crc2.arc(this.position.x, this.position.y + 10, 10, 0, Math.PI);
            Kebabtrainer.crc2.strokeStyle = "black";
            Kebabtrainer.crc2.stroke();
            Kebabtrainer.crc2.fillStyle = "red";
            Kebabtrainer.crc2.fill();
            Kebabtrainer.crc2.closePath();
        }
        drawNeutral() {
            //Draw circle for face (gray for neutral)
            Kebabtrainer.crc2.beginPath();
            Kebabtrainer.crc2.arc(this.position.x, this.position.y, 30, 0, 2 * Math.PI);
            Kebabtrainer.crc2.strokeStyle = "black";
            Kebabtrainer.crc2.stroke();
            Kebabtrainer.crc2.fillStyle = "gray";
            Kebabtrainer.crc2.fill();
            Kebabtrainer.crc2.closePath();
            //Draw the eyes
            Kebabtrainer.crc2.beginPath();
            Kebabtrainer.crc2.arc(this.position.x - 10, this.position.y - 10, 5, 0, 2 * Math.PI);
            Kebabtrainer.crc2.strokeStyle = "black";
            Kebabtrainer.crc2.stroke();
            Kebabtrainer.crc2.fillStyle = "white";
            Kebabtrainer.crc2.fill();
            Kebabtrainer.crc2.closePath();
            Kebabtrainer.crc2.beginPath();
            Kebabtrainer.crc2.arc(this.position.x + 10, this.position.y - 10, 5, 0, 2 * Math.PI);
            Kebabtrainer.crc2.strokeStyle = "black";
            Kebabtrainer.crc2.stroke();
            Kebabtrainer.crc2.fillStyle = "white";
            Kebabtrainer.crc2.fill();
            Kebabtrainer.crc2.closePath();
            // Draw the mouth
            Kebabtrainer.crc2.beginPath();
            Kebabtrainer.crc2.rect(this.position.x - 10, this.position.y + 10, 20, 3);
            Kebabtrainer.crc2.strokeStyle = "black";
            Kebabtrainer.crc2.stroke();
            Kebabtrainer.crc2.fillStyle = "red";
            Kebabtrainer.crc2.fill();
            Kebabtrainer.crc2.closePath();
        }
        drawSad() {
            //Draw circle for face (orange for sad))
            Kebabtrainer.crc2.beginPath();
            Kebabtrainer.crc2.arc(this.position.x, this.position.y, 30, 0, 2 * Math.PI);
            Kebabtrainer.crc2.strokeStyle = "black";
            Kebabtrainer.crc2.stroke();
            Kebabtrainer.crc2.fillStyle = "orange";
            Kebabtrainer.crc2.fill();
            Kebabtrainer.crc2.closePath();
            //Draw the eyes
            Kebabtrainer.crc2.beginPath();
            Kebabtrainer.crc2.arc(this.position.x - 10, this.position.y - 10, 5, 0, 2 * Math.PI);
            Kebabtrainer.crc2.strokeStyle = "black";
            Kebabtrainer.crc2.stroke();
            Kebabtrainer.crc2.fillStyle = "white";
            Kebabtrainer.crc2.fill();
            Kebabtrainer.crc2.closePath();
            Kebabtrainer.crc2.beginPath();
            Kebabtrainer.crc2.arc(this.position.x + 10, this.position.y - 10, 5, 0, 2 * Math.PI);
            Kebabtrainer.crc2.strokeStyle = "black";
            Kebabtrainer.crc2.stroke();
            Kebabtrainer.crc2.fillStyle = "white";
            Kebabtrainer.crc2.fill();
            Kebabtrainer.crc2.closePath();
            // Draw the mouth
            Kebabtrainer.crc2.beginPath();
            Kebabtrainer.crc2.rect(this.position.x - 10, this.position.y + 10, 20, 3);
            Kebabtrainer.crc2.strokeStyle = "black";
            Kebabtrainer.crc2.stroke();
            Kebabtrainer.crc2.fillStyle = "red";
            Kebabtrainer.crc2.fill();
            Kebabtrainer.crc2.closePath();
        }
        drawAngry() {
            //Draw circle for face (red for angry)
            Kebabtrainer.crc2.beginPath();
            Kebabtrainer.crc2.arc(this.position.x, this.position.y, 30, 0, 2 * Math.PI);
            Kebabtrainer.crc2.strokeStyle = "black";
            Kebabtrainer.crc2.stroke();
            Kebabtrainer.crc2.fillStyle = "red";
            Kebabtrainer.crc2.fill();
            Kebabtrainer.crc2.closePath();
            //Draw the eyes
            Kebabtrainer.crc2.beginPath();
            Kebabtrainer.crc2.arc(this.position.x - 10, this.position.y - 10, 5, 0, 2 * Math.PI);
            Kebabtrainer.crc2.strokeStyle = "black";
            Kebabtrainer.crc2.stroke();
            Kebabtrainer.crc2.fillStyle = "white";
            Kebabtrainer.crc2.fill();
            Kebabtrainer.crc2.closePath();
            Kebabtrainer.crc2.beginPath();
            Kebabtrainer.crc2.arc(this.position.x + 10, this.position.y - 10, 5, 0, 2 * Math.PI);
            Kebabtrainer.crc2.strokeStyle = "black";
            Kebabtrainer.crc2.stroke();
            Kebabtrainer.crc2.fillStyle = "white";
            Kebabtrainer.crc2.fill();
            Kebabtrainer.crc2.closePath();
            // Draw the mouth
            Kebabtrainer.crc2.beginPath();
            Kebabtrainer.crc2.arc(this.position.x, this.position.y + 15, 10, 0, Math.PI, true);
            Kebabtrainer.crc2.strokeStyle = "black";
            Kebabtrainer.crc2.stroke();
            Kebabtrainer.crc2.fillStyle = "red";
            Kebabtrainer.crc2.fill();
            Kebabtrainer.crc2.closePath();
        }
    }
    Kebabtrainer.Person = Person;
})(Kebabtrainer || (Kebabtrainer = {}));
//# sourceMappingURL=Person.js.map