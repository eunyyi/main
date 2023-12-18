// Header 스크롤 색상 변경 , top 버튼 구현
window.addEventListener('scroll', function() {
    let scroll = window.pageYOffset;
    let topMenu = document.querySelector('.topMenu');
    let topBtn = document.querySelector('.topBtn');
    
    if ( scroll > 1000 ) {
        topMenu.classList.add('scroll');
        topBtn.style.opacity = 1;
    } else {
        topMenu.classList.remove('scroll');
        topBtn.style.opacity = 0;
    }
})
// close 버튼 
let topBanner = document.querySelector('.topBanner');
let closeBtn = document.querySelector('.topBanner a');

closeBtn.addEventListener('click', function(ev) {
    ev.preventDefault();
    topBanner.style.display = 'none';
})
// 룸 썸네일 슬라이더
var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
spaceBetween: 10,
thumbs: {
    swiper: swiper,
},
});
var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper4", {
spaceBetween: 10,
thumbs: {
    swiper: swiper,
},
});
var swiper = new Swiper(".mySwiper5", {
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper6", {
spaceBetween: 10,
thumbs: {
    swiper: swiper,
},
});
var swiper = new Swiper(".mySwiper7", {
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper8", {
spaceBetween: 10,
thumbs: {
    swiper: swiper,
},
});
var swiper = new Swiper(".mySwiper9", {
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper10", {
spaceBetween: 10,
thumbs: {
    swiper: swiper,
},
});

// 룸 클릭 구현

doubleSingle = ()=> {
    let double = document.querySelector('#double');
    let doubleSingle = document.querySelector('#doubleSingle');
    let sweet = document.querySelector('#sweet');
    let ondol = document.querySelector('#ondol');
    let royal = document.querySelector('#royal');
    doubleSingle.style.display = 'block';
    double.style.display = 'none';
    sweet.style.display = 'none';
    ondol.style.display = 'none';
    royal.style.display = 'none';
    
    double.addEventListener('click', function(ev){
        ev.preventDefault();
    })
    doubleSingle.addEventListener('click', function(ev){
        ev.preventDefault();
    })
    sweet.addEventListener('click', function(ev){
        ev.preventDefault();
    })
    ondol.addEventListener('click', function(ev){
        ev.preventDefault();
    })
    royal.addEventListener('click', function(ev){
        ev.preventDefault();
    })

}
sweet = ()=> {
    let double = document.querySelector('#double');
    let doubleSingle = document.querySelector('#doubleSingle');
    let sweet = document.querySelector('#sweet');
    let ondol = document.querySelector('#ondol');
    let royal = document.querySelector('#royal');
    sweet.style.display = 'block';
    double.style.display = 'none';
    doubleSingle.style.display = 'none';
    ondol.style.display = 'none';
    royal.style.display = 'none';

    double.addEventListener('click', function(ev){
        ev.preventDefault();
    })
    doubleSingle.addEventListener('click', function(ev){
        ev.preventDefault();
    })
    sweet.addEventListener('click', function(ev){
        ev.preventDefault();
    })
    ondol.addEventListener('click', function(ev){
        ev.preventDefault();
    })
    royal.addEventListener('click', function(ev){
        ev.preventDefault();
    })
}
ondol = ()=> {
    let double = document.querySelector('#double');
    let doubleSingle = document.querySelector('#doubleSingle');
    let sweet = document.querySelector('#sweet');
    let ondol = document.querySelector('#ondol');
    let royal = document.querySelector('#royal');
    ondol.style.display = 'block';
    double.style.display = 'none';
    doubleSingle.style.display = 'none';
    sweet.style.display = 'none';
    royal.style.display = 'none';

    double.addEventListener('click', function(ev){
        ev.preventDefault();
    })
    doubleSingle.addEventListener('click', function(ev){
        ev.preventDefault();
    })
    sweet.addEventListener('click', function(ev){
        ev.preventDefault();
    })
    ondol.addEventListener('click', function(ev){
        ev.preventDefault();
    })
    royal.addEventListener('click', function(ev){
        ev.preventDefault();
    })
}
royal = ()=> {
    let double = document.querySelector('#double');
    let doubleSingle = document.querySelector('#doubleSingle');
    let sweet = document.querySelector('#sweet');
    let ondol = document.querySelector('#ondol');
    let royal = document.querySelector('#royal');
    royal.style.display = 'block';
    double.style.display = 'none';
    doubleSingle.style.display = 'none';
    sweet.style.display = 'none';
    ondol.style.display = 'none';

    double.addEventListener('click', function(ev){
        ev.preventDefault();
    })
    doubleSingle.addEventListener('click', function(ev){
        ev.preventDefault();
    })
    sweet.addEventListener('click', function(ev){
        ev.preventDefault();
    })
    ondol.addEventListener('click', function(ev){
        ev.preventDefault();
    })
    royal.addEventListener('click', function(ev){
        ev.preventDefault();
    })
}
double = ()=> {
    let double = document.querySelector('#double');
    let doubleSingle = document.querySelector('#doubleSingle');
    let sweet = document.querySelector('#sweet');
    let ondol = document.querySelector('#ondol');
    let royal = document.querySelector('#royal');
    double.style.display = 'block';
    doubleSingle.style.display = 'none';
    sweet.style.display = 'none';
    ondol.style.display = 'none';
    royal.style.display = 'none';

    double.addEventListener('click', function(ev){
        ev.preventDefault();
    })
    doubleSingle.addEventListener('click', function(ev){
        ev.preventDefault();
    })
    sweet.addEventListener('click', function(ev){
        ev.preventDefault();
    })
    ondol.addEventListener('click', function(ev){
        ev.preventDefault();
    })
    royal.addEventListener('click', function(ev){
        ev.preventDefault();
    })
}

let swiperEtc = new Swiper('.swiper-etc', {
    // Optional parameters
    initialSlide: 1,
    centeredSlides: true,
    spaceBetween: 10,
    slidesPerView: 2,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable:true,
        dragSize: 500,
    }
});
// modal
login = () => {
    let dim = document.getElementById('dim');
    let loginCons = document.querySelector('.loginCons');
    
    loginCons.classList.add('on');

    dim.addEventListener('click', function() {
        loginCons.style.display = 'none';
    })
}


const onLogin = () => {
    let idInput = document.querySelector('#ID');
    let password = document.querySelector('#password');
    let check = true;
    let loginCons = document.querySelector('.loginCons');
    
    let idErrMsg = document.querySelector('#ID-err-msg');
    if ( idInput.value === '' ) {
        idErrMsg.style.display = 'block';
        check = false;
    } else {
        idErrMsg.style.display = 'none';
    }
    let passwordErrMsg = document.querySelector('#password-err-msg');
    if ( password.value === '' ) {
        passwordErrMsg.style.display = 'block';
        check = false;
    } else {
        passwordErrMsg.style.display = 'none';
    }

    
    if ( check ) {
        alert('로그인이 성공했습니다!');
        loginCons.style.display = 'none';
    }

}