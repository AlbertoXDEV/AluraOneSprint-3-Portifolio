const btn = document.getElementById('form_submit_btn');
const name = document.getElementById('form_name');
name.addEventListener('input',btnUnlock);
const email = document.getElementById('form_email');
email.addEventListener('input',btnUnlock);
const msgSubject = document.getElementById('form_msg_head');
msgSubject.addEventListener('input',btnUnlock);
const msg = document.getElementById('form_msg_body');
msg.addEventListener('input',btnUnlock);

btn.addEventListener('mouseover',btnUnlock);

function btnUnlock () {

  let btnOpen = true

  if (name.value=="") {
    console.log("insert name error msg here");
    btnOpen = false;
  }
  if (email.value=="") {
    console.log("insert email error msg here");
    btnOpen = false;
  }
  if (msgSubject.value=="") {
    console.log("insert msgSubject error msg here");
    btnOpen = false;
  }
  if (msg.value=="") {
    console.log("insert msg error msg here");
    btnOpen = false;
  };

  if (btnOpen) {
    btn.disabled = false;
    return
  };
  btn.disabled = true;
}


btn.addEventListener('click',function (event) {
  event.preventDefault();
  let emailFormat = /(?<=[\w\W])@(?=[\w\W]\.[\w\W])/
  let formValidate = true

  if (name.value.length > 50) {
      console.log("insert name length error msg here");
      formValidate = false;
    }
  if (email.value.match(emailFormat)==null) {
      console.log("insert email format error msg here");
      formValidate = false;
    }
  if (msgSubject.value.length > 50) {
      console.log("insert msgSubject length error msg here");
      formValidate = false;
    }
  if (msg.value.length > 300) {
      console.log("insert msg length error msg here");
      formValidate = false;
    }
  if (formValidate) {
      console.log("insert email ajax here");
    }
})
