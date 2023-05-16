import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//変数定義
const target = document.querySelectorAll('.title'); 
target.forEach(item => {
  console.log(item)
  gsap.from(
    item.children,{
      y:50,
      opacity:0,
      rotate:60,
      stagger:{
        each:0.3,
      },
      scrollTrigger: {
        trigger: item,
        start: 'top 70%',
        markers:true,
      },
      
    })
})


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
 