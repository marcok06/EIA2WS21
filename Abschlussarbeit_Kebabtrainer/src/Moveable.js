"use strict";
var Kebabtrainer;
(function (Kebabtrainer) {
    class Moveable extends Kebabtrainer.Drawable {
        speed = 0.02;
        targetPosition = new Kebabtrainer.Vector(0, 0);
        constructor(_pos) {
            super(_pos);
        }
        update() {
            super.update();
            this.move();
        }
        move() {
            // Calculate the direction to the target
            let _dir = this.targetPosition.copy();
            _dir.subtract(this.position);
            _dir.scale(this.speed);
            this.position.add(_dir);
        }
        setTarget(_target) {
            this.targetPosition = _target;
        }
    }
    Kebabtrainer.Moveable = Moveable;
})(Kebabtrainer || (Kebabtrainer = {}));
//# sourceMappingURL=Moveable.js.map