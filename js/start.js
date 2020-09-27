'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const CLOUD_GAP = 10;
const BAR_HEIGHT = 150;
const BAR_WIDTH = 350;
const BAR_X = CLOUD_X + 40;
const BAR_Y = CLOUD_Y + 60;
const FONT_GAP = 20;
const COLUMN_GAP = 50;
const CONGRATULATION_TEXT = [`Ура вы победили!`, `Список результатов:`];
const TEXT_HEIGHT = 20;
const COLUMN_WIDTH = 40;
const columnHeight = BAR_HEIGHT - TEXT_HEIGHT - TEXT_HEIGHT;

let renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

let getMaxElement = function (times) {
  return times.reduce((accumulator, timesItem) => {
    return Math.round(Math.max(accumulator, timesItem));
  });
};

window.renderStatistics = function (ctx, names, times) {
  const max = getMaxElement(times);

  renderCloud(
      ctx,
      CLOUD_X + CLOUD_GAP,
      CLOUD_Y + CLOUD_GAP,
      `rgba(0, 0, 0, 0.7)`
  );
  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      `#fff`
  );

  CONGRATULATION_TEXT.forEach((textItem, index) => {
    ctx.fillStyle = `#000`;
    ctx.fillText(textItem, CLOUD_X + FONT_GAP, CLOUD_Y + CLOUD_GAP + FONT_GAP + (FONT_GAP * index));
    ctx.font = `16px PT Mono`;
  });
  ctx.fillStyle = `#000`;
  ctx.fillRect(BAR_X, BAR_Y, BAR_WIDTH, BAR_HEIGHT);

  ctx.fillStyle = `#FFF`;
  ctx.textBaseline = `top`;
  ctx.fillText(times[0], BAR_X, BAR_Y);
  ctx.rotate((90 * Math.PI) / 180);
  ctx.font = `16px PT Mono`;
  ctx.fillStyle = `red`;
  ctx.fillRect(BAR_X, BAR_Y + TEXT_HEIGHT, COLUMN_WIDTH, (columnHeight * times[0]) / max);

  // names.forEach((player, index) => {
  //   ctx.fillText(player, );
  // });
};
