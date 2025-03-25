// 🏆 Live Score Updater (Updates scores randomly every 5 sec)
setInterval(() => {
    let rows = document.querySelectorAll(".match-table tr");
    for (let i = 1; i < rows.length; i++) {
        let randomScore = Math.floor(Math.random() * 5) + " - " + Math.floor(Math.random() * 5);
        if (rows[i].cells.length > 3) { 
            rows[i].cells[3].innerText = randomScore; // Update existing score
        } else {
            let scoreCell = rows[i].insertCell(3);
            scoreCell.innerText = randomScore; // Add score if missing
        }
    }
}, 5000);

// 🌙 Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// 🔍 Search Players
document.getElementById("search").addEventListener("input", function () {
    let filter = this.value.toLowerCase();
    let players = document.querySelectorAll(".player-card");

    players.forEach(player => {
        let name = player.textContent.toLowerCase();
        player.style.display = name.includes(filter) ? "block" : "none";
    });
});

// 📰 Fetch News (Replace with real API later)
async function fetchNews() {
    const newsSection = document.querySelector(".latest-news");
    
    dummyNews.forEach(article => {
        let newsItem = document.createElement("div");
        newsItem.innerHTML = `<img src="${article.image}" width="200"><p><i>${article.title}</i></p>`;
        newsSection.appendChild(newsItem);
    });
}
fetchNews();
