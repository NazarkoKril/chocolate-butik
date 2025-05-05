document.getElementById('helpBtn').addEventListener('click', () => {
    introJs()
      .setOptions({
        nextLabel: 'Далі',
        prevLabel: 'Назад',
        doneLabel: 'Готово',
        tooltipPosition: 'auto',
        showProgress: true
      })
      .start();
  });