const btnLogin = document.getElementById('button-login');
const emailPhoneInsert = document.getElementById('user-email-phone');
const BTNVALIDAR = document.getElementById('facebook-register');

btnLogin.addEventListener('click', function () {
  alert(emailPhoneInsert.value);
});

function IsNotClear(text) {
  let result = false;
  if (text !== '') {
    result = true;
  }
  return result;
}

function ValidateRegistration() {
  const NAME = document.getElementById('name').value;
  const LASTNAME = document.getElementById('lastname').value;
  const PHONE = document.getElementById('phone').value;
  const PASSWORD = document.getElementById('password').value;
  const BIRTH = document.getElementById('birth').value;
  const GENRE = document.querySelector('input[name="sex"]:checked');

  if (IsNotClear(NAME)) {
    let message = '';
    message = `${NAME} - ${LASTNAME} - ${PHONE} - ${PASSWORD} - ${BIRTH} - ${(GENRE.value)}`;

    alert(message);
  } else {
    alert('Dados inválidos');
  }
}

BTNVALIDAR.addEventListener('click', function () {
  ValidateRegistration();
});
