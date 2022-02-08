namespace Aufgabe01 {
    let subject: string[] = ["Harry", "Marco", "Dennis"];
    let object: string[] = ["ein Ball", "die Uhr", "eine Apfel"];
    let praed: string[] = ["wirft", "isst", "schmeisst"];
    console.log(object);

    for (let i: number = subject.length; i > 0; i--) {
        let abcd: string = getVerse(subject, object, praed);
        console.log(abcd);
    }

    function getVerse(_subject: string[], _object: string[], _praed: string[]): string {
        let verse: string = "";

        let randomSubject: number = Math.floor(Math.random() * _subject.length);
        verse += _subject.splice(randomSubject, 1)[0] + " ";

        let randomObject: number = Math.floor(Math.random() * _object.length);
        verse += _object.splice(randomObject, 1)[0] + " ";

        let randomPraed: number = Math.floor(Math.random() * _praed.length);
        verse += _praed.splice(randomPraed, 1)[0] + " ";

        return verse;
    }






























}
