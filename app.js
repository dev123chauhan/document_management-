document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      // Authenticate user with Firebase Authentication
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in successfully
          console.log("User signed in:", userCredential.user.uid);
          // Display success message using SweetAlert
          Swal.fire({
            icon: "success",
            title: "Login Success",
            text: "Please check your email and password.",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
          });
          // Redirect to the next page after a delay
          setTimeout(function () {
            window.location.href = "/welcome.html"; // Replace "next_page.html" with the URL of the next page
          }, 2000); // Delay in milliseconds (e.g., 2000 milliseconds = 2 seconds)
        })
        .catch((error) => {
          // Handle errors
          console.error("Login error:", error.message);
          // Display error message using SweetAlert
          Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: "Please check your email and password.",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
          });
        });
    });
  }
});

// Registration Form
document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("register-form");

  if(registerForm) {
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("reg-email").value;
        const password = document.getElementById("reg-password").value;
        const confirmPassword = document.getElementById("confirm-password").value;
    
        if (password !== confirmPassword) {
          alert("Passwords do not match");
          return;
        }
    
        firebase  
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
            // Redirect or show success message
            console.log("Registered successfully");
            Swal.fire({
              icon: "success",
              title: "Register Success",
              text: "Please check your email and password.",
              confirmButtonColor: "#3085d6",
              confirmButtonText: "OK",
            });
          })
          .catch((error) => {
            // Handle errors
            console.error("Registration error:", error);
            Swal.fire({
              icon: "error",
              title: "Register Failed",
              text: "Please check your email and password.",
              confirmButtonColor: "#3085d6",
              confirmButtonText: "OK",
            });
          });
      }); 
  }

});

// Login Form
// const loginForm = document.getElementById('login-form');
// loginForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     firebase.auth().signInWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//             // Redirect or show success message
//             console.log('Logged in successfully');
//         })
//         .catch((error) => {
//             // Handle errors
//             console.error('Login error:', error);
//         });
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const loginForm = document.getElementById("login-form");

//     loginForm.addEventListener("submit", function(event) {
//         event.preventDefault(); // Prevent default form submission

//         const email = document.getElementById("email").value;
//         const password = document.getElementById("password").value;

//         // Authenticate user with Firebase Authentication
//         firebase.auth().signInWithEmailAndPassword(email, password)
//             .then((userCredential) => {
//                 // Signed in successfully
//                 console.log("User signed in:", userCredential.user.uid);
//                 // Redirect to the next page
//                 Swal.fire({
//                     icon: 'success',
//                     title: 'Login Success',
//                     text: 'Please check your email and password.',
//                     confirmButtonColor: '#3085d6',
//                     confirmButtonText: 'OK'
//                 });
//                 window.location.href = "/welcome.html"; // Replace "next_page.html" with the URL of the next page
//             })
//             .catch((error) => {
//                 // Handle errors
//                 console.error("Login error:", error.message);
//                 // Optionally, display an error message to the user
//                 Swal.fire({
//                     icon: 'error',
//                     title: 'Login Failed',
//                     text: 'Please check your email and password.',
//                     confirmButtonColor: '#3085d6',
//                     confirmButtonText: 'OK'
//                 });
//             });
//     });
// });
