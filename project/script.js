document.getElementById("lastModified").textContent = document.lastModified;

const tips = [
    "Keep your elbow in when shooting.",
    "Use your legs to generate shooting power.",
    "Always follow through and keep your wrist relaxed",
    "Practice dribbling with both hands",
    "Protect the ball by keeping it low and tight",
    "Work on footwork. Good Balance improves everything",
    "Take high-percentage shots, not rushed ones"
];

const randomTip = tips[Math.floor(Math.random() * tips.length)]

const tipElement = document.getElementById("quickTip");
if (tipElement) {
    tipElement.textContent = randomTip;
}


const progressForm = document.querySelector("#progressForm");
const resultsBox = document.querySelector("#progressResults");

if (progressForm) {
    progressForm.addEventListener("sumbit", (e) => {
        e.preventDefault();

        const formData = new FormData(progressForm);
        const progressData = {};

        FormData.forEach((value, key) => {
            progressData[key] = value;
        });

        localStorage.setItem("basketballProgress", JSON.stringify(progressData));

        if (resultsBox) {
            resultsBox.innerHTML = `
                <h3>Your Logged Progress:</h3>
                <p><strong>Shots Today:</strong> ${proggressData.shotstoday}</p>
                <p><strong>Drills This Week:</strong> ${progressData.drillsThisWeek}</p>
                <p><strong>Layups Practiced:</strong> ${progressData.layups}</p>
                <p><strong>Free throws:</strong> ${progressData.freethrows}</p>
                <p><strong>3-Pointers:</strong> ${progressData.threePointers}</p>
                <p><strong>Scrimmage Minutes:</strong> ${progressData.scrimmage}</p>
            `;
        }
    });

    const saved = JSON.parse(localStorage.getItem("basketballProgress"));
    if (saved && resultsBox) {
        resultsBox.innerHTML = `
            <h3>Previously Logged:</h3>
            <p><strong>Shots Today:</strong> ${saved.shotstoday}</p>
            <p><strong>Drills This Week:</strong> ${saved.drillsThisWeek}</p>
            <p><strong>Layups Practiced:</strong> ${saved.layups}</p>
            <p><strong>Free Throws:</strong> ${saved.freethrows}</p>
            <p><strong>3-Pointers:</strong> ${saved.threePointers}</p>
            <p><strong>Scrimmage Minutes:</strong> ${saved.scrimmage}</p>
        `;
    }
}