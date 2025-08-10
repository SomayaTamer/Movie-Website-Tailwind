(function(){
  const menuBtn = document.getElementById('menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const header = document.getElementById('site-header');

  let navOpen = false;
  menuBtn && menuBtn.addEventListener('click', ()=>{
    navOpen = !navOpen;
    if(navOpen){
      mobileNav.style.top = '100%';
      mobileNav.classList.add('active');
    }else{
      mobileNav.style.top = '-600px';
      mobileNav.classList.remove('active');
    }
  });

  // close mobile nav when clicking a link
  mobileNav && mobileNav.addEventListener('click', (e)=>{
    if(e.target.tagName === 'A' || e.target.tagName === 'BUTTON'){
      mobileNav.style.top = '-600px'; navOpen = false;
    }
  });

  // add shadow on scroll (like original)
  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 10){
      header.classList.add('shadow');
    }else{
      header.classList.remove('shadow');
    }
  });

})();
