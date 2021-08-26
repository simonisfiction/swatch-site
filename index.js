//swatch list
var swatch = [
        
        
];



function displaySwatch() {

  let swatchUL = document.getElementById('swatch-ul');
  swatchUL.innerHTML = '';

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

let inputCodeTextArea = document.getElementById('target-site-textarea');

let generateSwatchButton = document.getElementById('generate-swatch-button');
generateSwatchButton.addEventListener('click', generateSwatch);

let addButton = document.getElementById('add-button');
addButton.addEventListener('click', addColor);