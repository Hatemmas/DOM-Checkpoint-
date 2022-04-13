
// let buttons = document.querySelectorAll('button')

// function calculate(e) {
//     let t = e.target
//     let div = t.parentElement
//     let p = div.querySelector('p')
//     let quantity = Number(p.innerHTML)

// }

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', calculate)    
// }

let buttons = document.querySelectorAll('button')

function sum(){
    let prices = document.querySelectorAll('.price')
    let totalTag = document.getElementById('total')
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
        total += Number(prices[i].innerHTML)
        console.log(total)
    }
    totalTag.innerHTML=total
}

function calculate(e) {
    let t = e.target
    let div = t.parentElement
    let p = div.querySelector('p')
    let quantity = Number(p.innerHTML)
    if(t.innerHTML=="+"){

        quantity++
    }else if (t.innerHTML=="-"  && quantity > 0 ){
        quantity--
    }
    p.innerHTML = quantity
    let tr = div.parentElement.parentElement
    let unitPrice = tr.querySelector('.unitPrice')
    let up = Number(unitPrice.innerHTML)
    let price = tr.querySelector('.price')
    console.log(tr)
    price.innerHTML = quantity*up
    console.log(up)
    sum()
}


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click',calculate)
}


let likesButtons = document.querySelectorAll('.like')

function changeColor(e){
    let btn = e.target    
    if (btn.style.color!="red"){
        btn.style.color="red"
    } 
    else if (btn.style.color=="red"){
        btn.style.color=""
    }
}


for (let i = 0; i < likesButtons.length; i++) {
    likesButtons[i].addEventListener('click', changeColor)
}


var deleteBtns = document.getElementsByClassName('delete')
console.log(deleteBtns)

function delete_row(e){
    let del = e.target
    let tr= del.parentElement.parentElement.parentElement.parentElement
    console.log(tr)
    tr.remove()
    sum()
}


for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener('click',delete_row)  

    
}