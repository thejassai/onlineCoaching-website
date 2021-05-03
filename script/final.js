var selected = JSON.parse(sessionStorage.getItem("selectedCourse"));
var selCourse = document.querySelector(".item");
var selcChild = selCourse.childNodes;
console.log(selcChild);
selcChild[1].innerHTML = selected.name;
let tempNodes = selcChild[3].childNodes;
tempNodes[1].innerHTML = selected.length;
tempNodes[3].innerHTML = selected.price;
selcChild[7].innerHTML = sessionStorage.getItem("date");
var form = document.querySelector("form");
var validateEmail = function(email){
  let x = email.indexOf("@");
  let y = email.indexOf(".");
  if((x<1)||((y-x)<2)) return false;
  else return true;
};
function formValidate(){

  if(form.name.value == ""){
    alert("We need your name for registration. Name pelease!");
    return false;
  }
  if(!validateEmail(form.email.value)){
    alert("Email not valid!");
    return false;
  }
  if(form.cnumber.value.length>0){
    let pnum = form.cnumber.value;
    let valText = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    if(!valText.test(pnum)){
      alert("Enter a valid contact number or ignore.");
      return false;
    }
  }
  return true;
}
document.querySelector(".register").addEventListener("click",function(){
    //console.log(formValidate());
  if(formValidate()){
    document.querySelector(".receipt").style.display = "block";
    document.querySelector(".finalDum").style.display = "none";
    console.log(form.name.value);
    console.log(form.email.value);
    console.log(form.cnumber.value);
    document.querySelector(".cName").innerHTML = selected.name;
    document.querySelector(".cDesc").innerHTML = form.name.value;
    document.querySelector(".cTime").innerHTML = selected.length;
    document.querySelector(".cPrice").innerHTML =  selected.price;
    let date = sessionStorage.getItem("date");
    date = date.split(" ");
    document.querySelector(".rDay").innerHTML = date[0];
    document.querySelector(".rMonth").innerHTML = date[1];
    document.querySelector(".rYear").innerHTML = date[2];
  }
});
