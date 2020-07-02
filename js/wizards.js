'use strict';
(function () {
  var COUNT_WIZARDS = 4;

  /**
   * генерация волшебников на основе созданного массива
   * @param {array} datatWizards - массив объктов
   * @return {object} объект
   */
  var generateWizard = function (datatWizards) {
    var wizardsFragment = document.createDocumentFragment();
    datatWizards.forEach(function (dataWizard) {
      wizardsFragment.appendChild(window.card.create(dataWizard));
    });
    return wizardsFragment;
  };

  var datatWizards = window.data.create(COUNT_WIZARDS);
  var wizardsList = document.querySelector('.setup-similar-list');
  wizardsList.appendChild(generateWizard(datatWizards));

  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');

})();
