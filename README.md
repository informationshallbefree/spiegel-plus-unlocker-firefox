#Spiegel Plus Unblocker
An Addon with the function to unblock the paywall at spiegel.de for Spiegel Plus content

Here is the raw script:
https://raw.githubusercontent.com/informationshallbefree/spiegel-plus-unlocker-firefox/1.0.3/data/unblock.js

Just paste it into your console and see the magic :D

This:
javascript:(function(){
	var%20script=document.createElement('script');
	script.type='text/javascript';
	script.src='https://raw.githubusercontent.com/informationshallbefree/spiegel-plus-unlocker-firefox/1.0.3/data/unblock.js';
	document.getElementsByTagName('head')[0].appendChild(script);
})();
<a href="http://google.de">google.de</a>
is a link which you can use for decoding Spiegel Plus.
