function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function performAttack(attacker, defender) {
    const attackRoll = rollDie();
    const defendRoll = rollDie();
    
    const attackDamage = attacker.attack * attackRoll;
    const defendStrength = defender.strength * defendRoll;
    const netDamage = Math.max(attackDamage - defendStrength, 0);
    
    defender.health -= netDamage;
    
    console.log(`${attacker.name} attacks with roll ${attackRoll} (Damage: ${attackDamage})`);
    console.log(`${defender.name} defends with roll ${defendRoll} (Defended: ${defendStrength})`);
    console.log(`${defender.name} health reduced by ${netDamage} to ${defender.health}\n`);
}

function runGame() {
    let playerA = { name: 'Player A', health: 50, strength: 5, attack: 10 };
    let playerB = { name: 'Player B', health: 100, strength: 10, attack: 5 };

    console.log('Game Start!\n');

    while (playerA.health > 0 && playerB.health > 0) {
        if (playerA.health <= playerB.health) {
            performAttack(playerA, playerB);
        } else {
            performAttack(playerB, playerA);
        }
        if (playerA.health <= 0) {
            console.log("Player B wins the game!");
            break;
        } else if (playerB.health <= 0) {
            console.log("Player A wins the game!");
            break;
        }
    }
}
runGame();
