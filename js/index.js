$(document).ready(function() {
	// the body of this function is in assets/js/now-ui-kit.js
	// const coordinates = [43.478117, -80.537528];
	// const centre = [43.475378, -80.555895];
	// nowuiKit.initContactUsMap(coordinates, centre);

	// hover animation for interesting facts
	setupHoverAnimation('#yearsOfCoding', 'tada');
	setupHoverAnimation('#possibilities', 'rubberBand');
	setupHoverAnimation('#hackathons', 'pulse');

	// hover animation for work experience logos
	setupHoverAnimation('#wishLogo', 'jello');
	setupHoverAnimation('#ibmLogo', 'jello');
	setupHoverAnimation('#capitalOneLogo', 'jello');
	setupHoverAnimation('#niLogo', 'jello');
	setupHoverAnimation('#brainweberLogo', 'jello');

	// hover animation for footer
	setupHoverAnimation('#code', 'swing');
});

function setupHoverAnimation(id, animation) {
	$(id).hover(function(){
			$(id).addClass(`animated ${animation} infinite`);
		},
		function(){
			$(id).removeClass(`animated ${animation} infinite`);
		});
}

function scrollHere(id) {
	(function($) {
		$(document).ready(function() {
			$('html, body').animate({
				'scrollTop': $(`#${id}`).offset().top
			}, 1500);
		});
	})(jQuery);
}

function eventFire(el, etype) {
	if (el.fireEvent) {
		el.fireEvent('on' + etype);
	} else {
		var evObj = document.createEvent('Events');
		evObj.initEvent(etype, true, false);
		el.dispatchEvent(evObj);
	}
}

function doClick(id) {
	eventFire(document.getElementById(id), 'click');
}
