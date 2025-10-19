const roomContent = document.getElementById("room-content");
const header = document.querySelector("header");
let currentRoom = 1;

const roomTitles = [
    "Music,"
    "Podcasting,"
    "Skating,"
    "Baking,"
    "Hardware,"
    "Coding,"
];

function nextRoom() {
    currentRoom++;
    loadRoom(currentRoom);
}

function makeGlowText(text) {
    return text.split(" ").map(word => '<span class="glow-word">${word}</span>').join(" ");
}

function loadRoom(room) {
    header.textContent = roomTitles[room - 1];
    roomContent.classList.remove("fade");
    void roomContent.offsetWidth;
    roomContent.classList.add("fade");

    switch(room) {

        case 1:
            roomContent.innerHTML = '
                <p>${makeGlowText("Pause, I'm Onto something. Don't worry, you Could do better. A Song is what I'm Talking about.")}</p>
                <input id="answer" placeholder="Enter the hidden word...">
                <button onclick="checkAnswer('podcast')">Submit</button>
            ';
            break;

        case 2:
            roomContent.innerHTML = '
                <audio controls src="podcast.mp3"></audio>
                <p>${makeGlowText("Sometimes we Skate through thoughts... Keep moving, At the edge of clarity, Try again, In between words, Nothing is still, Go on.")}</p>
                <input id="answer" placeholder="Enter the hidden word...">
                <button onclick="checkAnswer('skating')">Submit</button>
            ';
            break;
        
        case 3:
            roomContent.innerHTML = '
                <p>${makeGlowText("One of these things don't belong on the rink.")}</p>
                <div>
                    <img src="roller.png" class="icon" id="roller">
                    <img src="ice.png" class="icon" id="ice">
                    <img src="whisk.png" class="icon" id="whisk">
                </div>
            ';
            document.getElementById("whisk").addEventListener("click," () => {
                roomContent.innerHTML = '<p class="fade">${makeGlowText("From cold ice... to a hot oven.")}</p>';
                setTimeout(nextRoom, 3000);
            });
            break;

        case 4:
            roomContent.innerHTML = '
                <p>${makeGlowText("Ren'Py Visual Story coming soon!!!")}</p>
                <p>${makeGlowText("I tHought I wAs Ready, but the wax paper Did Weird things. Wires And Resistors would've been Easier.")}</p>
                <input id="answer" placeholder="Enter the hidden word...">
                <button onclick="checkAnswer('hardware')">Submit</button>
            ';
            break;
    }
}