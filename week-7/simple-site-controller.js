//
const openHomeArea = () => {

  //
  let home = document.getElementsByClassName('home');
  let selected = document.getElementsByClassName('selected');
  let remove = document.getElementsByClassName('liNav');
  let aboutID = document.getElementById('about');
  let newsID = document.getElementById('news');
  let contactID = document.getElementById('contact');
  
  //
  if(home.style.display === "none") {
    home.style.display = "flex";
    selected.classList.add = "selected";
    remove.classList.remove = "liNav";

    //
  } else if (aboutID.classList === "selected" || newsID.classList === "selected" || contactID.classList === "selected") {
    aboutID.classList.remove = "selected";
    aboutID.classList.add = "liNav";
    newsID.classList.remove = "selected";
    newsID.classList.add = "liNav";
    contactID.classList.remove = "selected";
    contactID.classList.add = "liNav";

  }
}

//
const openAboutArea = () => {

  //
  let about = document.getElementsByClassName('about');
  let selected = document.getElementsByClassName('selected');
  let remove = document.getElementsByClassName('liNav');
  let homeID = document.getElementById('home');
  let aboutID = document.getElementById('news');
  let contactID = document.getElementById('contact');

  //
  if(about.style.display === "none") {
    about.style.display = "flex";
    selected.classList.add = "selected";
    remove.classList.remove = "liNav";

    //
  } else if (homeID.classList === "selected" || newsID.classList === "selected" || contactID.classList === "selected") {
    homeID.classList.remove = "selected";
    homeID.classList.add = "liNav";
    newsID.classList.remove = "selected";
    newsID.classList.add = "liNav";
    contactID.classList.remove = "selected";
    contactID.classList.add = "liNav";
  }
}

//
const openNewsArea = () => {

  //
  let news = document.getElementsByClassName('news');
  let selected = document.getElementsByClassName('selected');
  let remove = document.getElementsByClassName('liNav');
  let homeID = document.getElementById('home');
  let aboutID = document.getElementById('about');
  let contactID = document.getElementById('contact');

  //
  if(news.style.display === "none") {
    news.style.display = "flex";
    selected.classList.add = "selected";
    remove.classList.remove = "liNav";

    //
  } else if (homeID.classList === "selected" || aboutID.classList === "selected" || contactID.classList === "selected") {
    homeID.classList.remove = "selected";
    homeID.classList.add = "liNav";
    aboutID.classList.remove = "selected";
    aboutID.classList.add = "liNav";
    contactID.classList.remove = "selected";
    contactID.classList.add = "liNav";
  }
}

//
const openContactArea = () => {

  //
  let contact = document.getElementsByClassName('contact');
  let selected = document.getElementsByClassName('selected');
  let remove = document.getElementsByClassName('liNav');
  let homeID = document.getElementById('home');
  let aboutID = document.getElementById('about');
  let newsID = document.getElementById('news');

  //
  if(contact.style.display === "none") {
    contact.style.display = "flex";
    selected.classList.add = "selected";
    remove.classList.remove = "liNav";

    //
  } else if (homeID.classList === "selected" || aboutID.classList === "selected" || newsID.classList === "selected") {
    homeID.classList.remove = "selected";
    homeID.classList.add = "liNav";
    aboutID.classList.remove = "selected";
    aboutID.classList.add = "liNav";
    newsID.classList.remove = "selected";
    newsID.classList.add = "liNav";
  }
}
