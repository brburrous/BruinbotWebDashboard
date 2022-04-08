let Terminal = document.getElementById("Terminal")


let addMessage = (Terminal, messageBody) => {
    message = document.createElement("pre")
    message.setAttribute("data-prefix", "$")


    code = document.createElement("code")
    code.innerHTML = messageBody

    message.appendChild(code)
    Terminal.appendChild(message)
    scrollToView(Terminal)
}

//todo: autoformat message and split into multiple lines based on the length of the message

let scrollToView = (Terminal) => {
    bottomElement = Terminal.lastChild
    offset = bottomElement.offsetTop
    Terminal.scrollTop = offset
}

let fooBar = () => {
    console.log("Hello, world")
}

export { fooBar }