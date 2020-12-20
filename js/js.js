'use strict';

console.log('OK!!');

const screen=document.getElementById('screen');
const frame=document.getElementById('frame');
const nextbtn=document.getElementById('nextbtn');
const yesbtn=document.getElementById('yesbtn');
const nobtn=document.getElementById('nobtn');
const block=document.getElementById('block');

// var text=["俺は教科書に向けていた視線を外して、少し乱暴にペンを机の上に置いた。<br>テストが近いというのに、全く集中する気になれない。<br>家の外から聞こえてくる車の音や人々の声が、いつもは聞こえてこないはずなのに、今ははっきりと聞こえている。","…もう駄目だ。","ここで机と向き合っていても何の意味もないだろう。<br>もうテスト勉強はしたくない。<br>俺は教科書を閉じて、立ち上がった。","さて、どうしようか？"];

var text2={
  "プロローグ":[["俺は教科書に向けていた視線を外して、少し乱暴にペンを机の上に置いた。","テストが近いというのに、全く集中する気になれない。","家の外から聞こえてくる車の音や人々の声が、いつもは聞こえてこないはずなのに、今ははっきりと聞こえている。","…もう駄目だ。","ここで机と向き合っていても何の意味もないだろう。<br>もうテスト勉強はしたくない。<br>俺は教科書を閉じて、立ち上がった。","さて、どうしようか？"],["部屋を見渡す","部屋を出る"]],
  "部屋を見渡す":[["自分の部屋にあるのは勉強机とベッド、それに沢山の漫画が入った本棚がある。","名作から、マニアックなものまで数々の種類の自分が大好きな漫画を揃えている。<br>あの漫画、最近読んでいないな。","そういえば、ベットの下の収納も久しく見ていないな。<br>それをみるのもいいかもしれない。","さて、どうしようか？"],["本棚から漫画を取る","ベットの下を覗き込む"]],
  "部屋を出る":[["部屋の電気を消して、廊下に出た。<br>俺の家は何の変哲もない、ごく普通の家だ。","確か、リビングには母さんがいるはずだ。","気分転換に外を散歩するのもいいかもしれないし、家の中で何か胃袋に入れてゆっくりするのもいいかもしれない。<br>小腹が空いているし何か食べたい気持ちがある。","ただどうだろう、勉強をしていない僕を母さんがみたら怒るかもしれない。","さて、どうしようか？"],["リビングに向かう","家の外に出る"]],
  "ベットの下を覗き込む":[["俺は今何が入れてあるかすらも覚えていないベッドの下を覗き込む事にした。","俺はベッドの側に寄ってしゃがみ込み、暗いベッドの下を覗き込んだ。","そこにはいろんなものが無造作に置かれており、所々に埃があるのが見える。<br>自分が部屋の掃除をサボっているのがよくわかる。","(あれ、これなんだっけな)","暗闇の中、一冊の固い本を俺は見つけた。<br>俺は思わず気になって、それに手を伸ばしていた。","…それは、中学の卒業アルバムだった。","卒業してから多分一回ぐらいしか開いていないはずのそれは、やはり少し埃をかぶっていた。<br>俺はそれを手で払って、ベッドに座り、その卒業アルバムを開いた。","…そこには数々の思い出が残っていた。","中学時代、仲良くしていた友人、楽しかった学校行事、高校受験の苦悩など懐かしい三年間の記憶が鮮明に思い出された。<br>ページをめくるたび、今彼は何をしているのだろうかとか、この人のこと嫌いだったなという懐かしさが込み上げてきていた。","そしてふと、俺のページをめくる手が止まった。","俺のクラスのメンバーの写真。","そこには大して変わりもしない俺の写真と、その隣にいるとある女子の写真。","俺は当時、彼女に片想いをしていた。","桜のように美しい子で、太陽のような明るさを持っていたとてもいい子だった。","ただ俺は、告白する勇気もなく、ただ彼女と同じ高校に行けたら何かが変わるんじゃないかと思ってその高校を受験して…そして落ちた。","結局は、滑り止めの高校に行って彼女とは話す事さえなく、別れてしまった。","俺は無意識に卒業アルバムを閉じ、目を閉じて、顔をあげた。","俺はなんでこんなことをしているのだろう…。"],["勉強をする","勉強をしない"]],
  "本棚から漫画を取る":[["俺はこの部屋で一番存在感のある本棚に近づいて、あるシリーズものの一冊を取って、読んでいでいた。","やはり教科書よりも、こちらの方が断然楽しくて、読むのをやめられない。","この漫画は昔からとても人気で、多くの人が知っている。<br>かくいう俺も、初めて読んだ時にすぐにハマって、今もしっかり新刊を追っている。","ただ、俺は一巻から今読み始めたのだが、どんな物語であるのか知っているはずなのに、それをやめることができない。","改めて俺は物語の凄さというものを実感した。<br>言葉が、絵が、俺の心を揺さぶる。","次から次へと、知っているはずの次のページをそして、次の巻を開いてはその世界に引き込まれていく。","次に俺が顔を上げた時には、既に太陽は沈みかけていた。","俺はなんでこんなことをしているのだろう…。"],["勉強をする","勉強をしない"]]
};

