// 変数 はデータのための “名前付けされた格納場所” です。私たちは商品や訪問者、その他のデータを格納するために変数が利用できます。
// JavaScriptで変数を作るには、let キーワードを使います。
// 下の文は “message” という名前の変数を作ります(別の言い方: 宣言 または 定義 ):

let message;


//代入演算子 = を使って、データを置く事ができます。
let message;
message = 'Hello'; // 文字列を格納します


//今、文字列は変数に関連付けられたメモリ領域に保存されています。変数名を使ってアクセスすることができます。:
let message;
message = 'Hello!';
alert(message); // 変数の中身を表示します


//簡潔にするために、変数宣言と代入を1行で書くことができます。
 let message = 'Hello!'; // 変数宣言と値の代入
alert(message); // Hello!

//また、1行で複数の変数を宣言することもできます。
let user = 'John', age = 25, message = 'Hello';
//より短いように見えるかもしれませんが、これは推奨しません。可読性のため、1変数1行にしてください。


//複数行のケースはちょっと長くなりますが、読みやすいです。
let user = 'John';
let age = 25;
let message = 'Hello';

//多くの変数がある場合、このように書く人もいます:
let user = 'John',
  age = 25,
  message = 'Hello';

//もしくは “カンマから始まる” スタイル:
let user = 'John'
  , age = 25
  , message = 'Hello';
//技術的にはこれらすべてのパターンは同じです。なので、これは個人の好みと美学の問題です。


//古いスクリプトには、別のキーワードがあるかもしれません: let の代わりに var です:
var message = 'Hello';
//キーワード var は let と ほとんど 一緒です。それも変数を宣言します。が、わずかに違います, 伝統的スタイルのやり方です。
//let と var には微妙な違いがありますが、まだ気にする必要はありません。その詳細については、古い "var" のチャプターで説明します


let message;
message = 'Hello!';
message = 'World!'; // 値の変更
alert(message);


let hello = 'Hello world!';
let message;
// hello から message に 'Hello world' をコピー
message = hello;
// これで2つの変数は同じデータを持ちます
alert(hello); // Hello world!
alert(message); // Hello world!


JavaScript変数名は2つの制限があります:
//名前は文字、数字、記号 $ と _ のみを含む必要があります。
//最初の文字は数字であってはいけません。
変数名の例:
let userName;
let test123;


//名前に複数の単語を含む場合、camelCase が一般的に使われます。 つまり: 単語が続々と続き, 各単語は大文字で始まります。: myVeryLongName.
//興味深いことに – ドル '$' や アンダースコア '_' も名前に使うことができます。それらは単に文字のように特別な意味をもたない普通の記号です。
これらは有効な名前です:
let $ = 1; // 名前 "$" の変数を宣言
let _ = 2; // またここでは名前 "_" の変数です
alert($ + _); // 3


//通常、変数を使う前に定義する必要があります。しかし、以前は let なしで、単に値を代入するだけで変数を作成することが技術的に可能でした。use strict でない場合には今でも動作します。この動作は古いスクリプトの互換性のために維持されています。
// 注意: この例は "use strict" なしモードです
num = 5; // 存在しなかった場合、変数 "num" が作られます
alert(num); // 5


//これは悪い習慣です、strict モードではエラーになります:
"use strict";
num = 5; // エラー: num が未定義です


//定数を宣言するためには、 let の代わりに const を使います。
const myBirthday = '18.04.1982';
//const を使って宣言された変数は “定数” と呼ばれます。それらは変更することが出来ません。変更しようとするとエラーになります:

const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // エラー, 定数の再代入はできません!
//プログラマがその変数は決して変更されるべきでないと確信するとき、それを保証しつつみんなにその事実を明示的に示すために const を使います。


// 実行する前に分かっているが、覚えるのが難しいという値に対しては、エイリアスとして定数を使うという慣習は広く行われています。
// このような定数は大文字とアンダースコアを使って名前がつけられます。
このように:
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...色を使う必要がある場合、次のようにします
let color = COLOR_ORANGE;
alert(color); // #FF7F00



let admin, name; // 一度に2つの変数を定義できます
name = "John";
admin = name;
alert( admin ); // "John"


let ourPlanetName = "Earth";
let currentUserName = "John";


const BIRTHDAY = '18.04.1982'; // make uppercase?
const age = someCode(birthday);