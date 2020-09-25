'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const FONT_GAP = 30;
// const TEXT_WIDTH = 50;
const TEXT_HEIGHT = 20;
const BAR_WIDTH = 20;
const barHeight = CLOUD_HEIGHT - GAP - TEXT_HEIGHT;

let renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

let getMaxElement = function (arr) {

};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(
      ctx,
      CLOUD_X + GAP,
      CLOUD_Y + GAP,
      `rgba(0, 0, 0, 0.7 )`
  );
  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      `#fff`
  );

  ctx.fillStyle = `#000`;

  ctx.fillText(
      `Ура вы победили!`,
      CLOUD_X + GAP,
      CLOUD_Y + GAP
  );

  ctx.fillText(
      `Список результатов:`,
      CLOUD_X + GAP,
      CLOUD_Y + FONT_GAP
  );
};
