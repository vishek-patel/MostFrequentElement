const Submitbutton=document.getElementById("submit-button");
const body = document.querySelector("body");
const conatiner = document.querySelector(".container");
const errorPopup=document.getElementById("error-popup");
const output = document.getElementById("output")
const inputArray=document.getElementById("input-array");
const findAgain = document.getElementById("find-again");
const infoButton = document.getElementById("info-button");
const infoPopup = document.getElementById("info-popup");
let clicked = false;
// Event Listeners
infoButton.addEventListener("click", () => {
    if(clicked){
        infoPopup.style.display = "none";
        // body.style.backgroundColor = "rgb(255,255,255)";
        body.style.backgroundColor = "rgba(16, 16, 71, 0.9)";
        return;
        // body.style.overflow = "scroll";
    }
    clicked = !clicked;
    // alert('hi')
    infoPopup.style.display = "block";
    body.style.backgroundColor = "rgb(0,0,0)";
    conatiner.style.opacity="0.5";
    
    // body.style.overflow = "hidden";
    
})

infoPopup.addEventListener("click", () => {
    clicked = !clicked;
    infoPopup.style.display = "none";
    body.style.backgroundColor = "rgba(16, 16, 71, 0.9)";
    conatiner.style.opacity="1";
})




// body.addEventListener("click", (e) => {
//     if (e.target.id === "body") {
//         infoPopup.style.display = "none";
//         body.style.backgroundColor = "rgb(255,255,255)";
//         // body.style.overflow = "scroll";
//     }
// })

Submitbutton.addEventListener("click",()=>{
    // inputArray = inputArray.value;
    // let inputArray=document.getElementById("input-array").value;
    // console.log(inputArray);
    const value = inputArray.value;
    const myList = value.split(" ")
    // inputArray.value=""
    console.log(inputArray);
    console.log(myList)
    console.log(myList)
    let mid = parseInt(myList.length/2);
    console.log(mid);
    let el = myList[0];
    let count = 1;
    let ans = 0;


   

   
    
    myList.sort();

    for(let i = 1;i<myList.length;i++) {
            if(myList[i] == el) {
                count++;
                if(count>=mid) {
                    ans = myList[i];
                    // console.log("the max frequencey element : " + myList[i])
                    break;
                }
            }
            else {
                el = myList[i];
            }
    }
   output.innerHTML = ans;
   findAgain.style.display = "block";

})

findAgain.addEventListener("click",()=>{
    inputArray.value = "";
    output.innerHTML = "";
    findAgain.style.display = "none";
}
)
