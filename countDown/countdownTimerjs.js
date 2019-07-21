var mins=document.getElementById("ip");
var start=document.getElementById("start");
var pause=document.getElementById("pause");
var restart=document.getElementById("reset");
var sec=document.getElementById("ip1");
var adid = document.getElementById("adid");
var omin,osec;
var id;
var time;
start.addEventListener("click",function()
							{
								if(mins.value=="")
								omin=0;
								else
								omin=mins.value;
								if(sec.value=="")
								osec=0;
								else
								osec=sec.value;
								time=parseInt(omin)*60+parseInt(osec);
								id=setInterval(abc,1000);
							});
							
	function abc()
	{
		if(time==0)
		{
			clearInterval(id);
			adid.play();
			alert("TIME OUT");
			adid.pause();
			adid.currentTime = 0;
			mins.value=omin;
			sec.value=osec;
		}
		else
		{
			//input.value=parseInt(input.value)-1;
			time=time-1;
			var m=Math.floor(time/60);
			var s=time-m*60;
			if(m<10 && s<10)
			{
				mins.value="0"+m;
				sec.value="0"+s;
			}
			if(m<10 && s>10)
			{
				mins.value="0"+m;
				sec.value=s;
			}
			if(m>10 && s<10)
			{
				mins.value=m;
				sec.value="0"+s;
			}
			if(m>10 && s>10)
			{
				mins.value=m;
				sec.value=s;
			}
		}	
	}	
	
pause.addEventListener("click",function(e)
							{
								clearInterval(id);
			
							});	
restart.addEventListener("click",function(e)
								{
									mins.value="00";
									sec.value="00";
								});									