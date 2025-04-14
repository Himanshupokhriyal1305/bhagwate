jQuery(document).ready(function() {
    jQuery(".c-slider-init").slick({
      dots: false,
      nav: false,
      arrows: false,
      infinite: true,
      speed: 1200,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: true,
      draggable: false,
      pauseOnFocus: false,
      pauseOnHover: false
    });
  
    jQuery(".slick-current").addClass("initialAnimation");
  
    let transitionSetup = {
      target: ".slick-list",
      enterClass: "u-scale-out",
      doTransition: function() {
        var slideContainer = document.querySelector(this.target);
        slideContainer.classList.add(this.enterClass);
        jQuery(".slick-current").removeClass("animateIn");
      },
      exitTransition: function() {
        var slideContainer = document.querySelector(this.target);
        setTimeout(() => {
          slideContainer.classList.remove(this.enterClass);
          jQuery(".slick-current").addClass("animateIn");
        }, 1000);
      }
    };
  
    var i = 0;
    // On before slide change
    jQuery(".c-slider-init").on("beforeChange", function(
                                event,
                                 slick,
                                 currentSlide,
                                 nextSlide
                                ) {
      if (i == 0) {
        event.preventDefault();
        transitionSetup.doTransition();
        i++;
      } else {
        i = 0;
        transitionSetup.exitTransition();
      }
  
      jQuery(".c-slider-init").slick("slickNext");
      jQuery(".slick-current").removeClass("initialAnimation");
    });
  });
  function submitSearch(e) {
    e.preventDefault();
    const input = document.getElementById("searchInput").value.trim();
    if (input) {
      window.location.href = `/sneaker-products?s=${encodeURIComponent(input)}`;
    }
  }

  function logout() {
    localStorage.setItem("isAuthenticated", "false");
    window.location.href = "/verify-otp";
  }

  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");
  const closeSidebar = document.getElementById("closeSidebar");
  const searchToggle = document.getElementById("searchToggle");
  const closeSearch = document.getElementById("closeSearch");
  const mobileSearchBox = document.getElementById("mobileSearchBox");
  const mobileLogo = document.getElementById("mobileLogo");
  const mobileSearchInput = document.getElementById("mobileSearchInput");

  searchToggle.onclick = () => {
    mobileSearchBox.classList.add("show");
    mobileLogo.style.opacity = 0;
    mobileSearchInput.focus();
  };

  closeSearch.onclick = () => {
    mobileSearchBox.classList.remove("show");
    mobileLogo.style.opacity = 1;
  };

  menuToggle.onclick = () => {
    sidebar.classList.add("open");
  };

  closeSidebar.onclick = () => {
    sidebar.classList.remove("open");
  };
     // Demo dropdown data
     const menuData = {
      Deals: ['Deal 1', 'Deal 2', 'Deal 3'],
      Brands: ['Nike', 'Adidas', 'Puma'],
      Men: ['T-Shirts', 'Jeans', 'Shoes'],
      Sneaker: ['Air Max', 'Jordan', 'Yeezy'],
      Kids: ['Toys', 'Shoes', 'Clothes']
    };

    let activeMenu = null;

    function showMenu(menuName) {
      hideMenu(); // Hide any open menu
      const menu = document.getElementById(`menu-${menuName}`);
      if (menu) {
        menu.innerHTML = menuData[menuName]
          .map(item => `<li class="dropdown-item"><a href="#">${item}</a></li>`)
          .join('');
        menu.style.display = 'block';
        activeMenu = menu;
      }
    }

    function hideMenu() {
      if (activeMenu) {
        activeMenu.style.display = 'none';
        activeMenu = null;
      }
    }
    AOS.init({
      once: true, // animation only once
      duration: 1000, // duration of animation
    });
    document.addEventListener('DOMContentLoaded', function () {
      document.querySelectorAll('.hover-icon').forEach(function(icon) {
        icon.addEventListener('click', function () {
          const img = this.closest('.brand-card').querySelector('.image-to-open');
          if (img) {
            const imgSrc = img.src;
            window.open(imgSrc, '_blank').focus();
          }
        });
      });
    });
    let heartfeltCurrent = 0;
const heartfeltContainer = document.querySelector(".heartfelt-carousel-wrapper");
const heartfeltCards = document.querySelectorAll(".heartfelt-carousel-wrapper > div");

function heartfeltGetCardWidth() {
  if (heartfeltCards.length === 0) return 0;
  return heartfeltCards[0].offsetWidth + 32; // includes margin
}

function heartfeltGetVisible() {
  const width = window.innerWidth;
  if (width < 576) return 2;
  if (width < 768) return 2;
  return 4;
}

function heartfeltMoveSlide(dir) {
  const cardWidth = heartfeltGetCardWidth();
  const totalCards = heartfeltCards.length;
  const maxVisible = heartfeltGetVisible();
  const maxSlide = totalCards - maxVisible;

  heartfeltCurrent += dir;
  if (heartfeltCurrent < 0) heartfeltCurrent = 0;
  if (heartfeltCurrent > maxSlide) heartfeltCurrent = 0;

  heartfeltContainer.style.transform = `translateX(-${heartfeltCurrent * cardWidth}px)`;
}

window.addEventListener("resize", () => heartfeltMoveSlide(0));
setInterval(() => heartfeltMoveSlide(1), 2000);
