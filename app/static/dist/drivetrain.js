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


right.addEventListener("mousedown", () => { moveDirection("right", "TRUE") })
right.addEventListener("mouseup", () => { moveDirection("right", "FALSE") })

left.addEventListener("mousedown", () => { moveDirection("left", "TRUE") })
left.addEventListener("mouseup", () => { moveDirection("left", "FALSE") })

up.addEventListener("mousedown", () => { moveDirection("forward", "TRUE") })
up.addEventListener("mouseup", () => { moveDirection("forward", "FALSE") })

down.addEventListener("mousedown", () => { moveDirection("backward", "TRUE") })
down.addEventListener("mouseup", () => { moveDirection("backward", "FALSE") })

head_right.addEventListener("mousedown", () => { moveHead("right", "TRUE") })
head_right.addEventListener("mouseup", () => { moveHead("right", "FALSE") })

head_left.addEventListener("mousedown", () => { moveHead("left", "TRUE") })
head_left.addEventListener("mouseup", () => { moveHead("left", "FALSE") })

head_up.addEventListener("mousedown", () => { moveHead("up", "TRUE") })
head_up.addEventListener("mouseup", () => { moveHead("up", "FALSE") })

head_down.addEventListener("mousedown", () => { moveHead("down", "TRUE") })
head_down.addEventListener("mouseup", () => { moveHead("down", "FALSE") })

snack1.addEventListener("click", () => { dispenseSnack("one") })
snack2.addEventListener("click", () => { dispenseSnack("two") })
snack3.addEventListener("click", () => { dispenseSnack("three") })
snack4.addEventListener("click", () => { dispenseSnack("four") })



function moveDirection(direction, enable) {
    console.log(direction)
    let postBody = {
        "direction": direction,
        "move": enable
    }
    try {
        $.ajax({
            url: "https://192.168.0.101:5000/move",
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
            url: "https://192.168.0.101:5000/head",
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

function dispenseSnack(bin) {
    console.log(bin)
    let postBody = {
        "bin": bin
    }
    try {
        $.ajax({
            url: "https://192.168.0.101:5000/dispense",
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