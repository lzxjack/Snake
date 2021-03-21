class ScorePanel {
    constructor(maxLevel = 10, upScore = 1) {
        this.score = 0;
        this.level = 1;
        this.scoreEle = document.querySelector('.score');
        this.levelEle = document.querySelector('.level');
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }
    addScore() {
        this.scoreEle.innerHTML = ++this.score + '';
        if (this.score % this.upScore === 0) {
            this.levelUp();
        }
    }
    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}
export default ScorePanel;
