let taskInput = document.querySelector("#task");
let ulList = document.querySelector("#list");
let spanBtn = document.querySelector("#liveToastBtn");

document.querySelectorAll("#list > li").forEach((element) => {
    let newBtn = document.createElement("button");
    newBtn.innerHTML = `<i class="fa-sharp fa-solid fa-xmark"></i>`;
    newBtn.classList.add("removeBtn")
    element.appendChild(newBtn);
    newBtn.addEventListener("click", removeElement);
  });


  function removeElement() {
    this.parentElement.remove();
  }

  document.querySelectorAll("#list > li").forEach((element) => {
    element.addEventListener("click", () => {
      element.classList.toggle("done")
    })
  })

  function newElement() {
    if (taskInput.value.trim() === "") {
      $('.error').toast("show")
    } else {
      let newLi = document.createElement("li");
      newLi.innerHTML = taskInput.value;
      ulList.appendChild(newLi);
  
      
      let newBtn = document.createElement("button");
      newBtn.innerHTML = `<i class="fa-sharp fa-solid fa-xmark"></i>`;
      newBtn.classList.add("removeBtn")
      newLi.appendChild(newBtn);
      newBtn.addEventListener("click", removeElement);
      newBtn.addEventListener("click", removeStorage); 
  
      
      newLi.addEventListener("click", () => {
        newLi.classList.toggle("done")
      })
      $('.success').toast("show")
      addStorage() 
  
    }
    taskInput.value = "";  
  }
  
  
  taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      spanBtn.click()
    }
  })
  
 
  spanBtn.addEventListener("click", () => {
    taskInput.focus()
  })
  
  
  
  let localArray;
  
  
  if (localStorage.getItem("livalue")) {
    localArray = JSON.parse(localStorage.getItem("livalue"))
  } else {
    localArray = [];
  }
  
  
  function addStorage() {
    localArray.push(taskInput.value);
    localStorage.setItem("livalue", JSON.stringify(localArray))
  }
  
 
  localArray.forEach((element) => {
    let newLi = document.createElement("li")
    newLi.innerHTML = element;
    ulList.appendChild(newLi)
  
   
    let newBtn = document.createElement("button");
    newBtn.innerHTML = `<i class="fa-sharp fa-solid fa-xmark"></i>`;
    newBtn.classList.add("removeBtn")
    newLi.appendChild(newBtn);
    newBtn.addEventListener("click", removeElement); 
    newBtn.addEventListener("click", removeStorage); 
  
    
    newLi.addEventListener("click", () => {
      newLi.classList.toggle("done")
    })
  })
  
  
  function removeStorage() {
  let indexNo= localArray.indexOf(this.parentElement.textContent) 
  localArray.splice(indexNo,1)
  localStorage.setItem("livalue",JSON.stringify(localArray))
  }
  