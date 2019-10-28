var clear, working, speech, final_transcript = "";


function countWords(){
	s = document.getElementById("text").innerHTML;
	
	s = s.replace(/&nbsp;/g," ");
	s = s.replace(/<br>/g," ");
	
    s = s.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
    s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1
    s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
	
	if (s.length == 0) {
	document.getElementById("wordcount").innerHTML = "0";
	}	else {
	document.getElementById("wordcount").innerHTML = s.split(' ').length;
	}
}


function clearPage() {
    if (working) {
        speech.stop();
    }
    document.getElementById("text").innerHTML = "";
    document.getElementById("preview").innerHTML = "";
    final_transcript = "";
    reset();
}

function reset() {
    working = false;
    document.getElementById("status").style.display = "none";
    document.getElementById("listen").innerHTML = "► Start";
	document.getElementById("listen-mob").innerHTML = "► Start";
}

function startlisten() {
    if (working) {
        speech.stop();
        reset();
    }
	else {
        speech.start();
        working = true;
        document.getElementById("status").style.display = "inline";
        document.getElementById("listen").innerHTML = "■ Stop ";
		document.getElementById("listen-mob").innerHTML = "■ Stop ";
    }
}

function updateLang(sel) {
    var value = sel.options[sel.selectedIndex].value;
    speech.lang = getLang(value);
    localStorage["language"] = value;
}


function format(s) {
    return s.replace(/\n/g, '<br>');
}

function dot(s) {
return s.replace(/ \./g, '.')
.replace(/ \!/g, '!')
.replace(/ \?/g, '?');
}


function capitalize(s) {
    return s.replace(/(^.|(?:[\.\?\!]\s*))(\w)/g, function (txt) {
        return txt.toUpperCase();
    });
}




function initialize() {
    speech = new webkitSpeechRecognition();
    speech.continuous = true;
    speech.maxAlternatives = 5;
    speech.interimResults = true;
    speech.lang = getLang(localStorage["language"]);
    speech.onend = reset;
}

if (typeof(webkitSpeechRecognition) !== 'function') {

    document.getElementById("text").innerHTML = "Speechtexter.com requires the latest version of <a href='https://www.google.com/chrome/browser/'>Google Chrome</a> on your desktop.";
} else {
    if (typeof(localStorage["language"]) == 'undefined') {
        localStorage["language"] = 13;
    }
    if (typeof(localStorage["transcript"]) == 'undefined') {
        localStorage["transcript"] = "";
    }
	
	
	
document.getElementById('text').innerHTML = localStorage['transcript'];

setInterval(function() {
      localStorage['transcript'] = document.getElementById('text').innerHTML;
	  final_transcript = localStorage["transcript"];
	  countWords();
 }, 1000);
	



  
  
    document.getElementById("lang").value = localStorage["language"];

    initialize();
    reset();

    speech.onerror = function(e) {
        var msg = e.error + " error";
        if (e.error === 'no-speech') {
            msg = "No speech was detected. Please try again.";
        } else if (e.error === 'audio-capture') {
            msg = "Please ensure that a microphone is connected to your computer.";
        } else if (e.error === 'not-allowed') {
            msg = "The app cannot access your microphone. Please go to chrome://settings/contentExceptions#media-stream and allow Microphone access to this website.";
        }
        document.getElementById("warning").innerHTML = "<p>" + msg + "</p>";
        setTimeout(function() {
            document.getElementById("warning").innerHTML = "";
        }, 5000);
    };

    speech.onresult = function(e) {
        var interim_transcript = '';
        if (typeof(e.results) == 'undefined') {
            reset();
            return;
        }
        for (var i = e.resultIndex; i < e.results.length; ++i) {
			var val = e.results[i][0].transcript;
			
            if (e.results[i].isFinal) {
                final_transcript += " " + val;
				
            } else {
                interim_transcript += " " + val;
            }
        }
		document.getElementById("text").innerHTML = format(capitalize(dot(final_transcript)));
        document.getElementById("preview").innerHTML = format(capitalize(interim_transcript));
    };
}






