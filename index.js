// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var n = 5,
//pattern 1

// for (var i = 1; i <= n; i++) {
//   for (var j = 1; j <= i; j++) {
//     document.write('* ');
//   }
//   document.write('<br/>');
// }

//pattern 1 end



//pattern 2

// for (var i = 1; i <= n; i++) {
//   for (var j = 1; j <= i; j++) {
//     document.write(j + " ");
//   }
//   document.write('<br/>');
// }

//pattern 2 end



//pattern 3

// for (var i = 1; i <= n; i++) {
//   for (var j = n; j >=i; j--) {
//     document.write('*' + " ");
//   }
//   document.write('<br/>');
// }

//pattern 3 end


  
//pattern 4

// for(var i = 1; i <= n; i++){
//   for(var j = 1; j <= 2*n-1; j++){
//     if(j > n-i && j < n + i){
//       document.write('*&nbsp;');
//     }else{
//       document.write('&nbsp;&nbsp;&nbsp;');
//     }
//   }
//   document.write('<br/> ');
// }

//pattern 4 end



//pattern 5

for(var i = 1; i <= n; i++){
  for(var j = 1; j <= n-i; j++){
    document.write('&nbsp;&nbsp;&nbsp;');
  }
  for(var k = 1; k <=i ; k++){
    document.write(k+(n-j)+'&nbsp;');
  }
  for(var m = 1; m <i ; m++){
    document.write(m+'&nbsp;');
  }
  document.write('<br/>');
}

//pattern 5 end



// pattern 8

//   n = 4;
// var number = 1;
// for (var i = 1; i <= n; i++) {
//   for (var j = 1; j <= i; j++) {
//     document.write(number + ' ');
//     number++;
//   }
//   document.write('<br/>');
// }

// pattern8
