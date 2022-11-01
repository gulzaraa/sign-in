'use strict'

let email = document.querySelector('#email')
let password = document.querySelector('#password')
let button = document.querySelector('#btn')

const signIn = () => {
    fetch(`https://10.1.1.171:5500/users?email=${emailValue}&password=${passwordValue}`,{
        method: 'GET',
    }).then((res) => res.json()).then((data) => {
     if (data.lenght === 0){
       let a = document.createElement('a') ;
       a.href = 'src/error.html';
       a.click()
     } else {
        let a = document.createElement('a');
        a.href = 'src/lucky.html';
        a.click()
     }
    })
}
submit.onclick = () => {
    signIn(email.value, password.value)
}