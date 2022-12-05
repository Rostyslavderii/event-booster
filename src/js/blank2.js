// Скрипт для форми телефону
console.log(IMask);
const phoneMask = IMask(document.getElementById('user-phone'), {
  mask: '+{38}(\\000)000 00 00',
  // lazy: false,  // make placeholder always visible
  placeholderChar: ' ', // defaults to '_'
});
