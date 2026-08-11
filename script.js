let spaceshipName = "Nova"
let shipHealth = 100;
let starCoins = 5;
let inventory = ["repair kit", " repair kit"]


function getStatus() {
    console.log("Spaceship Name: " + spaceshipName);
    console.log("Life: " + shipHealth);
    console.log("Star Coins: " + starCoins);
    console.log("Inventory: " + inventory);
}


function useRepairKit() {
    if (shipHealth < 100 && inventory.length > 0) {
        inventory.pop();
        shipHealth = shipHealth + 50;
        if (shipHealth > 100) {
            shipHealth = 100;
        }
        console.log(
            "The spaceship was repaired. + 50 health! Health is now " + shipHealth,
        );
    } else if (inventory.length <= 0) {
        console.log("No repair kits left.");

    } else if (shipHealth === 100) {
        console.log("Health is already at 100");
    }
}



function buyRepairKit() {
    if (starCoins > 0) {
        starCoins = starCoins - 1;
        inventory.push("Repair-Kit");
        console.log("Repair-Kit gekauft!");
    }
    else {
        console.log("Leider nicht genug Star Coins!");
    }
}



function takeDamage() {
    // Return a random integer from 1 to 99 (both included):
    let damage = Math.floor(Math.random() * 100) + 1;

    shipHealth = shipHealth - damage;

    if (shipHealth > 0) {
        console.log("You took " + damage + " damage");
        console.log("Your health is " + shipHealth);
        if (shipHealth === 0) {
            console.log("Your ship was destroyed. Game over!")
        }
    } else {
        shipHealth = 0
        console.log("Your ship was destroyed. Game over!")
    }

}



getStatus();
takeDamage();
useRepairKit();
buyRepairKit()
getStatus();

getStatus();
takeDamage();
useRepairKit();
buyRepairKit()
getStatus();

getStatus();
takeDamage();
useRepairKit();
buyRepairKit()
getStatus();

getStatus();
takeDamage();
useRepairKit();
buyRepairKit()
getStatus();

getStatus();
takeDamage();
useRepairKit();
buyRepairKit()
getStatus();

getStatus();
takeDamage();
useRepairKit();
buyRepairKit()
getStatus();

getStatus();
takeDamage();
useRepairKit();
buyRepairKit()
getStatus();

getStatus();
takeDamage();
useRepairKit();
buyRepairKit()
getStatus();
