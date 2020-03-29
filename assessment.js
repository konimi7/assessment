（関数（）{
  '厳格な使用';
  const userNameInput = document。getElementById（ 'ユーザー名'）;
  const EvaluationButton = document。getElementById（ '評価'）;
  constのresultDivided =ドキュメント。getElementById（ 'result-area'）;
  constのtweetDivided =ドキュメント。getElementById（ 'tweet-area'）;

  / **
  *指定した要素の子どもを全て除去する
  * @param {HTMLElement}要素HTMLの要素
  * /
  関数removeAllChildren（要素）{
      一方、（要素。のfirstChild）{//子どもの要素があるかぎり削除
          要素。removeChild（要素。のfirstChild）。
      }
  }

  AssessmentButton。onclick=（）=> {
      constのuserNameの= userNameInput。値;
      もし（userNameに。長=== 0）{//名前が空の時は処理を終了する
          戻る;
      }

      //診断結果表示エリアの作成
      removeAllChildren（resultDivided）;
      CONSTヘッダー=ドキュメント。createElement（ 'h3'）;
      ヘッダー。innerText= '診断結果';
      resultDivided。appendChild（ヘッダー）;

      constパラグラフ=ドキュメント。createElement（ 'p'）;
      const結果=評価（userName）;
      パラグラフ。innerText= result;
      resultDivided。appendChild（段落）;

      //ツイートエリアの作成
      removeAllChildren（tweetDivided）;
      constのアンカー=ドキュメント。createElement（ 'a'）;
      const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AE%E3%81%84%E3 ％81％84％E3％81％A8％E3％81％93％E3％82％8D＆text = '
      + encodeURIComponent（結果）;
      アンカー。setAttribute（ 'href'、hrefValue）;
      アンカー。className= 'twitter-hashtag-button';
      アンカー。innerText= 'Tweet＃％E3％81％82％E3％81％AA％E3％81％9F％E3％81％AE％E3％81％84％E3％81％84％E3％81％A8％ E3％81％93％E3％82％8D ';
      TweetDivided。appendChild（アンカー）;

      twttr。ウィジェット。ロード（）;
  };

  userNameInput。onkeydown=（イベント）=> {
      もし（イベント。のkeyCode === 13）{
          AssessmentButton。onclick（）;
      }
  };

  constの答え= [
      '{userName}のいいところは声です。{userName}の特徴的な声はみなを惹きつけ、心に残ります。'、
      '{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。'、
      '{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。'、
      '{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導く。'、
      '{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。'、
      '{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。'、
      '{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。'、
      '{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。'、
      '{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。'、
      '{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。'、
      '{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。'、
      '{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。'、
      '{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。'、
      '{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。'、
      '{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。'、
      '{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています。'
  ];

  / **
  *名前の文字列を渡すと診断結果を返す関数
  * @param {文字列} userNameユーザーの名前
  * @return {string}診断結果
  * /
  機能評価（userName）{
      //全文字のコード番号を取得してそれを足し合わせる
      聞かせてsumOfcharCode = 0を。
      用（せiは= 0; I <userNameに。長さ; I ++）{
          sumOfcharCode = sumOfcharCode + userName。charCodeAt（i）;
      }

      //文字のコード番号の合計を回答の数で割って添字の数値を求める
      const index = sumOfcharCode％は答えます。長さ;
      聞かせて結果=の答え[インデックス]。

      結果=結果。置換（/ {userName} / g、userName）;
       結果を返す;
  }

  //テストコード
  コンソール。アサート（
      アセスメント（ '太郎'）=== '太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。'、
      '診断結果の文言の特定の部分を名前に入る処理が正しくありません。'
  ）;
  コンソール。アサート（
      アセスメント（ '太郎'）===アセスメント（ '太郎'）、
      '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
  ）;
}）（）;
