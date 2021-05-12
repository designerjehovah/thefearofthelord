const home = document.getElementById('home');
const about_the_book = document.getElementById('about_the_book');
const navigation = document.getElementById('navigation');
const burger = document.querySelector('.burger');
const close_nav = document.querySelector('.close');

// Homepage

burger.addEventListener('click', function () {
  home.style.opacity = '0';
  navigation.style.opacity = '1';
  home.style.pointerEvents = 'none';
  navigation.style.pointerEvents = 'visible';
});
close_nav.addEventListener('click', function () {
  navigation.style.opacity = '0';
  home.style.opacity = '1';
  navigation.style.pointerEvents = 'none';
  home.style.pointerEvents = 'visible';
  console.log('it works');
});

// About the book

burger.addEventListener('click', function () {
  about_the_book.style.opacity = '0';
  navigation.style.opacity = '1';
  about_the_book.style.pointerEvents = 'none';
  navigation.style.pointerEvents = 'visible';
});

close_nav.addEventListener('click', function () {
  navigation.style.opacity = '0';
  about_the_book.style.opacity = '1';
  navigation.style.pointerEvents = 'none';
  about_the_book.style.pointerEvents = 'visible';
  console.log('it works');
});

// About the author

burger.addEventListener('click', function () {
  about_the_author.style.opacity = '0';
  navigation.style.opacity = '1';
  about_the_author.style.pointerEvents = 'none';
  navigation.style.pointerEvents = 'visible';
});

close_nav.addEventListener('click', function () {
  navigation.style.opacity = '0';
  about_the_author.style.opacity = '1';
  navigation.style.pointerEvents = 'none';
  about_the_author.style.pointerEvents = 'visible';
  console.log('it works');
});
