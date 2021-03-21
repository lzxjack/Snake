class Snake {
    // 蛇头
    head: HTMLElement;
    // 蛇身子（包括头）
    body: HTMLCollection;
    // 蛇容器
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake>div') as HTMLElement;
        this.body = this.element.getElementsByTagName('div');
    }

    // 获取蛇头的坐标
    get X() {
        return this.head.offsetLeft;
    }
    get Y() {
        return this.head.offsetTop;
    }
    // 设置蛇头坐标
    set X(value) {
        // 新值和旧值相同，直接返回
        if (this.X === value) return;

        // 判断是否撞墙，判断X的范围
        if (value < 0 || value > 290) {
            // 抛出异常，蛇撞墙了啊
            throw new Error('The Snake has died！')
        }

        // 判断是否掉头
        if (this.body[1] && (this.body[1] as HTMLElement).offsetLeft === value) {
            // console.log(12312312312);
            // 发生掉头，改变方向
            value = value > this.X ? this.X - 10 : this.X + 10;
        }

        // 移动身子
        this.moveBody();
        // 移动头
        this.head.style.left = value + 'px';
        // 判断蛇是否吃自己
        this.checkHeadBody();
    }
    set Y(value) {
        if (this.Y === value) return;

        // 判断是否撞墙，判断Y的范围
        if (value < 0 || value > 290) {
            // 抛出异常，蛇撞墙了啊
            throw new Error('The Snake has died！')
        }
        // 判断是否掉头
        if (this.body[1] && (this.body[1] as HTMLElement).offsetTop === value) {
            value = value > this.Y ? this.Y - 10 : this.Y + 10;
        }

        // 移动身子
        this.moveBody();
        // 移动头
        this.head.style.top = value + 'px';
        // 判断蛇是否吃自己
        this.checkHeadBody();
    }
    // 蛇增加身体方法
    addBody() {
        // 给element添加一个div
        // 插入元素内部的最后一个子节点之后
        this.element.insertAdjacentHTML('beforeend', "<div></div>");
    }

    // 蛇身体移动
    moveBody() {
        // console.log(this.body.length);

        // 将后面的身体设置为前面身体的位置
        // 从后往前改
        for (let i = this.body.length - 1; i > 0; i--) {
            // 上一个身体的坐标
            let X = (this.body[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.body[i - 1] as HTMLElement).offsetTop;
            // 赋值到当前身体
            (this.body[i] as HTMLElement).style.left = X + 'px';
            (this.body[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    // 判断蛇是否吃自己
    checkHeadBody() {
        // 获取所有的身体，判断是否和蛇头重合
        for (let i = 1; i < this.body.length; i++) {
            let bd = this.body[i] as HTMLElement;
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                throw new Error('撞到自己了！');
            }
        }
    }
}


export default Snake;