// Initialize Firebase
var config = {
    apiKey: "AIzaSyBQRrKbzIEtpfZOCz4IPfsoNmqE93uNhA4",
    authDomain: "contactform-249df.firebaseapp.com",
    databaseURL: "https://contactform-249df.firebaseio.com",
    projectId: "contactform-249df",
    storageBucket: "contactform-249df.appspot.com",
    messagingSenderId: "947428228539"
  };
  firebase.initializeApp(config);

//Reference messages collection 
var messagesRef = firebase.database().ref('messages'); 


//Listen for Form Submit 
document.getElementById('contactForm').addEventListener('submit', submitForm);

//Submit Form
function submitForm(e){
    e.preventDefault();
    console.log("Form is submitting!"); 

    //Get Values 
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    console.log(name+ " " + company+ " " + email+ " " + phone +" " + "message" );

    //Save Message
    saveMessage(name, company, email, phone, message); 

    //Show alert 
    document.querySelector('.alert').style.display = 'block'; 

    //Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none'; 
    }, 3000);

    //clear form
    document.getElementById('contactForm').reset(); 
}


//Function to get get form values 
function getInputVal(id){
    return document.getElementById(id).value; 
    
}

//Function to Save the messages to firebase
function saveMessage(name,company, email, phone, message){
    var newMessageRef = messagesRef.push();  //this messaesRef refers to the variable in line 13)
    newMessageRef.set({
        name: name,//referencing VALUES from GET VALUES above
        company: company, 
        email: email, 
        phone: phone, 
        message: message
    });
}