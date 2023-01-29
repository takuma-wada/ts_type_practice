"use strict";
// 基本的な型
console.log("----- array型 -----"); //配列
const hobbies = ["Sports", "Cooking"];
for (const hobby of hobbies) {
    console.log(hobby);
}
let favoriteHobbies;
favoriteHobbies = ["Sports"];
console.log("----- tuple型 -----"); // 長さ固定の配列　 goの配列のイメージ
let tuple;
tuple = ["tuple", 10];
console.log("----- enum型 -----"); //多言語と同じ列挙型
// デフォルトでは0から番号が割り振られる。意図的にlabelを追加もできる(文字列可)
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
console.log(Role.ADMIN);
console.log('----- any型 -----'); //最後の手段。typescript使っている以上は使うのは微妙
let anyType;
console.log('----- union型 -----'); //型に複数の可能性を持たせる
function combine(input1, input2) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
console.log('----- リテラル型 -----'); // 型に値を指定するイメージ
let literalType;
// literalType = '100'; => エラーになる
let unionLiteralType; // union型との組み合わせ
unionLiteralType = 'john';
unionLiteralType = 'Doe';
// unionLiteralType = 'johnDoe'; => エラーになる
console.log('----- 型エイリアス -----'); // 型に値を指定するイメージ
//使いまわせる
let type1;
let type2;
console.log('----- function型 -----');
let combineValues;
combineValues = combine;
combineValues(100, 200);
console.log('----- function型 callback -----');
function addAndHandler(n1, n2, cb) {
    const result = n1 + n2;
}
addAndHandler(10, 20, (result) => {
    console.log(result);
});
console.log('----- never型 -----');
function generateError(message, code) {
    throw {
        message: message,
        errorcode: code
    };
}
const result = generateError('エラー発生', 1);
