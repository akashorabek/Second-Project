

//Математические значение

// let num1 = Math.pow(4, 5); //Стпень
// let num2 = Math.sqrt(num1) - 0.6; //Корень
// console.log(Math.round(3.5)); //Окургление
// console.log(Math.ceil(241.2)); //Окургление на большую цифру
// console.log(Math.floor(num2)); //Окургление на меньшую цифру
// console.log(Math.floor(Math.random() * 1000)); //Рандом.орг

// let a = 6;
// let b = 8;

// let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// console.log(c);




// Conditions Условные операторы

//&& 

// let n1 = Number(prompt("Enter your number 1"))
// let n2 = Number(prompt("Enter your number 2"))

// if (n1 > n2){
//     console.log(n1);
// } else if (n1 == n2) {
//     console.log("Your numbers are same");
// } else {
//     console.log(n2);
// }


// const age = +prompt("Сколько вам лет?");

// if (age > 18 || age == 18) {
//     alert("Добро Пожаловать.")
// } else {
//     alert("Вам запрещено посещение этого сайта!!!")
// }

// const name = prompt("Как ваша Имя?");
// const surname = prompt("Как ваша Фамилия?");
// const age = confirm("Вам есть 18 лет?");

// let data = [name, surname, age];
// if (2 == true) {
//     alert("Добро Пожаловать," + name + " " + surname +".");
// } else {
//     alert("Извини," + name +".Ты не можешь посещать этот сайт.");
// }

// let a = Number(prompt("Сколько типов данных в JS?"));
// let b = confirm("Html, css являются языками программирование?");
// let c = Number(prompt(""));

// if(a == 3 && b == false && c <= 2) {
//     alert("");
// } else if(a == 3 && b == false && c > 2) {
//     alert("");
// } else {
//     alert("");
// }

// Домашка

// let num = Number(prompt("Введите порядковый номер пальца"));

// if (num == 1) {
//     alert("Большой палец");
// } else if(num == 2) {
//     alert("Указательный палец");
// } else if(num == 3) {
//     alert("Среднйи палец");
// } else if(num == 4) {
//     alert("Безымянный палец");
// } else if(num == 5) {
//     alert("Мизинец");
// } else {
//     alert("Такого пальца нет")
// }


// let num1 = Number(Math.round(prompt("Укажите число #1")));
// let num2 = Number(Math.round(prompt("Укажите число #2")));
// let result = num1 % num2;

// if (num1 % num2 == 0) {
//     alert("Делиться")
// } else {
//     alert("Не делиться, остаток: "+ result)
// }


// let num1 = Number(prompt("Укажите число #1"));
// let num2 = Number(prompt("Укажите число #2"));
// let result = num1 + num2;

// if (num1 < 0 && num2 < 0) {
//     alert("Условие не выполняется")
// } else {
//     alert("Сумма: "+ result)
// }

// let num1 = Number(prompt("Укажите число #1"));
// let num2 = Number(prompt("Укажите число #2"));
// let num3 = Number(prompt("Укажите число #3"));

// if (num1 % 5 == 0) {
//     console.log(num1);
// }
// if (num2 % 5 == 0) {
//     console.log(num2);
// }
// if (num3 % 5 == 0) {
//     console.log(num3);
// }


// let num1 = Number(prompt("Введите число 1"))
// let num2 = Number(prompt("Введите число 2"))
// let num3 = Number(prompt("Введите число 3"))
// let num4 = Number(prompt("Введите число 4"))

// let a = 0
// let b = 0
// if (num1 % 2 == 0) {
//     a = a + num1;
// } else if (num1 % 2 == 1) {
//     b = b + num1;
// }
// if (num2 % 2 == 0) {
//     a = a + num2;
// } else if (num2 % 2 == 1) {
//     b = b + num2;
// }
// if (num3 % 2 == 0) {
//     a = a + num3;
// } else if (num3 % 2 == 1) {
//     b = b + num3;
// }
// if (num4 % 2 == 0) {
//     a = a + num4;
// } else if (num4 % 2 == 1) {
//     b = b + num4;
// }

// console.log(a);
// console.log(b);

