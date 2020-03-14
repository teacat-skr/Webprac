function createParagraph() {
    let para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
}

const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', createParagraph);
}
//ファイルを分けるとこれでも動く?

//内部に書く場合document.addEventListener("DOMContentLoaded" ,function () {...がbodyまで解析されたことを捉える、外部に書く場合はdeferがこれを行いこれを書かなかったため動かなくなった
//scriptを/bodyタグの前に書くのは同様にして動かなくなるのを避けるためである
//defer及びasyncはよりモダンな機能でありページ読み込みを止めることがない。逆にdocument.addEventListener("DOMContentLoaded" ,function () {...は止めているため実行速度が遅くなる?
//jsファイルに依存関係があるときはdefer、ないときはasyncを使う
//jsではc++と同様のコメントアウトができる
