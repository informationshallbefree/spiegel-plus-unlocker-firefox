#Spiegel Plus Unblocker

~=========~ Englisch ~=========~<br>
An Addon with the function to unblock the paywall at spiegel.de for Spiegel Plus content

Here is the raw script:
https://raw.githubusercontent.com/informationshallbefree/spiegel-plus-unlocker-firefox/master/data/unblock.js

Just coyp the code below

javascript:(function(){if(window.location.host=="www.spiegel.de"){spiegel()}else%20if(window.location.host=="www.bergedorfer-zeitung.de"){bergische()}function%20spiegel(){document.getElementsByClassName("lp_mwi_payment-method-wrapper")[0].parentNode.parentNode.style.display='none';var%20obfuscated_intro=document.getElementsByClassName("js-spiegelplus-obfuscated-intro")[0];obfuscated_intro.style.display='none';obfuscated_intro.parentNode.parentNode.className='';texts=document.getElementsByClassName("obfuscated");text_count=texts.length;var%20escape;var%20new_content;escape=false;for(i=0;i<text_count;i++){new_content='';for(j=0;j<texts[i].innerHTML.length;j++){if(texts[i].innerHTML.charCodeAt(j)==60&&texts[i].innerHTML.charCodeAt(j+1)==97){escape=true}else%20if(texts[i].innerHTML.charCodeAt(j-1)==62&&texts[i].innerHTML.charCodeAt(j-2)==97&&texts[i].innerHTML.charCodeAt(j-3)==47&&texts[i].innerHTML.charCodeAt(j-4)==60){escape=false}if(texts[i].innerHTML.charCodeAt(j)==60&&texts[i].innerHTML.charCodeAt(j+1)==98){escape=true}else%20if(texts[i].innerHTML.charCodeAt(j)==60&&texts[i].innerHTML.charCodeAt(j+1)==47&&texts[i].innerHTML.charCodeAt(j+2)==98){escape=true}else%20if(texts[i].innerHTML.charCodeAt(j-3)==47&&texts[i].innerHTML.charCodeAt(j-2)==98&&texts[i].innerHTML.charCodeAt(j-1)==62){escape=false}else%20if(texts[i].innerHTML.charCodeAt(j-3)==60&&texts[i].innerHTML.charCodeAt(j-2)==98&&texts[i].innerHTML.charCodeAt(j-1)==62){escape=false}if(escape){new_content+=String.fromCharCode(texts[i].innerHTML.charCodeAt(j))}else{if(texts[i].innerHTML.charCodeAt(j)!=32&&texts[i].innerHTML.charCodeAt(j)!=10){new_content+=String.fromCharCode(texts[i].innerHTML.charCodeAt(j)-1)}else{new_content+=String.fromCharCode(texts[i].innerHTML.charCodeAt(j))}}}texts[i].innerHTML=new_content}}function%20bergische(){texts=document.getElementsByTagName("div");text_count=texts.length;var%20target=0;for(i=0;i<text_count;i++){if(texts[i].innerHTML=="Jetzt%20lesen,%20sp%C3%A4ter%20zahlen"){target=i-4;break}}texts[target].innerHTML="";document.getElementsByTagName("body")[0].className=document.getElementsByTagName("body")[0].className.replace(/\bunpurchased\b/,'')}})();

into a bookmark in your Bookmarks Toolbar. This is a link which you can use for decoding Spiegel Plus.
See https://support.mozilla.org/en-US/kb/create-bookmarks-save-your-favorite-webpages for more.

The Addon is currently wip... sorry

For those who want to point out that we could change the scripts content all time, yes that's true, but only to keep it up-to-date. Feel free to copy and host the script for yourself :)
<br>
<br>
<br>
~=========~ Deutsch ~=========~<br>
Ein Addon, das die Paywall auf spiegel online umgeht.

Hier ist das Script:
https://raw.githubusercontent.com/informationshallbefree/spiegel-plus-unlocker-firefox/1.0.3/data/unblock.js

Kopiere einfach den Code

javascript:(function(){if(window.location.host=="www.spiegel.de"){spiegel()}else%20if(window.location.host=="www.bergedorfer-zeitung.de"){bergische()}function%20spiegel(){document.getElementsByClassName("lp_mwi_payment-method-wrapper")[0].parentNode.parentNode.style.display='none';var%20obfuscated_intro=document.getElementsByClassName("js-spiegelplus-obfuscated-intro")[0];obfuscated_intro.style.display='none';obfuscated_intro.parentNode.parentNode.className='';texts=document.getElementsByClassName("obfuscated");text_count=texts.length;var%20escape;var%20new_content;escape=false;for(i=0;i<text_count;i++){new_content='';for(j=0;j<texts[i].innerHTML.length;j++){if(texts[i].innerHTML.charCodeAt(j)==60&&texts[i].innerHTML.charCodeAt(j+1)==97){escape=true}else%20if(texts[i].innerHTML.charCodeAt(j-1)==62&&texts[i].innerHTML.charCodeAt(j-2)==97&&texts[i].innerHTML.charCodeAt(j-3)==47&&texts[i].innerHTML.charCodeAt(j-4)==60){escape=false}if(texts[i].innerHTML.charCodeAt(j)==60&&texts[i].innerHTML.charCodeAt(j+1)==98){escape=true}else%20if(texts[i].innerHTML.charCodeAt(j)==60&&texts[i].innerHTML.charCodeAt(j+1)==47&&texts[i].innerHTML.charCodeAt(j+2)==98){escape=true}else%20if(texts[i].innerHTML.charCodeAt(j-3)==47&&texts[i].innerHTML.charCodeAt(j-2)==98&&texts[i].innerHTML.charCodeAt(j-1)==62){escape=false}else%20if(texts[i].innerHTML.charCodeAt(j-3)==60&&texts[i].innerHTML.charCodeAt(j-2)==98&&texts[i].innerHTML.charCodeAt(j-1)==62){escape=false}if(escape){new_content+=String.fromCharCode(texts[i].innerHTML.charCodeAt(j))}else{if(texts[i].innerHTML.charCodeAt(j)!=32&&texts[i].innerHTML.charCodeAt(j)!=10){new_content+=String.fromCharCode(texts[i].innerHTML.charCodeAt(j)-1)}else{new_content+=String.fromCharCode(texts[i].innerHTML.charCodeAt(j))}}}texts[i].innerHTML=new_content}}function%20bergische(){texts=document.getElementsByTagName("div");text_count=texts.length;var%20target=0;for(i=0;i<text_count;i++){if(texts[i].innerHTML=="Jetzt%20lesen,%20sp%C3%A4ter%20zahlen"){target=i-4;break}}texts[target].innerHTML="";document.getElementsByTagName("body")[0].className=document.getElementsByTagName("body")[0].className.replace(/\bunpurchased\b/,'')}})();

in ein Lesezeichen. Dieser Code umgeht die Paywall. Schau hier:
https://support.mozilla.org/de/kb/Lesezeichen-sichern-und-wiederherstellen für mehr Informationen.

Das Addon ist noch in Arbeit... Sorry

Für die jenigen, die der Meinung sind, dass wir das Script jederzeit verändern können, ja das können wir, aber nur um es aktuell zu halten. Fühlt euch frei es jederzeit zu kopieren und selber zu hosten.
