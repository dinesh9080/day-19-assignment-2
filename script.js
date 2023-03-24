let button= document.getElementById("button")
button.addEventListener("click",photos)

function photos(){
    let client_id = "ouPEmoFn14da45wC97JoM-9ifLbSfYKYgu5isaPJ0wQ";
    let search = document.getElementById("search").value;
    let url = `https://api.unsplash.com/search/photos/?client_id=${client_id}&query=${search}`;
    let result= document.getElementById("result");
    result.innerHTML="";


    fetch(url).then((data)=>{
    return data.json();
})
.then((data1)=>{
    data1.results.forEach(element => {
        let image=document.createElement("img");
        image.src=element.urls.regular
        image.className="book";
        result.append(image);
    });
})
.catch((error)=>console.log(error))

}