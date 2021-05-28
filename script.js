var run = "run";
showNotes(run);


// Function Start on pressing Add Note
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }


  let unstarred = "unstarred";
  let starred = "starred";

  let myObj = {
    title: addTitle.value,
    text: addTxt.value,
    val: unstarred
  }



  if (addTitle.value == '' && addTxt.value == '') {
    err_1();
  }
  else {
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
  }

  if (show_star.classList.contains('star-btn')) {
    show_star.classList.toggle('star-btn');
  }

  showNotes(run);

});
// Function End 



// Function to show elements from localStorage
function showNotes(fav) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  let html = "";
  fav_1 = fav;
  if (fav_1 == "run") {
    var show_star = document.querySelector('.show-star');
    show_star.classList.remove('star-btn');
    notesObj.forEach(function (element, index) {
      if (notesObj[index].val == "starred") {
        if (element.title == '') {
          html += `
            <div class="noteCard mt-2 mx-2 mb-5 card card_scroll" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title"><b>Untitled Note</b></h5>
                        <i id="${index}"onclick="makeStar(this.id)" class="fa fa-star fa-lg card-star toggle-card star" aria-hidden="true"></i>
                        <p class="card-text"> ${element.text}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-outline-danger">Delete Note</button>
                        <button id="${index}"onclick="editNote(this.id)" class="btn btn-outline-danger">Edit Note</button>
                    </div>
                </div>`;
        } else if (element.text == '') {

          html += `
            <div class="noteCard mt-2 mx-2 mb-5 card card_scroll" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title"><b>${element.title}</b></h5>
                        <i id="${index}"onclick="makeStar(this.id)" class="fa fa-star fa-lg card-star toggle-card star" aria-hidden="true"></i>
                        <p class="card-text">--</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-outline-danger">Delete Note</button>
                        <button id="${index}"onclick="editNote(this.id)" class="btn btn-outline-danger">Edit Note</button>
                    </div>
                </div>`;
        } else {

          html += `
            <div class="noteCard mt-2 mx-2 mb-5 card card_scroll" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title"><b>${element.title}</b></h5>
                        <i id="${index}"onclick="makeStar(this.id)" class="fa fa-star fa-lg card-star toggle-card star" aria-hidden="true"></i>
                        <p class="card-text"> ${element.text}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-outline-danger">Delete Note</button>
                        <button id="${index}"onclick="editNote(this.id)" class="btn btn-outline-danger">Edit Note</button>
                    </div>
                </div>`;
        }
      } else {
        if (element.title == '') {
          html += `
            <div class="noteCard mt-2 mx-2 mb-5 card card_scroll" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title"><b>Untitled Note</b></h5>
                        <i id="${index}"onclick="makeStar(this.id)" class="fa fa-star fa-lg card-star toggle-card" aria-hidden="true"></i>
                        <p class="card-text"> ${element.text}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-outline-danger">Delete Note</button>
                        <button id="${index}"onclick="editNote(this.id)" class="btn btn-outline-danger">Edit Note</button>
                    </div>
                </div>`;
        } else if (element.text == '') {

          html += `
            <div class="noteCard mt-2 mx-2 mb-5 card card_scroll" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title"><b>${element.title}</b></h5>
                        <i id="${index}"onclick="makeStar(this.id)" class="fa fa-star fa-lg card-star toggle-card" aria-hidden="true"></i>
                        <p class="card-text">--</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-outline-danger">Delete Note</button>
                        <button id="${index}"onclick="editNote(this.id)" class="btn btn-outline-danger">Edit Note</button>
                    </div>
                </div>`;
        } else {

          html += `
            <div class="noteCard mt-2 mx-2 mb-5 card card_scroll" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title"><b>${element.title}</b></h5>
                        <i id="${index}"onclick="makeStar(this.id)" class="fa fa-star fa-lg card-star toggle-card" aria-hidden="true"></i>
                        <p class="card-text"> ${element.text}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-outline-danger">Delete Note</button>
                        <button id="${index}"onclick="editNote(this.id)" class="btn btn-outline-danger">Edit Note</button>
                    </div>
                </div>`;
        }
      }


    });

  } else if (fav_1 == "stop") {
    notesObj.forEach(function (element, index) {
      if (notesObj[index].val == "starred") {
        if (element.title == '') {
          html += `
            <div class="noteCard mt-2 mx-2 mb-5 card card_scroll" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title"><b>Untitled Note</b></h5>
                        <i id="${index}"onclick="makeStar(this.id)" class="fa fa-star fa-lg card-star toggle-card star" aria-hidden="true"></i>
                        <p class="card-text"> ${element.text}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-outline-danger">Delete Note</button>
                        <button id="${index}"onclick="editNote(this.id)" class="btn btn-outline-danger">Edit Note</button>
                    </div>
                </div>`;
        } else if (element.text == '') {

          html += `
            <div class="noteCard mt-2 mx-2 mb-5 card card_scroll" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title"><b>${element.title}</b></h5>
                        <i id="${index}"onclick="makeStar(this.id)" class="fa fa-star fa-lg card-star toggle-card star" aria-hidden="true"></i>
                        <p class="card-text">--</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-outline-danger">Delete Note</button>
                        <button id="${index}"onclick="editNote(this.id)" class="btn btn-outline-danger">Edit Note</button>
                    </div>
                </div>`;
        } else {

          html += `
            <div class="noteCard mt-2 mx-2 mb-5 card card_scroll" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title"><b>${element.title}</b></h5>
                        <i id="${index}"onclick="makeStar(this.id)" class="fa fa-star fa-lg card-star toggle-card star" aria-hidden="true"></i>
                        <p class="card-text"> ${element.text}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-outline-danger">Delete Note</button>
                        <button id="${index}"onclick="editNote(this.id)" class="btn btn-outline-danger">Edit Note</button>
                    </div>
                </div>`;
        }
      }
      else {
      }
    });
  }

  //Function End 


  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}
