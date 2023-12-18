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

window.addEventListener('scroll', function() {
    let scroll = window.pageYOffset;
    let topBtnCons = document.querySelector('.topBtn');
    
    if ( scroll > 1000 ) {
        topBtnCons.style.opacity = 1;
    } else {
        topBtnCons.style.opacity = 0;
    }
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

let seoulp = document.querySelector('.seoul p');
let junggu = document.querySelector('a.junggu');

let allArea = document.querySelector('.detailFirst a.searchButton p');
let detailArea = document.querySelector('.detailSecond a.searchButton p');
let detailUl = document.querySelector('ul.detailSecond');

seoulp.addEventListener('click', function(ev) {
    ev.preventDefault();
    allArea.innerText = seoulp.innerText;
    detailUl.style.height = 370 + 'px';
    
    junggu.addEventListener('click', function(ev) {
        console.log(ev);
        ev.preventDefault();
        detailArea.innerText = junggu.innerText;
        detailUl.style.height = 45 + 'px';
    });
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
let storeSearch = document.querySelector('a.storeSearch');
let storeDetail = document.querySelector('.storeDetail');
let store = document.querySelector('.store');
let mapVisualBefore = document.querySelector('.mapVisualBefore');
let mapVisualAfter = document.querySelector('.mapVisualAfter');

storeSearch.addEventListener('click', function(e) {
    e.preventDefault();
    store.style.display = 'none';
    storeDetail.style.display = 'block';

    mapVisualBefore.style.display = 'none';
    mapVisualAfter.style.display = 'block';
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