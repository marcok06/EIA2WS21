"use strict";
var Kebabtrainer;
(function (Kebabtrainer) {
    window.addEventListener("load", Init);
    // We just need the shop because all the workers and customers are saved in the shop
    let shop;
    //Create variables to save the HTML Refrences of the selled items span, the worker happines span and the customer happines span
    let selledItems;
    let workerHappines;
    let customerHappines;
    function Init() {
        // Get the rendering context for the canvas element
        let canvas = document.getElementsByTagName("canvas")[0];
        Kebabtrainer.crc2 = canvas.getContext("2d");
        selledItems = document.getElementById("selledItems");
        workerHappines = document.getElementById("happinesWorkers");
        customerHappines = document.getElementById("happinesCustomers");
        // Ask the user for the number of workers and customers
        let amountOfWorkers = parseInt(prompt("How many workers do you want to create?", "4"));
        let amountOfCustomers = parseInt(prompt("A new customer schould enter the shop every ... Sekonds:", "4"));
        let stressFactor = parseInt(prompt("How fast should the stress of the workers increase?", "2"));
        let maxFillAmount = parseInt(prompt("What is the max amount of the ingredient fills?:", "100"));
        // Create the shop
        shop = new Kebabtrainer.Shop(amountOfWorkers, amountOfCustomers * 1000, stressFactor, maxFillAmount);
        // Start the game loop
        window.setInterval(update, 20);
    }
    function update() {
        // Clear the background
        Kebabtrainer.crc2.clearRect(0, 0, 1280, 720);
        // Update the shop (The shop will then update all the workers and customers)
        shop.update();
        // Update the selled items
        selledItems.innerHTML = shop.getSelledItems().toFixed();
        // Update the worker happines
        workerHappines.innerHTML = shop.getWorkerMood().toFixed(2);
        // Update the customer happines
        customerHappines.innerHTML = shop.getCustomerMood().toFixed(2);
    }
})(Kebabtrainer || (Kebabtrainer = {}));
//# sourceMappingURL=index.js.map