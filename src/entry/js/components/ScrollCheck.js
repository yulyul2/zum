'use strict';

const ScrollCheck = function(element) {
    this.element = element;
}

const quick = document.querySelector('.quick-menu');

ScrollCheck.prototype = {
    initialize: function() {
        this.scroll();
    },  
    scroll: function () {
        const headerEl = this.element;

        window.addEventListener('scroll', () => {
            const offsetY = window.pageYOffset;

            if(offsetY == 0){
                headerEl.classList.remove('position-fixed');
                quick.classList.remove('show');
            }else{
                headerEl.classList.add('position-fixed');
                quick.classList.add('show');
            }
        });
    }
}
module.exports = ScrollCheck;