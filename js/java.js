window.addEventListener('scroll', function() {
  if(pageYOffset>130)
    {
      document.getElementById('menu-fiex').classList.add('fixed-top');
    }else{
      document.getElementById('menu-fiex').classList.remove('fixed-top');
    }


});




/*var wrapper = document.querySelector(".wrapper");
var text = document.querySelector(".text");

var textCont = text.textContent;
text.style.display = "none";

for (var i = 0; i < textCont.length; i++) {
  (function(i) {
    setTimeout(function() {
      // Created textNode to append
      var texts = document.createTextNode(textCont[i])
      var span = document.createElement('span');
      span.appendChild(texts);

      span.classList.add("wave");
      wrapper.appendChild(span);

    }, 10 * i);
  }(i));
}
*/