function getLang(opt) {
    var langs = [
        ["Afrikaans", "af-za", "--", "en-us"],
        ["Bahasa Indonesia", "id-id", "--", "id-id"],
        ["Bahasa Melayu", "ms-my", "--", "ms-my"],
        ["Català", "ca-es", "--", "ca-es"],
        ["Čeština", "cs-cz", "--", "cs-cz"],
		['Dansk', "da-DK", "--", "dk"],
        ["Deutsch", "de-de", "--", "de-de"],
        ["Australia", "en-au", "English", "en-gb"],
        ["Canada", "en-ca", "English", "en-us"],
        ["India", "en-in", "English", "en-gb"],
        ["New Zealand", "en-nz", "English", "en-gb"],
        ["South Africa", "en-za", "English", "en-gb"],
        ["United Kingdom", "en-gb", "English", "en-gb"],
        ["United States", "en-us", "English", "en-us"],
        ["Argentina", "es-ar", "Español", "es-419"],
        ["Bolivia", "es-bo", "Español", "es-419"],
        ["Chile", "es-cl", "Español", "es-419"],
        ["Colombia", "es-co", "Español", "es-419"],
        ["Costa Rica", "es-cr", "Español", "es-419"],
        ["Ecuador", "es-ec", "Español", "es-419"],
        ["El Salvador", "es-sv", "Español", "es-419"],
        ["España", "es-es", "Español", "es"],
        ["Estados Unidos", "es-us", "Español", "es-419"],
        ["Guatemala", "es-gt", "Español", "es-419"],
        ["Honduras", "es-hn", "Español", "es-419"],
        ["México", "es-mx", "Español", "es-419"],
        ["Nicaragua", "es-ni", "Español", "es-419"],
        ["Panamá", "es-pa", "Español", "es-419"],
        ["Paraguay", "es-py", "Español", "es-419"],
        ["Perú", "es-pe", "Español", "es-419"],
        ["Puerto Rico", "es-pr", "Español", "es-419"],
        ["Rep. Dominicana", "es-do", "Español", "es-419"],
        ["Uruguay", "es-uy", "Español", "es-419"],
        ["Venezuela", "es-ve", "Español", "es-419"],
        ["Euskara", "eu-es", "--", "en-us"],
        ["Filipino", "fil-PH", "--", "ph"],
        ["Français", "fr-fr", "--", "fr"],
        ["Galego", "gl-es", "--", "en-us"],
        ["Hrvatski", "hr_HR", "--", "hr"],
        ["IsiZulu", "zu-za", "--", "en-us"],
        ["Íslenska", "is-is", "--", "en-us"],
        ["Italiano Italia", "it-it", "Italiano", "it"],
        ["Italiano Svizzera", "it-ch", "Italiano", "it"],
        ["Magyar", "hu-hu", "--", "hu"],
        ["Nederlands", "nl-nl", "--", "nl"],
        ["Polski", "pl-pl", "--", "pl"],
        ["Brasil", "pt-br", "Português", "pt-br"],
        ["Portugal", "pt-pt", "Português", "pt-pt"],
        ["Română", "ro-ro", "--", "ro"],
		["Pусский", "ru-ru", "--", "ru"],
		["Slovenčina", "sk-sk", "--", "sk"],
        ["Suomi", "fi-fi", "--", "fi"],
        ["Svenska", "sv-se", "--", "sv"],
        ["Türkçe", "tr-tr", "--", "tr"],
        ["български", "bg-bg", "--", "bg"],
		["Українська", "uk", "--", "uk"],
        ["Српски", "sr-rs", "--", "sr"],
        ["한국어", "ko-kr", "--", "ko"],
        ["普通话 (中国大陆)", "cmn-hans-cn", "中文", "zh-cn"],
        ["普通话 (香港)", "cmn-hans-hk", "中文", "zh-cn"],
        ["中文 (台灣)", "cmn-hant-tw", "中文", "zh-tw"],
        ["粵語 (香港)", "yue-hant-hk", "中文", "zh-cn"],
        ["日本語", "ja-jp", "--", "ja"],
        ["Lingua latīna", "la", "--", "es-419"],
		["Hindi", "hi-in", "--", "hi-in"],
		["Hebrew", "he-il", "--", "he-il"],
		["Greek", "el-gr", "--", "el-gr"],
		["Farsi", "fa-ir", "--", "fa-ir"],
		["Thai", "th-th", "--", "th-th"],
		["Tiếng Việt", "vi-VN", "--", "vi-VN"],
		["Lietuvių", "lt-LT", "--", "lt-LT"],
		["Algeria", "ar-DZ", "--", "ar-DZ"],
		["Bahrain", "ar-BH", "--", "ar-BH"],
		["Egypt", "ar-EG", "--", "ar-EG"],
		["Iraq", "ar-IQ", "--", "ar-IQ"],
		["Jordan", "ar-JO", "--", "ar-JO"],
		["Kuwait", "ar-KW", "--", "ar-KW"],
		["Lebanon", "ar-LB", "--", "ar-LB"],

		["Lybia", "ar-LY", "--", "ar-LY"],
		["Morocco", "ar-MA", "--", "ar-MA"],
		["Oman", "ar-OM", "--", "ar-OM"],
		["Qatar", "ar-QA", "--", "ar-QA"],
		["Saudi Arabia", "ar-SA", "--", "ar-SA"],
		["Tunisia", "ar-TN", "--", "ar-TN"],
		["UAE", "ar-AE", "--", "ar-AE"],
		["Yemen", "ar-YE", "--", "ar-YE"],
		
    ];
    return langs[opt][1];
}
