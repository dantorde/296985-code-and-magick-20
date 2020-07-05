'use strict';
(function () {
  /**
   * создание HTML для волшебника
   * @param {object} item — объект
   * @return {element} - элемент
   */
  var createWizardCard = function (item) {
    var wizardTemplate = document.querySelector('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');
    var wizardCard = wizardTemplate.cloneNode(true);
    wizardCard.querySelector('.setup-similar-label').textContent = item.name;
    wizardCard.querySelector('.wizard-coat').style.fill = item.colorCoat;
    wizardCard.querySelector('.wizard-eyes').style.fill = item.eyesColor;

    return wizardCard;
  };
  window.card = {
    create: createWizardCard
  };
})();
