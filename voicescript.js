var timedur = [0, 20.8, 26, 30, 34, 45, 56, 63, 69, 71.6, 77, 85, 90, 93, 98, 102.8, 110, 115];

$('.WordSection1').hide();


function setCurTime(x) {
	var audiovar = document.getElementById("aud");
    audiovar.currentTime=x;
}

$(document).ready(function(){

	var str = $('.WordSection1').text();
	var spans = str.split('।');
	var t=0;
	var ind=0;

	$("#aud").on(
	    "timeupdate", 
	    function(event){

	      onTrackedVideoFrame(this.currentTime, this.duration);
	    
	    });

	function onTrackedVideoFrame(currentTime, duration){
		var cd=Math.round(currentTime * 100) / 100;
		var ld=duration-currentTime;
		var ld=Math.round(ld * 100) / 100;

var seconds=cd;
var date = new Date(seconds * 1000);
var hh = date.getUTCHours();
var mm = date.getUTCMinutes();
var ss = date.getSeconds();
// If you were building a timestamp instead of a duration, you would uncomment the following line to get 12-hour (not 24) time
// if (hh > 12) {hh = hh % 12;}
// These lines ensure you have two-digits
if (hh < 10) {hh = "0"+hh;}
if (mm < 10) {mm = "0"+mm;}
if (ss < 10) {ss = "0"+ss;}
// This formats your string to HH:MM:SS
var t = hh+":"+mm+":"+ss;
		$("#current").text(t);



seconds=ld;
date = new Date(seconds * 1000);
hh = date.getUTCHours();
mm = date.getUTCMinutes();
ss = date.getSeconds();
// If you were building a timestamp instead of a duration, you would uncomment the following line to get 12-hour (not 24) time
// if (hh > 12) {hh = hh % 12;}
// These lines ensure you have two-digits
if (hh < 10) {hh = "0"+hh;}
if (mm < 10) {mm = "0"+mm;}
if (ss < 10) {ss = "0"+ss;}
// This formats your string to HH:MM:SS
var t = hh+":"+mm+":"+ss;
		$("#duration").text(t);

	    if(currentTime>=timedur[ind] && currentTime<timedur[ind+1])
	    {
	    			
	    			$('#reading').html('<a href="javascript:setCurTime('+timedur[ind]+');"> '+spans[ind].split('\n\n').join('<br><br>')+'</a> । ');

					$('#read').html('');
					for (var cnt = 0; cnt < ind; cnt++)
					{
						$('#read').html($('#read').html()+'<a href="javascript:setCurTime('+timedur[cnt]+');">'+spans[cnt].split('\n\n').join('<br><br>')+' </a>। ');
					}

					$('#inque').html('');
					for (var cnt = ind+1; cnt < spans.length; cnt++)
					{
						$('#inque').html($('#inque').html()+'<a href="javascript:setCurTime('+timedur[cnt]+');"> '+spans[cnt].split('\n\n').join('<br><br>')+' </a>। ');
					}
					t++;

	    	ind++;
	    }
	    else if(ind!=0)
	    {
	    	if(currentTime<timedur[ind-1] || currentTime>=timedur[ind+1])
	    	{
	    		var chk=0;
	    		for (var cnt = 0; cnt < timedur.length && chk==0; cnt++)
				{
					if(currentTime<timedur[cnt])
					{
						ind=cnt;
						chk=1;
					}
				}
				ind=ind-1;
					$('#reading').html('<a href="javascript:setCurTime('+timedur[ind]+');"> '+spans[ind].split('\n\n').join('<br><br>')+'</a> । ');

					$('#read').html('');
					for (var cnt = 0; cnt < ind; cnt++)
					{
						$('#read').html($('#read').html()+'<a href="javascript:setCurTime('+timedur[cnt]+');">'+spans[cnt].split('\n\n').join('<br><br>')+' </a>। ');
					}

					$('#inque').html('');
					for (var cnt = ind+1; cnt < spans.length; cnt++)
					{
						$('#inque').html($('#inque').html()+'<a href="javascript:setCurTime('+timedur[cnt]+');"> '+spans[cnt].split('\n\n').join('<br><br>')+' </a>। ');
					}
					t++;

	    			ind++;
	    	}
	    }
	}


});


