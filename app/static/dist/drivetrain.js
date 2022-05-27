up = document.getElementById("up")
down = document.getElementById("down")
left = document.getElementById("left")
right = document.getElementById("right")


right.addEventListener("mousedown", () => { moveDirection("right", true) })
right.addEventListener("mouseup", () => { moveDirection("right", false) })

left.addEventListener("mousedown", () => { moveDirection("left", true) })
left.addEventListener("mouseup", () => { moveDirection("left", false) })

up.addEventListener("mousedown", () => { moveDirection("up", true) })
up.addEventListener("mouseup", () => { moveDirection("up", false) })

down.addEventListener("mousedown", () => { moveDirection("down", true) })
down.addEventListener("mouseup", () => { moveDirection("down", false) })


function moveDirection(direction, enable) {
    console.log(direction)
    let postBody = {
        "direction": direction,
        "on": enable
    }
    try {
        console.log("in try")
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