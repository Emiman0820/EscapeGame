let currentPuzzle = null;

function openPuzzle(id){

    currentPuzzle = puzzles[id];

    showImage(
        currentPuzzle.image,
        currentPuzzle.text
    );

    document.getElementById("answerInput").value = "";
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