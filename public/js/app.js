const weatherForm = document.querySelector("form")
const search = document.querySelector("input")
const messageOne = document.querySelector("#message-1")
const messageTwo = document.querySelector("#message-2")


weatherForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const location = search.value

    messageOne.textContent = "Your forecast is loading..."
    messageTwo.textContent = ""

    fetch("http://localhost:3000/weather?address=" + encodeURIComponent(location)).then((Response) => {
        Response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})