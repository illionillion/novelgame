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
  "本棚から漫画を取る":[["俺はこの部屋で一番存在感のある本棚に近づいて、あるシリーズものの一冊を取って、読んでいでいた。","やはり教科書よりも、こちらの方が断然楽しくて、読むのをやめられない。","この漫画は昔からとても人気で、多くの人が知っている。<br>かくいう俺も、初めて読んだ時にすぐにハマって、今もしっかり新刊を追っている。","ただ、俺は一巻から今読み始めたのだが、どんな物語であるのか知っているはずなのに、それをやめることができない。","改めて俺は物語の凄さというものを実感した。<br>言葉が、絵が、俺の心を揺さぶる。","次から次へと、知っているはずの次のページをそして、次の巻を開いてはその世界に引き込まれていく。","次に俺が顔を上げた時には、既に太陽は沈みかけていた。","俺はなんでこんなことをしているのだろう…。"],["勉強をする","勉強をしない"]],
  "リビングに向かう":[["俺はリビングに向かって歩き、リビングの扉を開いた。<br>リビングには、干していた洗濯物を畳んでいた母がいた。","「どうかした？勉強は？」","special","「あー、なんか手軽なのあるかな」","母は一旦手を止めて、お菓子が入っている戸棚を開けた。","確かそこにはポテトチップスとかクッキーとかが色々入っているはずだ。母はそこから、一つ選んで俺にくれた。","「はい、チョコレートなら手も汚れないし、いいでしょ」","そう言って、母は個包装されたチョコの袋を渡してくれた。","「待ってて、今コーヒーも入れてあげるから」","そう言って母はお湯を沸かし始めて、コーヒーを作り始める。","俺にとって母は、とても優しい人だ。怒った時は怖いけれど、いつも俺や父の世話をしてくれる。","恥ずかしくて口には出せないけれど、母にはいつも感謝している。","「はい。じゃあ、部屋に戻ってしっかり勉強しなさい。テスト近いんだから」","俺はリビングで休もうかなと甘い考えを持っていたが、母の手によって部屋に戻されてしまった。<br>戻ってきた部屋には、手元にあるコーヒーの匂いが広がっていた。","俺はなんでこんなことをしているのだろう…。"],["勉強をする","勉強をしない"],["「いや、ちょっと小腹が空いてさ」"]],
  "家の外に出る":[["折角だし、散歩がてらコンビニか何かで軽く食べられるものを買いに行こうと思う。","玄関の扉を開いて、外へ出る。<br>外は寒々しい風が吹いていた。","もう少し厚着をすればよかったかなとも思ったが、コンビニは結構近くにあるし、別にいいやと思い、足を進めた。","道の隅にはイチョウが集まっていて、秋はもう終わっているのだと気づく。<br>顔を上に向けたら、曇った空が広がっていた。","コンビニについて、俺は温かいカフェオレとそれに合いそうなクッキーを購入した。<br>クッキーにはチョコチップが混ぜられている。","レジに通して、コンビニを出た。<br>寒さはより一層強くなっているような気がした。","俺は温かいカフェオレの缶を手で持っていた。<br>家に帰ってから飲もうとしていたが、あまりの寒さにそのタブを開いた。","カフェオレの甘い味が口の中に広がる。","大して歩いているわけでもないのに、長い長い雪道を歩いている気がしてならない。","ふと、公園の隣を通りかかった。","そこには、屋根付きのベンチがある。","大して疲れているわけでもない。<br>家もすぐ近くなのに俺はその公園に入り、ベンチに座った。","手に持っているカフェオレを呷る。","最初に飲んだ時よりも少し冷めているのがわかった。","いつの間にか、雪が降り始めた。","俺は身体の気怠さを感じつつ雪が降りてくる空を見上げていた。","俺はなんでこんなことをしているのだろう…。"],["勉強をする","勉強をしない"]]
};

