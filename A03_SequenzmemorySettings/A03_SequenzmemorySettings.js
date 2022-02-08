"use strict";
var SequenzMemorySettings;
(function (SequenzMemorySettings) {
    window.addEventListener("load", handleLoad);
    let cardSize = 200;
    let bgColor = "#FFFFFF";
    let cardColor = "FFF000";
    let fontColor = "F0F0F0";
    let gameLength = 30;
    let fontType = "f2";
    let memorySequence = " ";
    function handleLoad() {
        console.log("hello");
        document.forms[0].addEventListener("change", updateSettings);
    }
    function updateSettings(_event) {
        console.log("helloSettings");
        let allData = new FormData(document.forms[0]);
        for (let entry of allData.entries()) {
            //if entry[0]
            console.log(entry[0], entry[1]);
        }
    }
    function startGame(_event) {
        console.log("hello");
    }
    function checkLetter(_event) {
        console.log("hi");
    }
    function countdown(_gameLength) {
        console.log("hi");
    }
})(SequenzMemorySettings || (SequenzMemorySettings = {}));
//# sourceMappingURL=A03_SequenzmemorySettings.js.map