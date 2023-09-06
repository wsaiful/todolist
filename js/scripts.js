
const form = document.getElementById('taskListEntry');

form.addEventListener('submit', callbackFunction);



function callbackFunction(event) {
    event.preventDefault();
    const newTask = new FormData(event.target);   
    
    const task = Object.fromEntries(newTask.entries()); 

    // let taskListArray = localStorage.getItem('tasklist') ?
    // JSON.parse(localStorage.getItem('tasklist')) : [];
    
    // taskListArray.push(JSON.stringify(task));  
    // localStorage.setItem("tasklist", JSON.stringify(taskListArray))       

    let tasks =[];
    if(localStorage.getItem('tasks') !== null){
        
        tasks = JSON.parse(localStorage.getItem("tasks"))
    }
    tasks.push(task)

    localStorage.setItem('tasks', JSON.stringify(tasks))
    


    console.log("taskarray", tasks)
    

    
};

  //const taskarray = JSON.perse(localStorage.getItem('tasks'))
  const nk = JSON.parse(localStorage.getItem("tasks"))
  const list = document.getElementById("tasks")
  const listItems = nk.map(function(li, i){
    return  `<tr key=${i}> <td> ${li.task} </td> <td> ${li.priority} </td> <td> ${li.time}</td><td> ${li.duedate}</td><td>  ${li.status}</td> </tr> `;
  })
  document.getElementById('tasks').innerHTML = listItems.join('');
//   list.innerHTML += `${
//       nk.map((li, i) => (
//       <tr key={i}>      
//         <td>{li.task}</td> 
//         <td>{li.priority}</td> 
//         <td>{li.time}</td> 
//         <td>{li.duedate}</td> 
//         <td>{li.status}</td> 
//     </tr>
//   ))
//   }`
  