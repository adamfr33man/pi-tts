pi-tts
------

I wrote this because I was playing with TTS on the Raspberry Pi and my kids started talking to it. I was using the shell to control it but figured it could be fun to have a web interface to it. I've also hooked up an LCD interface and wanted to make something relatively generic which could have information pushed to it to display.

Installation
============

First you want to install:

alsa
fesival
add yourself to the audio group
log out/back in if ssh

Running
=======

Run

```
node pi-tts.js
```

You can send commands to it by going to
```
localhost:9615
```
