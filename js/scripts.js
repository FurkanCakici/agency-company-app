addEventListener('scroll', () => {
   let header = document.querySelector('header');
   header.classList.toggle('sticky', window.scrollY > 0);
});

const toggle = () => {
   let header = document.querySelector('header');
   header.classList.toggle('active');
};

const elements = [menu, menuNav, menuBranding, ...menuItems];
let showMenu = false;

let menuToggle = () => {
   let toggleState = showMenu ? 'add' : 'remove';

   menuBtn.classList[toggleState]('close');
   elements.forEach((item) => item.classList[toggleState]('show'));

   showMenu = !showMenu;
};
