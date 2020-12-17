'use strict';

console.log('OK!!');

const screen=document.getElementById('screen');
const frame=document.getElementById('frame');
const nextbtn=document.getElementById('nextbtn');

var text=["あ～、勉強めんどくせ～。","勉強したくねー","留年しようかな？","終わり"];

window.onload=function title(){

  screen.innerHTML='テスト勉強をしたくない。';

  if(sessionStorage.hasOwnProperty('page-count')){
    var page=sessionStorage.getItem('page-count');
    screen.innerHTML=text[page];
  }

}

nextbtn.onclick=function next(){

  // screen.innerHTML="あ～、勉強めんどくせ～。";

  var page = page_count();

  if (text.indexOf(text[page]) >= 0){
    // 存在する
    screen.innerHTML=text[page];
  }else{
    location.reload();
    sessionStorage.clear('page-count');
  }

  
}


function page_count(){

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

