class Tower {
    constructor(name, health, attack, attackSpeed){
        this.name = name
        this.health = health
        this.attack = attack
        this.attackSpeed = attackSpeed
    }

}

class Game {
    constructor(){
        this.lives = 50;
    }

 

startGame(){}

isGameOver(){}


}

class Enemy {
    constructor(name, health, speed){
        this.name = name
        this.health = health
        this.speed = speed
    }
}

class Player {
    constructor(){}

shoot(){}   
}