function startGame() {
  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
}

function clickClock() {
    alert("時計を調べた。");
  }
  
  function clickPC() {
    alert("PCを調べた");
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