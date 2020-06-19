

function GETrequestAPI(){
    event.preventDefault();

    var options = {
      method:'GET'
    }
  
    fetch('http://localhost/poker/src/php/api.php/api/email/get', options)
        .then(function (response) {
         
            let plop = response.json();
            console.log(plop);
            return plop;
        })
        .then(function (json){
            console.log(json);
        })
  
  }


function POSTrequestAPI(){
    event.preventDefault();
    emailInput = document.querySelector('.emailInput');
    var options = {
      method:'POST',
      body: JSON.stringify(emailInput.value)
    }
  
    fetch('http://localhost/poker/src/php/api.php/api/email/add', options)
        .then(function (response) {
         
            let plop = response.json();
            console.log(plop);
            return plop;
        })
        .then(function (json){
            console.log(json);
        })
  
    }


  export {GETrequestAPI, POSTrequestAPI}