'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_START_X = 100;
var CLOUD_START_Y = 10;
var COLOR_CLOUD = '#ffffff';
var COLOR_SHADOW = 'rgba(0, 0, 0, 0.7)';
var COLOR_USER = 'rgba(255, 0, 0, 1)';
var PADDING_CLOUD_START_X = 30;
var PADDING_CLOUD_START_Y = 40;
var MAX_SATURATION_VALUE = 100;
var GAP = 10;
var RECT_GAP = 50;
var PADDING = 20;
var TEXT_HEIGHT = 16;
var BAR_WIDTH = 40;
var MAX_BAR_HEIGHT = 130 - TEXT_HEIGHT;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max + 1));
}

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_START_X + 10, CLOUD_START_Y + 10, COLOR_SHADOW);
  renderCloud(ctx, CLOUD_START_X, CLOUD_START_Y, COLOR_CLOUD);


  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.strokeText('Ура вы победили!', CLOUD_START_X + PADDING_CLOUD_START_X, PADDING_CLOUD_START_Y);
  ctx.strokeText('Список результатов:', CLOUD_START_X + PADDING_CLOUD_START_X, PADDING_CLOUD_START_Y * 1.5);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = players[i] === 'Вы' ? COLOR_USER : 'hsl(240,' + getRandomInt(MAX_SATURATION_VALUE) + '%, 50%)';
    var barHeight = -(MAX_BAR_HEIGHT * times[i]) / maxTime;
    var barX = CLOUD_START_X + RECT_GAP + (RECT_GAP + BAR_WIDTH) * i;

    ctx.fillText(Math.round(times[i]), barX, CLOUD_START_Y + CLOUD_HEIGHT - RECT_GAP + barHeight - TEXT_HEIGHT - GAP);
    ctx.fillText(players[i], barX, CLOUD_START_Y + CLOUD_HEIGHT - PADDING - TEXT_HEIGHT);

    ctx.fillRect(barX, CLOUD_START_Y - RECT_GAP + CLOUD_HEIGHT, BAR_WIDTH, barHeight);
  }
};
