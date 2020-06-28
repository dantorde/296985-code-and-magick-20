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
    setup.classList.remove('hidden');

    document.addEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

})();
