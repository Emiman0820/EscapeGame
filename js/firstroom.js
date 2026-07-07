/*
====================================
 firstroom.js
------------------------------------
 部屋画面でクリックできる場所の処理
 ・時計
 ・PC
 ・箱
 ・本棚
 ・ドア
====================================
*/

//時計
function clickClock() {
    showImage("images/clock.jpg");
}
  
//PC
function clickPC() {
    showImage("images/pc_keyboard.jpg");
    document.getElementById("modalMemoSpot").classList.remove("hidden");
  }

//箱
function clickBox() {
    showImage("images/nazo2.jpg");
}

//ドア
function clickDoor() {
    showImage("images/warning_goma.png");
}

//本棚
function clickSyodana() {
    showImage("images/warning_goma_shodana.png");
}

function clickMemo(){
    openPuzzle("circle1");
}

function showPcView() {
    showImage("images/pc_keyboard.jpg", "PCの画面だ。メモが貼られている。");
  
    document.getElementById("modalMemoSpot").classList.remove("hidden");
  }
