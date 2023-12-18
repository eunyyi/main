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
// input 실행 
const onRegister = () => {
    let idInput = document.querySelector('#ID');
    let password = document.querySelector('#password');
    let passwordCheck = document.querySelector('#password-check');
    let phoneCheck = document.querySelector('#phone-check');


    let check = true;
    
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

    let passwordCheckErrMsg = document.querySelector('#password-check-err-msg');
    if ( passwordCheck.value === '' ) {
        passwordCheckErrMsg.style.display = 'block';
        check = false;
    } else if ( passwordCheck.value !== password.value ) {
        passwordCheckErrMsg.textContent = "입력한 값이 다릅니다";
        passwordCheckErrMsg.style.display = 'block';
        check = false;
    } else {
        passwordCheckErrMsg.style.display = 'none';
    }


    let phoneCheckErrMsg = document.querySelector('#phone-check-err-msg');
    if ( phoneCheck.value === '' ) {
        phoneCheckErrMsg.style.display = 'block';
        check = false;
    } else {
        phoneCheckErrMsg.style.display = 'none';
    } 
    
    if ( check ) {
        alert('회원가입이 성공했습니다!');
        location.href = 'index.html';
    }

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