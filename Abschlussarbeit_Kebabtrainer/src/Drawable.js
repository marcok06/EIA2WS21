"use strict";
var Kebabtrainer;
(function (Kebabtrainer) {
    class Drawable {
        position = new Kebabtrainer.Vector(0, 0);
        constructor(_pos) {
            this.position = _pos;
        }
        update() {
            this.draw();
        }
    }
    Kebabtrainer.Drawable = Drawable;
})(Kebabtrainer || (Kebabtrainer = {}));
//# sourceMappingURL=Drawable.js.map