var endtext={
  "ベットの下を覗き込む":[["桜が散っていた。","何本も咲いている桜の花のトンネルは今年の新入生を歓迎しているようだった。","真新しいスーツを着ている僕は入学式が行われる会場に向かっていた。","今は何故俺がこんなにも勉強に熱中して、地元ではそこそこ有名な大学に入学できたのかも覚えていない。","何かキッカケがあったような気がするが、今はもう辛かった勉強の日々が思い出される。<br>今はもうそれから解き放たれたのだ。<br>大学生活を楽しみたい。","きっとこれからは、新たな出会いがたくさんあるのだろう。","「ねぇ、君！」","ふと、後ろから俺に向けて声がかけられた。<br>俺はその呼びかけに振り返った。","そこにいたのは、あの日、卒業アルバムにいた…！","[大学入学エンド]"],["寒い夜道を歩いていた。<br>行く当てもないけれど、ただ立ち止まることだけはできなかった。","立ち止まっていても、今の自分を救ってくれる人はいないのだから。","勉強もせず、ただ見栄を張って学力の高い大学を受けた俺は、見事に全滅した。","就職に変更することなども考えたが、周りに流されるまま、結局俺は浪人することにした","けれど、それは間違いだったのかもしれない。","勉強をしつつ、アルバイトを始めた俺はバイト先で知り合った人に賭け事に誘われて、…そしてハマった。<br>何も言い訳ができないくらいにハマってしまったのだ。","競馬、麻雀、パチンコ…。<br>最初のうちはかなり当たったりして、羽振りが良くなったのだが、いつの間にかただただ財布の中身はどんどん減っていった。","いつしか、親に土下座までしてお金を貰うようになっていた。","…まあ、今はその親に家を追い出されているわけだけど。","まあ、バイト先の友人に頼んだら、笑い話にして、家にあげてくれるだろう。<br>俺は彼の家へ向かって歩いていた。","ふと、下を向いていたせいか、前から来ていた人とぶつかる。","「あ、すいません。大丈夫ですか？」","俺は彼女の顔を見て、ハッと目を見開いた。","そう、俺が中学時代に片想いをしていた子だった。<br>服装や荷物からして、どこかの大学にでも通っているのだろうか。","喉から出かかっていた『久しぶり』の言葉を呑み込んで、俺は一礼してすぐにその場を去った。","「ちゃんと気をつけてくださいね！」","後ろにいる彼女はそんな優しい言葉を投げかけてくれた。","彼女は優しくてとてもいい子だから、俺みたいな愚かでどうしようもない人間とは関わるべきではないだろう。","俺は振り返らず、戻りたい過去さえからも逃げて、歩き続けた。","[浪人エンド]"]],
  "本棚から漫画を取る":[["何の変わりのない、ただ普通の日常を過ごしている。","それなりの大学に行って、それなりの企業に就職した。","今の人生、辛いことなんてほとんどない。","朝起きるのだとか、自炊をするのだとか、会社への通勤が少し辛く感じるだけで、それ以外も本の小さな辛さしかない。","同僚と飲みに行ったり、昔の友人と会ったりしたら、楽しいし、俺の人生は充実していると言っていいだろう。","お金も安定して入るから、部屋の本棚には好きな漫画かたくさん入っている。","それほど不自由のない生活をして、娯楽を楽しむ余裕があるというのに、どうして、こんなにも俺は退屈を感じているのだろうか。","漫画を読んでいると、いつもそんな事を考えてしまう。","俺は漫画の主人公みたいにはなれなかったのだろうか…。","[一般人エンド]"],["運命の時が、近づいていた。","時計の長針があと一度動いたら、このパソコンの画面から結果が出てくる。","思えば、今まで本当に長かった。","俺は学校の勉強をおざなりにして、漫画の勉強と創作に打ち込んだ。<br>学校の先生が助けてくれなかったら、俺は卒業できていただろうか。","俺は専門学校で絵や物語の作り方などを学び、真剣に創作を学んだ。<br>辛いことも何度もあって、何度筆を折ろうと思ったが、それでも漫画が好きだという気持ちでここまでやってきた。","そして今日、自分の自信作の漫画が新人賞を受賞できるかの発表の日だった。","自分の原稿は最終選考まで残っている。","たとえ、受賞できなくても、自分の作品がよければ編集者さんについてもらうこともできる。<br>俺はそれを一生懸命待ち続けていた。","部屋の時計がカチ、と鳴って長針が動いた。","俺はマウスをクリックして、結果発表のページを開く。","そこには…！","［漫画家デビューエンド]"]],
  "":[[],[]]
  };

