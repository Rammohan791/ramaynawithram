function whole(){
let a=document.getElementById("main");
let photo=["https://i.pinimg.com/736x/14/66/6b/14666b3715b87b006982980a34ffd670.jpg",
    "https://i.pinimg.com/originals/7a/9b/21/7a9b212b752b0b586261202b6bee1c64.png", 
    "https://i.pinimg.com/736x/77/2f/ea/772fead54c2c42984066996f76ebdd7a.jpg",
    "https://i.pinimg.com/736x/40/90/40/409040b9335a995d993647a99933c2a1.jpg",
    "https://i.pinimg.com/736x/55/04/b6/5504b6bb9207a5a15cf1b071fb58088c.jpg",
    "https://i.pinimg.com/webp/1200x/26/16/67/261667fc5ca7a011f8125e8950729e06.webp",
    "https://i.pinimg.com/736x/e1/c2/f7/e1c2f758f9610659c3189c8da908e6c2.jpg",
    "https://i.pinimg.com/736x/62/a2/2e/62a22e77b356b8964607c2a10a5fd64e.jpg",
    "https://i.pinimg.com/736x/cf/b7/d0/cfb7d08656e9691fa12d4e70ac5a9dcf.jpg",
    "https://i.pinimg.com/736x/21/89/ff/2189ffda5638128b188228833f5f26eb.jpg",
    "https://i.pinimg.com/1200x/07/e5/98/07e59849cc9571fa606c624cfbef0516.jpg",
    "https://i.pinimg.com/736x/fb/b6/7a/fbb67a9885f7012e2a8f6722b76acf14.jpg" ,
    "https://i.pinimg.com/736x/c9/fc/c5/c9fcc50c5a64872c3c3aa29de8321fc2.jpg"
];

 let g0=0;    
let g1=0;
let g2=0;
let g3=0;
let g4=0;
let g5=0;
let g6=0;
let g7=0;
let g8=0;
let g9=0;
let g10=0;
let g11=0;
let g12=0;
let s="";
for(let i=0;i<=52;i++){
    let r=Math.floor(Math.random()*photo.length)
     s+= `<div class="godspage"><img src="${photo[r]}"/></div>`;

     if (r==0) {
        g0=g0+1
     } else if (r==1) {
        g1=g1+1;
     } else if (r==2) {
         g2=g2+1;
     } else if (r==3) {
         g3=g3+1;
     }else if (r==4) {
         g4=g4+1;
     } else if (r==5) {
         g5=g5+1;
     } else if (r==6) {
         g6=g6+1;
     } else if (r==7) {
         g7=g7+1;
     } else if (r==8) {
         g8=g8+1;
     } else if (r==9) {
         g9=g9+1;
     } else if (r==10) {
         g10=g10+1;
     } else if (r==11) {
         g11=g11+1;
     } 
     else if (r==12) {
        g12=g12+1;
     } else {
        
     } 
};
a.innerHTML=s
let m=document.getElementById("p1");
let m1=document.getElementById("p2");
let m2=document.getElementById("p3");
let m3=document.getElementById("p4");
let m4=document.getElementById("p5");
let m5=document.getElementById("p6");
let m6=document.getElementById("p7");
let m7=document.getElementById("p8");
let m8=document.getElementById("p9");
let m9=document.getElementById("p10");
let m10=document.getElementById("p11");
let m11=document.getElementById("p12");
let m12=document.getElementById("p13");

m.innerHTML=`Hanuman Ji ${g0}`
m1.innerHTML=`Shri Krishna ${g1}`
m2.innerHTML=`Shiv Ji ${g2}`
m3.innerHTML=`Ganesh Ji ${g3}`
m4.innerHTML=`Shri Ram ${g4}`
m5.innerHTML=`Shani Dev ${g5}`
m6.innerHTML=`All Gods ${g6}`
m7.innerHTML=`Radha Rani ji ${g7}`
m8.innerHTML=` Kali maiya ${g8}`
m9.innerHTML=` Nine Devi ${g9}`
m10.innerHTML=`Shera bali maiya ${g10}`
m11.innerHTML=`Gyan Ki devi  ${g11}`
m12.innerHTML=`Laxmi Mata  ${g12}`


let num=document.getElementById("btn");
num.innerHTML="Play Again";
num.style.color="purple";
}

