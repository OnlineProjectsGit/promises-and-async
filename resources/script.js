let form = document.querySelector('form')
let userWrapper = document.querySelector(".users")
let submitBTN = document.querySelector(".submit-btn")

function sayHI(){
    console.log("HELLO THERE")
}

submitBTN.onclick = ()=> sayHI()

form.onsubmit = ()=>{console.log("SUBMIT EVENT")}



let users = []
console.log(users)


form.addEventListener("submit", (event) => {
    
    event.preventDefault()
    let target = event.target

    let userName = target.querySelector("#user-name").value
    let userEmail = target.querySelector("#user-email").value
    let userDate = target.querySelector("#user-date").value


    let chkbox = document.querySelectorAll("[type=checkbox]")

    let month = ''

    for (let i = 0; i < chkbox.length; i++) {
        const element = chkbox[i];
        if (element.checked) {
            // console.log(element.value)
            month = element.value
        }
    }

    // if (userName === "" || userEmail === "") {


    if (userName === "" || userName.length < 4) {
        alert("Please enter a name and email!")
    } else {
        let newUser = {
            userName: userName,
            userEmail: userEmail,
            userDate: userDate,
            userMonth: month
        }
        users.push(newUser)
    }

    userWrapper.innerHTML = ''

    console.log(users)
    users.map((user, index) => {
        let html = `
        <div class="user" id="${index}">
            <p>Name: ${user.userName}</p>
            <p>${user.userEmail}</p>
            <p>${user.userDate}</p>
            <p>${user.userMonth}</p>

            <button class="click-btn" onclick="getUser(${index})">Click ME</button>
        </div>
        `
        userWrapper.innerHTML += html
    })
})

function getUser(id){
    // delete element users.splice(id, 1)
    console.log(users[id].userName)
}


let clickBTN = document.querySelectorAll(".click-btn")
for (let i = 0; i < clickBTN.length; i++) {
    const element = clickBTN[i];
    element.addEventListener("click", (event) => {
        let target = event. target
        console.log(target)
    })
}



/*let inputs = document.getElementsByTagName('input')
console.log(inputs)

for (let i = 0; i < inputs.length; i++) {
    const element = inputs[i];
    if (element.type === "checkbox") {
        console.log(element.value)
    } 
}*/




let endpoint = "https://onlineprojectsgit.github.io/API/WDEndpoint.json"

let usersArr = []

/*
fetch(endpoint)
    .then(response => {return response.json()})
    .then(data => {
        let usersString = ''
        console.log(data.info.Name)
        for (let i = 0; i < data.info.learners.length; i++) {
            const element = data.info.learners[i];
            usersArr.push(element)
            usersString += ` ${element}`
        }
        console.log(usersString)
    })
    .catch(err => console.log(err))
*/

function syncFunction(){
    let usersString = ''
    fetch("https://onlineprojectsgit.github.io/API/WDEndpoint.json")
        .then(response => response.json())
        .then(data => usersString = data)
    console.log(usersString)
}
syncFunction()


async function asyncFunction(url){
    let usersString = ''
    let response = await fetch(url)
    usersString = await response.json()
    console.log(usersString)
}

asyncFunction(endpoint)

