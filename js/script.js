var firstName = prompt('Як вас звати ?');
var age = prompt('Скільки вам років ?');
var job = prompt('Ким ви працюєте ?');
var author = prompt(' Ваш улюблений автор ?');
var color = prompt(' Ваш улюблений колір ?');
var message = 'Привіт, ';


if (firstName == null || firstName == "") {
  message = message + '';
} else {
  message = message + firstName + '! ';
}
if (age >= 18)  {
  message = message + 'Я бачу вам  ' + age + ' як я бачу вам вже дозволено голосувати .';
} else {
  message = message +'Я бачу вам ' + 'немає 18  ' + ' як я бачу вам ще не дозволено голосувати.'
}

if (job == null || job == "") {
  message = message + "";
} else {
  message = message + " Ви працюєте  " + job + '.';
}

if (color == null || color == "") {
  message = message + '';
} else {
  message = message + ' Я теж люблю цей ' + color + ' колір. ';
}

if (author == null || author == "") {
  message = message + '';
} else {
  message = message + author + '  Це один із моїх улюблених авторів.';
}

  document.getElementById("hello").innerHTML = message;