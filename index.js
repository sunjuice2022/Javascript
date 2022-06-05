 //.json负责储存声音等等
 {
const roles = ['student', 'teacher', 'boss']
let role = roles[1]

if (role ==='student') {
console.log('hello!');
} else if (role === 'teacher') {
    console.log ('hi');
} else if (role === 'boss') {
    console.log('??');
} else {
    console.log('...');
}
console.log(222)

switch (role) {
    case roles[0]:
        console.log('hello');
        break;
    case roles[1]:
        console.log('hi');
        break;
    case roles[2]:
        console.log('???');
        break;
    default:
        console.log('...');
        break;
}
}

{
    let arrayNumber = []
    for (let i = 0; i<10; i++) {
        arrayNumber[i]= i + 1
    }
    console.log(arrayNumber);

    let total=0
        for (let i=0; i<arrayNumber.length; i++)
        total +=arrayNumber[i]
        console.log(total)

    total=0
    arrayNumber.forEach(element => {
        total += element
    });    // forEach的效率比较高但是耗时长，不适于很多数据的时候
    console.log(total)
}

{
    function fun1() {
        console.log('hello world')
    }
    fun1()
    function fun2(info) {
        console.log(info)
    }
    fun2('orange')
    function fun3(info) {
        console.log(`${info} juice`)
    }
    fun3('apple')

    function fun4(a, b) {
    console.log(a+b);
    }
    fun4(2, 4)


    function fun5 (array) {
        let cum=0
        array.forEach (num => {
            cum += num
        })
        console.log(cum);
    }
    fun5([2,5,6,67,10]);

function fun5_1 (a,b, ... rest) {
    let cum = a + b;
    rest.forEach (num => {
        cum += num
    })
    console.log(cum)
}
    fun5_1(2,5,6,67,10)


    function fun6(a,b) {
        console.log('here 1') //会出现
        return a+b
        console.log('here2') //不会出现
    }
     let cum=fun6(1, 3)
     console.log(cum)


     const obj = {
         name: 'Jenny',
         age: 18
         
     }

     function fun7(obj) {
         console.log('name:', obj.name)
         console.log('age:', obj.age)
        obj.name ='Carson'
     }
     fun7(obj)
     console.log(obj)

     function fun8({name, age}) {
         name = 'haha'
         age = 20
         return {name, age}

     }

     const newObj = fun8(obj)
     console.log(newObj)
     console.log(obj)

     const fun9 = function () {
         console.log('fun9');
     }
     fun9()
     const arrow_fun1 = () => {
         console.log('array_fun1')
     }
     arrow_fun1()

     const arrow_fun2 = a => {
         console.log(a)
     }

     const arrow_fun3 = (a, b) => {
         console.log(a);
     }
     const array = [1,2,3,4,5]
     const array_fun4 = (num) => {
         console.log(num);
     }

     array.forEach(array_fun4)
}   //箭头函数


{
    const circle = {
        radius: 1,
        location: {
            x:1,
            y:2
        },
        isVisible: true,
        draw1: function () {
            console.log('draw1');
        },
        draw2 () {
            console.log('draw2');
        }
    }

    circle.draw1()
    circle.draw2()


    const radius =1
    const location = {x:1, y:2}
    const isVisible = true
    function draw() {
        console.log('draw');
    }

    const circle2 = {
        radius: 1,
        location: location,
        isVisible: isVisible,
        draw: draw
    }

    circle2.draw()

    const circle3 = {
        radius,
        location,
        isVisible,
        draw
    }

    circle3.draw()
}



{
    const content = document.querySelector('.content')
    content.innerHTML = 'hahah'

    console.log(content)

    const contents = document.querySelectorAll('.content')

    console.log(contents);

    contents.forEach((node, index) => {
        node.innerHTML = `content ${index}`
    })

    //document.getElementById()
   // document.getElementsByClassName()

const span = document.createElement('div') //创造元素
span.innerHTML = '<h1>Click Me</h1>'
contents[contents.length -1].appendChild(span)
contents[contents.length -1].append(span)

const domBody = document.querySelector('body')
domBody.appendChild(span)

span.classList.add('active')
span.classList.remove('active')
span.classList.toggle('active')

span.setAttribute('style', 'cursor: pointer')

span.addEventListener('click', () =>{
    span.classList.toggle('active')
})



}

{
//求和-方法1
let total = 0,
array=[1,2,3,4,5,6,7,8,9,10]
for (i=0; i<array.length; i ++) {
    total += array[i]
}
console.log(total)
//求和-方法2
total = 0
array.forEach (num => {
    total += num
})
console.log(total);
}

{
    //九九乘法表
    let str = ''
    for (let i = 1; i <10; i ++) {
        for (let j=1; j<=i; j ++) {
            str += `${i}*${j} = ${i*j} `;
            if (i === j) {
                str += '\n'
            }

        }
    }
    console.log(str);
}

{
function fun6(a,b) {
   
    return a+b
    console.log('here2') //不会出现
}
 console.log(fun6(1, 3))


}


