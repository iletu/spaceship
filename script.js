const spaceshipName = "Nova"
let shipHealth = 100;
let starCoins = 5;
let inventory = 2;


function renderStatus() {

    document.getElementById('renderStatus').innerHTML = `
        <h2> SPACESHIP STATUS </h2>
        <table>
            <tr>
                <td>Spaceship</td>
                <td>${spaceshipName}</td>
            </tr>
            <tr>
                <td>Star Coins</td>
                <td>${starCoins}</td>
            </tr>
            <tr>
                <td>Health</td>
                <td>${shipHealth}</td>
            </tr>
            <tr>
                <td>Inventory</td>
                <td>${inventory}</td>
            </tr>
        </table>`
}

function showError(message) {
    document.getElementById("errorMessage").innerHTML = message;
    document.getElementById("infoMessage").innerHTML = "";
}

function showInfo(message) {
    document.getElementById("infoMessage").innerHTML = message;
    document.getElementById("errorMessage").innerHTML = "";
}

function useRepairKit() {

    if (shipHealth < 100 && inventory > 0) {
        inventory = inventory - 1;
        shipHealth = shipHealth + 50;
        if (shipHealth > 100) {
            shipHealth = 100;
        }
        showInfo("The spaceship was repaired.");

    } else if (inventory <= 0) {
        showError("No repair kits left!");

    } else if (shipHealth === 100) {
        showError("Health is already at 100%.");
    }

    renderStatus();
}



function buyRepairKit() {

    let repairKitAmount = Number(document.getElementById("repairInput").value);

    // Wenn Repair-Kit-Anzahl größer 0 UND die Repair-Kit-Anzahl kleiner/gleich StarCoins → Kauf durchführen.
    if (repairKitAmount > 0 && repairKitAmount <= starCoins) {
        starCoins = starCoins - repairKitAmount;

        inventory = inventory + repairKitAmount;

        showInfo("Repair kit purchased!");

    } else if (repairKitAmount === 0) {
        // nichts bzw. 0 eingegeben
        showError("Please enter an amount!");
    }
    else {
        // console.log("Leider nicht genug Star Coins!");
        // document.getElementById("buyMessage").innerHTML = "You don't have enough Star Coins!";

        showError("You don't have enough Star Coins!");

    }

    // den Inputfeld nach der Eingabe leeren
    document.getElementById("repairInput").value = "";

    // Status aufrufen
    renderStatus();

}



function getDamage() {
    // ------------- DAMAGE THE SHIP RANDOM ------------- 
    // Return a random integer from 1 to 99 (both included):
    // let damage = Math.floor(Math.random() * 100) + 1;

    // shipHealth = shipHealth - damage;

    // if (shipHealth > 0) {
    //     console.log("You took " + damage + " damage");
    //     console.log("Your health is " + shipHealth);
    // }

    // if (shipHealth <= 0) {
    //     console.log("Your ship was destroyed. Game over!");

    //     document.getElementById().innerHTML = 'Game Over!'
    // }
    // ================================================================


    // ------------- DAMAGE THE SHIP with Input field ------------- 
    let damage = Number(document.getElementById('damageInput').value);

    if (shipHealth > 0) {
        shipHealth = shipHealth - damage;
    }

    if (shipHealth <= 0) {
        shipHealth = 0;
        showError("Your ship is destroyed. Game Over!");
    } else {
        showError("You took " + damage + " damage.");
    }

    // den Inputfeld nach der Eingabe leeren
    document.getElementById("damageInput").value = "";

    // Status nach dem Damage aufrufen
    renderStatus();
}


renderStatus();
// getDamage();
// useRepairKit();
// buyRepairKit()
// renderStatus();

