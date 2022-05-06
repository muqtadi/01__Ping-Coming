const input = document.querySelector('.input');
const addressBtn = document.querySelector('.address-btn');
const invalidParagraph = document.querySelector('.invalidParagraph');
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;




addressBtn.addEventListener('click', () =>{
  if(input.value.match(mailFormat)){
    input.value = '';
    input.classList.remove('input-invalid-border');
    invalidParagraph.style.display = 'none';
  }
  else{
    invalidParagraph.style.display = 'block';
    input.classList.add('input-invalid-border');
    input.value = '';
  }
})