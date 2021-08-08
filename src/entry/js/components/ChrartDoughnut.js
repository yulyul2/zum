'use strict';

const ChrartDoughnut = function(element) {
    this.element = element;
}

ChrartDoughnut.prototype = {
    initialize: function() {
        const thisChart = this.element;
        const thisNumber = thisChart.querySelector('.value-number');
        const thisColor = thisChart.querySelector('.value-color');
        const valueNum = thisNumber.innerText;
        const valueColor = thisColor.innerText;

        this.makeChart(thisChart, thisNumber, valueNum, valueColor);
    },
    makeChart: function(thisChart, thisNumber, valueNum, valueColor) {
        const _this = this;

        let i = 1;
        let chart = setInterval(function() {
            if (i < valueNum) {
                _this.bgColor(i, thisChart, valueColor);
                i++;
            } else {
                clearInterval(chart);
            }
        }, 10);

        thisNumber.style.color = valueColor;
    },
    bgColor: function(i, thisChart, valueColor) {
        thisChart.style.background = "conic-gradient(" + valueColor + " 0% " + i + "%, #dedede " + i + "% 100%)";
    }
}
module.exports = ChrartDoughnut;