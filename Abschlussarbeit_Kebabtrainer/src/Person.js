"use strict";
var Kebabtrainer;
(function (Kebabtrainer) {
    let Mood;
    (function (Mood) {
        Mood[Mood["Happy"] = 0] = "Happy";
        Mood[Mood["Neutral"] = 1] = "Neutral";
        Mood[Mood["Sad"] = 2] = "Sad";
        Mood[Mood["Angry"] = 3] = "Angry";
    })(Mood = Kebabtrainer.Mood || (Kebabtrainer.Mood = {}));
    class Person extends Kebabtrainer.Moveable {
        shop;
        mood;
        constructor(_shop, _pos) {
            super(_pos);
            this.shop = _shop;
            this.mood = Mood.Happy;
        }
        update() {
            super.update();
            this.draw();
        }
        draw() {
            switch (this.mood) {
                case Mood.Happy:
                    this.drawHappy();
                    break;
                case Mood.Neutral:
                    this.drawNeutral();
                    break;
                case Mood.Sad:
                    this.drawSad();
                    break;
                case Mood.Angry:
                    this.drawAngry();
                    break;
            }
        }
        drawHappy() {
            //Draw Circle for the face (Its filled green because we are happy)
            Kebabtrainer.crc2.beginPath();
            Kebabtrainer.crc2.arc(this.position.x, this.position.y, 30, 0, 2 * Math.PI);
            Kebabtrainer.crc2.strokeStyle = "black";
            Kebabtrainer.crc2.stroke();
            Kebabtrainer.crc2.fillStyle = "green";
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
            Kebabtrainer.crc2.arc(this.position.x, this.position.y + 10, 10, 0, Math.PI);
            Kebabtrainer.crc2.strokeStyle = "black";
            Kebabtrainer.crc2.stroke();
            Kebabtrainer.crc2.fillStyle = "red";
            Kebabtrainer.crc2.fill();
            Kebabtrainer.crc2.closePath();
        }
        drawNeutral() {
            //Draw Circle for the face (Its filled green because we are happy)
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
            //Draw Circle for the face (Its filled green because we are happy)
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
            //Draw Circle for the face (Its filled green because we are happy)
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