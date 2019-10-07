'strict'

// Global variables
var imageSectionTag = document.getElementById('imageDev');
var leftImageTag = document.getElementById('left_img');
var totalClicks = 0;
var rightImgOnPage = null;
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

var renderNewImages = function(leftIndex, rightIndex){
  leftImageTag.src = groupImages.allImages[leftIndex].imgURL;
  rightImageTag.src = groupImages.allImages[rightIndex].imgURL;
}

//pick a new image
var pickNewImages = function(){
  console.log('pick a new image');
  var leftIndex = Math.ceil(Mathrandom() * groupImages.allImages.length - 1);
  do {
  var rightIndex = Math.ceil(Math.random() * groupImages.allImages.length - 1);
  } while (rightIndex === leftIndex);
  leftImgOnThePage = groupImages.allImages [leftIndex];
  rightImgOnThePage = groupImages.allImags [rightIndex];
  renderNewImages (leftIndex, rightIndex);
}