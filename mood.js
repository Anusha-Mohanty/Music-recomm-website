const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) =>{
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    } else{
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.emotion-item');
hiddenElements.forEach((el) => observer.observe(el));


// --- GLOBAL VARIABLES --- //
var classActive = "is-active";

// --- COMPONENTS, PARTS --- //
$(document).ready(function () {
	// ---  COMPONENTS --- //
	fn_components_animateLogo();
});

/* ===================================
 *  Function: Animate Logo
 * =================================== */
function fn_components_animateLogo() {
	if ($(".js-hero-logo").length) {
		var logoBlock = $(".js-hero-logo");
		var logoPaths = $(".js-hero-logo-polygon");
		var logoPathLength = logoPaths[0].getTotalLength();

		logoPaths
			.css("stroke-dashoffset", logoPathLength)
			.css("stroke-dasharray", logoPathLength);
		logoBlock.addClass("is-animated");
		logoPaths.animate({ "stroke-dashoffset": 0 }, 1500, function () {
			logoBlock.addClass("end-animation");
			setTimeout(function () {
				$("body").addClass(classActive);
			}, 500);
		});
	}
}

