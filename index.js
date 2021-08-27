//swatch list
var swatch = [];
var users = [];

class Person {
  constructor(username, password, email, firstName, lastName) {
    console.log('person constructor called');
    this.username = username;
    this.password = password;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

function addUser() {
  console.log('add user');
  let username = document.getElementById('username');
  let password = document.getElementById('password');
  let email = document.getElementById('email');
  let firstName = document.getElementById('first-name');
  let lastName = document.getElementById('last-name');
  console.log(newUser);
  let newUser = new Person(username, password, email, firstName, lastName);
  users.push(newUser);
  console.log(users);
}
function displaySwatch() {

  let swatchUL = document.getElementById('swatch-ul');
  

  for (let i = 0; i < swatch.length; i++) {
    let newLi = document.createElement('li');

    newLi.innerText = swatch[i].color;
    console.log(newLi);

    let colorDiv = document.createElement('div');
    colorDiv.style.backgroundColor = swatch[i].color;
    colorDiv.style.height = '30px';
    colorDiv.style.width = '200px';
    colorDiv.style.borderStyle = 'solid';    
    colorDiv.style.borderWidth = '2px';
    colorDiv.style.borderColor = 'white';
    colorDiv.style.borderRadius = '10px';

    newLi.style.listStyleType = 'none';

    newLi.appendChild(colorDiv);
    swatchUL.appendChild(newLi);
  }
}


function addColor() {
  
  let newColor = document.getElementById('add-input');
  
  swatch.push({color: newColor.value});
  newColor.value = '';
  newColor.innerText = '';

  displaySwatch();
}


function generateSwatch() {
  let inputCodeTextArea = document.getElementById('target-site-textarea');
  let rawText = inputCodeTextArea.value;
  console.log(rawText);
  scrapeRGB(rawText);
  displaySwatch();
}

function clearTextArea() {
  let inputCodeTextArea = document.getElementById('target-site-textarea');
  inputCodeTextArea.value = '';
  console.log(rawText);
}

function scrapeRGB(rawText) {
  let rgbArr = [];
  let hexArr = [];
  //detects hsl, and rgb colors
  let rgbRegex = /rgb\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*\)/ig;
  //detects hex colors
  let hexRegex = /#[a-f0-9]{6}|#[a-f0-9]{3}/ig;
  rgbArr = rawText.match(rgbRegex);
  hexArr = rawText.match(hexRegex);
  
  if(hexArr.length){
    for (let i = 0; i < hexArr.length; i++) {
      swatch.push({color: hexArr[i]});
    }
  }
  if(rgbArr.length){
    for (let i = 0; i < rgbArr.length; i++) {
      swatch.push({color: rgbArr[i]});
    }
  }
  console.log(swatch);
}


displaySwatch();

let signupInput = document.getElementById('signup-input');
if(signupInput) {
  signupInput.addEventListener('click', addUser);
}


let clearTextButton = document.getElementById('clear-text-area-button');
if(clearTextButton) {
  clearTextButton.addEventListener('click', clearTextArea);
}


let generateSwatchButton = document.getElementById('generate-swatch-button');
if(generateSwatchButton) {
  generateSwatchButton.addEventListener('click', generateSwatch);
}


let addButton = document.getElementById('add-button');
if(addButton) {
  addButton.addEventListener('click', addColor);
}


