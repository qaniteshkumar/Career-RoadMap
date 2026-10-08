//console.log("student result management system ")
let studentname = document.getElementById("studentname");
console.log(studentname.value);
 <button id="calculatebtn">calculate result </button>
 let calculatebtn = document.getelementbyid("calculatebtn");
 calculatebtn.addeventlistener("click",function(){
    console.log("button clicked");
 });
 
<input type="number" id="math" placeholder="enter math marks">
let studentname = document.getelementbyid("studentname");
let math =document.getelementbyid("math");
let science = document.getelementbyid("science");
let english = document.getelementbyid("english");
let  hindi= document.getelementbyid("hindi");
let calculatebtn = document.getelementbyid("calculatebtn");
claculatebtn.addeventlistener("click",function()){
    let name = student.value;
    let mathmarks = number(math.value);
    let sciencemarks = number(science.value);
    let englishmarks = number(english.value);
    let hindimarks = number(hindi.value);
    console.log(name.value);    
    console.log(math.value);
    console.log(scinece.value);
    console.log(english.value);
    console.log(hindi.value);
    let total= mathmarks+sciencemarks+englishmarks+hindimarks;
    console.log("student:",name);
    console.log("marks:",total);
});




</input>