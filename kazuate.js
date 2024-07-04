
// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// イベントハンドラの登録
let b = document.querySelector('#print');
b.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  let i = document.querySelector('input[name="seisu"]');
	let yoso = Math.floor(i.value);

  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール

    kaisu=kaisu+1;
    let p1 = document.querySelector('span#kaisu');  
    p1.textContent = (kaisu + '回目の予想: ');
    let p2 = document.querySelector('span#answer');  
    p2.textContent = (yoso);
    let p3 = document.querySelector('p#result');  
    if(kaisu>=4){
        p3.textContent = ('答えは '+ kotae +' でした．すでにゲームは終わっています');
    }
    else{
        if(yoso === kotae){
            p3.textContent = ('正解です．おめでとう!');
            kaisu=kaisu+2;
        }
        else{
            if(kaisu === 3){
                p3.textContent = ('まちがい．残念でした答えは '+ kotae +' です．');
            }
            else if(yoso < kotae){
                p3.textContent = ('まちがい．答えはもっと大きいですよ');
            }
            else if(yoso > kotae){
                p3.textContent = ('まちがい．答えはもっと小さいですよ');
            }
        }
    }
}
