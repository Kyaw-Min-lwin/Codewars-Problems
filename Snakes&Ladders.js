// https://www.codewars.com/kata/587136ba2eefcb92a9000027

class SnakesLadders {
    constructor() {

        this.player1Position = 0;
        this.player2Position = 0;
        this.playerTurn = 1;
        this.ladder, this.snake;
    }
};

SnakesLadders.prototype.play = function (die1, die2) {


    if (this.playerTurn === 1) {
        if (this.player2Position === 100 || this.player1Position === 100) {
            return `Game over!`;
        }
        this.player1Position += die1 + die2;
        if (this.player1Position > 100) {
            this.player1Position = 100 - (this.player1Position - 100);
        }
        this.ladder = this.checkLadder(this.player1Position);
        this.snake = this.checkSnake(this.player1Position);

        if (this.ladder) {
            this.player1Position = this.ladder;
        }
        if (this.snake) {
            this.player1Position = this.snake;
        }
        die1 === die2 ? this.playerTurn = 1 : this.playerTurn = 2;
        if (this.player1Position === 100) {
            return `Player 1 Wins!`
        }
        return `Player 1 is on square ${this.player1Position}`
    }
    else {
        if (this.player2Position === 100 || this.player1Position === 100) {
            return `Game over!`;
        }
        this.player2Position += die1 + die2;
        if (this.player2Position > 100) {
            this.player2Position = 100 - (this.player2Position - 100);
        }
        this.ladder = this.checkLadder(this.player2Position);
        this.snake = this.checkSnake(this.player2Position);

        if (this.ladder) {
            this.player2Position = this.ladder;
        }
        if (this.snake) {
            this.player2Position = this.snake;
        }
        die1 === die2 ? this.playerTurn = 2 : this.playerTurn = 1;
        if (this.player2Position === 100) {
            return `Player 2 Wins!`
        }
        return `Player 2 is on square ${this.player2Position}`
    }
}


SnakesLadders.prototype.checkLadder = function (n) {
    if (n === 2) {
        return 38;
    }
    if (n === 7) {
        return 14;
    }
    if (n === 8) {
        return 31;
    }
    if (n === 15) {
        return 26;
    }
    if (n === 21) {
        return 42;
    }
    if (n === 28) {
        return 84;
    }
    if (n === 36) {
        return 44;
    }
    if (n === 51) {
        return 67;
    }
    if (n === 71) {
        return 91;
    }
    if (n === 78) {
        return 98;
    }
    if (n === 87) {
        return 94;
    }
}

SnakesLadders.prototype.checkSnake = function (n) {
    if (n === 16) {
        return 6;
    }
    if (n === 46) {
        return 25;
    }
    if (n === 49) {
        return 11;
    }
    if (n === 62) {
        return 19;
    }
    if (n === 64) {
        return 60;
    }
    if (n === 74) {
        return 53;
    }
    if (n === 89) {
        return 68;
    }
    if (n === 92) {
        return 88;
    }
    if (n === 95) {
        return 75;
    }
    if (n === 99) {
        return 80;
    }
}