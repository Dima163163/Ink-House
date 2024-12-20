export const sliderInit = () => {
  const reproductionsList = document.querySelector('.reproductions_list');
  const reproductionsItems = document.querySelectorAll('.reproductions_items');
  const btns = document.querySelectorAll('.reproductions_btn');

  reproductionsList.addEventListener('click', (e) => {
    const target = e.target;
    const targetBtn = target.closest('.reproductions_btn');
    const name = targetBtn.dataset.name;
    const reproductionsItemsTarget = document.querySelector(`#${name}`);

    if (targetBtn) {
      for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove('active');
      }

      targetBtn.classList.add('active');

      for (let i = 0; i < reproductionsItems.length; i++) {
        reproductionsItems[i].classList.remove('active');
      }

      reproductionsItemsTarget.classList.add('active');
    }
  });
};


