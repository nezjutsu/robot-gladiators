var getPlayerName = function() {
    var name = "";

    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }

    console.log("Your robot's name is" + name);
    return name;
}

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10
}
console.log(playerInfo.name, playerInfo.health, playerInfo.attack, playerInfo.money)

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
}

var fight = function(enemy) {
    console.log(enemy);
    while(playerInfo.health > 0 && enemy.health > 0) {
        // ask player to fight or skip
        var promptFight = window.prompt("Would you like to fight or skip the battle? Enter 'FIGHT' or 'SKIP' to choose.");
        
        // If player chooses to skip then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player want to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                // subract money from player for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerMoney", playerInfo.money);
                break;   
            }
        }    

        // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack)
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        );

        // Check enemy's health 
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");

            //award player money for winning the round
            playerInfo.money = playerInfo.money + 20;
            console.log("playerMoney", playerInfo.money)
            break;
        }   else {
            window.alert(enemy.name + " still has " + enemy.health + " health left!");
        }

        // Subtract the value of 'enemyAttack' from the value of 'playerHealth'  and use that result to update the value in the 'playerHealth' variable.
        var damage = randomNumber(enemy.attack - 3, enemy.attack)
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
        enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );

        // check players health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            break;
        }   else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left!");
        }
    }
};
    
// function to start game
var startGame = function() {
    // reset player stats
    playerInfo.health = 100;
    playerInfo.attack = 10;
    playerInfo.money = 10;
    for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
    
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            // call fight function with enemy-robot
            fight(pickedEnemyObj);
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
            if (playerInfo.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            // increase health and decrease money
            playerInfo.health = playerInfo.health + 20;
            playerInfo.money = playerInfo.money - 7;
            } else {
                window.alert("You don't have enough money!");  
            }
            break;
        case "UPGRADE":    
        case "upgrade":
            if (playerInfo.money >= 7){
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            // increase attack and decrease money
            playerInfo.attack = playerInfo.attack + 6;
            playerInfo.money = playerInfo.money - 7;
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

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

startGame();