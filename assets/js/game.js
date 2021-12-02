var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName, playerHealth, playerAttack, playerMoney)

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
console.log(enemyNames, enemyHealth, enemyAttack)

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
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;   
            }
        }    

        // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
        enemyHealth = enemyHealth - playerAttack;
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
        playerHealth = playerHealth - enemyAttack;
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
            enemyHealth = 50;
            debugger;
            // call fight function with enemy-robot
            fight(pickedEnemyName);
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
    
    var playAgainConfirm = window.confirm("Would you liek to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}

startGame();