var courseItem = document.querySelector(".item");
var courseHold = document.querySelector(".i_shop1");
function fetchData(arg) {
  var course = new XMLHttpRequest();
  course.overrideMimeType("application/json");
  course.open('GET', 'course.json', true);
  course.onreadystatechange = function() {
    if (course.readyState == 4 && course.status == "200") {
      arg(JSON.parse(course.responseText));
    }
  };
  course.send(null);
}
var currentNodes = [];
fetchData(function(data) {
  // let t = data[6];
  for(var i in data){
    let t = data[i];
      let courseClone = courseItem.cloneNode(true);
      let child_course = courseClone.childNodes;
      child_course[1].innerHTML = t.name;
      child_course[3].innerHTML = t.description;
      child_course[7].innerHTML = t.length+" hrs";
      child_course[9].childNodes[1].innerHTML = t.price;
      let cNo = courseHold.insertBefore(courseClone,null);
      let curChildNodes = cNo.childNodes;
      curChildNodes[11].addEventListener("click",function(){
        sessionStorage.setItem("selectedCourse",JSON.stringify(t));
        window.location.href = "dateandtime.html";
      });
      // console.log(cNo.childNodes);
      if(t.type=='c') cNo.style.display = 'none';
      currentNodes.push({
        inode: cNo,
        nodeData: t
      });
  }
  courseItem.style.display = 'none';
  console.log(currentNodes);
});

var cOptions = document.querySelectorAll(".shopI");
var per = cOptions[0];
var car = cOptions[1];
per.addEventListener("click",function(){
  per.style.borderBottom = "3px solid black";
  car.style.borderBottom = "1px solid black";
  for(var i in currentNodes){
    if(currentNodes[i].nodeData.type == 'p') currentNodes[i].inode.style.display = "inline-block";
    else currentNodes[i].inode.style.display = "none";
  }
});
car.addEventListener("click",function(){
  car.style.borderBottom = "3px solid black";
  per.style.borderBottom = "1px solid black";
  for(var i in currentNodes){
    if(currentNodes[i].nodeData.type == 'c') currentNodes[i].inode.style.display = "inline-block";
    else currentNodes[i].inode.style.display = "none";
  }
});
