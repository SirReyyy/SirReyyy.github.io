const featuredGames = [
    "uefn-hotel",
    "uefn-elevator",
    "unity-multiplayer",
    "unity-tictac",
    // "gd-2dplatformer",
    "unity-pocket"
    // "ue-tpdemo"
];

const uefnGameData = {
  "uefn-hotel": {
    title: "The Endless Hotel",
    tags: "Arcade | Casual | Horror | Single Player",
    thumbnail: "img/thumbnails/UEFN-Hotel.png",
    description: "The Endless Hotel is a surreal, atmospheric experience that plunges players into an infinite hotel filled with eerie corridors, shifting rooms, and haunting mysteries. With its unsettling ambiance, anomalies, and ever-changing layout, it offers a unique blend of exploration and psychological horror.",
    screenshots: [
      "img/screenshots/uefn-hotel-1.png",
      "img/screenshots/uefn-hotel-2.png",
      "img/screenshots/uefn-hotel-3.png"
    ],
    link: "https://www.fortnite.com/@sirreyyy/1910-8664-1172"
  },
  "uefn-elevator": {
    title: "1 vs. 100",
    tags: "Arcade | Casual | Single Player | Shooter",
    thumbnail: "img/thumbnails/UEFN-Elevator.png",
    description: "Elevator Tower Escape lets you race against time in this arcade-inspired shooter! Armed with your trusty Mammoth Pistol and unlimited ammo, search for keycards hidden throughout a guard-infested tower. Outmaneuver 100 enemies, collect the keys, and escape before the timer hits zero.",
    screenshots: [
      "img/screenshots/uefn-elevator-1.png",
      "img/screenshots/uefn-elevator-2.png",
      "img/screenshots/uefn-elevator-3.png"
    ],
    link: "https://www.fortnite.com/@sirreyyy/7919-4258-3271"
  },
  "uefn-deathmatch": {
    title: "Deathmatch Classic",
    tags: "Arcade | Arena | Casual | Teams",
    thumbnail: "img/thumbnails/UEFN-Deathmatch.png",
    description: "Deathmatch Classic is a fast-paced, team-based shooter inspired by a classic cs map. With unlimited ammo, quick loadouts, and no room for hesitation, it’s chaos at its finest—perfect for settling old scores in a hail of bullets.",
    screenshots: [
      "img/screenshots/uefn-deathmatch-1.png",
      "img/screenshots/uefn-deathmatch-2.png",
      "img/screenshots/uefn-deathmatch-3.png"
    ],
    link: "https://www.fortnite.com/@sirreyyy/7984-3984-6041"
  },
  "uefn-wmtissue": {
    title: "Where's My Tissue?",
    tags: "Arcade | Casual | Objective | Teams",
    thumbnail: "img/thumbnails/UEFN-WMTissue.png",
    description: "Where’s My Tissue is a chaotic, arcade-inspired multiplayer game where players switch between two roles: Roll Raiders, who race around collecting tissue rolls, and Wipe Warriors, who hunt them down with scythes. Navigate an upgraded map, outsmart your opponents, and switch sides after each round to keep the action fresh.",
    screenshots: [
      "img/screenshots/uefn-wmtissue-1.png",
      "img/screenshots/uefn-wmtissue-2.png",
      "img/screenshots/uefn-wmtissue-3.png"
    ],
    link: "https://www.fortnite.com/@sirreyyy/9942-6114-0517"
  },
  "uefn-kots": {
    title: "King of the Swords",
    tags: "1v1 | Arena | Competitive | Melee",
    thumbnail: "img/thumbnails/UEFN-Kots.png",
    description: "King of the Sword is the ultimate sword-fighting tournament, where players battle through intense 1v1 duels in a high-stakes, bracket-style format. No guns—just blades, reflexes, and pure skill. Start as a novice, climb your way through the ranks, and claim the throne as the Grand Champion. Only one can wear the crown.",
    screenshots: [
      "img/screenshots/uefn-kots-1.png",
      "img/screenshots/uefn-kots-2.png",
      "img/screenshots/uefn-kots-3.png"
    ],
    link: "https://www.fortnite.com/@sirreyyy/3202-1287-6622"
  },
  "uefn-pachunt": {
    title: "PacHunt",
    tags: "Battle | Competitive | Free for All | Gunfight",
    thumbnail: "img/thumbnails/UEFN-PacHunt.png",
    description: "Pachunt drops you into a wild Free-For-All arena with no building, just pure survival instinct. Navigate a massive maze, adapt to random weapons on each respawn, and fight to control unlocking weapon caches. It’s fast, it’s unpredictable, and it’s every player for themselves. Be the PAC — hunt or be hunted.",
    screenshots: [
      "img/screenshots/uefn-pachunt-1.png",
      "img/screenshots/uefn-pachunt-2.png",
      "img/screenshots/uefn-pachunt-3.png"
    ],
    link: "https://www.fortnite.com/@sirreyyy/7123-4441-8086"
  },
  "uefn-labescape": {
    title: "Lab Escape",
    tags: "Casual | Just for Fun | Melee | Teams",
    thumbnail: "img/thumbnails/UEFN-LabEscape.png",
    description: "Lab Escape is a high-stakes team challenge set inside a mysterious Laboratory Arena. Work together to call in supply drops, unlock gates, and retrieve the keycard—but beware: you’ll need to decide whether to fight or flee. Will your team escape... or be eliminated trying?",
    screenshots: [
      "img/screenshots/uefn-labescape-1.png",
      "img/screenshots/uefn-labescape-2.png",
      "img/screenshots/uefn-labescape-3.png"
    ],
    link: "https://www.fortnite.com/@sirreyyy/7623-7293-7581"
  },
  "uefn-boxfight": {
    title: "Melee Boxfight",
    tags: "Arena | Boxfight | Free for All | Melee",
    thumbnail: "img/thumbnails/UEFN-BoxFight.png",
    description: "Melee Weapons Only Boxfight Arena drops players into a classic box fight arena—but with a twist: it’s melee weapons only. Battle in a fast-paced free-for-all, dodge the incoming storm, and fight to be the last one standing. No guns, just grit.",
    screenshots: [
      "img/screenshots/uefn-boxfight-1.png",
      "img/screenshots/uefn-boxfight-2.png",
      "img/screenshots/uefn-boxfight-3.png"
    ],
    link: "https://www.fortnite.com/@sirreyyy/0630-7567-1391"
  },
  "uefn-upward": {
    title: "Upward",
    tags: "Arena | Building | Casual | Free for All",
    thumbnail: "img/thumbnails/UEFN-Upward.png",
    description: "Upward is a fast-paced competitive experience where players face off in 5 unique rounds, each testing different skills. Hone your mechanics in the Building Practice Arena, race upward in a vertical build challenge, survive the deadly rising lava, and unleash chaos in the elimination rounds. Every match is a new chance to dominate the arena!",
    screenshots: [
      "img/screenshots/uefn-upward-1.png",
      "img/screenshots/uefn-upward-2.png",
      "img/screenshots/uefn-upward-3.png"
    ],
    link: "https://www.fortnite.com/@sirreyyy/3511-2783-0218"
  }
};

