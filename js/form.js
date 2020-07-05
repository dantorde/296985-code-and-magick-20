'use strict';
(function () {
  var form = document.querySelector('.setup-wizard-form');
  var onSubmit = function (evt) {
    window.backend.save(new FormData(form), function () {
      var setup = document.querySelector('.setup');
      setup.classList.add('hidden');
    });
    evt.preventDefault();
  };
  form.addEventListener('submit', onSubmit);

})();
