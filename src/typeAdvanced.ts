// 高度な型
console.log('----- 交差型 -----');

// interfaceでも可能
type Admin = {
    name: string;
    privileges: string[];
}


type Employee = {
    name: string;
    startDate : Date;
}


type ElevetedEmployee = Admin & Employee;

const e1: ElevetedEmployee = {
    name : 'Max',
    privileges : ['create-server'],
    startDate: new Date()
}
console.log(e1);

console.log('----- 型ガード -----');
type Combinable = string | number; //union型

console.log('---- 関数オーバーロード ----');
function add(a: string, b:number): string;

function add(a: Combinable, b: Combinable) {
    console.log('----- 型ガード -----');
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}


type UnKnownEmployee = Employee | Admin;


function printEmployeeInformation(emp: UnKnownEmployee) {
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

    loadCargo(amount: number) {
        console.log('荷物を乗せています...' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();


function useVehicle(vehicle: Vehicle) {
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

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

// jsはinterfaceをコンパイルできないのでinstance ofを使えない
function moveAnimal(animal: Animal) {
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
const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

userInputElement.value = 'こんにちは';


console.log('-----インデックス型----');
interface ErrorContainer {
    // key => valueの型だけを指定している。
    [prop:string]: string;
}

const errorBag: ErrorContainer = {
    email: '正しいメールアドレスではありません'
}
