"use strict";
// 高度な型
console.log('----- 交差型 -----');
const e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};
console.log(e1);
console.log('----- 型ガード -----');
console.log('---- 関数オーバーロード ----');
function add(a, b) {
    console.log('----- 型ガード -----');
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    // EmployeeとAdminに共通しているからエラーは出ない
    console.log(emp.name);
    // 片方のプロパティに存在している場合を判定する型ガード
    if ('privileges' in emp) {
        console.log(emp.privileges);
    }
    if ('startDate' in emp) {
        console.log(emp.startDate);
    }
}
printEmployeeInformation(e1);
// instanceofを使うパターン
class Car {
    drive() {
        console.log('運転中...');
    }
}
class Truck {
    drive() {
        console.log('トラックを運転中...');
    }
    loadCargo(amount) {
        console.log('荷物を乗せています...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    // 共通メソッドだから型ガードなしで使える
    vehicle.drive();
    // instanceofだとinと比べて描き間違えがない
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(100);
    }
}
useVehicle(v1);
useVehicle(v2);
console.log('----- 判別可能なunion型 -----');
// jsはinterfaceをコンパイルできないのでinstance ofを使えない
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('種別' + animal.type);
    console.log('移動速度' + speed);
}
moveAnimal({
    type: 'bird',
    flyingSpeed: 10
});
console.log('----- 型キャスト -----');
// const userInputElement= <HTMLInputElement>document.getElementById('user-input')!;
// 前に<>をつけるパターンはreactコンポーネント等でも使用する為衝突する
const userInputElement = document.getElementById('user-input');
userInputElement.value = 'こんにちは';
console.log('-----インデックス型----');
const errorBag = {
    email: '正しいメールアドレスではありません'
};
