'use strict';
(function () {
  /**
   * отрисовка похожих волшебников
   * @param {array} array - массив объктов
   */
  var generateWizards = function (array) {
    var wizardsFragment = document.createDocumentFragment();
    var wizardsList = document.querySelector('.setup-similar-list');
    array.forEach(function (object) {
      wizardsFragment.appendChild(window.card.create(object));
    });
    wizardsList.appendChild(wizardsFragment);
    var setupSimilar = document.querySelector('.setup-similar');
    setupSimilar.classList.remove('hidden');
  };

  /**
   * загрузка волшебников и вызов функции отрисовки похожих волшебников
   * @param {array} wizards - массив волшебников
   */
  var onload = function (wizards) {
    var wizardsArray = wizards.slice(0, 4);
    generateWizards(wizardsArray);
  };

  /**
   * вывод сообщения об ошибки загрузки
   * @param {object} errorMessage - сообщение об ошибке
   */
  var showErrorMessage = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };


  window.backend.load(onload, showErrorMessage);

  window.wizards = {
    generateWizards: generateWizards,
    showErrorMessage: showErrorMessage
  };
})();