const unityGameData = {
  "unity-multiplayer": {
    title: "Multiplayer City",
    tags: "3D | Arcade | Casual | Multiplayer",
    thumbnail: "img/thumbnails/Unity-Multiplayer.png",
    description: "Multiplayer City is a chaotic, arcade-style multiplayer showing a demo of how players create rooms and lobbys, then join and play together. It features a simple arena where players can run around, interact with objects, and have fun in a shared space. The game demonstrates the core mechanics of multiplayer connectivity and player interaction.",
    screenshots: [
      "img/screenshots/unity-multicity-1.png",
      "img/screenshots/unity-multicity-2.png",
      "img/screenshots/unity-multicity-3.png"
    ],
    link: "https://sirreyyy.itch.io/multiplayer-city"
  },
  "unity-tictac": {
    title: "Tic Tac Tournament",
    tags: "2D | Arcade | Casual | Multiplayer",
    thumbnail: "img/thumbnails/Unity-TicTac.png",
    description: "Tic Tac Tournament is a local multiplayer game where players take turns placing 3 marks per turn, each in a different section of a 9x9 grid made of smaller boards. Win sections by forming lines, then align 3 won sections to claim victory on the big board.",
    screenshots: [
      "img/screenshots/unity-tictac-1.png",
      "img/screenshots/unity-tictac-2.png",
      "img/screenshots/unity-tictac-3.png"
    ],
    link: "https://sirreyyy.itch.io/tictac-tournament"
  },
  "unity-pocket": {
    title: "Pocket Merge",
    tags: "2D | Arcade | Casual | Puzzle",
    thumbnail: "img/thumbnails/Unity-Pocket.png",
    description: "Pocket Merge is physics-based merging game inspired by the popular Suika Game — but with a twist! Drop and combine billiard balls to climb the numbers, rack up points, and keep the table from overflowing.",
    screenshots: [
      "img/screenshots/unity-pocket-1.png",
      "img/screenshots/unity-pocket-2.png",
      "img/screenshots/unity-pocket-3.png"
    ],
    link: "https://sirreyyy.itch.io/pocket-merge"
  },
  "unity-bounceandspin": {
    title: "Bounce and Spin",
    tags: "3D | Arcade | Casual | Endless Runner",
    thumbnail: "img/thumbnails/Unity-BounceAndSpin.png",
    description: "Bounce and Spin lets you control a constantly bouncing ball atop a rotating hexagonal platform field. Platforms move toward you while random tiles vanish—rotate the arena to line up the next safe landing. Miss, and it’s game over.",
    screenshots: [
      "img/screenshots/unity-bounceandspin-1.png",
      "img/screenshots/unity-bounceandspin-2.png",
      "img/screenshots/unity-bounceandspin-3.png"
    ],
    link: "https://sirreyyy.itch.io/bounceandspin"
  },
  "unity-scilab": {
    title: "Science Laboratory",
    tags: "3D | Casual | First Person | Objective",
    thumbnail: "img/thumbnails/Unity-SciLab.png",
    description: "Step into a futuristic lab in this mini quest demo! Collect essential lab equipment, race against time, and team up with your chatty flying companion, Chatty, to complete your objectives before the clock runs out.",
    screenshots: [
      "img/screenshots/unity-scilab-1.png",
      "img/screenshots/unity-scilab-2.png",
      "img/screenshots/unity-scilab-3.png"
    ],
    link: "https://sirreyyy.itch.io/science-laboratory"
  },
  "unity-catsweeper": {
    title: "Catsweeper",
    tags: "2D | Casual | Puzzle | Objective",
    thumbnail: "img/thumbnails/Unity-Catsweeper.png",
    description: "Catsweeper is a casual puzzle game where players must clear a grid of hidden cats while avoiding traps. Inspired by the classic Minesweeper, it combines strategy and luck as players uncover tiles, gather clues, and try to avoid all the cats while uncovering the field.",
    screenshots: [
      "img/screenshots/unity-catsweeper-1.png",
      "img/screenshots/unity-catsweeper-2.png",
      "img/screenshots/unity-catsweeper-3.png"
    ],
    link: "https://sirreyyy.itch.io/catsweeper"
  },
  "unity-cardofcats": {
    title: "Card of Cats",
    tags: "2D | Casual | Puzzle | Objective",
    thumbnail: "img/thumbnails/Unity-CardOfCats.png",
    description: "Card of Cats memory game is a fun and engaging way to test your memory skills. Players flip over cards to find matching pairs of adorable cats, all while trying to have the least guess attempts. With colorful graphics and cute sound effects, this game is perfect for players of all ages looking for a quick and enjoyable challenge.",
    screenshots: [
      "img/screenshots/unity-cardofcats-1.png",
      "img/screenshots/unity-cardofcats-2.png",
      "img/screenshots/unity-cardofcats-3.png"
    ],
    link: "https://sirreyyy.itch.io/card-of-cats"
  },
  "unity-stackedup": {
    title: "Stacked Up",
    tags: "3D | Arcade | Casual | Puzzle",
    thumbnail: "img/thumbnails/Unity-StackedUp.png",
    description: "A fast-paced platform stacking game where timing is everything. Stack platforms as high as you can in this slick arcade challenge, inspired by a classic mobile game.",
    screenshots: [
      "img/screenshots/unity-stackedup-1.png",
      "img/screenshots/unity-stackedup-2.png",
      "img/screenshots/unity-stackedup-3.png"
    ],
    link: "https://sirreyyy.itch.io/stackedup"
  },
  "unity-cuboid": {
    title: "Cuboid Fallout",
    tags: "2D | Arcade | Casual | Side Scroller",
    thumbnail: "img/thumbnails/Unity-Cuboid.png",
    description: "Cuboid Fallout is a fast-paced arcade game where players control a cube that must navigate through a series of obstacles and challenges. The goal is to survive as long as possible while collecting coins and avoiding hazards. With simple controls and addictive gameplay, Cuboid Fallout offers a fun and engaging experience for players of all ages.",
    screenshots: [
      "img/screenshots/unity-cuboid-1.png",
      "img/screenshots/unity-cuboid-2.png",
      "img/screenshots/unity-cuboid-3.png"
    ],
    link: "https://sirreyyy.itch.io/cuboidfallout"
  }
};

