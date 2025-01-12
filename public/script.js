// Credentials for each level
const credentials = {
    1: { username: "greg.huang924", password: "buddy924" },
    2: { username: "bfranch@yomail.com", password: "skateBoard112" },
    3: { username: "dex.macey@dhxi.mac", password: "H3110W0r1d!" }
};

// Attempt counts and hints for each level
const levelData = {
    1: { attempts: 7, hint: "My dog's name followed by a few numbers", image: "/images/G-Huang.png" },
    2: { attempts: 5, hint: "Bussiness contact, hobbyBDAY", image: "/images/B-Franch.png" },
    3: { attempts: 3, hint: "My s3cur3ed 1if3 qu0t3!", image: "/images/D-Macey.png" }
};

// Initial level setup
let currentLevel = 1;
let remainingAttempts = levelData[currentLevel].attempts;

// DOM elements
const attempts = document.getElementById("attempts");
const hint = document.getElementById("hint");
const result = document.getElementById("result");
const levelTitle = document.getElementById("level-title");
const levelImage = document.getElementById("level-image");
const loginForm = document.getElementById("loginForm");

// Update UI for the current level
function updateLevelUI() {
    levelTitle.textContent = `Level ${currentLevel}`;
    attempts.textContent = `Attempts left: ${remainingAttempts}`;
    hint.style.display = "none"; // Hide hint initially
    levelImage.src = levelData[currentLevel].image; // Update image
}

// Check login credentials
function checkLogin(username, password) {
    const correctCredentials = credentials[currentLevel];
    return (
        username === correctCredentials.username &&
        password === correctCredentials.password
    );
}

// Handle login form submission
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (checkLogin(username, password)) {
        result.textContent = "Access Granted! Moving to the next level...";
        result.style.color = "#00ff00";

        // Move to the next level
        currentLevel++;
        if (currentLevel > 3) {
            alert("Congratulations! You completed all levels!");
            return; // Stop the game
        }

        remainingAttempts = levelData[currentLevel].attempts;
        updateLevelUI();
        result.textContent = ""; // Clear the result message
    } else {
        remainingAttempts--;
        attempts.textContent = `Attempts left: ${remainingAttempts}`;

        if (remainingAttempts <= 2) {
            hint.style.display = "block";
            hint.innerHTML = `<strong>Hint:</strong> ${levelData[currentLevel].hint}`;
        }

        if (remainingAttempts <= 0) {
            result.textContent = "Access Denied! Game Over.";
            result.style.color = "#ff0000";
            loginForm.querySelector("button").disabled = true; // Disable form
        } else {
            result.textContent = "Incorrect credentials, try again.";
            result.style.color = "#ff0000";
        }
    }
});

// Initialize level 1
updateLevelUI();
