namespace Kebabtrainer {
    export class Drawable {
        public position: Vector = new Vector(0, 0);

        constructor(_pos: Vector) {
            this.position = _pos;
        }

        public update(): void {
            this.draw();
        }

        public draw(): void {
            console.log("draw");
        }
    }
}