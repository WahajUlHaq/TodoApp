// targeting ul


var list = document.getElementById("list")


// targeting onclick button function

function addTodo(){

// tageting input to enter to do

var todo_item = document.getElementById("todo-item");
if (todo_item.value == "" ){


    alert('You Cannot Leave ToDo Empty')
    return false;
    }

// creating dynamic li


var li = document.createElement('li');


// giving li value

var liText = document.createTextNode(todo_item.value);
li.appendChild(liText);


// styling li by making hr tag

var hr = document.createElement('hr');
li.appendChild(hr);

// Entring whole li in list @ ul to display in web

list.appendChild(li);


// styling 

list.setAttribute("class","fill")

// on return make input value epmty

todo_item.value = "";





// ------------------------- DELETE VALUE SECTION --------------------------


// delete button for list

// creating dynamic li button

var delBtn = document.createElement('button');
delBtn.setAttribute("class" , "delbb");
// assiging value

var delText = document.createTextNode("Delete ");

// inserting values to delBtn

delBtn.appendChild(delText);

// assign final values to final li 

li.appendChild(delBtn);

// giving attr

delBtn.setAttribute("onclick","delItem(this)");



// ------------------------- DELETE VALUE SECTION --------------------------



// ------------------------- EDIT VALUE SECTION --------------------------




// creating dynamic li button

var editBtn = document.createElement('button');
editBtn.setAttribute("id" , "edibb");
// assiging value

var editText = document.createTextNode("Edit");

// inserting values to delBtn

editBtn.appendChild(editText);

// assign final values to final li 

li.appendChild(editBtn);

// setting class for margin 

editBtn.setAttribute("class", "btnedi");

// funct 

editBtn.setAttribute("onclick", "ediIt(this)");

// ------------------------- EDIT VALUE SECTION --------------------------

console.log(li);


}

// -------------------- Delete Val Fun -----------------

// my function for delete


function delItem(e){

e.parentNode.remove();
    
    }
    
// -------------------- Delete Val Fun -----------------



















// ------------ Edit -----------











        function ediIt(d){

            
    
            var editValue = prompt('Enter Your Value' , d.parentNode.firstChild.nodeValue);
            
            d.parentNode.firstChild.nodeValue = editValue;
            
            console.log(d.parentNode.firstChild);
            
            
                    }
// ------------ Edit -----------







    
    
    



// my function for delete



function remTodo(a){


list.innerHTML = ""


}


