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
        } else {
            $("#menu-ppal").removeClass("fixed");
        }
    });
});
