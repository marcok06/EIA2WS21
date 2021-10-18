"use strict";
var randomPoem;
(function (randomPoem) {
    let subject = ["Harry", "Uwe", "Mathilda", "Lele", "Doktor Skihü"];
    let praedikat = ["knackt", "wirft", "isst", "begutachtet", "zerdrückt"];
    let object = ["eine Walnuss", "das Glas", "die Banane", "Steine", "eine Kokosnuss"];
    let poem = "";
    for (let i = 5; i <= object.length; i--) {
        if (i == 0) {
            break;
        }
        console.log(i);
        getVerse(subject, praedikat, object, poem);
    }
    function getVerse(_subject, _praedikat, _object, _poem) {
        let randomS = Math.floor(Math.random() * _subject.length);
        _poem += _subject.splice(randomS, 1) + " ";
        let randomP = Math.floor(Math.random() * _subject.length);
        _poem += _praedikat.splice(randomP, 1) + " ";
        let randomO = Math.floor(Math.random() * _subject.length);
        _poem += _object.splice(randomO, 1) + " ";
        console.log(_poem);
        return _poem;
    }
})(randomPoem || (randomPoem = {}));
//# sourceMappingURL=A01_RandomPoem.js.map