// import React from "react"

// class NavButton extends React.Component {
//     componentDidMount: function(){
//         document.getElementById('left-button').onclick = function () {
//             scrollLeft(document.getElementById('content'), -300, 1000);
//          }

//          document.getElementById('right-button').onclick = function () {
//             scrollLeft(document.getElementById('content'), 300, 1000);
//          }

//          function scrollLeft(element, change, duration) {
//              var start = element.scrollLeft,
//                  currentTime = 0,
//                  increment = 20;

//                  console.log(start)

//              var animateScroll = function(){
//                  currentTime += increment;
//                  var val = Math.easeInOutQuad(currentTime, start, change, duration);
//                  element.scrollLeft = val;
//                  if(currentTime < duration) {
//                      setTimeout(animateScroll, increment);
//                  }
//              };
//              animateScroll();
//          }

//          //t = current time
//          //b = start value
//          //c = change in value
//          //d = duration
//          Math.easeInOutQuad = function (t, b, c, d) {
//            t /= d/2;
//              if (t < 1) return c/2*t*t + b;
//              t--;
//              return -c/2 * (t*(t-2) - 1) + b;
//          };
//     }

//   render() {
//     return (
//       <div>
//         <button id="left-button" type="button">
//           Prev
//         </button>
//         <button id="right-button" type="button">
//           Next
//         </button>
//       </div>
//     )
//   }
// }

// export default NavButton
