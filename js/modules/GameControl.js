import Food from './Food.js';
import ScorePanel from './ScorePanel.js';
import Snake from './Snake.js';
class GameControl {
    constructor() {
        this.isLive = true;
        this.direction = '';
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel(9, 3);
        this.init();
    }
    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        this.run();
    }
    keydownHandler(event) {
        if (event.key === 'ArrowDown' ||
            event.key === 'ArrowRight' ||
            event.key === 'ArrowUp' ||
            event.key === 'ArrowLeft' ||
            event.key === 'Left' ||
            event.key === 'Up' ||
            event.key === 'Right' ||
            event.key === 'Down') {
            this.direction = event.key;
        }
    }
    run() {
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                Y -= 30;
                break;
            case "ArrowDown":
            case "Down":
                Y += 30;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 30;
                break;
            case "ArrowRight":
            case "Right":
                X += 30;
                break;
        }
        this.checkEat(X, Y);
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        }
        catch (e) {
            alert(e.message + 'GAME OVER!');
            this.isLive = false;
        }
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level) * 30);
    }
    checkEat(X, Y) {
        if (X === this.food.X && Y === this.food.Y) {
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
        }
    }
}
export default GameControl;
