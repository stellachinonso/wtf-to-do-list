const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const container = document.querySelector(".container");

//code to add task
function addTask(){
    if(inputBox.value == ''){
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        //the cross icon to delete a task
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    // after addition of to do list the input box should be empty
    inputBox.value = "";
    //call the save data function whenever changes are added
    saveData();
    // whenever li is click to add the good sign or remove the list item
    listContainer.addEventListener("click", function(e){
        //check if li is clicked it adds the line through and good image
        if (e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            saveData();
        }
        //if the target element is a span delete the parent element which is the LI
        else if (e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();
        } 
    }, false);

}

//function to save list item on browser
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
//function to display data when the website opens again
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

