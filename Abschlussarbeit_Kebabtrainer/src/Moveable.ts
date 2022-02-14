namespace Kebabtrainer {
    export class Moveable extends Drawable {
        protected speed: number = 0.02;
        protected targetPosition: Vector = new Vector(0, 0);

        constructor(_pos: Vector) {
            super(_pos);
        }

        public update(): void {
            super.update();
            this.move();
        }

        public move(): void {
            // Calculate the direction to the target
            let _dir: Vector = this.targetPosition.copy();
            _dir.subtract(this.position);
            _dir.scale(this.speed);
            this.position.add(_dir);
        }
        
        public setTarget(_target: Vector): void {
            this.targetPosition = _target;
        }
    }
}
