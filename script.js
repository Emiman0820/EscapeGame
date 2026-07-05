function startActualGame() {
  document.getElementById("storyScreen").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
}

function clickClock() {
    showImage("images/clock.jpg");
  }
  
  function clickPC() {
    showImage("images/pc_keyboard.jpg");
  }
  
  function clickBox() {
    showImage("images/lock_box.jpg");
  }

  function clickDoor() {
    showImage("images/warning_goma.png");
  }

  function clickSyodana() {
    showImage("images/warning_goma_shodana.png");
  }

  function showImage(imagePath) {
    document.getElementById("modalImage").src = imagePath;
    document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("modal").classList.add("hidden");
}

const storyMessages = [

  {
    speaker:"ゴマニエル",
    side:"left",
    leftImage:"images/goma.png",
    text:"ん……どこやここ……？"
  },
  
  {
    speaker:"ゴマニエル",
    side:"left",
    leftImage:"images/goma.png",
    text:"とーこ、とーこ起きろ"
  },
  
  {
    speaker:"トーコホッパー",
    side:"right",
    rightImage:"images/sleephopper.png",
    text:"んー……あれ、ごまさんおはよう"
  },

  {
    speaker:"トーコホッパー",
    side:"right",
    rightImage:"images/bikkurihopper.png",
    text:"って、ここどこ～！？"
  }
  
  ];

let storyIndex = 0;

function startGame() {
  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("storyScreen").classList.remove("hidden");

  storyIndex = 0;
  showStory();
}

function showStory() {
  const data = storyMessages[storyIndex];

  document.getElementById("speakerName").textContent = data.speaker;
  document.getElementById("storyMessage").textContent = data.text;

  const left = document.getElementById("leftCharacter");
  const right = document.getElementById("rightCharacter");

  if (data.leftImage) {
    left.src = data.leftImage;
    left.classList.remove("hidden");
  }

  if (data.rightImage) {
    right.src = data.rightImage;
    right.classList.remove("hidden");
  }

  left.classList.remove("talking");
  right.classList.remove("talking");

  if (data.side === "left") {
    left.classList.add("talking");
  }

  if (data.side === "right") {
    right.classList.add("talking");
  }
}

function nextStory() {
  storyIndex++;

  if (storyIndex >= storyMessages.length) {
    document.getElementById("storyScreen").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");
    return;
  }

  showStory();
}