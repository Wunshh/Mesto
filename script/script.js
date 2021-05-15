let popupButtonOpen = document.querySelector('.profil__edit-button');
let popupOpen = document.querySelector('.popup');


popupButtonOpen.addEventListener('click', function () {
    popupOpen.classList.remove('popup');
});

let popupButtonClose = document.querySelector('.popup__close-button');


popupButtonClose.addEventListener('click', function () {
    popupOpen.classList.add('popup');
});

let like = document.querySelectorAll('.card__button');

for (let i = 0; i < like.length; i++) {
	like[i].addEventListener ('click', function() {
		like[i].classList.toggle('card__button_active');
	});
}; 		


let formElement = document.querySelector('.form');

function formSubmitHandler (evt) {
	evt.preventDefault(); 

	let nameInput = document.querySelector('.form__name');
	let jobInput = document.querySelector('.form__career');

	let name = nameInput.value;
	let job = jobInput.value; 

	let profilName = document.querySelector('.profil__name');
	let profilCareer = document.querySelector('.profil__career');

	profilName.textContent = name;
	profilCareer.textContent = job;
};

formElement.addEventListener('submit', formSubmitHandler);

let saveButton = document.querySelector('.form__save-button');

saveButton.addEventListener('click', function() {
	popupOpen.classList.add('popup');
})