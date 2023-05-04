import {gsap} from "gsap";

//変数定義
const jsLoaderBg = '.js-loader-bg'; // カーテン（黒い背景）

//キャッチコピーを一文字づつに
  let animationArea = document.querySelector(".animation-title")
  const animationTextArray =animationArea.innerHTML.split('');
  console.log(animationTextArray);
  let animationWord = "";
  for (let i = 0; i < animationTextArray.length; i++) {
    animationWord += '<span>' + animationTextArray[i] + '</span>';
  };
  animationArea.innerHTML = animationWord;


//gsap
gsap.set(".image",{
  width:"0px",
  opacity:0,
})

const tl = gsap.timeline();

tl.set(
  ".title span",{
    opacity:0,
  })
  .to(
    ".c-loader-bg", {
      y: '100%'
    },
    '+=0.5'
).set(
".title span",{
  opacity:0,
}).from(
  ".box",{
    opacity:1,
    x:'-100%',
  },'+=0.3'
).to(
  ".box",{
    opacity:1,
    x:'100%',
  },'+=0.6'
).to(
  ".title span",{
    opacity:1,
  },'-=0.3').to(".image",{
    width:"400px",
    opacity:1,
  }).from(".animation-title span",{
    autoAlpha:0,y:20,ease: "power4.out",stagger:0.05
  },'+=1')

