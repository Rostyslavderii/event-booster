const body = document.querySelector('body');
const openModalTeam = document.querySelector('.js-open-team-modal');
const modalTeam = document.querySelector('[data-modal-team]');
const closeTeam = document.querySelector('[data-close-team]');
const backdropModalTeam = document.querySelector('[data-modal-team]')
const developers = document.querySelector('.developers')

const modal = document.querySelector('[data-modal]');
const closeModal = document.querySelector('[data-close]');
const galleryCard = document.querySelector('.js-gallery-card')
const backdropModal = document.querySelector('[data-modal]');
const modalWindow = document.querySelector('.modal')


openModalTeam.addEventListener('click', addHiddenClassToTeam);
closeTeam.addEventListener('click', addHiddenClassToTeam);
backdropModalTeam.addEventListener('click', (e) => {
	if (!e.composedPath().includes(developers)) {
		modalTeam.classList.toggle("visually-hidden");
		body.classList.toggle("no-scroll")
	}
});

galleryCard.addEventListener('click', addHiddenClassToModal);
closeModal.addEventListener('click', addHiddenClassToModal);
backdropModal.addEventListener('click', (e) => {
	if (!e.composedPath().includes(modalWindow)) {
		modal.classList.toggle("visually-hidden");
		body.classList.toggle("no-scroll")
	}
})

function addHiddenClassToTeam(e) {
	// e.stopPropagation();
	modalTeam.classList.toggle("visually-hidden");
	body.classList.toggle("no-scroll")
	closeByKeybord(modalTeam);
}

function addHiddenClassToModal(e) {
	e.preventDefault();
	modal.classList.toggle("visually-hidden");
	body.classList.toggle("no-scroll")
	closeByKeybord(modal)
}

function closeByKeybord(value) {
	document.addEventListener("keydown", (e) => {
		if (e.code == "Escape") {
			value.classList.toggle("visually-hidden");
		}
	}, { once: true });
}