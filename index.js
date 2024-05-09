let button = document.querySelector("#addButton") ;
let outerDiv = document.querySelector("#outerDiv") ;

let saveIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff1a8c" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>`;

button.addEventListener( "click" , function( ) {  
  

    let input = document.querySelector("#input") ;

  let todoDiv = document.createElement("div") ;
  todoDiv.classList.add( "todoContainer" ) ;

  let inputElement = document.createElement ( "input" ) ;
  inputElement.classList.add ( "inputClass" ) ;
  inputElement.type="text" ;
  inputElement.value=input.value ;
  inputElement.readOnly="readOnly" ;

 
  

  let doneButton = document.createElement ( "div" ) ;
  doneButton.classList.add ( "svgDiv" ) ;

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff1a8c" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>`
doneButton.innerHTML = svg ;
  


  let editButton = document.createElement( "div" ) ;
  editButton.classList.add ( "svgDiv" ) ;

  let editsvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff1a8c" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>`;
editButton.innerHTML=editsvg;

  let deleteButton = document.createElement( "div" ) ;
  deleteButton.classList.add ( "svgDiv" ) ;
  let deleteSvg =`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff1a8c" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>`;
deleteButton.innerHTML=deleteSvg;

  todoDiv.appendChild(inputElement ) ;
  todoDiv.appendChild(doneButton ) ;
  todoDiv.appendChild(editButton ) ;
  todoDiv.appendChild(deleteButton ) ;


    input.value = "" ;
    outerDiv.appendChild(todoDiv) ;



    deleteButton.addEventListener("click" , () => {
       todoDiv.remove();
    });

    doneButton.addEventListener("click" , ()=>{
      
        inputElement.classList.toggle("strike");

    }); 
    let flag = 0 ;

    editButton.addEventListener("click" , ()=>{
         
         if (!flag) {
             
          inputElement.readOnly=false;
          
           editButton.innerHTML=saveIcon;  

          flag=1;

         }
         else
         {

          inputElement.readOnly="readOnly";
          editButton.innerHTML=editsvg;
          flag=0;

         }

    })


} ); 




