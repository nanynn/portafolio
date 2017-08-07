//animación del logo
var paths = document.querySelectorAll('svg path');
for(i = 0; i < paths.length; i++){
	paths[i].setAttribute('stroke-dasharray', paths[i].getTotalLength());
	paths[i].setAttribute('stroke-dashoffset', paths[i].getTotalLength());
	(function(path){
		setTimeout(function(){ path.classList.add('animate-in'); }, i * 100);
	})(paths[i]);
}


$(document).ready(function() {
	$(window).scroll(function() {
		console.log();
		if (($("#menu-ppal").offset().top - $(document).scrollTop() <= 0) && ($("#Capa_1").height() - $("#Capa_1").offset().top - $(document).scrollTop() <= 0)) {
        	$("#menu-ppal").addClass("fixed");
        	$("#menu-ppal").css('background-color', '#758918');
        	$("#menu-ppal").css('box-shadow', '0 0 0.3em #000');
        } else {
            $("#menu-ppal").css('background-color', 'transparent');
            $("#menu-ppal").css('box-shadow', 'none');
        }
    });

    $(".button-collapse").sideNav();

});
