class Header {

    constructor(obj) {
        this.obj = obj;
        this.height = this.obj.offsetHeight;
        this.scrollContainer = document.getElementsByTagName('html')[0];
        this.lastScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        this.onEvents();
    }

    onEvents() {
        window.addEventListener('scroll', () => {
            let curScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

            this.lastScrollTop = curScroll;

            if ( curScroll > this.height ) {
                this.obj.classList.add('fixed');
            } else {
                this.obj.classList.remove('fixed');
            }
        });
    }
}

let header = document.querySelectorAll('.site__header');

header.forEach((obj) => {
    let newMenu = new Header(obj);
});