'use strict';

console.log('OK!!');

const screen=document.getElementById('screen');
const frame=document.getElementById('frame');
const nextbtn=document.getElementById('nextbtn');
const yesbtn=document.getElementById('yesbtn');
const nobtn=document.getElementById('nobtn');

// var text=["俺は教科書に向けていた視線を外して、少し乱暴にペンを机の上に置いた。<br>テストが近いというのに、全く集中する気になれない。<br>家の外から聞こえてくる車の音や人々の声が、いつもは聞こえてこないはずなのに、今ははっきりと聞こえている。","…もう駄目だ。","ここで机と向き合っていても何の意味もないだろう。<br>もうテスト勉強はしたくない。<br>俺は教科書を閉じて、立ち上がった。","さて、どうしようか？"];

var text2={
  "プロローグ":[["俺は教科書に向けていた視線を外して、少し乱暴にペンを机の上に置いた。<br>テストが近いというのに、全く集中する気になれない。<br>家の外から聞こえてくる車の音や人々の声が、いつもは聞こえてこないはずなのに、今ははっきりと聞こえている。","…もう駄目だ。","ここで机と向き合っていても何の意味もないだろう。<br>もうテスト勉強はしたくない。<br>俺は教科書を閉じて、立ち上がった。","さて、どうしようか？"],["部屋を見渡す","部屋を出る"]],
  "部屋を見渡す":[["自分の部屋にあるのは勉強机とベッド、それに沢山の漫画が入った本棚がある。","名作から、マニアックなものまで数々の種類の自分が大好きな漫画を揃えている。<br>あの漫画、最近読んでいないな。","そういえば、ベットの下の収納も久しく見ていないな。<br>それをみるのもいいかもしれない。","さて、どうしようか？"],["本棚から漫画を取る","ベットの下を覗き込む"]],
  "部屋を出る":[["部屋の電気を消して、廊下に出た。<br>俺の家は何の変哲もない、ごく普通の家だ。","確か、リビングには母さんがいるはずだ。","気分転換に外を散歩するのもいいかもしれないし、家の中で何か胃袋に入れてゆっくりするのもいいかもしれない。<br>小腹が空いているし何か食べたい気持ちがある。","ただどうだろう、勉強をしていない僕を母さんがみたら怒るかもしれない。","さて、どうしようか？"],["リビングに向かう","家の外に出る"]]
};

var sentence;
var option;

window.onload=function title(){

  screen.innerHTML='テスト勉強をしたくない。';

  sentence=text2["プロローグ"][0];
  option=text2["プロローグ"][1];

  if(sessionStorage.hasOwnProperty('part-count')){
    sentence=text2[sessionStorage.getItem('part-count')][0];
    option=text2[sessionStorage.getItem('part-count')][1];
  }

  if(sessionStorage.hasOwnProperty('page-count')){
    var page=sessionStorage.getItem('page-count');
    screen.innerHTML=sentence[page];
  }

}

nextbtn.onclick=function next(){

  // screen.innerHTML="あ～、勉強めんどくせ～。";

  var page = page_count();

  if (sentence.indexOf(sentence[page]) >= 0){
    // 存在する
    screen.innerHTML=sentence[page];
  }else{
    // location.reload();
    nextbtn.classList.add('none');
    yesbtn.classList.remove('none');
    yesbtn.value=option[0];
    nobtn.classList.remove('none');
    nobtn.value=option[1];
    sessionStorage.clear('page-count');
  }
  
}

yesbtn.onclick=function yes(){
  let root=yesbtn.value;
  // if(key in dic){console.log("あるよ")}

  if(text2[root]){
  sentence=text2[root][0]; 
  option=text2[root][1];
  nextbtn.classList.remove('none');
  nextbtn.click();
  yesbtn.classList.add('none');
  nobtn.classList.add('none');
  sessionStorage.setItem('part-count',root);
  }else{
    location.reload();
  }
    
}

nobtn.onclick=function no(){
  let root=nobtn.value;

  if(text2[root]){
  sentence=text2[root][0];
  option=text2[root][1];
  nextbtn.classList.remove('none');
  nextbtn.click();
  yesbtn.classList.add('none');
  nobtn.classList.add('none');
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

