'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var isEscEvent = function (evt, action) {
    if (evt.keyCode === ESC_KEYCODE) {
      action();
    }
  };

  var isEnterEvent = function (evt, action) {
    if (evt.keyCode === ENTER_KEYCODE) {
      action();
    }
  };

  /**
   * генерация случайного элемента массива
   * @param {array} array - массив
   * @return {string} - случайный элемент массива
   */
  var getRandomValue = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  window.util = {
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent,
    getRandomValue: getRandomValue
  };
})();