var sentence;
var option;

window.onload=function title(){
//ページをリロードしても内容が変わらないようにする
//配列から場面に合わせてテキストを抽出
  screen.innerHTML='テスト勉強をしたくない。';
  nextbtn.value='始める';
  sentence=text2["プロローグ"][0];
  option=text2["プロローグ"][1];

  if(sessionStorage.hasOwnProperty('part-count')){
    sentence=text2[sessionStorage.getItem('part-count')][0];
    option=text2[sessionStorage.getItem('part-count')][1];
  }

  if(sessionStorage.hasOwnProperty('page-count')){
    var page=sessionStorage.getItem('page-count');
    screen.innerHTML=sentence[page];
    nextbtn.value='次へ';
  }

}

nextbtn.onclick=function next(){
  //配列から取り出す
  // screen.innerHTML="あ～、勉強めんどくせ～。";

  var page = page_count();

  if (sentence.indexOf(sentence[page]) >= 0){
    // 存在する
    screen.innerHTML=sentence[page];
    nextbtn.value='次へ';
  }else{
    // location.reload();
    nextbtn.classList.add('none');
    block.classList.remove('none');
    // yesbtn.classList.remove('none');
    yesbtn.value=option[0];
    // nobtn.classList.remove('none');
    nobtn.value=option[1];
    sessionStorage.setItem('page-count',page-1);
  }
  
}

yesbtn.onclick=function yes(){
  let root=yesbtn.value;
  // if(key in dic){console.log("あるよ")}
  sessionStorage.clear('page-count');
  if(text2[root]){
  sentence=text2[root][0]; 
  option=text2[root][1];
  nextbtn.classList.remove('none');
  nextbtn.click();
  block.classList.add('none');
  // yesbtn.classList.add('none');
  // nobtn.classList.add('none');
  sessionStorage.setItem('part-count',root);
  }else{
    location.reload();
  }
    
}

nobtn.onclick=function no(){
  let root=nobtn.value;
  sessionStorage.clear('page-count');
  if(text2[root]){
  sentence=text2[root][0];
  option=text2[root][1];
  nextbtn.classList.remove('none');
  nextbtn.click();
  block.classList.add('none');
  // yesbtn.classList.add('none');
  // nobtn.classList.add('none');
  sessionStorage.setItem('part-count',root);
  }else{
    location.reload();
  }
}

// function part_count(){
//   if(sessionStorage.hasOwnProperty('part-count')){
//     let count=sessionStorage.getItem('part-count');
  
//     // count=Number(count)+1;
//     sessionStorage.setItem('part-count',count);
    
  
//     console.log(count);
//     return count;
  
//   }else{
//     let count=0;
//     // count=count+1;
//     sessionStorage.setItem('part-count',count);
//     return count;
//   }
// }

function page_count(){
//何番目のフレーズかカウント
  if(sessionStorage.hasOwnProperty('page-count')) {
  let count=sessionStorage.getItem('page-count');
  
  count=Number(count)+1;
  sessionStorage.setItem('page-count',count);
  

  console.log(count);
  return count;

}else{
  let count=0;
  // count=count+1;
  sessionStorage.setItem('page-count',count);
  return count;
}
}

