let UpDownBtn = document.getElementById('btn');

function OpenNewPage(Page) {
    window.open(Page);
}
function SmoothScrooll() {
    scroll({
        left: 0,
        top: 0,
        behavior: 'smooth'
    })

}
function CustomScroll(scrollValue) {
    window.scrollTo({
        top: scrollValue,
        behavior: 'smooth'
    });
}

window.onscroll = function () {
    if (scrollY >= 350) {
        UpDownBtn.style.display = 'block';
    } else {
        UpDownBtn.style.display = 'none';
    }
}

//let btnComountyLeft = document.getElementById('btnComountyLeft');
//let btnComountyRight = document.getElementById('btnComountyRight');
//let Comment1 = document.getElementById('Comment1');
//let Comment2 = document.getElementById('Comment2');
//btnComountyRight.onclick = function () {
//    Comment1.classList.add('hidden_Content')
//    Comment2.classList.remove('hidden_Content')
//}
