'use strict';

const QuickMenu = function(element) {
    this.element = element;
}

QuickMenu.prototype = {
    initialize: function() {
        this.onClick();
    },  
    onClick: function() {
        const quickEl = this.element;
        const buttonTop = quickEl.querySelector('.button-scroll-top');
        const body = document.getElementsByTagName('body')[0];

        buttonTop.addEventListener('click', () =>{
            window.scroll({
                behavior: 'smooth',
                top: body.offsetTop
            });
            
        },);        
    }
}
module.exports = QuickMenu;