let happy = document.getElementById("happy")
let angry = document.getElementById("angry")
let surprise = document.getElementById("surprise")
let happyEmphasis = document.getElementById("happyEmphasis")
let sad = document.getElementById("sad")
let neutral = document.getElementById("neutral")
let loading = document.getElementById("loading")
let bounce = document.getElementById("bounce")

happy.addEventListener("click", function () {
    sendEmotion("happy")
})

angry.addEventListener("click", function () {
    sendEmotion("angry")
})

surprise.addEventListener("click", function () {
    sendEmotion("surprise")
})

happyEmphasis.addEventListener("click", function () {
    sendEmotion("happy_emphasis")
})

sad.addEventListener("click", function () {
    sendEmotion("sad")
})

neutral.addEventListener("click", function () {
    sendEmotion("neutral")
})

loading.addEventListener("click", function () {
    sendEmotion("loading")
})

bounce.addEventListener("click", function () {
    sendEmotion("bounce")
})

function sendEmotion(emotion) {
    console.log(emotion)
    let postBody = {
        "emotion": emotion,
        "duration": "50"
    }
    $.ajax({
        url: "https://192.168.0.100:5000/face",
        type: "POST",
        data: JSON.stringify(postBody),
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        async: false,
        success: function (msg) {
            console.log(msg);
        }
    })
}