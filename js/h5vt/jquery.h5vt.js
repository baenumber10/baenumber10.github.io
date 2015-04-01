/**
 * jquery.h5vt 0.1. An HTML5 Video Tooltip for JQuery
 * 
 * Copyright (c) 2011 TrustWeb
 * http://www.trustweb.it
 *
 * Licensed under GPLv3
 * http://www.opensource.org/licenses/gpl-3.0.html
 *
 * Launch  : November 2011
 * Version : 0.1
 * Released: November 20, 2011 - 10:48pm
 */
(function($) {

	$.fn.h5vt = function(options){
	  
		// default configuration properties
		var defaults = {	
			speed: "normal",
			xOffset: 10,		
			yOffset: 25
		}; 			
			
		var options = $.extend(defaults, options);  
		var content;
				
		this.each(function() {  				
	
			var h5vtId = $(this).attr("rel");
			$('#'+h5vtId).addClass('h5vtooltip').hide();			
			
			$(this).hover(function(e){							
				$('#'+h5vtId).show();	
				if($("#"+h5vtId+":has(video)"))
				{
					videowidth=$('#'+h5vtId+' > video').attr('width');
					$('#'+h5vtId).css('width',''+videowidth);

					videoheight=$('#'+h5vtId+' > video').attr('height');
					$('#'+h5vtId).css('height',''+videoheight);
					
					$('#'+h5vtId+' > video').get(0).play();		
				}
			});
			
			$(this).mousemove(function(e){
				$("#" + h5vtId)
					.css("top",(e.pageY - options.yOffset) + "px")
					.css("left",(e.pageX + options.xOffset) + "px")					
			});	
			
			$(this).mouseout(function(e){
				
				if($("#"+h5vtId+":has(video)") && $('#'+h5vtId+' video').is(':visible'))
				{
					$('#'+h5vtId+' > video').get(0).pause();		
				}
					
				$("#" + h5vtId).hide();
			});
		});
	  
	};

})(jQuery);