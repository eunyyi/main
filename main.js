
window.addEventListener('scroll', function() {
    let scroll = window.pageYOffset;
    let topMenu = document.querySelector('.topMenu');
    let topBtnCons = document.querySelector('.topBtn');
    
    if ( scroll > 1000 ) {
        topMenu.classList.add('on');
        topBtnCons.style.opacity = 1;
    } else {
        topMenu.classList.remove('on');
        topBtnCons.style.opacity = 0;
    }
})

// sec2 슬라이더
let swiper = new Swiper('.swiper', {
    loop:true,
    autoplay:true,
    speed: 1000,

    pagination: {
        el: '.swiper-pagination',
    }
});

// topBanner x 버튼 close
let topBanner = document.querySelector('.topBanner');
let closeBtn = document.querySelector('.topBanner a');

closeBtn.addEventListener('click', function(ev) {
    ev.preventDefault();
    topBanner.style.height = 0;
})


// topBtn
let topBtn = document.querySelector('.topBtn a');
let height = window.pageYOffset;
topBtn.addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: 'smooth'});
})


// 메뉴 mouse hover하면 on 붙기
let lists = document.querySelectorAll('.topMenu li');
let idx = 0;

lists.forEach(function(li, i) {
    li.addEventListener('mouseenter',function() {
        lists.forEach(function(item) {
            item.classList.remove('bar')
        })
        li.classList.add('bar');
    });
}); 


// 시/도전체에서 도시를 클릭했을 때 
// 1. 해당하는 도시의 텍스트로 '시도전체'가 변한다.
// 2. '시군구전체'도 변한다.


let seoulp = document.querySelectorAll('.seoul p');
let mainPageSeoul = seoulp[0];
let modalSeoul = seoulp[1];
let junggu = document.querySelectorAll('.junggu p');

let allAreaOne = document.querySelector('.sec7 .detailFirst a.searchButton p');
let allAreaTwo = document.querySelector('.mapCons .detailFirst a.searchButton p');
let detailAreaOne = document.querySelector('.sec7 .detailSecond a.searchButton p');
let detailAreaTwo = document.querySelector('.mapCons .detailSecond a.searchButton p');
let detailUlOne = document.querySelector('.sec7 ul.detailSecond');
let detailUlTwo = document.querySelector('.mapCons ul.detailSecond');

mainPageSeoul.addEventListener('click', function(ev){
    ev.preventDefault();
    allAreaOne.innerText = mainPageSeoul.innerText;
    detailUlOne.style.height = 370 + 'px';

    let mainPageJunggu = junggu[0];
    mainPageJunggu.addEventListener('click', function(ev){
        ev.preventDefault();
        detailAreaOne.innerText = mainPageJunggu.innerText;
        detailUlOne.style.height = 45 + 'px';
    })
})
modalSeoul.addEventListener('click', function(ev){
    ev.preventDefault();
    allAreaTwo.innerText = modalSeoul.innerText;
    detailUlTwo.style.height = 370 + 'px';

    let modalJunggu = junggu[1];
    modalJunggu.addEventListener('click', function(e){
        e.preventDefault();
        detailAreaTwo.innerText = modalJunggu.innerText;
        detailUlTwo.style.height = 45 + 'px';
    })

})


/* offline map modal */
let offlineBtn = document.querySelectorAll('.offline');
let mapCons = document.querySelector('.mapCons');
let dim = document.querySelector('#dim');
let mapClose = document.querySelector('.mapClose');

offlineBtn.forEach(function(item) {
    item.addEventListener('click', function() {
        mapCons.classList.add('on');
    });
    mapClose.addEventListener('click', function(){
        mapCons.classList.remove('on');
    })
    dim.addEventListener('click', function(){
        mapCons.classList.remove('on');
    })
})



// 매장 찾기 누르면 가까운 매장으로 바뀌기
let storeSearchOne = document.querySelector('.sec7 .storeSearch');
let storeDetailOne = document.querySelector('.sec7 .storeDetail');
let storeOne = document.querySelector('.sec7 .store');
let mapVisualBeforeOne = document.querySelector('.sec7 .mapVisualBefore');
let mapVisualAfterOne = document.querySelector('.sec7 .mapVisualAfter');

let storeSearchTwo = document.querySelector('.mapCons .storeSearch');
let storeDetailTwo = document.querySelector('.mapCons .storeDetail');
let storeTwo = document.querySelector('.mapCons .store');
let mapVisualBeforeTwo = document.querySelector('.mapCons .mapVisualBefore');
let mapVisualAfterTwo = document.querySelector('.mapCons .mapVisualAfter');

storeSearchOne.addEventListener('click', function(e) {
    e.preventDefault();
    storeOne.style.display = 'none';
    storeDetailOne.style.display = 'block';

    mapVisualBeforeOne.style.display = 'none';
    mapVisualAfterOne.style.display = 'block';
})


storeSearchTwo.addEventListener('click', function(e) {
    e.preventDefault();
    storeTwo.style.display = 'none';
    storeDetailTwo.style.display = 'block';

    mapVisualBeforeTwo.style.display = 'none';
    mapVisualAfterTwo.style.display = 'block';
})

//burger버튼 메뉴
let burgerBtn = document.querySelector('.burger');
let burgerMenu = document.querySelector('.burgerMenu');
let closeMenu = document.querySelector('.closeMenu');

burgerBtn.addEventListener('click' , function() {
    burgerMenu.style.display = 'block';
})
closeMenu.addEventListener('click', function() {
    burgerMenu.style.display = 'none';
})