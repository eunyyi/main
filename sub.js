// Header 스크롤 색상 변경 , top 버튼 구현
window.addEventListener('scroll', function() {
    let scroll = window.pageYOffset;
    let topBtn = document.querySelector('.topBtn');
    
    if ( scroll > 1000 ) {
        topBtn.style.opacity = 1;
    } else {
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
// 날짜 선택
$( function() {
    $( "#datepicker" ).datepicker();
} );
$( function() {
$( "#datepicker2" ).datepicker();
} );


//
up = () => {
    var count = document.getElementById("quantity").value;
    if (count != 9) {
        document.getElementById("quantity").value = parseInt(count) + 1;
    }

}
down = () => {
    var count = document.getElementById("quantity").value;
    if (count != 1) {
        document.getElementById("quantity").value = parseInt(count) - 1;
    }
}
up2 = () => {
    var count = document.getElementById("quantity2").value;
    if (count != 9) {
        document.getElementById("quantity2").value = parseInt(count) + 1;
    }

}
down2 = () => {
    var count = document.getElementById("quantity2").value;
    if (count != 1) {
        document.getElementById("quantity2").value = parseInt(count) - 1;
    }
}
// 호텔 선택
downName = () => {
    var div = document.querySelector('.name');
    div.style.height = 106 + 'px';
}
upName = () => {
    var div = document.querySelector('.name');
    div.style.height = 24 + 'px';
}
result = () => {
    let reservation = document.querySelector('.reservation');
    reservation.style.display = 'block';
}
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
 