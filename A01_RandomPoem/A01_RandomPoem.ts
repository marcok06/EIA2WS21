namespace randomPoem {

let subject: string[] = ["Harry", "Uwe", "Mathilda", "Lele", "Doktor Skihü"];
let praedikat: string[] = ["knackt", "wirft", "isst", "begutachtet", "zerdrückt"];
let object: string[] = ["eine Walnuss", "das Glas", "die Banane", "Steine", "eine Kokosnuss"];
let poem: string = "";

for (let i: number = 5; i <= object.length; i--) {
    if (i == 0) {
        break;
    }
    console.log(i);
    getVerse (subject, praedikat, object, poem);
}

function getVerse (_subject: string[], _praedikat: string[], _object: string[], _poem: string ): string {
    let randomS: number = Math.floor(Math.random() * _subject.length);
    _poem += _subject.splice(randomS, 1) + " ";

    let randomP: number = Math.floor(Math.random() * _subject.length);
    _poem += _praedikat.splice(randomP, 1) + " ";

    let randomO: number = Math.floor(Math.random() * _subject.length);
    _poem += _object.splice(randomO, 1) + " ";

    console.log(_poem);
    return _poem;
}
}