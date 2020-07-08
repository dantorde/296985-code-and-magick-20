'use strict';
(function () {
  var coatColor = 'rgb(101, 137, 164)';
  var eyesColor = 'black';
  var wizards = [];


  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

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
    wizardsList.innerHTML = '';
    wizardsList.appendChild(wizardsFragment);
    var setupSimilar = document.querySelector('.setup-similar');
    setupSimilar.classList.remove('hidden');
  };


  /**
   * загрузка волшебников и вызов функции отрисовки похожих волшебников
   * @param {array} wizards - массив волшебников
   */
  var updateWizards = function () {
    var wizardsArray = wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    });
    var copyArray = wizardsArray.slice(0, 4);
    generateWizards(copyArray);
  };

  window.wizard.onEyesChange = window.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  window.wizard.onCoatChange = window.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  var onload = function (data) {
    wizards = data;
    updateWizards();

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
})();
