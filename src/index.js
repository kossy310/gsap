import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const spanWrapText = (target) => {
  const nodes = [...target.childNodes]; // ノードリストを配列にする
  let returnText = ''; // 最終的に返すテキスト

  for (const node of nodes) {
    if (node.nodeType == 3) {
      //テキストの場合
      const text = node.textContent.replace(/\r?\n/g, ''); //テキストから改行コード削除
      const splitText = text.split(''); // 一文字ずつ分割
      for (const char of splitText) {
        returnText += `<span>${char}</span>`; // spanタグで挟んで連結
      }
    } else {
      //テキスト以外の場合
      //<br>などテキスト以外の要素をそのまま連結
      returnText += node.outerHTML;
    }
  }
  return returnText;
};

const titles = [...document.querySelectorAll('.title')];
for (const title of titles) {
  title.innerHTML = spanWrapText(title);

  // spanたちを配列にし、それをプロパティとして持っておく
  title.spans = title.querySelectorAll('span');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: title, // 吹き出しをアニメーション発火のトリガーに
      start: 'top 90%',
      markers:true, // 吹き出しの上部（TOP）が、画面の上から90%の位置を通過したらスタート
    },
  });

  tl.from(title, {
    opacity: 0,
    y: '100%',
  }).from(title.spans, {
    opacity: 0,
    duration: 0.1,
    stagger: 0.3,
  });

}


//変数定義
// const target = document.querySelectorAll('.title'); 
// const animationText = target.forEach(text =>{
//   text.innerText.split('');
// })
// console.log(animation)
// target.forEach(item => {
//   console.log(item)
//   gsap.from(
//     item.children,{
//       y:50,
//       opacity:0,
//       rotate:60,
//       stagger:{
//         each:0.3,
//       },
//       scrollTrigger: {
//         trigger: item,
//         start: 'top 70%',
//         
//       },
      
//     })
// })


//gsap

// const tl = gsap.timeline();

// tl.to(
//   target,{
//     y:50,
//     stagger:{
//       each:0.5,
//       ease:"Power4.inOut",
//     }
//   })
 