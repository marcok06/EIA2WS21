"use strict";
var EventInspector;
(function (EventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        let div0 = document.querySelector("#div0");
        div0.addEventListener("click", logInfo);
        div0.addEventListener("keyup", logInfo);
        let div1 = document.querySelector("#div1");
        div1.addEventListener("click", logInfo);
        div1.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        let span0 = document.querySelector("#span0");
        let positionX = _event.x + 50;
        let positionY = _event.y + 50;
        span0.innerText = _event.x + " " + _event.y + "\n";
        span0.innerText += _event.target.id;
        span0.style.top = positionY.toString() + "px";
        span0.style.left = positionX.toString() + "px";
    }
    function logInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
        console.log("_______________________________________________");
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=EventInspector.js.map