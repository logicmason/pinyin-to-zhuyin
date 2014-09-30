pinyin-to-zhuyin
================

Command line tool for converting pinyin to zhuyin (aka "bopomofo" or ㄅㄆㄇㄈ)

##Installation

```
$ git clone https://github.com/logicmason/pinyin-to-zhuyin.git
$ cd pinyin-to-zhuyin
$ npm install
$ npm install -g .
```

##Usage

Pinyin to Zhuyin creates two command line utilities, `p2z` and `p2z-stream`. Internally, they use the same converter.

###p2z
P2z takes a pinyin input file as a command line argument and then outputs the equivalent zhuyin. The included file named "test" contains the short piyin phrase—`cheng2gong1le5!`. Example usage:
```
$ p2z ./test
ㄔㄥˊㄍㄨㄥㄌㄜ˙!
```
Output can also be piped to another file:
```
$ p2z ./test > output.txt
```

###p2z-stream
Running p2z-stream from the command line will start an interactive mode.
```
$ p2z-stream
> ni3hao3
ㄋㄧˇㄏㄠˇ
> you3 ren2 zai4 ma5?
ㄧㄡˇ ㄖㄣˊ ㄗㄞˋ ㄇㄚ˙?
> `ctrl-c`
$
```

##Issues
Currently, the converter cannot infer neutral tones from pinyin unless they are explicitly marked as tone 5. Ommiting the tone number as is common usage for pinyin will convert to zhuyin syllables without tone marks, why by convention denotes a first tone, not a neutral tone in zhuyin.
