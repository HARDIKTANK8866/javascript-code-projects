import get from "./utils/getElement.js"


const URl ='https://randomuser.me/api/'

const img = get('.user-img')
const title = get('.user-title')
const value = get('.user-values')
const btn = get('.btn')
const btns = [...document.querySelectorAll('.icon')]


const showUser = ()=>{

}

window.addEventListener('DOMContentLoaded',showUser)
btn.addEventListener('click',showUser)