var sentence;
var option;
var special;

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
    if(text2[sessionStorage.getItem('part-count')][2]){
      special=text2[sessionStorage.getItem('part-count')][2];
    }else{
      special=[];
    }
    if(sessionStorage.hasOwnProperty('end-count')){
      switch(sessionStorage.getItem('end-count')){
        case '勉強をする':
          sentence=endtext[sessionStorage.getItem('part-count')][0];
        break;
        case '勉強をしない':
          sentence=endtext[sessionStorage.getItem('part-count')][1];
        break;
      }
      
    }
  }else{
    special=[];
  }

  if(sessionStorage.hasOwnProperty('page-count')){
    var page=sessionStorage.getItem('page-count');
    screen.innerHTML=sentence[page];
    if(special[0]){
      screen.innerHTML=sentence[page-1];
      nextbtn.value=special[0];
    }else{
      nextbtn.value='次へ';
    }
    
  
  }

}

function stop(){
  // console.log(count++);
  // block.classList.add('none');
  nextbtn.classList.remove('none');
  nextbtn.click();
} 
// setTimeout(countup, 1000);

nextbtn.onclick=function next(){
  //配列から取り出す
  // screen.innerHTML="あ～、勉強めんどくせ～。";

  var page = page_count();
  sound();
  if (sentence.indexOf(sentence[page]) >= 0){
    // 存在する

    if(sentence[page]=="special"){
      // special=text2[sentence][2];
      nextbtn.value=special[0];
    }else{
      screen.innerHTML=sentence[page];
      nextbtn.value='次へ';
    }

    
  }else{
    // location.reload();

    

    if(sessionStorage.hasOwnProperty('end-count')){

      if(nextbtn.value=="終わり"){
            sessionStorage.clear();
            location.reload();
          }
      nextbtn.value="終わり";
    }else{
      nextbtn.classList.add('none');
      block.classList.remove('none');
      // yesbtn.classList.remove('none');
      yesbtn.value=option[0];
      // nobtn.classList.remove('none');
      nobtn.value=option[1];
      sessionStorage.setItem('page-count',page-1);
    }    
  }
  
}

// function sleep(waitMsec) {
//   var startMsec = new Date();
  
//   // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
//   while (new Date() - startMsec < waitMsec){
//     screen.innerHTML="";
//   };
// }

yesbtn.onclick=function yes(){
  let root=yesbtn.value;
  // if(key in dic){console.log("あるよ")}
  sessionStorage.removeItem('page-count');
  
  if(root=="勉強をする"){

    if(endtext[sessionStorage.getItem('part-count')]){
      sentence=endtext[sessionStorage.getItem('part-count')][0];
      // nextbtn.classList.remove('none');
      screen.innerHTML="";
      block.classList.add('none');
      setTimeout("stop()", 3000);
      // sleep(3000);
      // nextbtn.click();
      
      sessionStorage.setItem('end-count',root);

    }else{
      sessionStorage.clear();
      location.reload();
    }

  }else{
    if(text2[root]){
    sentence=text2[root][0]; 
    option=text2[root][1];
      if(text2[root][2]){
        special=text2[root][2];
      }
    nextbtn.classList.remove('none');
    nextbtn.click();
    block.classList.add('none');
    // yesbtn.classList.add('none');
    // nobtn.classList.add('none');
    
    sessionStorage.setItem('part-count',root);
    }else{
      sessionStorage.clear();
      location.reload();
    }
  }
    
}

nobtn.onclick=function no(){
  let root=nobtn.value;

  sessionStorage.removeItem('page-count');

  if(root=="勉強をしない"){

    if(endtext[sessionStorage.getItem('part-count')]){
      sentence=endtext[sessionStorage.getItem('part-count')][1];
      // nextbtn.classList.remove('none');
      screen.innerHTML="";
      block.classList.add('none');
      setTimeout("stop()", 3000);
      // sleep(3000);
      // nextbtn.click();
      
      sessionStorage.setItem('end-count',root);

    }else{
      sessionStorage.clear();
      location.reload();
    }

  }else{

  if(text2[root]){
  sentence=text2[root][0];
  option=text2[root][1];
    if(text2[root][2]){
      special=text2[root][2];
    }
  nextbtn.classList.remove('none');
  nextbtn.click();
  block.classList.add('none');
  // yesbtn.classList.add('none');
  // nobtn.classList.add('none');
  sessionStorage.setItem('part-count',root);
  }else{
    sessionStorage.clear();
    location.reload();
  }
}
}

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

function sound(){
  var audioElem = new Audio();
  audioElem.src = "music/se_maoudamashii_system44.mp3";
  audioElem.play();
}

