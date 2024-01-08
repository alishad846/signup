// function togglePasswordVisibility() {
//   const passwordInput = document.getElementById('password');
//   const toggleIcon = document.querySelector('.toggle-password');
//   if (passwordInput.type === 'password') {
//     passwordInput.type = 'text';
//     toggleIcon.textContent = '👁️'; // Unicode eye emoji for showing password
//   } else {
//     passwordInput.type = 'password';
//     toggleIcon.textContent = '🔒'; // Unicode lock emoji for hiding password
//   }

// function changeBackgroundColor() {
//   const colors = ['#1E5F5D', '#448482  ', '#448482  ', '#4E8F8D  ', '#40817F  ', '#2F5F5E  ','#22504F  ']; // List of colors
//   const randomColor = colors[Math.floor(Math.random() * colors.length)]; // Get random color from the list
//   document.body.style.backgroundColor = randomColor; // Apply the random color to the body background
//   document.body.style.backgroundColor = randomColor; // Apply the random color to the body background
// }

// Change background color every 5 seconds (5000 milliseconds)
setInterval(changeBackgroundColor, 1000);
