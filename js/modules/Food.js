class Food {
    constructor() {
        this.element = document.querySelector('.food');
    }
    get X() {
        return this.element.offsetLeft;
    }
    get Y() {
        return this.element.offsetTop;
    }
    change() {
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        this.element.style.left = top + 'px';
        this.element.style.top = left + 'px';
    }
}
export default Food;
