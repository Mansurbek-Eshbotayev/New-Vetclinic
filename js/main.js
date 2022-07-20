var elModal = document.querySelector(".modal-show");
var elBtnOpen = document.querySelector(".down__link");
var elBtnClose = document.querySelector(".modal__btn");

elBtnOpen.addEventListener("click" , function(){
  elModal.classList.add("modal-show__on")
});

elBtnClose.addEventListener("click" , function(){
  elModal.classList.remove("modal-show__on")
});