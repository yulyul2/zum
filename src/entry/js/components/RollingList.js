'use strict';

const RollingList = function(element) {
    this.elementList = element.querySelectorAll('li');
}

RollingList.prototype = {
    initialize: function() {
        this.Rolling();
        this.loop();
    },
    Rolling: function() {
        const list = this.elementList

        list.forEach((item, index, array) => {
            setTimeout(function() {
                if(index !== 0){
                    array[index-1].classList.remove('on');
                }
                if(index === 0){
                    array[array.length -1].classList.remove('on');
                }
                item.classList.add('on');
            }, 1500 * (index+1));
        });
    },
    loop: function(){
        const totalength = this.elementList.length;
        
        setInterval(() => {
            this.Rolling();
        }, 1500 * totalength);
    }
}
module.exports = RollingList;