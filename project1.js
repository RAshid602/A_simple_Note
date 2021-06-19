//if user add to notes,add it to localstorage
showNotes();
let addbtn=document.getElementById('addbtn');
addbtn.addEventListener("click",function(e){
    let addTxt=document.getElementById("addTxt");
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value="";
    console.log(notesObj);
    showNotes();
})
function showNotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index){
        html+=`
        <div class="notesCard my-2 mx-2 card">
            <div class="card-body">
                <h5 class="card-title"> Notes ${index+1}</h5>
                <p class="class-text">${element+1} </p>
                <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
        </div>`;
        
    });
    let notesElm=document.getElementById('notes');
    if(notesObj.length!=0){
        notesElm.innerHTML=html;
    }
    else{
        notesElm.innerHTML=`Notes is empty add to notes to show`;
    }
}

//function to delet a node
function deleteNote(index) {
    console.log('i am deleting');
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));

    showNotes();

}
let search=document.getElementById('searchTxt');
search.addEventListener("input",function(){
   
    let inputVal=search.value;
    let noteCards=document.getElementsByClassName('Card');
    Array.from(noteCards).forEach(function(element){
       let cardTxt=element.getElementByTagName("p")[0].innerText;
       if(cardTxt.includes(inputVal)){
           element.style.display="block";
       }
else{
    element.style.display="none";
}
    })
})