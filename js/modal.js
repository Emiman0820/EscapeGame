/*
====================================
 modal.js
------------------------------------
 拡大画像モーダル

 ・画像表示
 ・閉じる
====================================
*/

let currentAnswer = "";

function showImage(imagePath) {

    document.getElementById("modalImage").src = imagePath;

    // 謎用UIは隠す
    document.getElementById("puzzleSide").style.display = "none";

    document.getElementById("modal").classList.remove("hidden");
}
  
function closeModal() {
    document.getElementById("modal").classList.add("hidden");
    document.getElementById("modalMemoSpot").classList.add("hidden");
  }

function openReleaseNotes() {
    document.getElementById("releaseNotes").classList.remove("hidden");
}

function closeReleaseNotes() {
    document.getElementById("releaseNotes").classList.add("hidden");
}