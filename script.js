var selectedRow=null;

const submit=document.getElementById("submit");
submit.addEventListener("click" ,formsubmit);

function formsubmit(){
    console.log("sum")
    var datastore= getData()

    if(selectedRow==null){

       insertRow(datastore);
    }else{
         updateRow(datastore);
    }
    resrtForm()
}

function getData(){
    var data={}
    data.name=document.getElementById("name").value;
    data["job"]=document.getElementById("job").value;
    data["location"]=document.getElementById("location").value;
    data["salary"]=document.getElementById("salary").value;
    data["skill"]=document.getElementById("skill").value;
    return data
}
   
   

function insertRow(datas){
    let table=document.getElementById("employee-detail").getElementsByTagName("tbody")[0];
    let rowCreate=table.insertRow(table.length);
    cell1=rowCreate.insertCell(0);
    cell1.innerHTML=datas.name
    cell2=rowCreate.insertCell(1);
    cell2.innerHTML=datas.job
    cell3=rowCreate.insertCell(2);
    cell3.innerHTML=datas.location
     cell4=rowCreate.insertCell(3);
    cell4.innerHTML=datas.salary
     cell5=rowCreate.insertCell(4);
    cell5.innerHTML=datas.skill
    cell6=rowCreate.insertCell(5);
    cell6.innerHTML=`<a href='#' id="edi" onclick="onEdit(this)">Edit</a>`
    cell7=rowCreate.insertCell(6);
    cell7.innerHTML=`<a href='#' id="dle" onclick="onDelete(this)">Delete</a>`

}
function resrtForm(){
    document.getElementById("name").value="";
    document.getElementById("job").value="";
   document.getElementById("location").value="";
   document.getElementById("salary").value="";
    document.getElementById("skill").value="";
}
function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    console.log(selectedRow)
    document.getElementById("name").value=selectedRow.cells[0].innerHTML;
    document.getElementById("job").value=selectedRow.cells[1].innerHTML;
    document.getElementById("location").value=selectedRow.cells[2].innerHTML;
    document.getElementById("salary").value=selectedRow.cells[3].innerHTML;
    document.getElementById("skill").value=selectedRow.cells[4].innerHTML;
}    

function updateRow(datastore){
    selectedRow.cells[0].innerHTML=datastore.name
    selectedRow.cells[1].innerHTML=datastore.job
    selectedRow.cells[2].innerHTML=datastore.location
    selectedRow.cells[3].innerHTML=datastore.salary
    selectedRow.cells[4].innerHTML=datastore.skill

}
function onDelete(td){
    if(confirm("You want to delete this row...")){
        row=td.parentElement.parentElement
       console.log(row)
      document.getElementById("employee-detail").deleteRow(row.rowIndex)
    }
}