const godotGameData = {
  "gd-2dplatformer": {
    title: "GD 2D Platformer",
    tags: "2D | Arcade | Casual | Platformer",
    thumbnail: "img/thumbnails/no_thumbnail.png",
    description: "GD 2D Platformer is a fun, fast-paced puzzle adventure featuring five unique worlds and fifty handcrafted stages! Jump, dash, and solve platforming challenges as you collect gems and coins scattered across each level. Unlock and play as five distinct characters, each bringing their own flair to the journey.",
    screenshots: [
      "img/screenshots/gd-2dplatformer-1.png",
      "img/screenshots/gd-2dplatformer-2.png",
      "img/screenshots/gd-2dplatformer-3.png"
    ],
    link: "https://sirreyyy.itch.io/gd-2d-platformer"
  }
};

const unrealGameData = {
  "ue-tpdemo": {
    title: "3rd Person Demo",
    tags: "3D | Casual | First Person | Third Person",
    thumbnail: "img/thumbnails/thumbnail.png",
    description: "Upward is a fast-paced competitive experience where players face off in 5 unique rounds, each testing different skills. Hone your mechanics in the Building Practice Arena, race upward in a vertical build challenge, survive the deadly rising lava, and unleash chaos in the elimination rounds. Every match is a new chance to dominate the arena!",
    screenshots: [
      "img/screenshots/ue-tpdemo-1.png",
      "img/screenshots/ue-tpdemo-2.png",
      "img/screenshots/ue-tpdemo-3.png"
    ],
    link: "https://sirreyyy.itch.io/thirdperson-demo"
  }
};


