'strict'

// Global variables

var rounds = 25;
var imgDivTag = document.getElementById('div-images');

var leftImgTag = document.getElementById('leftImg');
var middleImgTag = document.getElementById('middleImg');
var rightImgTag = document.getElementById('rightImg');

var totalClicks = 0;

var rightImgOnPage = null;
var middleImgOnPage = null;
var leftImgOnPage = null;

// To keep track and store images on page
var groupImages = function(name, imgURL) {
  this.name = name;
  this.clicks = 0;
  this.timeShown = 0;
  this.imgURL = imgURL;
  
  groupImages.allImages.push(this);
};

groupImages.allImages = [];

var renderNewImages = function(leftIndex, middleIndex, rightIndex){
  leftImgTag.src = groupImages.allImages[leftIndex].imgURL;
  middleImgTag.src = groupImages.allImages[middleIndex].imgURL;
  rightImgTag.src = groupImages.allImages[rightIndex].imgURL;
};

//B in notes, pick a new img

var pickNewImages = function(){
  var leftIndex = Math.ceil(Math.random() * groupImages.allImages.length - 1);
  
  do {
    var middleIndex = Math.ceil(Math.random() * groupImages.allImages.length - 1);
    var rightIndex = Math.ceil(Math.random() * groupImages.allImages.length - 1);
  } while(leftIndex === rightIndex || leftIndex === middleIndex || rightIndex === middleIndex);

  leftImgOnPage = groupImages.allImages[leftIndex];
  middleImgOnPage = groupImages.allImages[middleIndex];
  rightImgOnPage = groupImages.allImages[rightIndex];

  renderNewImages(leftIndex, middleIndex, rightIndex);
};

//EVENT HANDLER
var handleClickOnImg = function(event) {
  var ul = document.getElementById('ul-votes');
  if(totalClicks < rounds) {
    var thingWeClickedOn = event.target;
    var id = thingWeClickedOn.id;

    if (id === 'leftImg' || id === 'middleImg' || id === 'rightImg') {
      if (id === 'leftImg') {
        leftImgOnPage.clicks++;
      } else if (id === 'middleImg') {
        middleImgOnPage.clicks++;
      } else if (id === 'rightImg') {
        rightImgOnPage.clicks++;
      }

      leftImgOnPage.timeShown++;
      middleImgOnPage.timeShown++;
      rightImgOnPage.timeShown++;
      pickNewImages();
    }
  }  
  totalClicks++;
  if(totalClicks === rounds){
    imgDivTag.removeEventListener('click', handleClickOnImg);
    for (var i = 0; i < groupImages.allImages.length; i++) {
      var liData = document.createElement('li');
      liData.textContent = `${groupImages.allImages[i].name}: ${groupImages.allImages[i].clicks} total clicks`;
      ul.appendChild(liData);
      }
    }
  };

imgDivTag.addEventListener('click', handleClickOnImg);

new groupImages('bag', './img/bag.jpg');
new groupImages('banana', './img/banana.jpg');
new groupImages('bathroom','./img/bathroom.jpg')
new groupImages('boots', './img/boots.jpg');
new groupImages('breakfast', './img/breakfast.jpg');
new groupImages('bubblegum', './img/bubblegum.jpg');
new groupImages('chair', './img/chair.jpg');
new groupImages('cthulhu', './img/cthulhu.jpg');
new groupImages('dog-duck', './img/dog-duck.jpg');
new groupImages('dragon', './img/dragon.jpg');
new groupImages('pen', './img/pen.jpg');
new groupImages('pet-sweep', './img/pet-sweep.jpg');
new groupImages('scissors', './img/scissors.jpg');
new groupImages('shark', './img/shark.jpg');
new groupImages('sweep', './img/sweep.png');
new groupImages('tauntaun', './img/tauntaun.jpg');
new groupImages('unicorn', './img/unicorn.jpg');
new groupImages('usb', './img/usb.gif');
new groupImages('water-can', './img/water-can.jpg');
new groupImages('wine-glass', './img/wine-glass.jpg');

pickNewImages();


