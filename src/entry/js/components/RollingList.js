'use strict';

const RollingList = function(element) {
    this.element = element;
}

RollingList.prototype = {
    initialize: function() {
        this.Rolling();
    },
    Rolling: function() {
        const _this = this.element;
        const list = _this.querySelectorAll('li');

        list.forEach((item, index, array) => {
            setTimeout(function() {
                if(index !== 0){
                    array[index-1].classList.remove('on');
                }
                item.classList.add('on');
            }, 2000 * (index+1));
        });
    }
}
module.exports = RollingList;