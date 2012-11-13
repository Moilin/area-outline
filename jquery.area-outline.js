/**
 * jquery.area-outline.js (allows you to highlight keyboard focus on an area-imagemap)
 * 
 * @version 0.1
 * Changelog:
 * 
 * @author Mathew Powell
 * @license Common Public License Version 1.0 <http://www.opensource.org/licenses/cpl1.0.txt>
 * @requires jQuery (tested with version 1.3.1) <http://jquery.com/>
 */
(function($){ /* start closure (protects variables from global scope) */
	
	$(document).ready(function(){
		$('body').trackFocus();
	});
	

	$.fn.trackFocus = function () {
		
		$("area").focusin(function() {
			 var imagename = $(this).parent().attr("name");
			 imagename = imagename.substr(2);
			 //var position = $(this).offset(); 
			 var position = $("img#"+imagename).offset();
			 var coords = $(this).attr("coords");
			 var coordsArr = coords.split(",");
			 
			 position.top += parseInt(coordsArr[1]);
			 position.left += parseInt(coordsArr[0]);
			 position.width = parseInt(coordsArr[2]) - parseInt(coordsArr[0]);
			 position.height = parseInt(coordsArr[3]) - parseInt(coordsArr[1]);
			 position.visibility = "visible";
			 $("div#hi").css(position);
		});
		
		$("area").focusout(function() {
				 var css = {};
				 css.visibility = "hidden";
			 $("div#hi").css(css);
		});
		$("body").append('<div id="hi" style="border: 2px solid #00A5FF; position: absolute; visibility: hidden;"></div>');
	};

})(jQuery); /* end closure */
