// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBLeYFXIY84O74i46AGLnWX0D7jS9o_ibM",
      authDomain: "kwitter-2e680.firebaseapp.com",
      databaseURL: "https://kwitter-2e680-default-rtdb.firebaseio.com",
      projectId: "kwitter-2e680",
      storageBucket: "kwitter-2e680.appspot.com",
      messagingSenderId: "428623542676",
      appId: "1:428623542676:web:046b9ab7ff19f968a4f781"
    };
    
// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
