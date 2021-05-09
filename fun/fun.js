function setup() {
  let shelf = document.getElementById('shelf');
  for(let x = 0; x < books.length; x++) {
    let shelfItem = document.createElement('div');
    shelfItem.setAttribute('class', 'shelfItem');
    let shelfItemInner = document.createElement('div');
    shelfItemInner.setAttribute('class', 'shelfItemInner');
    shelfItemInner.innerHTML = `<div class 'imageContainer'>
                                  <img class='bookImage' src='../../media/bookCovers/${books[x].image}'>
                                </div>
                                <div class='shelfItemText'>
                                  <p class="bookTitle"><strong>${books[x].title}</strong><br>
                                                       by ${books[x].author}<br><br>
                                                       Read ${books[x].date}<br>
                                                       ${books[x].description}</p>
                                </div>`;
     shelfItem.appendChild(shelfItemInner);
     shelf.appendChild(shelfItem);
  }
  setReadingBar();
  window.onresize = setReadingBar;
}

function setReadingBar() {

  let readingBarInner = document.getElementById('readingBarInner');
  readingBarInner.style.width = Math.floor(((books.length<52) ? (books.length/52) : .995)* readingBar.offsetWidth) + "px";
  readingBarInner.innerHTML = `<p id='readingBarCounter'>${books.length}/52</p>`;
}

function setFunContent() {
  let bookImage = document.getElementById('recentReadingImage');
  bookImage.src = "../media/bookCovers/" + books[0].image;
  setHikingContent();
}
function setHikingContent() {
  let randImage = hikingImages[Math.floor(Math.random() * hikingImages.length)]
  let hikingImage = document.getElementById('hikingImage');
  hikingImage.src = "../media/outdoorsImages/" + randImage.image;
  let hikingDescription = document.getElementById('hikingDescription');
  hikingDescription.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;${randImage.description}<br><br>${randImage.date}`
}
let books = [
  {
    "title" : "Other Minds",
    "author" : "Peter Godfrey-Smith",
    "image" : "otherMinds.jpg",
    "date" : "May 9th",
    "description" : "",
  },
  {
    "title" : "Not A Scientist",
    "author" : "Dave Levitan",
    "image" : "notAScientist.jpg",
    "date" : "April 20th",
    "description" : "",
  },
  {
    "title" : "A World Without Bees",
    "author" : "Alison Benjamin and Brian McCallum",
    "image" : "aWorldWithoutBees.jpg",
    "date" : "April 18th",
    "description" : "",
  },
  {
    "title" : "Caste",
    "author" : "Isabel Wilkerson",
    "image" : "caste.jpg",
    "date" : "April 15th",
    "description" : "",
  },
  {
    "title" : "A Promised Land",
    "author" : "Barack Obama",
    "image" : "aPromisedLand.jpg",
    "date" : "April 7th",
    "description" : "",
  },
  {
    "title" : "The Hidden Life of Trees",
    "author" : "Peter Wohlleben",
    "image" : "hiddenLifeOfTrees.jpg",
    "date" : "March 26th",
    "description" : "",
  },
  {
    "title" : "Born to Run",
    "author" : "Christopher McDougall",
    "image" : "bornToRun.jpg",
    "date" : "March 20th",
    "description" : "",
  },
  {
    "title" : "I, Robot",
    "author" : "Isaac Asimov",
    "image" : "iRobot.jpg",
    "date" : "March 8th",
    "description" : "",
  },
  {
    "title" : "Foundation",
    "author" : "Isaac Asimov",
    "image" : "foundation.jpg",
    "date" : "February 27th",
    "description" : "",
  },
  {
    "title" : "Infinite Powers",
    "author" : "Steven Strogatz",
    "image" : "infinitePowers.jpg",
    "date" : "February 19th",
    "description" : "",
  },
  {
    "title" : "Search and Rescue in Colorado's Sangre de Cristos",
    "author" : "Kevin Wright",
    "image" : "SAR.jpg",
    "date" : "February 6th",
    "description" : "",
  },
  {
    "title" : "Choose FI",
    "author" : "Chris Mamula, Brad Barrett, and Johnathan Mendonsa",
    "image" : "chooseFI.jpg",
    "date" : "January 29th",
    "description" : "",
  },
  {
    "title" : "Endurance",
    "author" : "Scott Kelly",
    "image" : "endurance.jpg",
    "date" : "January 24th",
    "description" : "",
  },
  {
    "title" : "David and Goliath",
    "author" : "Malcolm Gladwell",
    "image" : "davidAndGoliath.jpg",
    "date" : "January 17th",
    "description" : "",
  },
  {
    "title" : "The Order of Time",
    "author" : "Carlo Rovelli",
    "image" : "orderOfTime.jpg",
    "date" : "January 13th",
    "description" : "",
  },
  {
    "title" : "Into the Planet",
    "author" : "Jill Heinerth",
    "image" : "intoThePlanet.jpg",
    "date" : "January 11th",
    "description" : "",
  },
  {
    "title" : "Educated",
    "author" : "Tara Westover",
    "image" : "educated.jpg",
    "date" : "January 9th",
    "description" : "",
  },
  {
    "title" : "Becoming",
    "author" : "Michelle Obama",
    "image" : "becoming.jpg",
    "date" : "January 4th",
    "description" : "",
  },
];

let hikingImages = [
  {
    "image" : "cataractLake.jpg",
    "description" : "A view of Eagle's Nest across Upper Cataract Lake (near Silverthorne, CO)",
    "date" : "August 16th, 2020",
  },
  {
    "image" : "cloudyFlatirons.jpg",
    "description" : "Boulder's famous flatirons poking out above the clouds",
    "date" : "May 12th, 2020",
  },
  {
    "image" : "laPlataPeak.jpg",
    "description" : "The summit of La Plata Peak (near Leadville, CO)",
    "date" : "July 21st, 2020",
  },
  {
    "image" : "pikesPeak.jpg",
    "description" : "The summit of Pikes Peak (near Colorado Springs, CO)",
    "date" : "June 22nd, 2020",
  },
  {
    "image" : "threeApostles.jpg",
    "description" : "A view of the Three Apostles, taken from Huron Peak (near Buena Vista, CO)",
    "date" : "July 4th, 2020",
  },
  {
    "image" : "quandary.jpg",
    "description" : "A look back at the view from the trail to Mt. Quandary (near Breckenridge, CO)",
    "date" : "July 14th, 2019",
  },
  {
    "image" : "trailToTabAndShav.jpg",
    "description" : "The trail to Mt. Shavano and Tabeguache Peak (near Salida, CO)",
    "date" : "July 2nd, 2020",
  },
]