// Helper
function extractMapCode(link) {
  const parts = link.split("/");
  return parts.pop();
}

// Card creation
function createCard(game) {
  const card = document.createElement("div");
  card.className = "card";

  // =========================
  // IMAGE CAROUSEL WRAPPER
  // =========================
  const media = document.createElement("div");
  media.className = "card-media";

  const imageList = game.screenshots?.length
    ? [game.thumbnail, ...game.screenshots]
    : [game.thumbnail];

  let currentIndex = 0;

  const img = document.createElement("img");
  img.src = imageList[0];
  img.alt = game.title;

  media.appendChild(img);

  // LEFT ARROW
  const left = document.createElement("button");
  left.className = "media-arrow left";
  left.innerHTML = "‹";

  // RIGHT ARROW
  const right = document.createElement("button");
  right.className = "media-arrow right";
  right.innerHTML = "›";

  function updateImage() {
    img.src = imageList[currentIndex];
  }

  left.onclick = (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
    updateImage();
  };

  right.onclick = (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % imageList.length;
    updateImage();
  };

  media.appendChild(left);
  media.appendChild(right);

  // =========================
  // INFO SECTION
  // =========================
  const info = document.createElement("div");
  info.className = "card-info";

  info.innerHTML = `
    <h3 class="game-title">${game.title}</h3>
    <p class="game-tags">${game.tags}</p>
    <p class="description">${game.description}</p>
  `;

  // PLAY BUTTON
  const playBtn = document.createElement("a");
  playBtn.href = game.link;
  playBtn.target = "_blank";
  playBtn.rel = "noopener noreferrer";
  playBtn.className = "play-btn";
  playBtn.textContent = "Play";

  playBtn.addEventListener("click", () => {
    achievementManager.unlock("game_launcher");
  });

  info.appendChild(playBtn);

  // BUILD CARD
  card.appendChild(media);
  card.appendChild(info);

  // =========================
  // HOVER RESET BEHAVIOR
  // =========================
  card.addEventListener("mouseleave", () => {
    currentIndex = 0;
    img.src = imageList[0];
  });

  return card;
}

// Gallery builder
function buildGallery(galleryId, gameData) {
  const gallery = document.getElementById(galleryId);
  if (!gallery) return;

  Object.values(gameData).forEach(game => {
    gallery.appendChild(createCard(game));
  });
}

// Build all galleries
buildGallery("uefnGameGallery", uefnGameData);
buildGallery("unityGameGallery", unityGameData);
buildGallery("godotGameGallery", godotGameData);
buildGallery("unrealGameGallery", unrealGameData);

// Screenshot zoom effect (kept as-is)
document.addEventListener('mouseover', function(e) {
  if (e.target.matches('.screenshot-strip img')) {
    const cardDetails = e.target.closest('.card-details');
    const existingZoom = cardDetails.querySelector('.zoomed-center');
    if (existingZoom) existingZoom.remove();

    const zoomed = e.target.cloneNode(true);
    zoomed.classList.add('zoomed-center');
    cardDetails.appendChild(zoomed);
  }
});

document.addEventListener('mouseleave', function(e) {
  if (e.target.classList && e.target.classList.contains('card-details')) {
    const zoomed = e.target.querySelector('.zoomed-center');
    if (zoomed) zoomed.remove();
  }
}, true);

