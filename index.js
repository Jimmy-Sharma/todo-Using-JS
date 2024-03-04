document.querySelector("form").addEventListener("submit",todo)

function todo()
{
    event.preventDefault();
    let ta=document.querySelector("#task").value
    let pr=document.querySelector("#priority").value
    console.log(ta,pr)
    let tRow=document.createElement("tr")

    let td1=document.createElement("td")
    td1.innerText=ta

    let td2=document.createElement("td")
    td2.innerText=pr
    if(pr=="High")
    {
        td2.style.backgroundColor="red"
    }
    else
    {
        td2.style.backgroundColor="green"
    }
    
    let td3=document.createElement("td")
    td3.innerText="Delete"
    td3.style.color="red"
    td3.style.cursor="pointer"
    td3.addEventListener("click",deleteTodo)

    tRow.append(td1,td2,td3);
    document.querySelector("tbody").append(tRow);
}
function deleteTodo(event)
{
    event.target.parentNode.remove()
}


