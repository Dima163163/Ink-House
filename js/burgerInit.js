export const burgerInit = () => {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.nav_mobile_wrapper');

  const openMenu = () => {
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.classList.toggle('body-noscroll');
  }

  burger.addEventListener('click', openMenu)
}