// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAzQ6nHNT0D8OsBDF5C3UMPLI3p8EKiDgo",
  authDomain: "push-e0c02.firebaseapp.com",
  databaseURL: "https://push-e0c02.firebaseio.com",
  projectId: "push-e0c02",
  storageBucket: "",
  messagingSenderId: "572888864837",
  appId: "1:572888864837:web:f031b37c199428c91fab2c",
  measurementId: "G-30NDF7FVTW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// function to updateCount
var push = document.getElementById('push');
push.addEventListener('click', function push() {

  var updateCount = firebase.database().ref('pushCount/count');
  updateCount.transaction(function(theCount) {

        console.log(theCount);
        return theCount + 1;
    });
  // var updatePusher.firebase.database().ref('pushCount/pusher');

console.log(getIp());
}, false);
// function to getIP address
function getIp() {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://api.ipify.org/?format=json', true);

  request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      // Success!
      var data = JSON.parse(this.response);
      console.log(data);
    } else {
      // We reached our target server, but it returned an error
      console.log("error");
    }
  };
  request.onerror = function() {
    // There was a connection error of some sort
  };
  request.send();

}
