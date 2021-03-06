if (window.location.host == "www.spiegel.de"){
    spiegel();
} else if(window.location.host == "www.bergedorfer-zeitung.de"){
    bergische();
}

function spiegel(){
    //hide the paylater-banner
    document.getElementsByClassName("lp_mwi_payment-method-wrapper")[0].parentNode.parentNode.style.display = 'none';
    var obfuscated_intro = document.getElementsByClassName("js-spiegelplus-obfuscated-intro")[0];
    obfuscated_intro.style.display='none';

    //de-obfuscate content
    obfuscated_intro.parentNode.parentNode.className = '';
    texts = document.getElementsByClassName("obfuscated");
    text_count = texts.length;
    var escape;
    var new_content;
    escape = false;
    for (i = 0; i < text_count; i++) {
        new_content = '';
        for (j = 0; j < texts[i].innerHTML.length; j++) {
            if (texts[i].innerHTML.charCodeAt(j) == 60 && texts[i].innerHTML.charCodeAt(j + 1) == 97) { // <a
                escape = true;
            } else if (texts[i].innerHTML.charCodeAt(j - 1) == 62 && texts[i].innerHTML.charCodeAt(j - 2) == 97 && texts[i].innerHTML.charCodeAt(j - 3) == 47 && texts[i].innerHTML.charCodeAt(j - 4) == 60) { // </a>
                escape = false;
            }
            if (texts[i].innerHTML.charCodeAt(j) == 60 && texts[i].innerHTML.charCodeAt(j + 1) == 98) { // <b
                escape = true;
            } else if (texts[i].innerHTML.charCodeAt(j) == 60 && texts[i].innerHTML.charCodeAt(j + 1) == 47 && texts[i].innerHTML.charCodeAt(j + 2) == 98) { // </b
                escape = true;
            } else if (texts[i].innerHTML.charCodeAt(j - 3) == 47 && texts[i].innerHTML.charCodeAt(j - 2) == 98 && texts[i].innerHTML.charCodeAt(j - 1) == 62) { // /b>
                escape = false;
            } else if (texts[i].innerHTML.charCodeAt(j - 3) == 60 && texts[i].innerHTML.charCodeAt(j - 2) == 98 && texts[i].innerHTML.charCodeAt(j - 1) == 62) { // <b>
                escape = false;
            }
            if (escape) {
                new_content += String.fromCharCode(texts[i].innerHTML.charCodeAt(j));
            } else {
                if (texts[i].innerHTML.charCodeAt(j) != 32 && texts[i].innerHTML.charCodeAt(j) != 10) {
                    new_content += String.fromCharCode(texts[i].innerHTML.charCodeAt(j) - 1);
                } else {
                    new_content += String.fromCharCode(texts[i].innerHTML.charCodeAt(j));
                }
            }
        }
        texts[i].innerHTML = new_content;
    }
}

function bergische() {
    texts = document.getElementsByTagName("div");
	text_count = texts.length;
	var target = 0;
	for (i = 0; i < text_count; i++) {
		if(texts[i].innerHTML == "Jetzt lesen, später zahlen"){
			target = i - 4;
			break;
		}
	}
	texts[target].innerHTML = "";
	document.getElementsByTagName("body")[0].className = document.getElementsByTagName("body")[0].className.replace(/\bunpurchased\b/,'');
}
