
// function ShowThis(a,c) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + c;
//     }    
//     console.log(sum());
// }

// ShowThis(3,2);

// const obj =  {
//     b: 20,
//     a: 15,
//     sum: function() {
//         console.log(this);
//        }
//     }


// obj.sum();


// 1) обычная функция: this = window , если есть use strict , то вернёт undefined
// 2) контекс у методов объекта = сам объект
