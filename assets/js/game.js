var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName, playerHealth, playerAttack, playerMoney)

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
console.log(enemyNames, enemyHealth, enemyAttack)

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
}

var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
        // ask player to fight or skip
        var promptFight = window.prompt("Would you like to fight or skip the battle? Enter 'FIGHT' or 'SKIP' to choose.");
        
        // If player chooses to skip then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player want to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subract money from player for skipping
                playerMoney = Math.max(0, playerMoney - 10);
                console.log("playerMoney", playerMoney);
                break;   
            }
        }    

        // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
        var damage = randomNumber(playerAttack - 3, playerAttack)
        enemyHealth = Math.max(0, enemyHealth - damage);
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // Check enemy's health 
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            //award player money for winning the round
            playerMoney = playerMoney + 20;
            console.log("playerMoney", playerMoney)
            break;
        }   else {
            window.alert(enemyName + " still has " + enemyHealth + " health left!");
        }

        // Subtract the value of 'enemyAttack' from the value of 'playerHealth'  and use that result to update the value in the 'playerHealth' variable.
        var damage = randomNumber(enemyAttack - 3, enemyAttack)
        playerHealth = Math.max(0, playerHealth - damage);
        console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // check players health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        }   else {
                window.alert(playerName + " still has " + playerHealth + " health left!");
        }
    }
};
    
// function to start game
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
    
            var pickedEnemyName = enemyNames[i];
            enemyHealth = randomNumber(40, 60);
            debugger;
            // call fight function with enemy-robot
            fight(pickedEnemyName);
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                var storeConfirm = window.confirm("The fight is over, vist the store before the next round?");

                if (storeConfirm) {
                shop();
                }
            }
        }      else {
            window.alert("You have lost your robot in battle! Game over!");
            break;
        } 
    } 

    // after loop end, player is either out of health or enemies to fight
    endGame();
    
    // play again
    startGame();
}

// function to end the game
var endGame = function() {
    if (playerHealth > 0) {
        window.alert("Great job, you've survuved the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}

var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you liek to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', 'LEAVE' to make a decision."
    );

    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if (playerMoney >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            // increase health and decrease money
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            } else {
                window.alert("You don't have enough money!");  
            }
            break;
        case "UPGRADE":    
        case "upgrade":
            if (playerMoney >= 7){
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            // increase attack and decrease money
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            } else {
                window.alert("You don't have enough money!");
            }
            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            shop();
            break;
    }
}

startGame();