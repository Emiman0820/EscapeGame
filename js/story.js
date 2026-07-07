/*
====================================
 story.js
------------------------------------
 ストーリー・会話シーンの管理

 ・会話開始
 ・会話送り
 ・立ち絵表示
 ・話者切替
====================================
*/

let storyIndex = 0;

function startGame() {
    preloadGameImages();

    document.getElementById("startVoice").play();

    const startScreen = document.getElementById("startScreen");
    const storyScreen = document.getElementById("storyScreen");
  
    // はじめるボタンを押したらタイトル画面をフェードアウト
    startScreen.classList.add("fadeOut");
  
    setTimeout(function() {
      startScreen.classList.add("hidden");
  
      storyScreen.classList.remove("hidden");
      storyScreen.classList.add("fadeInScreen");
  
      storyIndex = 0;
      showStory();
    }, 2500);
}

function showStory() {
  const data = storyMessages[storyIndex];

  document.getElementById("speakerName").textContent = data.speaker;
  document.getElementById("storyMessage").textContent = data.text;

  const left = document.getElementById("leftCharacter");
  const right = document.getElementById("rightCharacter");

  if (data.leftImage) {
    if (data.leftImage && left.src !== location.origin + "/" + data.leftImage) {
        left.src = data.leftImage;
    }
    left.classList.remove("hidden");
  }

  if (data.rightImage) {
    if (data.rightImage && right.src !== location.origin + "/" + data.rightImage) {
        right.src = data.rightImage;
    }
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
  if (currentEventStory) {
    eventStoryIndex++;

    if (eventStoryIndex >= currentEventStory.length) {
      currentEventStory = null;

      document.getElementById("storyScreen").classList.add("hidden");
      document.getElementById("game").classList.remove("hidden");

      if (afterEventStory) {
        afterEventStory();
        afterEventStory = null;
      }

      return;
    }

    showEventStory();
    return;
  }
    storyIndex++;

    if (storyIndex >= storyMessages.length) {
  
      const storyScreen = document.getElementById("storyScreen");
      const game = document.getElementById("game");
  
      // 会話画面をフェードアウト
      storyScreen.classList.add("fadeOut");
  
      setTimeout(() => {
  
        storyScreen.classList.add("hidden");
        storyScreen.classList.remove("fadeOut");
  
        // ゲーム画面を表示
        game.classList.remove("hidden");
        game.classList.add("fadeInScreen");
  
      }, 1200);
  
      return;
    }
  
    showStory();
}

let currentEventStory = null;
let eventStoryIndex = 0;
let afterEventStory = null;

function startEventStory(storyId) {
  currentEventStory = eventStories[storyId];
  eventStoryIndex = 0;

  afterEventStory = function() {
    openPuzzle("circle1");
  };

  document.getElementById("game").classList.add("hidden");
  document.getElementById("storyScreen").classList.remove("hidden");

  showEventStory();
}

function showEventStory() {
  const data = currentEventStory[eventStoryIndex];

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

  if (data.side === "left") left.classList.add("talking");
  if (data.side === "right") right.classList.add("talking");
}