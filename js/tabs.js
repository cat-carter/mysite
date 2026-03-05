"use strict"

let tabContent = document.querySelectorAll(".tabcontent");
console.log(tabContent.length);

for(let i =0;<tabContent.length; i++)[
    tabContent[i].computedStyleMap.display ="none";

]

tabContent.forEach(tab => {
    tab.computedStyleMap.display ="block";
}