// // #1
// let a = Number(prompt("Введите число а"))
// let b = Number(prompt("Введите число b"))
// let c = Number(prompt("Введите число c"))

// let d = Math.pow(b, 2) - 4 * a *c;
// let x1 = (-b + Math.sqrt(d)) / (2 * a);
// let x2 = (-b - Math.sqrt(d)) / (2 * a);

// if (d > 0) {
//     console.log(x1);
//     console.log(x2);
// } else if (d == 0) {
//     console.log(x1);
// } else {
//     console.log("Нет корней дискриминанта");
// }

// // #2
// let x = Number(prompt("Введите число x"))
// let y = Number(prompt("Введите число y"))

// if (x > 0 && y > 0) {
//     console.log("1 четверть");
// } else if (x < 0 && y > 0) {
//     console.log("2 четверть");
// } else if (x < 0 && y < 0) {
//     console.log("3 четверть");
// } else if (x > 0 && y < 0) {
//     console.log("4 четверть");
// } else {
//     console.log("Ноль");
// }

// // #3
//  let num = Number(prompt("Введите число "))
//  let transform = prompt("На что хотите перевести(b или kb)")

//  if (transform == "b") {
//      num *= 1024;
//      console.log(num);
//  } else if (transform == "kb") {
//      num /= 1024;
//      console.log(num);
//  } else {
//      console.log("Неправильная команда");
//  }


// let num3 = 1
// while (num3 <= 5) {
//     let num4 = num3++;
//         console.log(num4 * num3);
//     num3++;
// }

// let start = Number(prompt("Enter start of loop"))
// let end = Number(prompt("Enter end of loop"))
// let step = Number(prompt("Enter step of loop"))



//     for (start;start <= end; start += step) {

//         console.log(start)
//    }

// for (let i = 5; i <= 40; i++) {
//     if (i % 2 == 0) {
//         console.log(i * i);
//     }
// }


// let count = 0
// for (let i = -20; i <= 10; i++) {
//     if (i % 2 !== 0 && i < 0) {
//         count++;
        
//     }
   
// }
// console.log(count);

//Домашка
// for (let i = 10; i <= 20; i++) {
//     console.log(i * i);
// }


// let sum = 0
// for (let i = 54; i <= 234; i++) {
//     sum += i
//     console.log(sum);
// }


// let num1 = 0
// let num2 = 0
// for (let i = 24; i <= 97; i++) {
//     if(i % 2 == 0) {
        
//         num1++;
//     } else if (i % 2 !== 0) {
        
//         num2++;
//     }
// }
// console.log(`Количество четных чисел: ${num1}`);
// console.log(`Количество нечетных чисел: ${num2}`);




// let asd = [11, 23, 34, 12, 12,  21, 22, -48, 222, -45, -66];


//EASY
// let sum = 0;
// asd.forEach(elem => {
//     if(elem % 2 == 0 && elem > 0) {
//         sum += elem
//     }
// })
// console.log(sum);

// let max = asd[0]
// let item = 0
// for (let i = 0; i < asd.length; i++) {
    
//     if (asd[i] < 0 && asd[i] < max) {
//         max = asd[i]
//         item = i
//     }
    
// }
// console.log(max);
// console.log(item);

//MEDIUM
// let arrSize = Number(prompt("Введите размер массива"));

// let arr = []
// let sum = 0
// let mult = 1

// for (let i = 0; i < arrSize; i++) {
//     arr[i] = Number(prompt("Введите цифру внутри массива"))
// }

// arr.forEach(i => {
//     sum += i
//     mult *= i
// })
// console.log(arr);
// console.log(sum);
// console.log(mult);



// let ran = [];
// let min = -5
// let max = 4
// let countPlus = 0
// let countMinus = 0
// let countZero = 0
// for (let i = 0; i < 20; i++) {
    
//     ran[i] = Math.floor(Math.random() * (max - min) + min)
//     if (ran[i] > 0) {
//         countPlus++;
//     } else if (ran[i] < 0) {
//         countMinus++;
//     } else {
//         countZero++;
//     }
// }
// console.log(ran); 
// console.log(countPlus); 
// console.log(countMinus); 
// console.log(countZero); 

