var selected = JSON.parse(sessionStorage.getItem("selectedCourse"));
var selCourse = document.querySelector(".item");
var selcChild = selCourse.childNodes;
console.log(selcChild);
selcChild[1].innerHTML = selected.name;
let tempNodes = selcChild[3].childNodes;
tempNodes[1].innerHTML = selected.length;
tempNodes[3].innerHTML = selected.price;
// selcChild[3].innerHTML = selected.description;
// selcChild[9].childNodes[1].innerHTML = selected.price;
var availableSlots = [];
var td = new Date();
for (var i = 0; i < 12; i++) {
  let q = [];
  let ns = 0;
  let nd = new Date(2020, i, 0).getDate();
  if (i > td.getMonth()) {
    while (q.length < 10) {
      let x = Math.floor(Math.random() * (nd - 1)) + 1;
      if (q.indexOf(x) === -1) q.push(x);
    }
    availableSlots.push(q);
  } else if (i == td.getMonth()) {
    ns = Math.floor(Math.random() * (nd - td.getDate()));
    while (q.length < ns) {
      let x = Math.floor(Math.random() * (nd - td.getDate())) + td.getDate();
      if (q.indexOf(x) === -1) q.push(x);
    }
    availableSlots.push(q);
  } else {
    availableSlots.push(q);
  }
}
console.log(availableSlots);
var slo = document.querySelector(".slot");
var monthChoose = document.querySelector("#monthChoose");
monthChoose.addEventListener("change", function() {
  if(monthChoose.selectedIndex!=0){
    // let req = selcChild[7].childNodes;
    selcChild[7].innerHTML = monthChoose[monthChoose.selectedIndex].text+" 2020";
    document.querySelector(".slotCont").innerHTML = "";
    slo = document.querySelector(".slotCont").insertBefore(slo,null);
    if(availableSlots[monthChoose.selectedIndex].length>0){
      for (var i = 0; i < availableSlots[monthChoose.selectedIndex-1].length; i++) {
        let sloClone = slo.cloneNode(true);
        sloClone.style.display = "inline-block";
        sloClone.innerHTML = availableSlots[monthChoose.selectedIndex-1][i] + " " + monthChoose[monthChoose.selectedIndex].text + " 2020";
        let nslo = slo.parentNode.insertBefore(sloClone, slo);
        nslo.addEventListener("click", function() {
          selcChild[7].innerText = nslo.innerHTML;
        });
      }
    }
    else{
      document.querySelector(".slotCont").innerText = "No available slots in the selected month";
    }
  }
});
document.querySelector(".next").addEventListener("click",function(){
  sessionStorage.setItem("date",selcChild[7].innerHTML);
  window.location.href = "final.html";
});
