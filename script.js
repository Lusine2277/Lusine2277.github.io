$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if (this.scroll > 500){
            $('.scrol-btn-up').addClass("show");
        }else {
            $('.scrol-btn-up').removeClass("show");
        }
    });
    // scroll btn
    $('.scrol-btn-up').click(function(){
        $('html').animate({scrollTop: 0})
    });

    // menu btn
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active")
    })

    $('.doc-btn').click(function(){
        $('.about .column').toggleClass("document");
        $('.doc-btn i').toggleClass("document")
    })

    // animated
    var typed = new Typed( ".typing", {
        strings: ["...", "Engineer", "Accountant", "Front-End Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    var typed = new Typed( ".typing2", {
        strings: ["...", "Engineer", "Accountant", "Front-End Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
});


function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Ավելին"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Քիչ"; 
      moreText.style.display = "inline";
    }
  }


  consoleText(['I  am Lusine'], 'text',['#CFCFCB','crimson']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['crimson'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}