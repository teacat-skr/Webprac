//コマンドラインで実行できないのでただの書き捨て

//必要な情報を保存する — 変数

var myName = 'Clice';
var myName = 'Bob';
//varは同じ名前で宣言しなおせるが、letは不可
//またvar変数の宣言はどこに書いてもエラーが出ない。実行前にすべての変数が書いた場所にかかわらず最初に作成されるため

//letで宣言するべき

//変数名は大文字小文字区別ありで他は他言語と同じ
let myNumberArray = [1, 2, 3];
//配列の要素は[]で囲む
let dog = {name : "ポチ", breed : "ダルメシアン"};
//オブジェクトの宣言

//javascriptはphpと同じ動的型付け言語(C++は静的)
//typeofで型が見れる

const b = 12;
//定数

//JavaScriptでの基本演算 — 数値と演算子
//一般的な演算子は同様に使える
//JSには数値型というくくりしかない?

//テキストを扱う — JavaScript での文字列
//文字列は一般的に同じ仕様だが数値型と文字列型の加算はすべて文字列型の連結として処理('16' + '12' = '1612')
let a = '1612';
a = Number(a);
//数値に変換(C++でいうstol,stof)
a = a.toString();
//文字列化

//便利な文字列メソッド
let browserType = 'mozilla';
browserType.length;
//長さを返す
browserType[1];
//文字へのアクセス
browserType.indexOf('zilla');
//何文字目に引数の文字列があるか検索。なかったら-1を返す
browserType.slice(0,3);
//c++のsubstrと同じ
browserType.toLowerCase();
//小文字化して返却
browserType.toUpperCase();
//大文字化して返却
browserType.replace('moz','van');
//該当する連続する部分列を置き換えた文字列を返す

//配列
let random = ['tree', 795, [0, 1, 2]];
//phpの配列のように使える
random.length;
//長さを返す
let myData = '札幌、仙台、東京、名古屋、大阪、博多';
let myArray = myData.split('、');
//、で分割して配列にしてくれる
myArray.join(',');
//,を足してくっつけてくれる
myArray.toString();
//区切り文字を指定できないが,で区切った文字列を返す
myArray.push('横浜');
//末尾に追加
myArray.pop();
//末尾を削除(取り出し)。stack構造?
myArray.unshift('奈良');
myArray.shift();
//先頭に対して同じ操作

//入門編
//スクラッチパッドは提供終了
eval('3+2');
//引数の文字列をjavascriptコードとして処理
console.log();
//コンソールに表示