//Function End


// Function to delete a note
function deleteNote(index) {

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  let stop = "stop";
  if (show_star.classList.contains('star-btn')) {
    showNotes(stop);
  } else {
    showNotes(run);
  }
}

//Function End


// Function to update notes 
function editNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  let addTitle = document.getElementById("addTitle");
  let addTxt = document.getElementById("addTxt");


  addTitle.value = notesObj[index].title;
  addTxt.value = notesObj[index].text;

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));

  var show_star = document.querySelector('.show-star');
  show_star.classList.remove('star-btn');

  showNotes(run);
}


// Function end 



//Function to search Note by Title or by Text
let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

  let inputVal = search.value.toLowerCase();
  let noteCards = document.getElementsByClassName('noteCard');
  Array.from(noteCards).forEach(function (element) {
    let srch_tog = document.querySelector('#srch_1').classList.contains('active');
    if (srch_tog) {
      let cardTxt = element.getElementsByTagName("h5")[0].innerText.toLowerCase();
      if (cardTxt.includes(inputVal)) {
        element.style.display = "block";
      }
      else {
        element.style.display = "none";
      }
    } else {
      let cardTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();
      if (cardTxt.includes(inputVal)) {
        element.style.display = "block";
      }
      else {
        element.style.display = "none";
      }
    }

  })
})

//Function End



//Function to show Alert
function err_1() {
  let htm = "";
  let err_alert = document.getElementById("err_1");

  htm += `
    <div id="err" class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Please</strong> Fill the input Fields
    <i id="erbtn" class="fa fa-times fa-lg" aria-hidden="true"></i>
  </div>`;
  err_alert.innerHTML = htm;

  //To close Alert

  let er = document.getElementById('erbtn');
  er.addEventListener('click', () => {
    let htm_1 = "";
    err_alert.innerHTML = htm_1;
  })

  setTimeout('auto_close_alert()', 3000);

}
//Function End


//Auto close Alert
function auto_close_alert() {
  let err_alert = document.getElementById("err_1");
  let htm_2 = "";
  err_alert.innerHTML = htm_2;
}
//Function End



//Function for Typing Effect
var typed = new Typed('.typed', {
  strings: [
    "Welcome To <span style='color:red'>Notes App</span>^500",
    "Add Your Notes Here..^500"
  ],
  typeSpeed: 40,
  backSpeed: 10,
  loop: true
});

//Function End


//Function to star a card
var click = false;
function makeStar(index) {

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let unstarred = "unstarred";
  let starred = "starred";
  let stop = "stop";



  click = !click;
  if (click) {
    notesObj[index].val = starred;
    localStorage.setItem("notes", JSON.stringify(notesObj));
  } else {
    notesObj[index].val = unstarred;
    localStorage.setItem("notes", JSON.stringify(notesObj));
  }
  if (show_star.classList.contains('star-btn')) {
    showNotes(stop);
  } else {
    showNotes(run);
  }
}

//Function End


// Function to show all starred cards 

let toggle_show = document.getElementById('toggle-show');
var show_star = document.querySelector('.show-star');

toggle_show.addEventListener('click', () => {
  show_star.classList.toggle('star-btn');
  let stop = "stop";
  if (show_star.classList.contains('star-btn')) {
    showNotes(stop);
  } else {
    showNotes(run);
  }

})

//Function End


//Preloader

var loader = document.getElementById('loader');
var rem;
rem = setTimeout(function () {
  loader.style.display = 'none';
}, 3000); 

//Preoader End


// Function that swaps the stylesheet.
function changeTheme() {
  let theme = document.getElementById("theme");
  let lightTheme = "light-mode.css";
  let darkTheme = "dark-mode.css";
  
  // Checking what stylesheet the link tag has.
  if (theme.getAttribute("href") == lightTheme) {
    theme.href = darkTheme;
  } else {
    theme.href = lightTheme;
  }
}

//Function End


// -----------------------------------------------------
//Scroll Effect
// const card_scroll = ScrollReveal({
//   origin: 'bottom',
//   distance: '80px',
//   duration: 800,
//   reset: true
// });
// card_scroll.reveal('.card_scroll');

// const container_scroll = ScrollReveal({
//   origin: 'left',
//   distance: '100px',
//   duration: 1000,
//   reset: true
// });

// container_scroll.reveal('.container_scroll');
