'strict'

// Global variables

var imageSectionTag = document.getElementById('imageDev');
var leftImageTag = document.getElementById('left_img');
var middleImageTag = document.getElementById('middle_img');
var rightImageTag = document.getElementById('right_img');

var totalClicks = 0;

var rightImgOnPage = null;
var middleImgOnPage = null;
var leftImgOnPage = null;

// To keep track and store images on page
var groupImages = function (name, imgURL){
  this.name = name;
  this.clicks = 0;
  this.timeshown = 0;
  this.imgURL = imgURL;
  
  groupImages.allimages.push(this);
};

groupImages.allImages = [];
console.log(groupImages.allImages)


var renderNewImages = function(leftIndex, middleIndex, rightIndex){
  leftImageTag.src = groupImages.allImages[leftIndex].imgURL;
  middleImageTag.src = groupImages.allImages[middleIndex].imgURL;
  rightImageTag.src = groupImages.allImages[rightIndex].imgURL;
};

//B in notes, pick a new image

//pick a new image function ()

var pickNewImages = function(){
  var leftIndex = Math.ceil(Mathrandom() * groupImages.allImages.length - 1);
  
  do {
    var middleIndex = Math.ceil(Math.random() * groupImages.allImages.length - 1);
    var rightIndex = Math.ceil(Math.random() * groupImages.allImages.length - 1);
  } while (leftIndex === rightIndex || leftIndex === middleIndex || rightIndex === middleIndex);

  leftImgOnPage = groupImages.allImages[leftIndex];
  middleImgonpage = groupImages.allImages[middleIndex];
  rightImgOnPage = groupImages.allImages[rightIndex];

  renderNewImages(leftIndex, middleIndex, rightIndex);
};

//EVENT HANDLER
var handleClickonImage = function(event) {
  if(totalClicks < 20) {
    var thingWeClickedOn = event.target;
    var id = thingWeClickedOn.id;

    if (id === 'leftImg' || id === 'middleImg' || id === 'rightImg')
      if (id === 'leftImg'){
        leftImgOnPage.clicks ++;
        }
      if (id === 'middleImg'){
        middleImgOnPage.clicks ++;
      }
      if (id === 'rightImg'){
        rightImgOnPage.clicks ++;
      }

      leftImgOnPage.timesShown ++;
      middleImgOnPage.timesShown ++;
      rightImgOnPage.timesShown ++;
    }
    totalCLicks ++;
  }




new groupImages('bag', './img/bag.jpg');
new groupImages('banana', './img/banana.jpg');
new groupImages('bathroom','./imga/bathroom.jpg')
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


}