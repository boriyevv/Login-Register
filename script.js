let password = document.getElementById('password')
let reEnter = document.getElementById('re-enter')
let form = document.getElementById('form')
let moon = document.getElementById('moon')
let sun = document.getElementById('sun')
let body = document.getElementById('body')
let container = document.getElementById('container')
let crm = document.getElementById('crm')
let open1 = document.getElementById('open')
let label = document.getElementById('label')
let label1 = document.getElementById('label1')
let label2 = document.getElementById('label2')
let label3 = document.getElementById('label3')
let label4 = document.getElementById('label4')
let title = document.getElementById('title')




    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        // console.log('ishladi')
        if(password.value == reEnter.value){
            alert('Tasdiqlandi')
        }
        else{
            alert('Kodlar mos emas')
        }
    })


moon.addEventListener('click', ()=>{

    sun.style.display = 'inline-block'
    moon.style.display = 'none'
    body.style.background = "rgb(20, 21, 47)"
    container.style.background = 'rgb(20, 21, 47)'
    form.style.background = 'rgb(34, 35, 71)'
    crm.style.color = 'white'
    open1.style.color = 'white'
    label.style.color = 'white'
    label1.style.color = 'white'
    label2.style.color = 'white'
    label3.style.color = 'white'
    label4.style.color = 'white'
    title.style.color = 'white'


});

sun.addEventListener('click', ()=>{

    moon.style.display = 'inline-block'
    sun.style.display = 'none'
    body.style.background = "#F0F0F0"
    container.style.background = 'none'
    form.style.background = 'white'
    crm.style.color = 'rgba(0, 0, 0, 0.614)'
    label.style.color = 'black'
    label1.style.color = 'black'
    label2.style.color = 'black'
    label3.style.color = 'black'
    label4.style.color = 'black'
    title.style.color = 'black'



})