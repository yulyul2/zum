'use strict';

const ChartManager = function() {}

let data = [];

ChartManager.prototype = {
    initialize: function() {
        data = ui.egloos.chart.data || [];

        for(let key of Object.keys(data)){
            this.drawChart(key, data[key])
        }
    },
    drawChart: function(key, value) {
        const canvas = document.querySelector('#chart-manager-' + key);

        myChart = new Chart(canvas, value);
    }
}
module.exports = ChartManager;