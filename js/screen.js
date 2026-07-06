function showStartScreen() {
    document.getElementById("startScreen").classList.remove("hidden");
    document.getElementById("storyScreen").classList.add("hidden");
    document.getElementById("game").classList.add("hidden");
  }
  
  function showStoryScreen() {
    document.getElementById("startScreen").classList.add("hidden");
    document.getElementById("storyScreen").classList.remove("hidden");
    document.getElementById("game").classList.add("hidden");
  }
  
  function showGameScreen() {
    document.getElementById("startScreen").classList.add("hidden");
    document.getElementById("storyScreen").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");
  }