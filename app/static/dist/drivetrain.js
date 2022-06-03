up = document.getElementById("up")
down = document.getElementById("down")
left = document.getElementById("left")
right = document.getElementById("right")

head_up = document.getElementById("nod-up")
head_down = document.getElementById("nod-down")
head_left = document.getElementById("nod-left")
head_right = document.getElementById("nod-right")

snack1 = document.getElementById("snack-1")
snack2 = document.getElementById("snack-2")
snack3 = document.getElementById("snack-3")
snack4 = document.getElementById("snack-4")


right.addEventListener("mousedown", () => { moveDirection("right", true) })
right.addEventListener("mouseup", () => { moveDirection("right", false) })

left.addEventListener("mousedown", () => { moveDirection("left", true) })
left.addEventListener("mouseup", () => { moveDirection("left", false) })

up.addEventListener("mousedown", () => { moveDirection("up", true) })
up.addEventListener("mouseup", () => { moveDirection("up", false) })

down.addEventListener("mousedown", () => { moveDirection("down", true) })
down.addEventListener("mouseup", () => { moveDirection("down", false) })

head_right.addEventListener("mousedown", () => { moveHead("right", true) })
head_right.addEventListener("mouseup", () => { moveHead("right", false) })

head_left.addEventListener("mousedown", () => { moveHead("left", true) })
head_left.addEventListener("mouseup", () => { moveHead("left", false) })

head_up.addEventListener("mousedown", () => { moveHead("up", true) })
head_up.addEventListener("mouseup", () => { moveHead("up", false) })

head_down.addEventListener("mousedown", () => { moveHead("down", true) })
head_down.addEventListener("mouseup", () => { moveHead("down", false) })

snack1.addEventListener("click", () => { dispenseSnack(1) })
snack2.addEventListener("click", () => { dispenseSnack(2) })
snack3.addEventListener("click", () => { dispenseSnack(3) })
snack4.addEventListener("click", () => { dispenseSnack(4) })



function moveDirection(direction, enable) {
    console.log(direction)
    let postBody = {
        "direction": direction,
        "on": enable
    }
    try {
        $.ajax({
            url: "https://192.168.0.100:5000/direction",
            type: "POST",
            data: JSON.stringify(postBody),
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            async: true,
            success: function (msg) {
                console.log(msg);
            }
        })
    } catch (error) {
        console.log(error)
    }
}

function moveHead(direction, enable) {
    console.log(direction)
    let postBody = {
        "direction": direction,
        "on": enable
    }
    try {
        $.ajax({
            url: "https://192.168.0.100:5000/direction",
            type: "POST",
            data: JSON.stringify(postBody),
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            async: true,
            success: function (msg) {
                console.log(msg);
            }
        })
    } catch (error) {
        console.log(error)
    }
}

function dispenseSnack(slot) {
    console.log(slot)
    let postBody = {
        "slot": slot
    }
    try {
        $.ajax({
            url: "https://192.168.0.100:5000/snack",
            type: "POST",
            data: JSON.stringify(postBody),
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            async: true,
            success: function (msg) {
                console.log(msg);
            }
        })
    } catch (error) {
        console.log(error)
    }
}