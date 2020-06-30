'use strict';

(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');
  var nameInput = document.querySelector('.setup-user-name');

  /**
   * закрывает попап, удаляет обработчик события по нажатию на Esc в открытом попапе
   */
  var closePopup = function () {
    setup.classList.add('hidden');

    document.removeEventListener('keydown', onPopupEscPress);
  };

  /**
   * вызывает функцию закрытия попапа, при нажатии Ecs в открытом попапе
   * @param {Object} evt - объект хранит последнее событие
   */
  var onPopupEscPress = function (evt) {
    if (evt.key === 'Escape' && nameInput !== document.activeElement) {
      evt.preventDefault();
      closePopup();
    }
  };

  /**
   * открывает попап, добавляет обработчик нажатия Esc
   */
  var openPopup = function () {
    var setupDialogElement = document.querySelector('.setup');
    setupDialogElement.style.top = 80 + 'px';
    setupDialogElement.style.left = 50 + '%';
    setup.classList.remove('hidden');

    document.addEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      closePopup();
    }
  });

})();

