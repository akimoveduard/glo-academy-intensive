const accordeon = document.querySelector('.feature-list');
const accordeonButtons = accordeon.querySelectorAll('.feature__link');

accordeonButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('feature__link_active')) {
      btn.classList.remove('feature__link_active');
      btn.nextElementSibling.classList.add('hidden');
    } else {
      accordeonButtons.forEach((button) => {
        button.classList.remove('feature__link_active');
        button.nextElementSibling.classList.add('hidden');
      });
      btn.classList.toggle('feature__link_active');
      btn.nextElementSibling.classList.toggle('hidden');
    }
  });
})
