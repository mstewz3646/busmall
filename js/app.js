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
var groupImages = function (){
  this.name = name;
  this.clicks = 0;
  this.timeshown = 0;
  this.imgURL = imgURL;
  };

groupImages.allimages.push(this);

var myImage = new groupImages(//insert all the images?);

var renderNewImages = function(leftIndex, middleIndex, rightIndex){
  leftImageTag.src = groupImages.allImages[leftIndex].imgURL;
  middleImageTag.src = groupImages.allImages[middleIndex].imgURL;
  rightImageTag.src = groupImages.allImages[rightIndex].imgURL;
}

var image1 = new groupImages('bag', './img/bag.jpg');
var image2 = new groupImages('banana', './img/banana.jpg');
var image3 = new groupImages('bathroom','./imga/bathroom.jpg')
var image4 = new groupImages('boots', './img/boots.jpg');
var image5 = new groupImages('breakfast', './img/breakfast.jpg');
var image6 = new groupImages('bubblegum', './img/bubblegum.jpg');
var image7 = new groupImages('chair', './img/chair.jpg');
var image8 = new groupImages('cthulhu', './img/cthulhu.jpg');
var image9 = new groupImages('dog-duck', './img/dog-duck.jpg');
var image10 = new groupImages('dragon', './img/dragon.jpg');
var image11 = new groupImages('pen', './img/pen.jpg');
var image12 = new groupImages('pet-sweep', './img/pet-sweeo.jpg');
var image13 = new groupImages('scissors', './img/scissors.jpg');
var image14 = new groupImages('shark', './img/shark.jpg');
var image15 = new groupImages('sweep', './img/sweep.png');
var image16 = new groupImages('tauntaun', './img/tauntaun.jpg');
var image17 = new groupImages('unicorn', './img/unicorn.jpg');
var image18 = new groupImages('usb', './img/usb.gif');
var image19 = new groupImages('water-can', './img/water-can.jpg');
var image20 = new groupImages('wine-glass', './img/wine-glass.jpg');












//EVENT HANDLER

//B in notes, pick a new image
//pick a new image function ()

// var pickNewImages = function(){
//   console.log('pick a new image');
  
//   var leftIndex = Math.ceil(Mathrandom() * groupImages.allImages.length - 1);
  
  // do {
  //   var rightIndex = Math.ceil(Math.random() * groupImages.allImages.length - 1);
  // } while (rightIndex === leftIndex);

  // var middleIndex = Math.ceil(Mathrandom() * groupImages.allImages.length - 1);
  
  // do {
  //   var rightIndex = Math.ceil(Math.random() * groupImages.allImages.length - 1);
  // } while (rightIndex === leftIndex);


  
  
  leftImgOnThePage = groupImages.allImages [leftIndex];
  middleImgOnThePage = groupImages.allImages [middleIndex];
  rightImgOnThePage = groupImages.allImags [rightIndex];
  renderNewImages (leftIndex, middleIndex, rightIndex);
}