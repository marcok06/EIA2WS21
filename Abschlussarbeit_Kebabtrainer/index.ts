namespace Kebabtrainer {
    window.addEventListener("load", handleLoad);

    // Save rendering context as export, so all classes can use it
    export let crc2: CanvasRenderingContext2D;

    // We just need the shop because all the workers and customers are saved in the shop
    let shop: Shop;

    // Create variables to save the HTML references of selled items span, workers' and customers' happiness span
    let selledItems: HTMLSpanElement;
    let workerHappines: HTMLSpanElement;
    let customerHappines: HTMLSpanElement;

    function handleLoad(): void {
        // Get rendering context for the canvas element
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d")!;

        selledItems = document.getElementById("selledItems") as HTMLSpanElement;
        workerHappines = document.getElementById("happinesWorkers") as HTMLSpanElement;
        customerHappines = document.getElementById("happinesCustomers") as HTMLSpanElement;

        // Ask the user for the number of workers and customers
        let amountOfWorkers: number = parseInt(prompt("How many workers do you want to create?", "4")!);
        let amountOfCustomers: number = parseInt(prompt("A new customer schould enter the shop every ... seconds:", "4")!);
        let stressFactor: number = parseInt(prompt("How fast should the stress of the workers increase?", "2")!);
        let maxFillAmount: number = parseInt(prompt("What is the max amount of the ingredient fills?:", "100")!);

        // Create the shop
        shop = new Shop(amountOfWorkers, amountOfCustomers * 1000, stressFactor, maxFillAmount);

        // Start game loop
        window.setInterval(update, 20);
    }

    function update(): void {
        // Clear background
        crc2.clearRect(0, 0, 1280, 720);

        // Update shop (The shop will then update all the workers and customers)
        shop.update();

        // Update selled items
        selledItems.innerHTML = shop.getSelledItems().toFixed();

        // Update worker happiness
        workerHappines.innerHTML = shop.getWorkerMood().toFixed(2);

        // Update customer happiness
        customerHappines.innerHTML = shop.getCustomerMood().toFixed(2);
    }
}