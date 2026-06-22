let b1=document.getElementById("b1");
let b2=document.getElementById("b2");

let b3=document.getElementById("b3");
let b4=document.getElementById("b4");
let b5=document.getElementById("b5");
let b6=document.getElementById("b6");
let b7=document.getElementById("b7");
let b8=document.getElementById("b8");

// b1.addEventListener("mousemove", function(){
// b1.style.flex = "1 1 220px";
// b1.style.boxSizing = "border-box";
// b1.style.width = "auto";
// b1.style.minWidth = "220px";
// b1.style.maxWidth = "240px";
// b1.style.height = "auto";
// b1.style.minHeight = "150px";
// b1.style.padding = "18px 20px";
// b1.style.background = "radial-gradient(circle at top left, #FFD700 0%, #FF9933 40%, #E65100 100%)";
// b1.style.borderRadius = "48px";
// b1.style.border = "3px solid rgba(19, 136, 8, 0.9)";
// b1.style.boxShadow = "0px 14px 24px rgba(0, 0, 0, 0.30), inset 0px 3px 10px rgba(255, 255, 255, 0.22)";
// b1.style.textShadow = "1px 1px 2px rgba(0, 0, 0, 0.25)";
// b1.style.fontSize = "15px";
// b1.style.lineHeight = "1.3";
// b1.style.fontWeight = "700";
// b1.style.color = "#142B0F";
// b1.style.margin = "0";
// b1.style.cursor = "pointer";
// b1.style.transition = "transform 0.35s ease, box-shadow 0.35s ease, background 0.35s ease, color 0.35s ease";
// b1.style.position = "relative";
// b1.style.overflow = "hidden";
// });

b1.addEventListener("mouseenter" ,function(){
    b2.style.background = "radial-gradient(circle at top left, #FFD700 0%, #FF9933 40%, #19b05b 100%)";
})
b2.addEventListener("mouseleave" ,function(){
       b1.style.background = "radial-gradient(circle at top left, #89c823 0%, #13d6d9 40%, #E65100 100%)";
    b1.style.background = "radial-gradient(circle at top left, #00ffee 0%, #13e953 40%, #E65100 100%)";
})
b2.addEventListener("mouseenter" ,function(){
 b3.style.background = "radial-gradient(circle at top left, #FFD700 0%, #FF9933 40%, #E65100 100%)";
})

b3.addEventListener("mouseenter" ,function(){
 b4.style.background = "radial-gradient(circle at top left, #FFD700 0%, #FF9933 40%, #E65100 100%)";
})
b4.addEventListener("mouseenter" ,function(){
 b5.style.background = "radial-gradient(circle at top left, #FFD700 0%, #FF9933 40%, #E65100 100%)";
})

b5.addEventListener("mouseenter" ,function(){
 b6.style.background = "radial-gradient(circle at top left, #FFD700 0%, #FF9933 40%, #E65100 100%)";
})

b7.addEventListener("mouseenter" ,function(){
 b7.style.background = "radial-gradient(circle at top left, rgb(68, 207, 29) 0%, #FF9933 40%, #E65100 100%)";
})

b8.addEventListener("mouseenter" ,function(){
 b1.style.background = "red";
 b2.style.background = "yellow";
 b3.style.background = "orange";
 b5.style.background = "blue";
 b7.style.background = " rgb(68, 207, 29) 0%";
 b8.style.background = " rgb(234, 94, 18) 0%";
 b6.style.background = "rgb(197, 24, 93) 0% ";
 b4.style.background = " rgb(18, 193, 209) 0%";
 
})


