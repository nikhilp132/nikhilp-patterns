// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var row = 5,

//pattern 1

// for (var i = 1; i <= row; i++) {
//   for (var j = 1; j <= i; j++) {
//     document.write('* ');
//   }
//   document.write('<br/>');
// }

//pattern 1 end


//pattern 2

// for (var i = 1; i <= row; i++) {
//   for (var j = 1; j <= i; j++) {
//     document.write(j + " ");
//   }
//   document.write('<br/>');
// }

//pattern 2 end


//pattern 3

// for (var i = 1; i <= row; i++) {
//   for (var j = row; j >=i; j--) {
//     document.write('*' + " ");
//   }
//   document.write('<br/>');
// }

//pattern 3 end


//pattern 4
var row = 2;
for (var i = 1; i <= row; i++) {
  for (var j = 1; j <=row+i-1; j++) {
    if(j < row-j){
      document.write("#");
    }else{
      document.write('*' + " ");
    }
  }
  document.write('<br/>');
}

//pattern 4 end