// let arr = [1, 24, 3, 51, 55, 3, 1, 2, 24, 24, 6]
// let maxCount = 0
// let maxElem = 0

// for (let i = 0; i < arr.length; i++) {
//     let elemCount = 0
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i] == arr[j]) {
//             elemCount++
//         }
//     }
//     if (maxCount < elemCount) {
//         maxCount = elemCount
//         maxElem = arr[i]
//     }
// }
// console.log("COUNT", maxCount, "ELEMENT", maxElem)


// let arr = [12, 104, 81]
// let sum = 0

// for (let i = 0; i < arr.length; i++) {
//     let temp = arr[i]
//     let sumEachElem = 0
//     while (temp > 0) {
//         let digit = temp % 10 // 2
//         sum += digit
//         sumEachElem += digit
//         temp = Math.floor(temp / 10)
//     }

//     console.log("SUM of", arr[i], ":", sumEachElem)
// }

// console.log("TotalSUM:", sum)

// let arr = [13, 55, -3, -11, 49, 22, -6];
// let plus = []
// let minus = []
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         plus.push(arr[i])
//     } else if (arr[i] < 0) {
//         minus.push(arr[i])
//     }
// }
// console.log(plus);
// console.log(minus);

// for (let i = 0; i < 123; i++) {}
// for (let elem in obj) {} // index
// for (let elem of obj) {} // elem

// let employee = {
//     names: ["name1", "name2", "name3"],
//     surnames: ["surname1", "surname2", "surname3"],
//     salary: [800, 300, 1000]
// }
// let sum = 0;
// let normal = 0;
// employee.salary.forEach(e => {
//    sum += e
//    normal = sum;
//    normal /= employee.salary.length;
   
// });

// for (let i = 0; i < employee.salary.length; i++) {
//     if (employee.salary[i] < normal) {
//         console.log(employee.names[i], employee.surnames[i], employee.salary[i]);
//     }
// }

// let students = [
//     {
//         name: "Olzhas",
//         grade: 90
//     },
//     {
//         name: "Arman",
//         grade: 45
//     },
//     {
//         name: "Yedil",
//         grade: 70
//     },
//     {
//         name: "Nurzhan",
//         grade: 68
//     },
//     {
//         name: "Erzhan",
//         grade: 98
//     }
// ];

// for (let i = 0; i < students.length; i++) {
//     if (students[i].grade < 59 && students[i].grade > 0) {
//         students[i].mark = "F"
//     } else if (students[i].grade >= 60 && students[i].grade <= 62) {
//         students[i].mark = "D-"
//     } else if (students[i].grade >= 63 && students[i].grade <= 66) {
//         students[i].mark = "D"
//     } else if (students[i].grade >= 67 && students[i].grade <= 69) {
//         students[i].mark = "D+"
//     } else if (students[i].grade >= 70 && students[i].grade <= 72) {
//         students[i].mark = "C-"
//     } else if (students[i].grade >= 73 && students[i].grade <= 76) {
//         students[i].mark = "C"
//     } else if (students[i].grade >= 77 && students[i].grade <= 79) {
//         students[i].mark = "C+"
//     } else if (students[i].grade >= 80 && students[i].grade <= 82) {
//         students[i].mark = "B-"
//     } else if (students[i].grade >= 83 && students[i].grade <= 86) {
//         students[i].mark = "B"
//     } else if (students[i].grade >= 87 && students[i].grade <= 89) {
//         students[i].mark = "B+"
//     } else if (students[i].grade >= 90 && students[i].grade <= 92) {
//         students[i].mark = "A-"
//     } else if (students[i].grade >= 93 && students[i].grade <= 100) {
//         students[i].mark = "A"
//     } else {
//         console.log('There is no number like this');
//     }
// }
// console.log(students);

// // 1)
// function sum (a, b) {
//     console.log(a + b);
// }
// sum(5, 5);

// // 2) 
// function ak (a,b,c) {
//     let arr = [a,b,c];
//     let max = 0;
//     for(let i = 0; i < arr.length; i++){
//             if (arr[i] > max) {
//                 max = arr[i];
//             }
//     }
//     console.log(max);
    
// }
// ak(15, 84, 18);


// // 3)
// function decode() {
// for (let i = 0; i < 5; i++) {
//     console.log("decode");
// }
// }
// decode();

// // MEDIUM 
// // 1)
// let arr = [];
// function random(a) {
//     let min = 20;
//     let max = 98;
//     for (let i = 0; i < 6; i ++) {
//         a[i] = Math.floor(Math.random() * (max - min) + min)
//     }
//     console.log(a);
// }
// random(arr);

// // 2)
// let arrr = [ -10, -5, 5, 4, 21, -87]
// function summa (a) {
//     let sum = 0;
//     for (let i = 0; i < a.length; i++) {
//         sum += a[i];
//     }
//     console.log(sum);
// }
// summa(arr);

// // 3)
// function splitArr(a) {
//     let plus = [];
//     let minus = [];
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] > 0) {
//             plus.push(a[i]);
//         } else if (a[i] < 0) {
//             minus.push(a[i]);
//         }
//     }
//     console.log(plus);
//     console.log(minus);
// }

// splitArr();

$('.question_item').click(function(){
    $(this).toggleClass('icon_active').next().next().slideToggle(300);
    $('.question_item').not(this).next().next().slideUp(300);
    $('.question_item').not(this).removeClass('icon_active').next().next();
})
$('.pages_tab').click(function(){
    $('.pages_modal').fadeToggle(300);
    $('.elements_modal').fadeOut(300);
    $('.pages_tab').toggleClass('active_icon');
    $('.elements_tab').removeClass('active_icon');
})
$('.elements_tab').click(function(){
    $('.elements_modal').fadeToggle(300);
    $('.pages_modal').fadeOut(300);
    $('.elements_tab').toggleClass('active_icon');
    $('.pages_tab').removeClass('active_icon');
})
$('.header_nav>ul>li').not('.pages_tab').not('.elements_tab').click(function(){
    $('.elements_modal').fadeOut(300);
    $('.pages_modal').fadeOut(300);
    $('.pages_tab').removeClass('active_icon');
    $('.elements_tab').removeClass('active_icon');
})
$('.header_burger').click(function(){
    $('.header_burger, .header_nav').toggleClass('active_menu')
    $('body').toggleClass('lock')
})


let tabsTitle = document.querySelectorAll('.tabs_a');
let tabsContent = document.querySelectorAll('.about_row_tabs');
let projectsTabs = document.querySelectorAll('.project_tabs button');
let projects = document.querySelectorAll('.project_elem');
let ALL = [projects[0], projects[1], projects[2], projects[3], projects[4], projects[5], projects[6], projects[7]];
let ARCHITECTURE = [projects[0], projects[4], projects[5]];
let INTERIOR_DESIGN = [projects[3], projects[7]];
let HOUSE_RENOVATION = [projects[1], projects[2], projects[6]];
let ALLTHEARR = [ALL, ARCHITECTURE, INTERIOR_DESIGN, HOUSE_RENOVATION]
ALL.forEach(item=>{
    console.log(item);
})
tabsTitle.forEach((item, i) => {
    item.addEventListener('click', (e)=> {
        e.preventDefault();
        removeActive();
        item.classList.add('active_tabs');
        tabsContent[i].classList.add('active_tabs');
    })
})

projectsTabs.forEach((item, i) => {
    item.addEventListener('click', ()=>{
        removeActiveBlock();
        item.classList.add('active_tabs');
        ALLTHEARR[i].forEach(elem=>{
            elem.classList.add('active_block');
            
           
        })
    })
})


function removeActive() {
    tabsTitle.forEach((item, i) => {
        item.classList.remove('active_tabs');
        tabsContent[i].classList.remove('active_tabs');
    }) 
}

function removeActiveBlock() {
    projects.forEach(item=> {
        item.classList.remove('active_block');
        
    })
    projectsTabs.forEach(item=> {
        item.classList.remove('active_tabs');
    })
    
}

$(document).ready(function(){
    $('.reviews').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: false,
    })
    $('.main_slider').slick({
        arrows: false,
        dots: true,
        vertical: true,
        verticalSwiping: true,
        touchThreshold: 10,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
    })
})