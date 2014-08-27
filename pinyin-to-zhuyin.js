// * Pinyin to Zhuyin converter
// * Mark Wilbur
// * Copyright (c) 2014
// * MIT License
// * You are free to use and build upon this code but clearly give credit to its author


var bpmf = {
1:{"ㄧㄠ":"yao", "ㄧㄡ":"you", "ㄩㄝ":"yue", "ㄩㄥ":"yong",
   "ㄩㄢ":"yuan", "ㄧㄥ":"ying", "ㄩㄣ":"yun",
   "ㄧㄤ":"yang", "ㄧㄢ":"yan", "ㄧㄣ":"yin",
   "ㄨㄟ":"wei", "ㄨㄤ":"wang", "ㄨㄢ":"wan", "ㄨㄥ":"weng", "ㄨㄣ":"wen", "ㄨㄞ":"wai"},
2:{"ㄧㄤ":"iang", "ㄧㄥ":"ing"},
3:{"ㄧㄞ": "iai", "ㄧㄠ":"iao", "ㄧㄡ":"iu", "ㄧㄢ":"ian", "ㄧㄣ":"in"},
4:{"ㄨㄞ":"uai", "ㄨㄤ":"uang", "ㄨㄢ":"uan", "ㄨㄚ":"ua",
   "ㄨㄛ": "uo", "ㄨㄟ":"ui", "ㄨㄣ":"un", "ㄩㄣ":"ün", "ㄩㄥ":"iong", "ㄨㄥ":"ong"},
5:{"ㄩㄢ":"uan", "ㄩㄣ":"un", "ㄩㄥ":"ong", "ㄩㄝ":"ue"},
6:{"ㄓ":"zhi", "ㄔ":"chi", "ㄕ":"shi", "ㄖ":"ri", "ㄤ":"ang", "ㄥ":"eng", "ㄞ":"ai", "ㄟ":"ei", "ㄠ":"ao", "ㄡ":"ou", "ㄦ":"er"},
7:{"ㄢ":"an", "ㄣ":"en", "ㄨㄚ":"wa", "ㄨㄛ":"wo", "ㄨ":"wu",
   "ㄧㄚ":"ya", "ㄧㄝ":"ye", "ㄩ":"yu"},
8:{"ㄧㄚ":"ia", "ㄧㄛ":"io", "ㄧㄝ":"ie"},
9:{"ㄓ":"zh", "ㄔ":"ch", "ㄕ":"sh",
   "ㄗ":"zi", "ㄘ":"ci", "ㄙ":"si",
   "ㄖ":"r", "ㄧ":"yi", "ㄩㄝ":"üe"},
10:{"ㄅ":"b", "ㄆ":"p", "ㄇ":"m", "ㄈ":"f",
   "ㄉ":"d", "ㄊ":"t", "ㄋ":"n", "ㄌ":"l",
   "ㄍ":"g", "ㄎ":"k", "ㄏ":"h",
   "ㄐ":"j", "ㄑ":"q", "ㄒ":"x",
   "ㄗ":"z", "ㄘ":"c", "ㄙ":"s",
   "ㄧ":"i", "ㄨ":"u", "ㄩ":"ü",
   "ㄚ":"a", "ㄛ":"o", "ㄜ":"e"},
11:{"ㄩ":"v"}
};

var tones = {"1":"", "2":"ˊ", "3":"ˇ", "4":"ˋ", "5":"˙"};


var toZhuyin = function(pinyin, options) {
  options = options || {};
  var zhuyin = p2z(pinyin.toLowerCase(), options);
  zhuyin = zhuyin.replace(/・/g, " ");  // turn ・ separators into spaces
  if (options.nbsp) {
    zhuyin = zhuyin.replace(/ /g, "&nbsp;");
  }
  return zhuyin;
}

var z2p = function(zhuyin) {
  return "Not implemented";
}

var p2z = function(pinyin, options) {
  options = options || {};
  var output = pinyin;
  for (var i = 1; i<=Object.keys(bpmf).length; i++) {
    for (var j in bpmf[i]) {
      rexp = new RegExp(bpmf[i][j],"g");
      output = output.replace(rexp, j);
    }
  }
  output = output.replace(/(ㄐ|ㄑ|ㄒ)ㄨ/g, "$1ㄩ") // handle ju,qu,xu words
  if (options.tones) {
    for (var k = 1; k <= Object.keys(tones).length; k++) {
      output = output.replace(new RegExp(k, "g"), tones[k]);
    }
  }
  return output;
}


module.exports = toZhuyin;
module.exports.bpmf = bpmf;
module.exports.p2z = p2z;
