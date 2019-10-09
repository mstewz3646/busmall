'strict'

// Global variables

var rounds = 25;
var imgDivTag = document.getElementById('div-images');

var leftImgTag = document.getElementById('leftImg');
var middleImgTag = document.getElementById('middleImg');
var rightImgTag = document.getElementById('rightImg');
var resetButton = document.getElementById('reset');

var totalClicks = 0;

var rightImgOnPage = null;
var middleImgOnPage = null;
var leftImgOnPage = null;

// var groupArray = [
//   ['bag', './img/bag.jpg'],
//   ['banana', './img/banana.jpg'],
//   ['bathroom','./img/bathroom.jpg'],
//   ['boots', './img/boots.jpg'],
//   ['breakfast', './img/breakfast.jpg'],
//   ['bubblegum', './img/bubblegum.jpg'],
//   ['chair', './img/chair.jpg'],
//   ['cthulhu', './img/cthulhu.jpg'],
//   ['dog-duck', './img/dog-duck.jpg'],
//   ['dragon', './img/dragon.jpg'],
//   ['pen', './img/pen.jpg'],
//   ['pet-sweep', './img/pet-sweep.jpg'],
//   ['scissors', './img/scissors.jpg'],
//   ['shark', './img/shark.jpg'],
//   ['sweep', './img/sweep.png'],
//   ['tauntaun', './img/tauntaun.jpg'],
//   ['unicorn', './img/unicorn.jpg'],
//   ['usb', './img/usb.gif'],
//   ['water-can', './img/water-can.jpg'],
//   ['wine-glass', './img/wine-glass.jpg'],
// ];



// To keep track and store images on page
var groupImages = function(name, imgURL) {
  this.name = name;
  this.clicks = 0;
  this.timeShown = 0;
  this.imgURL = imgURL;
  
  groupImages.allImages.push(this);
};


//LOCAL STORAGE

// updateLocalStorage();

groupImages.allImages = [];

// function updateLocalStorage(){
//   var arrString = JSON.stringify (groupImages.allImages);
//   console.log('stringified', arrString);
//   console.log('not stringified', groupImages.allImages)
// };

// function getSelectProducts(){
//   console.log('trying to get data from localStorage')

//   var data = localStorage.getItem('coffee');
//   var productData = JSON.parse(data);

//   if(productData = !== null){
//     groupImages.allImages = productData;
//   }
//   renderSelections();
// };


var renderNewImages = function(leftIndex, middleIndex, rightIndex){
  leftImgTag.src = groupImages.allImages[leftIndex].imgURL;
  middleImgTag.src = groupImages.allImages[middleIndex].imgURL;
  rightImgTag.src = groupImages.allImages[rightIndex].imgURL;
};

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
    for (var i = 0; i < groupImages.allImages.length; i++) {
      var liData = document.createElement('li');
      liData.textContent = `${groupImages.allImages[i].name}: ${groupImages.allImages[i].clicks} total clicks`;
      ul.appendChild(liData);
      // resetButton.addEventListener('click',handleReset);
      // resetButton.className = 'resetEnable';
      // imageSectionTag.removeEventListener('click', handleClickOnImg);
      console.log('click',handleClickOnImg);
      console.log('You have seen 25 images, thanks for your time!');
      makeImageChart();
      }
    }
  };

imgDivTag.addEventListener('click', handleClickOnImg);

// RESET BUTTON NOT WORKING
// function handleReset(){
//   totalClicks = 0;
//   imageSectionTag.addEventListener('click', handleCLickOnImg);
//   resetButton.classname = 'resetDisable';
// }

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


var genLabels = function(images) {
  var labelsArr = [];
  for (var i=0; i < images.length; i++){
    labelsArr.push(images[i].name);
  }
  return labelsArr;
};

var genData = function(images) {
  var dataArr = [];
  for (var i=0; i < images.length; i++){
    dataArr.push(images[i].clicks);
    console.log(images[i].clicks);
  
  }

  console.log(dataArr);
  return dataArr;
  
};

function makeImageChart(){

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: genLabels(groupImages.allImages),
      datasets: [{
        label: '# of Votes',
        data: genData(groupImages.allImages),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
      borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
