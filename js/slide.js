export default class Slide {
    constructor(slide, wrapper){
        this.slide = document.querySelector(slide);
        this.wrapper = document.querySelector(wrapper);
    }
    onStart(event){
        event.preventDefault();
        console.log(this)
    }
    onMove(event){
        console.log('moveu')
    }
    addSlideEvent(){
        this.wrapper.addEventListener('mousedown', this.onStart);
        this.wrapper.addEventListener('mousemove', this.onMove);
    }
    bindEvents(){
        this.onStart = this.onStart.bind(this)
        this.onMove = this.onMove.bind(this)
    }
    init(){
        this.bindEvents();
        this.addSlideEvent();
        return this;
    }
}
