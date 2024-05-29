var inputName = document.getElementById("name")
var inputUrl = document.getElementById("url")
var allwebsites=[]
if(localStorage.getItem("allwebsites") !=null){
  allwebsites = JSON.parse(localStorage.getItem("allwebsites"));
  display();
}

function validationName(){
  var regex=/^([a-z]|[A-Z]){3,}/;

  if(regex.test(inputName.value)==true){
    document.getElementById("name").style.borderColor="green";
    document.getElementById("name").style.boxShadow="rgba(0, 200, 0, 0.4) 0px 0px 0px 4px";
    return true;
  }
  document.getElementById("name").style.borderColor="red";
  document.getElementById("name").style.boxShadow="rgba(255, 0, 0, 0.4) 0px 0px 0px 4px";
    return false;
}

function validationWebsite(){
  var regex=/^www\.[a-z]{2,}/;

  if(regex.test(inputUrl.value)==true){
    document.getElementById("url").style.borderColor="green";
    document.getElementById("url").style.boxShadow="rgba(0, 200, 0, 0.4) 0px 0px 0px 4px";
    return true;
  }
  document.getElementById("url").style.borderColor="red";
  document.getElementById("url").style.boxShadow="rgba(255, 0, 0, 0.4) 0px 0px 0px 4px";
    return false;
}

function addWebsite(){
  if(validationName()==true && validationWebsite()==true){
    var website ={
      name:inputName.value,
      url:inputUrl.value
    }
  
    allwebsites.push(website);
    clear();
    display();
    localStorage.setItem("allwebsites",JSON.stringify(allwebsites));
  }
 
}

function clear(){
  inputName.value="";
  inputUrl.value="";
}

function display(){
  var content=""

  for(var i=0;i< allwebsites.length;i++){
    content = content + `<tr>
    <td>${i+1}</td>
    <td>${allwebsites[i].name}</td>
    <td><a class="btn btn-success" target="_blank" href="https://${allwebsites[i].url}"><i class="fa-solid fa-eye"></i> Visit</a></td>
    <td><button onclick="deleteWebsite(${i})" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
  </tr>`
  }
  document.getElementById("table-data").innerHTML=content;
}



function deleteWebsite(index){
  allwebsites.splice(index,1);
  display();
  localStorage.setItem("allwebsites",JSON.stringify(allwebsites));
}

