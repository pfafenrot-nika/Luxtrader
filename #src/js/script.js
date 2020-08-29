// Меню Пользователя
let user_icon = document.querySelector('.user-header__icon');
user_icon.addEventListener("click", function(e) {
  let user_menu = document.querySelector('.user-header__menu');
  user_menu.classList.toggle('_active');
});

// Меню Пользователя: Закрытие по клику в документе (кроме клика по блоку меню)
document.documentElement.addEventListener("click", function(e) {
  if (!e.target.closest('.user-header')) {
    let user_menu = document.querySelector('.user-header__menu');
    user_menu.classList.remove('_active');
  }
});

// Меню Бургер
let iconMenu = document.querySelector(".icon-menu");
let body = document.querySelector("body");
let menuBody = document.querySelector(".menu__body");
if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		iconMenu.classList.toggle("_active");
		body.classList.toggle("_lock");
		menuBody.classList.toggle("_active");
	});
}

@@include('app.js', {});
