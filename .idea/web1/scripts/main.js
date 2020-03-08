var myImage = document.querySelector('img');
myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/cat-2083492_1280.webp'){
        myImage.setAttribute('src','image/cat-4611189_1280.webp');
    } else {
        myImage.setAttribute('src','image/cat-2083492_1280.webp');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('あなたの名前を入力してください。');
    localStorage.setItem('name', myName);
    myHeading.textContent = myName + '、君は天才';
}
if(!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + '、君は天才';
}
myButton.onclick = function () {
    setUserName();
}