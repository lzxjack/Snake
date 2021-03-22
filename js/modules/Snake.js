class Snake {
    constructor() {
        this.element = document.getElementById('snake');
        this.head = document.querySelector('#snake>div');
        this.body = this.element.getElementsByTagName('div');
    }
    get X() {
        return this.head.offsetLeft;
    }
    get Y() {
        return this.head.offsetTop;
    }
    set X(value) {
        if (this.X === value)
            return;
        if (value < 0 || value > 1470) {
            throw new Error('The Snake has died！');
        }
        if (this.body[1] && this.body[1].offsetLeft === value) {
            value = value > this.X ? this.X - 30 : this.X + 30;
        }
        this.moveBody();
        this.head.style.left = value + 'px';
        this.checkHeadBody();
    }
    set Y(value) {
        if (this.Y === value)
            return;
        if (value < 0 || value > 810) {
            throw new Error('The Snake has died！');
        }
        if (this.body[1] && this.body[1].offsetTop === value) {
            value = value > this.Y ? this.Y - 30 : this.Y + 30;
        }
        this.moveBody();
        this.head.style.top = value + 'px';
        this.checkHeadBody();
    }
    addBody() {
        this.element.insertAdjacentHTML('beforeend', "<div></div>");
    }
    moveBody() {
        for (let i = this.body.length - 1; i > 0; i--) {
            let X = this.body[i - 1].offsetLeft;
            let Y = this.body[i - 1].offsetTop;
            this.body[i].style.left = X + 'px';
            this.body[i].style.top = Y + 'px';
        }
    }
    checkHeadBody() {
        for (let i = 1; i < this.body.length; i++) {
            let bd = this.body[i];
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                throw new Error('撞到自己了！');
            }
        }
    }
}
export default Snake;
