/*
====================================
 data.js
------------------------------------
 ゲーム内で使用するデータ

 ・ストーリー
 ・セリフ
 ・（今後）アイテム
 ・（今後）謎データ
====================================
*/

//キャラクターデータ
const goma = "ゴマニエル";
const toko = "トーコホッパー";
const mima = "マスターミマ";

//セリフデータ
const storyMessages = [
    {
        speaker: goma,
        side: "left",
        leftImage: "images/goma.png",
        text: "ん……どこやここ……？"
    },
    {
        speaker: goma,
        side: "left",
        leftImage: "images/goma.png",
        text: "とーこ、とーこ起きろ"
    },
    {
        speaker: toko,
        side: "right",
        rightImage: "images/sleephopper.png",
        text: "んー……あれ、ごまさんおはよう"
    },
    {
        speaker: toko,
        side: "right",
        rightImage: "images/bikkurihopper.png",
        text: "って、ここどこ～！？"
    },
    {
        speaker: goma,
        side: "left",
        leftImage: "images/kiregoma.png",
        text: "それを今確認してるんや！"
    },
    {
        speaker: toko,
        side: "right",
        rightImage: "images/hopper.png",
        text: "ごまさん怒らないでよ～……聞いただけじゃん…………"
    },
    {
        speaker: goma,
        side: "left",
        leftImage: "images/goma.png",
        text: "ん？ああ…………"
    },
    {
        speaker: "???",
        side: "right",
        rightImage: "images/gamemaster.png",
        text: "目が覚めましたか～？"
    },
    {
        speaker: goma,
        side: "left",
        leftImage: "images/goma.png",
        text: "誰や？"
    },
    {
        speaker: mima,
        side: "right",
        rightImage: "images/gamemaster.png",
        text: "ゲームマスターのミマだよ～"
    },
    {
        speaker: goma,
        side: "left",
        leftImage: "images/gimongoma.png",
        text: "ゲームマスター？なんかのゲームなんか？"
    },
    {
        speaker: mima,
        side: "right",
        rightImage: "images/gamemaster.png",
        text: "今二人がいる部屋の謎を解いて脱出してもらうゲームだよ～"
    },
    {
        speaker: mima,
        side: "right",
        rightImage: "images/gamemaster.png",
        text: "脱出できなかったら二人には永遠にその部屋にいてもらうからね～"
    },
    {
        speaker: goma,
        side: "left",
        leftImage: "images/kanngaerugoma.png",
        text: "…………"
    },
    {
        speaker: goma,
        side: "left",
        leftImage: "images/iinagoma.png",
        text: "それもええな"
    },
    {
        speaker: toko,
        side: "right",
        rightImage: "images/gimonhopper.png",
        text: "……?"
    },
    {
        speaker: goma,
        side: "left",
        leftImage: "images/goma.png",
        text: "ともかく、この部屋の謎を解けば出れるんやろ"
    },
    {
        speaker: toko,
        side: "right",
        rightImage: "images/gannbahopper.png",
        text: "それなら早く謎を解いて脱出しよう！"
    },
    {
        speaker: goma,
        side: "left",
        leftImage: "images/goma.png",
        text: "せやな"
    },
    {
        speaker: mima,
        side: "right",
        rightImage: "images/gamemaster.png",
        text: "それじゃがんばってね～"
    }
  ];