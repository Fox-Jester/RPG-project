



const greatSword = {
    name: "Great Sword",
    damage: 40,
}

const warrior = {
    hp: 120,

    weapon: greatSword,

    attack: function(enemy) {
        enemy.hp = enemy.hp - this.weapon.damage;
        console.log(`${this.name} attacks ${enemy.name} with ${this.weapon.name}`);
        console.log(`it does ${this.weapon.damage}dmg`);
        console.log(`${enemy.name} has ${enemy.hp}hp`);
    },

    heavyAttack: function(enemy) {
        const attackDmg = (this.weapon.damage + 20)
        enemy.hp = enemy.hp - attackDmg;
        console.log(`${this.name} uses a heavy attack on ${enemy.name}`)
        console.log(`it does ${attackDmg}dmg`);
        console.log(`${enemy.name} has ${enemy.hp}hp`);
    }

    }



class Player {
    constructor(name){
        this.name = name;
    }

}

let player = new Player("Yuno");

player = Object.assign(player, warrior);


const guardian = {
    name: "Guardian",
    hp: 300,
    attack: 20,
}

const Current = {
    enemy: guardian,
}

player.attack(Current.enemy);
player.heavyAttack(Current.enemy);
console.log(player)



// const Game = {

// }