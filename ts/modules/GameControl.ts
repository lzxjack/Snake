import Food from './Food.js';
import ScorePanel from './ScorePanel.js';
import Snake from './Snake.js';


class GameControl {
    // 定义三个属性
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    isLive: boolean = true;

    // 按键方向
    direction: string = '';

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel(9, 3);
        this.init();
    }

    // 游戏初始化
    init() {
        // 绑定键盘按键事件
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        // 调用run方法，执行
        this.run();
    }

    // 键盘按下的相应函数
    keydownHandler(event: KeyboardEvent) {
        // 按下按键，按键存到方向里
        // 判断用户是否按下了正确的方向键
        // console.log(event.key);
        if (event.key === 'ArrowDown' ||
            event.key === 'ArrowRight' ||
            event.key === 'ArrowUp' ||
            event.key === 'ArrowLeft' ||
            event.key === 'Left' ||
            event.key === 'Up' ||
            event.key === 'Right' ||
            event.key === 'Down'
        ) { this.direction = event.key; }



    }

    // 蛇移动,
    run() {
        // 获取蛇现在的坐标
        let X = this.snake.X;
        let Y = this.snake.Y;

        // 计算按下按键后X、Y的值
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
            // default: break;
        }

        // 判断是否吃到食物
        this.checkEat(X, Y);

        // 修改蛇的坐标
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e) {
            // 进入到catch，说明出现异常，游戏结束
            alert(e.message + 'GAME OVER!');
            this.isLive = false;
        }

        // 定时调用
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level) * 30);
    }

    // 检测是否吃到食物,参数为蛇头的坐标
    checkEat(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            // 重新生成新的食物
            this.food.change();
            // 分数增加
            this.scorePanel.addScore();
            // 蛇身子长一截
            this.snake.addBody();
        }
    }
}

export default GameControl;