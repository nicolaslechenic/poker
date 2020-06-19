import {GETrequestAPI, POSTrequestAPI} from "./callAPI.js";

// On page Load
window.addEventListener('load', () => {
  const testAPIButton = document.querySelector('.testAPIButton');
  
  console.log('test script.js 1');

  // On click on testAPI button
  testAPIButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('test emailScript.js eventListener testAPIButton');
    GETrequestAPI();//API: response test
  });


  const addEmailButton = document.querySelector('.addEmailButton');

  // On click on addEmail button
  addEmailButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('test emailScript.js eventListener addEmailButton');
    POSTrequestAPI();//API: add mail
  });

});
