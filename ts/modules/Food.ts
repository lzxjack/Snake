// 定义食物类
class Food {
    // 定义一个属性表示食物所对应的元素
    element: HTMLElement;
    constructor() {
        // 获取页面中的food元素，并赋值给element，加“!”表示不会为空，否则会报错
        this.element = document.querySelector('.food')!;
    }

    // 获取食物X坐标
    get X() {
        // offsetLeft相对于父盒子，只读
        return this.element.offsetLeft;
    }

    // 获取食物Y坐标
    get Y() {
        return this.element.offsetTop;
    }

    // 修改食物位置的方法
    change() {
        // 生成随机位置0~290，是10的倍数
        // 蛇移动一次，移动1格，10px
        // 因为是10的倍数，先生成0~29的随机数，再取整，包括0和29
        // 再乘以10，就是10的倍数
        let top: number = Math.round(Math.random() * 29) * 10;
        let left: number = Math.round(Math.random() * 29) * 10;

        this.element.style.left = top + 'px';
        this.element.style.top = left + 'px';
    }
}


export default Food;