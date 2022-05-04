const input = document.querySelector('.input');
const addressBtn = document.querySelector('.address-btn');
const invalidParagraph = document.querySelector('.invalid-email');
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;





// function myEmail(){
//   addressBtn.addEventListener('click', () =>{
//     if(input.value.match(mailFormat)){
//       console.log(true);
//     }
//     else{
//       invalidParagraph.getElementsByClassName.display = 'block';
//     }
//   })
// }
// myEmail();