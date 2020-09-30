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
const STRING_GAP = 20;
const TEXT_GAP = 15;
const COLUMN_GAP = 50;
const CONGRATULATION_TEXT = [`Ура вы победили!`, `Список результатов:`];
const COLUMN_WIDTH = 40;
const COLUMN_HEIGHT_CONSTANT = 105;
let playerColor;

let renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

let getMaxElement = function (times) {
  return times.reduce((accumulator, timesItem) => {
    return Math.round(Math.max(accumulator, timesItem));
  });
};

let getRandomColor = function () {
  return Math.random().toFixed(1) * 100;
};

window.renderStatistics = function (ctx, names, times) {
  let max = getMaxElement(times);

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
    ctx.fillText(textItem, CLOUD_X + STRING_GAP, CLOUD_Y + CLOUD_GAP + STRING_GAP + (STRING_GAP * index));
    ctx.font = `16px PT Mono`;
  });
  ctx.fillStyle = `#FFF`;
  ctx.fillRect(BAR_X, BAR_Y, BAR_WIDTH, BAR_HEIGHT);

  times.forEach((timeItem, index) => {
    let calculatedHeight = (COLUMN_HEIGHT_CONSTANT * Math.round(timeItem)) / max;

    if (names[index] === `Вы`) {
      playerColor = `rgba(255, 0, 0, 1)`;
    } else {
      playerColor = `hsl(240, ${getRandomColor().toString()}%, 50%)`;
    }
    ctx.fillStyle = playerColor;
    ctx.fillRect(
        BAR_X + (COLUMN_WIDTH + COLUMN_GAP) * index,
        BAR_Y + (BAR_HEIGHT - calculatedHeight), COLUMN_WIDTH,
        COLUMN_HEIGHT_CONSTANT - (BAR_HEIGHT - calculatedHeight)
    );
    ctx.fillStyle = `#000`;
    ctx.textBaseline = `middle`;
    ctx.fillText(
        Math.round(timeItem),
        BAR_X + (COLUMN_WIDTH + COLUMN_GAP) * index,
        BAR_Y + (BAR_HEIGHT - calculatedHeight) - TEXT_GAP
    );
    ctx.fillText(
        names[index],
        BAR_X + (COLUMN_WIDTH + COLUMN_GAP) * index,
        BAR_Y + COLUMN_HEIGHT_CONSTANT + TEXT_GAP
    );
  });
};
