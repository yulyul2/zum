/*
 * @namespace ui
 */

const ChartManager = require('./components/ChartManager');
const ChrartDoughnut = require('./components/ChrartDoughnut');
const ScrollCheck = require('./components/ScrollCheck');
const QuickMenu = require('./components/QuickMenu');
const RollingList = require('./components/RollingList');

const header = document.querySelector('header');
const quick = document.querySelector('.quick-menu');
const doughnutChart = document.querySelector('.chart-doughnut');
const chart1 = doughnutChart.querySelector('.chart-mobile');
const chart2 = doughnutChart.querySelector('.chart-pc');
const SectionRanking = document.querySelector('.section-search-ranking');
const SectionRanker = document.querySelector('.section-comment-ranker');

window.ui = window.ui || {};
ui.egloos = ui.egloos || {};

// chart
ui.egloos.chart = {};
ui.egloos.chart = new ChartManager();
ui.egloos.chart.doughnut = {};
ui.egloos.chart.doughnut.chart1 = new ChrartDoughnut(chart1);
ui.egloos.chart.doughnut.chart1.initialize();
ui.egloos.chart.doughnut.chart2 = new ChrartDoughnut(chart2);
ui.egloos.chart.doughnut.chart2.initialize();

// scroll
ui.egloos.scroll = {};
ui.egloos.scroll = new ScrollCheck(header);
ui.egloos.scroll.initialize();

// quick
ui.egloos.quick = {};
ui.egloos.quick = new QuickMenu(quick);
ui.egloos.quick.initialize();

// rolling
ui.egloos.rolling = {};
ui.egloos.rolling.ranking = new RollingList(SectionRanking);
ui.egloos.rolling.ranking.initialize();
ui.egloos.rolling.ranker = new RollingList(SectionRanker);
ui.egloos.rolling.ranker.initialize();
