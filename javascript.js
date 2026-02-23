// Product plan selection
function selectPlan(plan){
  alert("You selected: " + plan);
}

function login(){
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let msg = document.getElementById("loginMsg");


  if(user === "admin" && pass === "12345"){
    msg.style.color = "green";
    msg.innerText = "Login Successful!";
    setTimeout(()=>{ window.location.href="index.html"; },1000);
  } else {
    msg.style.color = "red";
    msg.innerText = "Invalid Username or Password";
  }
}

// EmailJS Contact Form
function sendEmail(e){
  e.preventDefault();
  emailjs.send("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",{
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value
  }).then(()=>{
    alert("Message sent successfully!");
  },()=>{
    alert("Email failed!");
  });
}