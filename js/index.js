$(document).ready(function() {
	// the body of this function is in assets/js/now-ui-kit.js
	nowuiKit.initContactUsMap();
	
	// hover animation for interesting facts
	setupHoverAnimation('#yearsOfCoding', 'tada');
	setupHoverAnimation('#possibilities', 'rubberBand');
	setupHoverAnimation('#hackathons', 'pulse');
	
	// hover animation for work experience logos
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