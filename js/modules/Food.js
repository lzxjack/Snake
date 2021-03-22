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
        let top = Math.round(Math.random() * 49) * 30;
        let left = Math.round(Math.random() * 27) * 30;
        this.element.style.left = top + 'px';
        this.element.style.top = left + 'px';
    }
}
export default Food;
