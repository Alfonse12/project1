var menu = false;
$(".fa-list.modify").click(function(){
	if(menu == false){
		$(".nav").fadeIn();
		menu = true;
	}else{
		$(".nav").fadeOut();
		menu = false;
	}
})

$(document).ready(function () {
    $("li").click(function () {
        $('li > ul').not($(this).children("ul").slideToggle()).hide();
    });
});


$(document).ready(function() {
  $(".toggle").click(function() {
    var elem = $(".toggle").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $(".toggle").text("Read Less");
      $(".text").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $(".toggle").text("Read More");
      $(".text").slideUp();
    }
  });
});

/* button1*/
$(document).ready(function() {
  $(".toggle1").click(function() {
    var elem = $(".toggle1").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $(".toggle1").text("Read Less");
      $(".text1").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $(".toggle1").text("Read More");
      $(".text1").slideUp();
    }
  });
});


window.onscroll = function() {goTopFunction()};

function goTopFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("BackToTop").style.display = "block";
    } else {
        document.getElementById("BackToTop").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
