var inp = document.getElementById('exampleFormControlInput1');
var txt = document.getElementById('exampleFormControlTextarea1');

function send(){

  var inpVal = inp.value;
  var txtVal = txt.value;

  fetch('/send' ,
  {
      headers: {
      'content-type': 'application/json'
     },
     method: 'post', // *GET, POST, PUT, DELETE, etc.
     body: JSON.stringify({
       inpVal:inpVal,
       txtVal:txtVal
     })
   })
   .then((data) => {
     console.log(data);
   });

}
