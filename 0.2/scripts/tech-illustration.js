// JavaScript Document

var techIllustrate = function(selectorDivId, graphicSpriteOffset){
	$(selectorDivId).hover(
		function(){
			$('#graphic').css("background-position",graphicSpriteOffset)			
		},
		function(){
			$('#graphic').css("background-position", "0 0")			
		}
	);
}

techIllustrate("#selectedIde", "-324px 0");	
techIllustrate("#selectedDbStorage", "-1297px 0");	
techIllustrate("#selectedServerModules", "-974px 0");

//unique
$("#selectedAppHosting").hover(
	function(){
		$('.graphicWrapper').addClass("appHostingIllustration");		
	},
	function(){
		$('.graphicWrapper').removeClass("appHostingIllustration");	
	}
);	