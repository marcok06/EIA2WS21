namespace SequenzMemorySettings {

    window.addEventListener("load", handleLoad);

    let cardSize: number = 200;
    let bgColor: string = "#FFFFFF";
    let cardColor: string = "FFF000";
    let fontColor: string = "F0F0F0";
    let gameLength: number = 30;
    let fontType: string = "f2";
    let memorySequence: string = " ";



    function handleLoad(): void {
        console.log("hello");
        document.forms[0].addEventListener("change", updateSettings) ;
    }

    function updateSettings(_event: Event): void {
        console.log("helloSettings");
        let allData: FormData = new FormData(document.forms[0]) ;
        for (let entry of allData.entries()) {
            //if entry[0]
            console.log(entry[0], entry[1]) ;
        }
    }

    function startGame(_event: Event): void {
        console.log("hello");

    }

    function checkLetter(_event: Event): void {

        console.log("hi");

    }


    function countdown(_gameLength: number): void {
        console.log("hi");
    }









}