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

//文法とデータ型
//jsはUnicodeなので個本何でも変数名に使える
//strictモードで見宣言の変数のエラーを出せる
//初期化していない変数はundefinedになる
//未宣言の変数はReferenceError
//undefinesはfalse扱い。数値のコンテキストではNaN扱い
//nullもfalse扱い。数値コンテキストでは0扱い
if(true){
    var x = 5;
}
console.log(x);
//varの場合ブロックすこーうが存在しないのでc++とは結果が変わる({}内もグローバルスコープ扱い)
//letだと{}内はローカルスコープ
//関数は巻き上げが行われるが、無名関数は行われない
//グローバル変数はグローバルオブジェクトのプロパティなので別なウインドウからウインドウ名などを指定すればアクセスできる
const MY_OBJ = {'key': 'value'};
MY_OBJ.key = 'OtherValue';
//定数でもプロパティは書き換えられる
//定数の配列に値の追加も可
//長整数型BigInt、固有のインスタンスがつくれるSymbol型もある
+'1.1' + +'1.1'
//数値型の2.2になる
var fish = ['Lion', , 'Angel'];
//配列リテラルは未定義の要素をundefinedとする
//真偽値型とは別にBooleanオブジェクトがある
//数値リテラルは一般的な方法で2,8,10,16進数が使える
/*浮動小数点リテラルは
3.1415926
-.123456789
-3.1E+12
.1e-23
のようなものが使える
 */
let car = {manyCars: {a: 'Saab', b: 'Jeep'}, 7:'Mazda'};
//オブジェクトリテラル。入れ子にできる
let unusualPropertyNames = {
    '' : '空文字列',
    '!': 'バン!'
}
car.manyCars.a;
//普通のプロパティへのアクセス
car["7"];
unusualPropertyNames[""];
unusualPropertyNames['!'];
//有効でない識別子のプロパティへのアクセスはクオートで囲んで連想配列のように呼び出す
var re = /ab+c/;
//正規表現リテラル
/*文字列リテラル
'foo'
"bar"
'1234'
'one line \n another line'
"John's cat"
 */
'abc'.length;
//文字列リテラルは一時的なstringオブジェクトに変換されるのであらゆるメソッドが使える
//``で囲むテンプレートリテラルは変数を埋め込める(PHPの""と似てる?)
//エスケープ文字も使える
var str = 'this string \
is broken \
across multiple \
lines.'
console.log(str);
//改行をエスケープできる。見やすくなる
var poem =
    'Roses are red,\n\
    Violets are blue.\n\
    Sugar is sweet,\n\
    and so is foo.'
//ヒアドキュメント的な書き方
var poem = `a
b
c`;
//改行が適応される

//制御フローとエラー処理
//if文,switch文はc++と同様
//ほぼどんなオブジェクトでも例外としてスローできるが例外データ型を使った方が効率的な場合がある
//try catch throwはphpのように使える
//throwはfinallyのreturnで上書きされる。
//Errorオブジェクトを作りプロパティを変更することもできる
//同期制御をするためのPromiseオブジェクトというものもあり、状態を持つ
