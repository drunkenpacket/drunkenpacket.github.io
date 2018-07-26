addOnload(setupImageMap);


/*
	creates a lambda list of load handlers...
*/
function addOnload( newf ) {

	var old_onload = window.onload;
	if( typeof old_onload == "function"  ) {
		window.onload = function( ) {
			if( old_onload ) {
				old_onload( );
			}
			newf( );
		}
	} else {
		window.onload = newf;
	}
}


/*
	JavaScript to make interactive high-lights.
	<div> tags described in the website http://www.drunkenpacket.com 
	specify how the high-lights are applied.
*/

function setupImageMap( ) {
	var all_high_light_divs = document.getElementsByTagName("div");
	for( i = 0 ; i < all_high_light_divs.length ; i++ ) {
		if( all_high_light_divs[i].className == "hilite_rectangle" ) {
			// debugLog( "found a node of the appropriate class..." );
			all_high_light_divs[i].onmouseover = enteredMap;
			all_high_light_divs[i].onmouseout = leftMap;
			all_high_light_divs[i].style.borderWidth = "thin";
			// debugLog( all_high_light_divs[i].id + ".description" );
			var matching_description = document.getElementById( all_high_light_divs[i].id + ".description" );
			if( matching_description != null ) {
				debugLog( "matching_description: " + matching_description );
				all_high_light_divs[i].description_oid = matching_description;
				matching_description.onmouseover = enteredDescription;
				matching_description.onmouseout = leftDescription;
				matching_description.hlRect = all_high_light_divs[i];
			} else {
				all_high_light_divs[i].description_oid = null;
			}
		}
	}
}

/*
	Common code to generate the highlight effect for both the
	image rectangle and the associated text block.
*/
function highLightOn( textOid , graphicOid ) {
	// Learn how to replace the entire style sheet here
	debugLog( "running highLightOn: " + textOid + "  " + graphicOid );
	if( textOid != null ) {
		debugLog( "am attempting to set new background on node: " + textOid  + " from " + 
			textOid.style.backgroundColor);
		textOid.basicBackground = textOid.style.backgroundColor;
		textOid.style.backgroundColor = '#F2E1B3';
	}

	if( graphicOid != null ) {
		graphicOid.style.borderWidth = "thick";
	}
}


/*
	Common code to remove the highlight effect on both the
	associated text and the image rectangle
*/
function highLightOff( textOid , graphicOid ) {
	if( textOid != null ) {
		textOid.style.backgroundColor = this.basicBackground;
	}
	if( graphicOid != null ) {
		graphicOid.style.borderWidth = "thin";	
	}
}



function enteredDescription( ) {
	debugLog( "entered description" );
	highLightOn( this , this.hlRect );
}

function leftDescription( ) {
	highLightOff(this , this.hlRect );
}


function enteredMap(t) {
	// set the style to solid 
	debugLog( "entered: " + this.nodeName + " with description: " +  this.description_oid);
	highLightOn( this.description_oid , this );
}

function leftMap( ) {
	// set the style back to dashed
	debugLog( "left Map too" )
	highLightOff( this.description_oid , this );
}



/*
	A debugging printf equivalent. Log to a <pre> element with id "log" like so:
	
	<pre id="debugging_log">
	&nbsp;
	</pre>

	To not get the debugging output, simply remove the <pre> tag and then
	there will be no debugging output written. (Or so I currently belive)
*/
function debugLog( a_string ) {
	var in_page_log = document.getElementById( "debugging_log" );
	if( in_page_log != null ) {
		in_page_log.innerHTML += "\n" + a_string;
	}

}

