window.addEventListener('scroll',function(){
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});


window.onscroll = () => {
  var header = document.querySelector('header');
  if(this.scrollY <= 10) header.className = ''; else header.className = 'scroll';
};

function togglemenu(){
  var menutoggle = document.querySelector('.toggle');
  var menu = document.querySelector('.menu');
  menutoggle.classList.toggle('active');
  menu.classList.toggle('active');
}