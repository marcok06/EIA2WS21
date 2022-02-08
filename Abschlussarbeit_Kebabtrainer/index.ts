namespace Kebabtrainer {
    window.addEventListener("load", Init);

    // Save the rendering contest as export so all of the classes can use it
    export let crc2: CanvasRenderingContext2D;

    // We just need the shop because all the workers and customers are saved in the shop
    let shop: Shop;

    //Create variables to save the HTML Refrences of the selled items span, the worker happines span and the customer happines span
    let selledItems: HTMLSpanElement;
    let workerHappines: HTMLSpanElement;
    let customerHappines: HTMLSpanElement;

    function Init(): void {
        // Get the rendering context for the canvas element
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d")!;

        selledItems = document.getElementById("selledItems") as HTMLSpanElement;
        workerHappines = document.getElementById("happinesWorkers") as HTMLSpanElement;
        customerHappines = document.getElementById("happinesCustomers") as HTMLSpanElement;

        // Ask the user for the number of workers and customers
        let amountOfWorkers = parseInt(prompt("How many workers do you want to create?", "4")!);
        let amountOfCustomers = parseInt(prompt("A new customer schould enter the shop every ... Sekonds:", "4")!);
        let stressFactor = parseInt(prompt("How fast should the stress of the workers increase?", "2")!);
        let maxFillAmount = parseInt(prompt("What is the max amount of the ingredient fills?:", "100")!);

        // Create the shop
        shop = new Shop(amountOfWorkers, amountOfCustomers * 1000, stressFactor, maxFillAmount);

        // Start the game loop
        window.setInterval(update, 20);
    }

    function update() {
        // Clear the background
        crc2.clearRect(0, 0, 1280, 720);

        // Update the shop (The shop will then update all the workers and customers)
        shop.update();

        // Update the selled items
        selledItems.innerHTML = shop.getSelledItems().toFixed();

        // Update the worker happines
        workerHappines.innerHTML = shop.getWorkerMood().toFixed(2);

        // Update the customer happines
        customerHappines.innerHTML = shop.getCustomerMood().toFixed(2);
    }
}