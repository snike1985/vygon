class Menu {

    constructor(obj) {
        this.obj = obj;
        this.menuWrap = this.obj.getElementsByClassName('menu__wrap')[0];
        this.items = this.obj.querySelectorAll('.menu__item');
        this.btn = this.obj.querySelectorAll('.menu__btn');
        this.scrollContainer = document.getElementsByTagName('html')[0];
        this.site = document.querySelector('.site');

        this.onEvents();
    }

    onEvents() {

        [...this.btn].forEach((elem) => {
            elem.addEventListener('click', () => {

                this.obj.classList.toggle('active');
                this.scrollContainer.classList.toggle('menu-active');

                [...this.btn].forEach((elem) => {
                    elem.classList.remove('active');
                });

                elem.classList.add('active');


                return false;
            });

            elem.addEventListener("touchstart", (e) => e.stopPropagation());
            elem.addEventListener("touchmove", (e) => e.stopPropagation());

        });

        this.obj.addEventListener("touchstart", (e) => e.preventDefault());
        this.obj.addEventListener("touchmove", (e) => e.preventDefault());

        [...this.items].forEach(elem => {
            elem.addEventListener("touchstart", (e) => {
                e.stopPropagation();
            });

            elem.addEventListener("touchmove", (e) => {
                e.stopPropagation();
            });

            elem.addEventListener("click", (e) => {
                elem.classList.toggle('active');
            });
        });

        this.obj.addEventListener('click', () => {
            // this.obj.classList.remove('active');
            // this.scrollContainer.classList.remove('menu-active');
            return false;
        });
        this.menuWrap.addEventListener('click', (e) => {
            e.stopPropagation();
            return false;
        });
    }
}

const menu = document.querySelectorAll('.menu');

if (menu) [...menu].forEach(obj => new Menu(obj));