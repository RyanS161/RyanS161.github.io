function setup() {
  let shelf = document.getElementById('shelf');
  for(let x = 0; x < books.length; x++) {
    let shelfItem = document.createElement('div');
    shelfItem.setAttribute('class', 'shelfItem');
    shelfItem.innerHTML =`<div class='shelfItemInner'>
                            <div class 'imageContainer'>
                              <img class='bookImage' src='../../media/bookCovers/${books[x].image}'>
                            </div>
                            <div class='shelfItemText'>
                              <p class="bookTitle"><strong>${books[x].title}</strong><br> by ${books[x].author}<br><br>Read ${books[x].date}</p>
                            </div>
                          </div>`;
  shelf.appendChild(shelfItem);
  }
}

let books = [
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
