let currentPuzzle = null;

function openPuzzle(id){

    currentPuzzle = puzzles[id];

    document.getElementById("modalImage").src = currentPuzzle.image;

    document.getElementById("modalText").textContent =
        currentPuzzle.text;

    document.getElementById("answerInput").value = "";

    // ←ここだけ表示
    document.getElementById("puzzleSide").style.display = "block";

    document.getElementById("modal").classList.remove("hidden");
}

function checkAnswer(){

    const input = document
        .getElementById("answerInput")
        .value
        .trim();

    if(input === currentPuzzle.answer){
        alert("正解のようだ。回答の「10」は何かに使うのだろうか？");
        closeModal();
    }else{
        alert("……答えが違うようだ");
    }

}