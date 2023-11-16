// local reviews data

const reviews = [
  {
    id: 1,
    name: "Hisham rehab",
    jop: "Front End developer",
    img: "images/image1.jpg",
    Text: "A paragraph is a series of sentences that are organized and coherentand are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help.",
  },
  {
    id: 2,
    name: "anna johnson",
    jop: "web designer",
    img: "images/image2.jpg",
    Text: "A paragraph is a series of sentences that are organized and coherentand are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help.",
    id: 3,
    name: "hisham rehab",
    jop: "web designer",
    img: "images/image3.jfif",
    Text: "A paragraph is a series of sentences that are organized and coherentand are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help.",
  },
  {
    id: 4,
    name: "anna johnson",
    jop: "web designer",
    img: "images/image4.jfif",
    Text: "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help.",
  },
];
// select items

const img = document.getElementById("person img");
const author = document.getElementById("author");
const jop = document.getElementById("jop");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

// show parson based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  jop.textContent = item.jop;
  info.textContent = item.Text;
}

// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

// show random person
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});





// slider




// Get Slider Items | Array.from 
var sliderImages =
 Array.from(document.querySelectorAll('.slider-container img'));

// Get number of slides
var slidesCount = sliderImages.length;

// set Current Slide 
var currentSlide = 1;

// slide Number Element
var slideNumberElement = document.getElementById('slide-number');

// previous & next buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');


// handle Click on previous ans next buttons
nextButton.onclick =nextSlide;
prevButton.onclick =prevSlide;

// create The main ul element
var paginationElement = document.createElement('ul');

// set id on created ul element
paginationElement.setAttribute('id', 'pagination-ul');

// Create list items based on slides count
for (var i= 1 ; i <= slidesCount ; i++){
    // create the li
var paginationItem = document.createElement('li');

// set custom Attribute 
paginationItem.setAttribute('data-index', i);
  

   //set item content
   paginationItem.appendChild(document.createTextNode(i));

//Append items to the main ul list
paginationElement.appendChild(paginationItem);
}
// Add the created ul element to the page
document.getElementById('indicators').appendChild(paginationElement);


// Get the new created ul
var paginationCreatedUl = document.getElementById('pagination-ul')

// Get pagination Items
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop Through All Bullets Items 

for (var i=0; i < paginationBullets.length;i++) {
paginationBullets[i].onclick = function () {
  currentSlide = parseInt(this.getAttribute('data-index'));
  theChecker();
}
}

// trigger the slide function
theChecker();



// Next Slide function
function nextSlide() {

if (nextButton.classList.contains('disabled')) {
return false;
}else {


 currentSlide++;
 theChecker();
}
}
    // previous slide function
function prevSlide() {
  if (prevButton.classList.contains('disabled')) {
    return false;
    }else {
    
    
     currentSlide--;
     theChecker();
    }
}
// create the Checker function
  function theChecker() {
    // Set The Slider Number 
    slideNumberElement.textContent = 
    'slide #' + (currentSlide) +' of ' + (slidesCount);

// Remove ALL Active Classes
    removeAllActive() 
   
    //set Active Class on current slide
    sliderImages[currentSlide - 1].classList.add('active');

    // Set Active Class on Current pagination Item
    paginationCreatedUl.children[currentSlide - 1]
    .classList.add('active');
 
    // Check if Current Slide is the first
   if (currentSlide==1) {
   // Add disabled Class on previous Button
    prevButton.classList.add('disabled');
 
   }else {
     // Add disabled Class on previous Button
      prevButton.classList.remove('disabled');
   }

      // Check if Current Slide is the first
      if (currentSlide==slidesCount) {
        // Add disabled Class on previous Button
       nextButton.classList.add('disabled');
      
        }else {
          // Add disabled Class on previous Button
          nextButton.classList.remove('disabled');
        }

  }
 
  //Remove All Active Classes From Images and pagination Bullets
  function removeAllActive() {;

  // loop through Images
  sliderImages.forEach(function (img){
    
    img.classList.remove('active');


  });

// loop Through pagination bullets
   paginationBullets.forEach(function(bullet) {

  bullet.classList.remove('active');

   });
