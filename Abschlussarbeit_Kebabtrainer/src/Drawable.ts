namespace Kebabtrainer {
    export abstract class Drawable {
        public position: Vector = new Vector(0, 0);

        constructor(_pos: Vector) {
            this.position = _pos;
        }

        public update() {
            this.draw();
        }

        public abstract draw(): void;
    }
}