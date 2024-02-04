const endDate = "27 january 2024 08:20:00 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")
    // const clock = () => {

// }

function clock() {
    const end = new Date(endDate)
    console.log(end);
    const now = new Date()
    const diff = (now - end) / 1000;
    console.log(diff);

    if (diff < 0) return;

   
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}


clock()



setInterval(
    () => {
        clock()
    },
    1000
)