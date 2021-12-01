var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName, playerHealth, playerAttack, playerMoney)

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
console.log(enemyNames, enemyHealth, enemyAttack)

// Alert players that they are starting the round
window.alert("Welcome to Robot Gladiators!");

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
        // If player choses to fight, then fight
        // if (promptFight === "fight" || promptFight === "FIGHT") { 

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
    
for(var i = 0; i < enemyNames.length; i++) {
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        // call fight function with enemy-robot
        fight(enemyNames[i]);
}