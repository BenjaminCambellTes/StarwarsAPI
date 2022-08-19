addEventListener("DOMContentLoaded", (e) => {
  const formContainer = document.getElementById("form-container");
  let chosennumber = null;
  formContainer.innerHTML = ` <form id="numberform" >
  <p>Select a number:</p>
  <input type="radio" id="1" name="film" value="1">
  <label for="1">Number 1</label><br>
  <input type="radio" id="2" name="film" value="2">
  <label for="2">Number 2</label><br>
  <input type="radio" id="3" name="film" value="3">
  <label for="3">Number 3</label>
<input type="submit" value="Submit" id="submit">
</form> `;

  

  document.getElementById("1").onclick = function (){
    localStorage.setItem("chosen number", 1)
  }

  document.getElementById("2").onclick = function (){
    localStorage.setItem("chosen number", 2)
  }

  document.getElementById("3").onclick = function (){
    localStorage.setItem("chosen number", 3)
  }
  //let linkz = `${link}${chosennumber}`;

  document.getElementById("numberform").onsubmit = (e) => submitAnswer(e);

  function submitAnswer(e) {
    e.preventDefault()
   // console.log(linkz)
    
   // localStorage.setItem("url",linkz)
    const url = window.location.href.replace("load.html", "index.html");
    window.location.href = url; 
  }

  // function myFunction() {
  //     const url = window.location.href.replace("load.html", "index.html");
  //     window.location.href = url;
  //}
});
