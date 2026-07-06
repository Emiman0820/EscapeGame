/*
====================================
 modal.js
------------------------------------
 拡大画像モーダル

 ・画像表示
 ・閉じる
====================================
*/

function showImage(imagePath) {
    document.getElementById("modalImage").src = imagePath;
    document.getElementById("modal").classList.remove("hidden");
  }
  
function closeModal() {
    document.getElementById("modal").classList.add("hidden");
}

function openReleaseNotes() {
    document.getElementById("releaseNotes").classList.remove("hidden");
}

function closeReleaseNotes() {
    document.getElementById("releaseNotes").classList.add("hidden");
}