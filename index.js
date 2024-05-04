#! /usr/bin/env node
import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please Enter Your Name",
    },
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Please Select Your Opponent",
        choices: ["Billie", "Alice", "Holly"],
    },
]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    if (opponent.select == "Billie") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do ?",
                choices: ["Attack", "Drink Portion", "Run For Your Life"],
            },
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(`YOU LOOSE! BETTER LUCK NEXT TIME......`);
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(`YOU WIN ......`);
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(`You Drink Health Portion Your Fuel is ${p1.fuel}`);
            process.exit();
        }
        if (ask.opt == "Run For Your Life") {
            console.log(`YOU LOOSE! BETTER LUCK NEXT TIME......`);
            process.exit();
        }
    }
    // ALICE
    if (opponent.select == "Alice") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do ?",
                choices: ["Attack", "Drink Portion", "Run For Your Life"],
            },
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(`YOU LOOSE! BETTER LUCK NEXT TIME......`);
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(`YOU WIN ......`);
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(`You Drink Health Portion Your Fuel is ${p1.fuel}`);
            process.exit();
        }
        if (ask.opt == "Run For Your Life") {
            console.log(`YOU LOOSE! BETTER LUCK NEXT TIME......`);
            process.exit();
        }
    }
    // HOLLY
    if (opponent.select == "Holly") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do ?",
                choices: ["Attack", "Drink Portion", "Run For Your Life"],
            },
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(`YOU LOOSE! BETTER LUCK NEXT TIME......`);
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(`YOU WIN ......`);
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(`You Drink Health Portion Your Fuel is ${p1.fuel}`);
            process.exit();
        }
        if (ask.opt == "Run For Your Life") {
            console.log(`YOU LOOSE! BETTER LUCK NEXT TIME......`);
            process.exit();
        }
    }
} while (true);
