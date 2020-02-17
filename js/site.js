"use strict";

function ani(){

	let name  = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let message = document.getElementById("message").value;
	let phone = document.getElementById("phone").value;
	let re =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	let emailValidator =  re.test(String(email).toLowerCase());
	let rePhone =  /[0-9+#-]/
	let phoneValidator =  rePhone.test(String(phone));
	if ((name == "")||(email == "")||(message == "")||(phone == "")) {
		document.getElementById('error').style.display="flex";

	} else if ((emailValidator==false)||(phoneValidator==false)) {
		if (emailValidator==false){
			document.getElementById("emailError").style.display = "flex";
		} else {
			document.getElementById("emailError").style.display = "none";
		}
		if (phoneValidator==false) {
		document.getElementById("phoneError").style.display = "flex";
		}else {
		document.getElementById("phoneError").style.display = "none";
		}}
		else {
		document.getElementById("emailError").style.display = "none";
		document.getElementById("phoneError").style.display = "none";
		document.getElementById('error').style.display="none";
		document.getElementById('plane').style.transform=" translate(500px, -500px)"
		document.getElementById('checked').style.opacity ='1';
		document.getElementById('thanks').style.display="block";
		document.getElementById("myForm").submit();

	}
}

function openMore(num){
	let id=`comp${num}`;
	let yellowBlock = document.getElementById(id).getElementsByClassName("client-overlay")[0];
	let span = document.getElementById(id).getElementsByClassName("client-overlay")[0].getElementsByTagName("span")[0]

	if (yellowBlock.style.height=="100%") {
		yellowBlock.style.height="0%"
		span.style.opacity=0
		
	}else {
		var i
		for (i=1; i<33; i++) {
			if (document.getElementById(`comp${i}`).getElementsByClassName("client-overlay")[0].style.height=="100%") {
				document.getElementById(`comp${i}`).getElementsByClassName("client-overlay")[0].style.height="0%";
				document.getElementById(`comp${i}`).getElementsByClassName("client-overlay")[0].getElementsByTagName("span")[0].style.opacity=0;
			} 
		}
		yellowBlock.style.height="100%"
		span.style.opacity=1
	}
;
	;

}

$("#Form").submit(function(e) {
    e.preventDefault();
});

$(document).ready(function () {
	/*ScrollUp*/
	if (!!$.prototype.scrollUp) {
		$.scrollUp();
	}

	/*Responsive Navigation*/
	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-trigger span").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$(this).removeClass("open");
		} else {
			$("nav#nav-mobile ul").addClass("expanded").slideDown(250);
			$(this).addClass("open");
		}
	});

	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-mobile ul a").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$("#nav-trigger span").removeClass("open");
		}
	});

	/* Sticky Navigation */
	if (!!$.prototype.stickyNavbar) {
		$('#header').stickyNavbar();
	}

	$('#content').waypoint(function (direction) {
		if (direction === 'down') {
			$('#header').addClass('nav-solid fadeInDown');
		}
		else {
			$('#header').removeClass('nav-solid fadeInDown');
		}
	});

});


/* Preloader and animations */
$(window).load(function () { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(500).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(500).css({'overflow-y': 'visible'});

	/* WOW Elements */
	if (typeof WOW == 'function') {
		new WOW().init();
	}

	/* Parallax Effects */
	if (!!$.prototype.enllax) {
		$(window).enllax();
	}

});
