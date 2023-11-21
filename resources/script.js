let form = document.querySelector('form')

console.log(form)

form.addEventListener("submit", (event) => {
    event.preventDefault()
    let target = event.target
    console.log(target)
    let userName = target.querySelector("#user-name").value
    let userEmail = target.querySelector("#user-email").value
    let userDate = target.querySelector("#user-date").value


    let chkbox = document.querySelectorAll("[type=checkbox]")

    for (let i = 0; i < chkbox.length; i++) {
        const element = chkbox[i];
        if (element.checked) {
            console.log(element.value)
        }
    }

    if (userName === "" || userEmail === "") {
        alert("Please enter a name and email!")
    } else {
        console.log(userName)
    }
    console.log(userEmail)
    console.log(userDate)
})

let inputs = document.getElementsByTagName('input')
console.log(inputs)

for (let i = 0; i < inputs.length; i++) {
    const element = inputs[i];
    if (element.type === "checkbox") {
        console.log(element.value)
    } 
}