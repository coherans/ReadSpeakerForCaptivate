// Gary Cochard : Coherans SAS

/*********************************************************************************

ReadSpeaker for Captivate
The GNU Licence (GPLV3)
Copyright (c) 2016, Coherans SAS

 This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>

*********************************************************************************/


function  RS(){
	var RSButton = document.createElement("div");
	RSButton.classList.add("rs_preserve");
	RSButton.classList.add("rsbtn");
	RSButton.classList.add("rs_skip");
	RSButton.id="readspeaker_button2" ;


	var ATag = document.createElement("a");
	ATag.title="Utiliser readspeaker";
	ATag.accesskey="L";
	ATag.href=href="https://app-eu.readspeaker.com/cgi-bin/rsent?customerid=8336&amp;lang=fr_fr&amp;voice=Thomas&amp;readid=SmartShape_3c-vtext&amp;url=";
	ATag.rel="nofollow";
	ATag.classList.add("rsbtn_play");
	RSButton.appendChild(ATag);

	var Span1 = document.createElement("span");
	var Span2 = document.createElement("span");

	Span1.classList.add("rsbtn_left");
	Span1.classList.add("rsimg");
	Span1.classList.add("rspart");
	Span2.classList.add("rsbtn_text");
	Span2.innerHTML = "Listen";

	Span1.appendChild(Span2);
	ATag.appendChild(Span1);


	document.body.appendChild(RSButton);
	rspkr.ui.addClickEvents();
	RSButton.children[0].click();
}

	function RunReadSpeaker(Label) {

		if (document.getElementById("readspeaker_button_".concat(Label)) == null)
		{
		  console.log(Label);
		  var RSButton = document.createElement("div");
		  RSButton.classList.add("rs_preserve");
		  RSButton.classList.add("rsbtn");
		  RSButton.classList.add("rs_skip");
		  RSButton.id="readspeaker_button_".concat(Label) ;
		  RSButton.style.display = "none";

		  var ATag = document.createElement("a");
		  ATag.title="Utiliser readspeaker";
		  ATag.accesskey="L";
		   if (location.protocol === 'https:') {
			// page is secure
			 ATag.href="https://app-eu.readspeaker.com/cgi-bin/rsent?customerid=8336&lang=fr_fr&voice=thomas&readid=".concat(Label,"c-vtext&url=");
		   }
		   else
		  {
			 ATag.href="http://app-eu.readspeaker.com/cgi-bin/rsent?customerid=8336&lang=fr_fr&voice=thomas&readid=".concat(Label,"c-vtext&url=");
		   }

		  ATag.rel="nofollow";
		  ATag.classList.add("rsbtn_play");
		  RSButton.appendChild(ATag);

		  var Span1 = document.createElement("span");
		  var Span2 = document.createElement("span");

		  Span1.classList.add("rsbtn_left");
		  Span1.classList.add("rsimg");
		  Span1.classList.add("rspart");
		  Span2.classList.add("rsbtn_text");
		  Span2.innerHTML = "Ecoutez";

		  Span1.appendChild(Span2);
		  ATag.appendChild(Span1);
		  document.body.appendChild(RSButton);
		  window.rspkr.ui.addClickEvents();
		  RSButton.children[0].click();
		}
		else
		{
		document.getElementById("readspeaker_button_".concat(Label)).children[0].click();
		}
}


		function RunReadSpeakerVoice(strV , Label) {

			if (document.getElementById("readspeaker_button_".concat(Label)) == null)
			{
			  console.log(Label);
			  var RSButton = document.createElement("div");
			  RSButton.classList.add("rs_preserve");
			  RSButton.classList.add("rsbtn");
			  RSButton.classList.add("rs_skip");
			  RSButton.id="readspeaker_button_".concat(Label) ;
			  RSButton.style.display = "none";

			  var ATag = document.createElement("a");
			  ATag.title="Utiliser readspeaker";
			  ATag.accesskey="L";

	          var StrVoice = "voice=thomas";

			  if ( strV == 'E')
			  {
				StrVoice = "voice=elise";
			  }


			   if (location.protocol === 'https:') {
				// page is secure
				 ATag.href="https://app-eu.readspeaker.com/cgi-bin/rsent?customerid=8336&lang=fr_fr&".concat(StrVoice,"&readid=",Label,"c-vtext&url=");
			   }
			   else
			  {
				 ATag.href="http://app-eu.readspeaker.com/cgi-bin/rsent?customerid=8336&lang=fr_fr&".concat(StrVoice,"&readid=",Label,"c-vtext&url=");
			   }

			  ATag.rel="nofollow";
			  ATag.classList.add("rsbtn_play");
			  RSButton.appendChild(ATag);

			  var Span1 = document.createElement("span");
			  var Span2 = document.createElement("span");

			  Span1.classList.add("rsbtn_left");
			  Span1.classList.add("rsimg");
			  Span1.classList.add("rspart");
			  Span2.classList.add("rsbtn_text");
			  Span2.innerHTML = "Ecoutez";

			  Span1.appendChild(Span2);
			  ATag.appendChild(Span1);
			  document.body.appendChild(RSButton);
			  window.rspkr.ui.addClickEvents();
			  RSButton.children[0].click();
			}
			else
			{
			document.getElementById("readspeaker_button_".concat(Label)).children[0].click();
			}
	}


	function RunReadSpeakerWithTimelines(Labels) {

	var SmartShapes = Labels.toString().split(",");
	var PrevState = new Object();
	// create an observer instance
	var observer = new MutationObserver(function(mutations) {
	  mutations.forEach(function(mutation) {
		//console.log(mutation.oldValue);
		if (mutation.target.style.display == "block" &&  PrevState[mutation.target.id] != "block")
		{
			 console.log('Element Visible!! Lance ReadSpeaker');
			 RunReadSpeaker(mutation.target.id);
		};
	  PrevState[mutation.target.id]= mutation.target.style.display;
	  });
	});


	// configuration of the observer:
	var config = { attributes: true, attributeOldValue: true};

	// pass in the target node, as well as the observer options
	var i;
	for (i = 0;!( i >= SmartShapes.length); i++)
	{
	  observer.observe(document.querySelector("#".concat(SmartShapes[i])), config);
	}
}

function RunReadSpeakerVoiceWithTimelines(strV , Labels) {

	var SmartShapes = Labels.toString().split(",");
	var PrevState = new Object();
	// create an observer instance
	var observer = new MutationObserver(function(mutations) {
	  mutations.forEach(function(mutation) {
		//console.log(mutation.oldValue);
		if (mutation.target.style.display == "block" &&  PrevState[mutation.target.id] != "block")
		{
			 console.log('Element Visible!! Lance ReadSpeaker');
			 RunReadSpeakerVoice(strV , mutation.target.id);
		};
	  PrevState[mutation.target.id]= mutation.target.style.display;
	  });
	});


	// configuration of the observer:
	var config = { attributes: true, attributeOldValue: true};

	// pass in the target node, as well as the observer options
	var i;
	for (i = 0;!( i >= SmartShapes.length); i++)
	{
	  observer.observe(document.querySelector("#".concat(SmartShapes[i])), config);
	}
}