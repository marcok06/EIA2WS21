"use strict";
var Aufgabe01;
(function (Aufgabe01) {
    let subject = ["Harry", "Marco", "Dennis"];
    let object = ["ein Ball", "die Uhr", "eine Apfel"];
    let praed = ["wirft", "isst", "schmeisst"];
    console.log(object);
    for (let i = subject.length; i > 0; i--) {
        let abcd = getVerse(subject, object, praed);
        console.log(abcd);
    }
    function getVerse(_subject, _object, _praed) {
        let verse = "";
        let randomSubject = Math.floor(Math.random() * _subject.length);
        verse += _subject.splice(randomSubject, 1)[0] + " ";
        let randomObject = Math.floor(Math.random() * _object.length);
        verse += _object.splice(randomObject, 1)[0] + " ";
        let randomPraed = Math.floor(Math.random() * _praed.length);
        verse += _praed.splice(randomPraed, 1)[0] + " ";
        return verse;
    }
})(Aufgabe01 || (Aufgabe01 = {}));
//# sourceMappingURL=A01_RandomPoem.js.map