// UI helpers
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openContactForm() {
  document.getElementById('contactModal').classList.add('active');
}

function closeContactForm() {
  document.getElementById('popupContactForm').reset();
  document.getElementById('contactModal').classList.remove('active');
}

document.addEventListener('keydown', function(e) {
  if (e.key === "Escape") closeContactForm();
});



const allGames = {
    ...uefnGameData,
    ...unityGameData,
    ...godotGameData,
    ...unrealGameData
};

function getEngine(gameID){
    if(gameID.startsWith("uefn"))
        return "Unreal Editor for Fortnite";
    if(gameID.startsWith("unity"))
        return "Unity";
    if(gameID.startsWith("godot"))
        return "Godot";
    if(gameID.startsWith("ue"))
        return "Unreal Engine";
    return "";
}

let featuredIndex = 0;
let featuredTimer;

function showFeatured(id) {

    const game = allGames[id];
    if (!game) return;

    // Hero content
    const image = document.getElementById("featuredImage");
    const title = document.getElementById("featuredTitle");
    const description = document.getElementById("featuredDescription");
    const engine = document.getElementById("featuredEngine");

    if (image) image.src = game.thumbnail;
    if (title) title.textContent = game.title;
    if (description) description.textContent = game.description;
    if (engine) engine.textContent = getEngine(id);

    // Remove previous active state
    document.querySelectorAll(".featured-item").forEach(item => {
        item.classList.remove("active");

        const progress = item.querySelector(".featured-progress");
        if (progress) {
            progress.style.transition = "none";
            progress.style.width = "0%";
        }
    });

    // Activate current item
    const activeItem = document.querySelector(`[data-featured="${id}"]`);

    if (!activeItem) return;

    activeItem.classList.add("active");

    // Restart progress animation
    const progress = activeItem.querySelector(".featured-progress");

    if (progress) {

        // Force browser reflow so animation restarts
        progress.offsetWidth;

        progress.style.transition = "width 5s linear";
        progress.style.width = "100%";
    }
}

function getEngineLogo(id){

    if(id.startsWith("uefn"))
        return "img/logo/logo-uefn.png";

    if(id.startsWith("unity"))
        return "img/logo/logo-unity.png";

    if(id.startsWith("godot"))
        return "img/logo/logo-godot.png";

    if(id.startsWith("ue"))
        return "img/logo/logo-ue.png";

}

function createFeatured(){

    const list = document.getElementById("featuredList");
    list.innerHTML = "";

    featuredGames.forEach((id,index)=>{

        const game = allGames[id];

        const item = document.createElement("div");

        item.className = "featured-item";
        item.dataset.featured = id;

        item.innerHTML = `
            <img src="${game.thumbnail}">
            <div class="featured-item-info">
                <h4>${game.title}</h4>
                <p>${getEngine(id)}</p>
            </div>
            <div class="featured-progress"></div>
        `;

        item.addEventListener("mouseenter",()=>{
            featuredIndex=index;
            showFeatured(id);
            restartFeaturedTimer();
        });

        item.addEventListener("click",()=>{
            featuredIndex=index;
            showFeatured(id);
            restartFeaturedTimer();
        });

        list.appendChild(item);
    });

    showFeatured(featuredGames[0]);
    restartFeaturedTimer();
}

function restartFeaturedTimer(){

    clearInterval(featuredTimer);

    const activeBar=document.querySelector(".featured-item.active .featured-progress");

    if(activeBar){

        activeBar.style.transition="none";
        activeBar.style.width="0%";

        requestAnimationFrame(()=>{
            activeBar.style.transition="width 6s linear";
            activeBar.style.width="100%";
        });

    }

    featuredTimer=setInterval(()=>{

        featuredIndex++;

        if(featuredIndex>=featuredGames.length)
            featuredIndex=0;

        showFeatured(featuredGames[featuredIndex]);

        restartFeaturedTimer();

    },6000);

}

createFeatured();



/* ============================
   Contact Modal
============================ */

function openContactForm() {
    const modal = document.getElementById("contactModal");
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeContactForm() {
    const modal = document.getElementById("contactModal");
    modal.classList.remove("show");
    document.body.style.overflow = "";
}

// Close when clicking outside
window.addEventListener("click", function(e) {
    const modal = document.getElementById("contactModal");

    if (e.target === modal) {
        closeContactForm();
    }
});

// ESC key closes modal
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        closeContactForm();
    }
});

//---- Achievements ----

// Welcome
window.addEventListener("load",()=>{
    setTimeout(()=>{
        unlockAchievement(
          "welcome",
          "Welcome!",
          "Started exploring my portfolio."
      );
    },800);
});