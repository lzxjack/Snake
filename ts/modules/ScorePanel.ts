class ScorePanel {
    score: number = 0;
    level: number = 1;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    // 最大等级
    maxLevel: number;
    // 每级所需的分数
    upScore: number;

    constructor(maxLevel: number = 10, upScore: number = 1) {
        // 若不传参数，则默认等级为10
        this.scoreEle = document.querySelector('.score')!;
        this.levelEle = document.querySelector('.level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    // 加分方法
    addScore() {
        // 分数增加
        this.scoreEle.innerHTML = ++this.score + '';
        // 判断是否升级
        if (this.score % this.upScore === 0) {
            this.levelUp();
        }
    }

    // 升级方法
    levelUp() {
        // 最高等级 10级
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}

export default ScorePanel;