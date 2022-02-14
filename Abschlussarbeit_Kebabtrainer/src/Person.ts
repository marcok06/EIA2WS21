namespace Kebabtrainer {

    export class Person extends Moveable {
        public mood: Mood;
        protected shop: Shop;

        constructor(_shop: Shop, _pos: Vector) {
            super(_pos);
            this.shop = _shop;
            this.mood = Mood.Happy;
        }

        public update(): void {
            super.update();
            this.draw();
        }

        public draw(): void {
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

        private drawHappy(): void {
            //Draw circle for face (green for happy)
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 30, 0, 2 * Math.PI);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.fillStyle = "green";
            crc2.fill();
            crc2.closePath();

            //Draw eyes
            crc2.beginPath();
            crc2.arc(this.position.x - 10, this.position.y - 10, 5, 0, 2 * Math.PI);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(this.position.x + 10, this.position.y - 10, 5, 0, 2 * Math.PI);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();

            // Draw mouth
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y + 10, 10, 0, Math.PI);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.fillStyle = "red";
            crc2.fill();
            crc2.closePath();
        }

        private drawNeutral(): void {
            //Draw circle for face (gray for neutral)
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 30, 0, 2 * Math.PI);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.fillStyle = "gray";
            crc2.fill();
            crc2.closePath();

            //Draw the eyes
            crc2.beginPath();
            crc2.arc(this.position.x - 10, this.position.y - 10, 5, 0, 2 * Math.PI);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(this.position.x + 10, this.position.y - 10, 5, 0, 2 * Math.PI);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();

            // Draw the mouth
            crc2.beginPath();
            crc2.rect(this.position.x - 10, this.position.y + 10, 20, 3);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.fillStyle = "red";
            crc2.fill();
            crc2.closePath();
        }

        private drawSad(): void {
            //Draw circle for face (orange for sad))
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 30, 0, 2 * Math.PI);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.fillStyle = "orange";
            crc2.fill();
            crc2.closePath();

            //Draw the eyes
            crc2.beginPath();
            crc2.arc(this.position.x - 10, this.position.y - 10, 5, 0, 2 * Math.PI);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(this.position.x + 10, this.position.y - 10, 5, 0, 2 * Math.PI);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();

            // Draw the mouth
            crc2.beginPath();
            crc2.rect(this.position.x - 10, this.position.y + 10, 20, 3);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.fillStyle = "red";
            crc2.fill();
            crc2.closePath();
        }

        private drawAngry(): void {
            //Draw circle for face (red for angry)
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 30, 0, 2 * Math.PI);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.fillStyle = "red";
            crc2.fill();
            crc2.closePath();

            //Draw the eyes
            crc2.beginPath();
            crc2.arc(this.position.x - 10, this.position.y - 10, 5, 0, 2 * Math.PI);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(this.position.x + 10, this.position.y - 10, 5, 0, 2 * Math.PI);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();

            // Draw the mouth
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y + 15, 10, 0, Math.PI, true);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.fillStyle = "red";
            crc2.fill();
            crc2.closePath();
        }
    }
}