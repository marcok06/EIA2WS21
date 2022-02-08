namespace EventInspector {

window.addEventListener("load", handleLoad);

function handleLoad(): void {
    document.addEventListener("mousemove", setInfoBox);
    document.addEventListener("click", logInfo);
    document.addEventListener("keyup", logInfo);
    document.body.addEventListener("click", logInfo);
    document.body.addEventListener("keyup", logInfo);
    let div0: HTMLDivElement = document.querySelector("#div0")!;
    div0.addEventListener("click", logInfo);
    div0.addEventListener("keyup", logInfo);
    let div1: HTMLDivElement = document.querySelector("#div1")!;
    div1.addEventListener("click", logInfo);
    div1.addEventListener("keyup", logInfo);
}

function setInfoBox(_event: MouseEvent): void {
    let span0: HTMLSpanElement = document.querySelector("#span0")!;
    let positionX: number = _event.x + 50;
    let positionY: number = _event.y + 50;
    span0.innerText = _event.x + " " + _event.y + "\n";
    span0.innerText += (_event.target as HTMLElement).id;
    span0.style.top = positionY.toString() + "px";
    span0.style.left = positionX.toString() + "px";
}

function logInfo(_event: Event): void {
    console.log(_event.type);
    console.log(_event.target);
    console.log(_event.currentTarget);
    console.log(_event);
    console.log("_______________________________________________");
}
}