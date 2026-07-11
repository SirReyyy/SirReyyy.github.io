const popup = document.getElementById("achievement-popup");

const unlockedAchievements = new Set();

function unlockAchievement(id) {

    if (unlockedAchievements.has(id)) return;

    unlockedAchievements.add(id);

    const achievement = achievements[id];

    popup.querySelector(".achievement-name").textContent = achievement.title;
    popup.querySelector(".achievement-desc").textContent = achievement.desc;

    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 3000);
}


//---- Achievements ----

const achievements = {
    welcome: {
        title: "Welcome!",
        desc: "Started exploring my portfolio."
    },

    featured: {
        title: "Featured Explorer",
        desc: "Hovered over a featured project."
    },

    project: {
        title: "Project Explorer",
        desc: "Hovered over a portfolio project."
    },

    play: {
        title: "Ready Player One",
        desc: "Launched a playable game."
    }
};


//---- Events ----

window.addEventListener("load", () => {

    unlockAchievement("welcome");

}, { once: true });
