import { doc } from "firebase/firestore"

let Terminal = document.getElementById("Terminal")


let addMessage = (Terminal, messageBody) => {
    let message = document.createElement("pre")
    message.setAttribute("data-prefix", "$")


    let code = document.createElement("code")
    code.innerHTML = messageBody

    message.appendChild(code)
    Terminal.appendChild(message)
    scrollToView(Terminal)
}

//todo: autoformat message and split into multiple lines based on the length of the message

let scrollToView = (Terminal) => {
    let bottomElement = Terminal.lastChild
    let offset = bottomElement.offsetTop
    Terminal.scrollTop = offset
}

let fooBar = () => {
    console.log("Hello, world")
}

let clearTerminal = () => {
    while (Terminal.firstChild) {
        Terminal.removeChild(Terminal.firstChild)
    }
}

let clearBtn = document.getElementById("clearBtn")
clearBtn.addEventListener("click", clearTerminal)

export { addMessage, Terminal }

