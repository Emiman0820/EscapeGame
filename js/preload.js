/*
====================================
 preload.js
 画像の事前読み込み
====================================
*/

const preloadImages = [
    "images/bikkurihopper.png",
    "images/clock.jpg",
    "images/door.jpg",
    "images/first_room.png",
    "images/gamemaster.png",
    "images/gannbahopper.png",
    "images/gimongoma.png",
    "images/gimonhopper.png",
    "images/goma.png",
    "images/hopper.png",
    "images/iinagoma.png",
    "images/kanngaerugoma.png",
    "images/kiregoma.png",
    "images/lock_box.jpg",
    "images/open_door.png",
    "images/open_lock_box.jpg",
    "images/pc_keyboard.jpg",
    "images/sleephopper.png",
    "images/syodana.png",
    "images/title.png",
    "images/warning_goma.png",
    "images/warning_goma_shodana.png"
  ];
  
  function preloadGameImages() {
    preloadImages.forEach(function(path) {
      const img = new Image();
      img.src = path;
    });
  }