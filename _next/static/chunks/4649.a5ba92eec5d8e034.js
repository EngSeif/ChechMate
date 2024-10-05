"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4649],{4649:function(e,t,n){n.d(t,{DotLottieAudio:function(){return a}});var o=n(853);n(1076);var r=(0,o.a)(e=>{var t,n,o,r,i,a,s,u,_,d,l,c,p,f;(t=function(){this.init()}).prototype={init:function(){var e=this||n;return e._counter=1e3,e._html5AudioPool=[],e.html5PoolSize=10,e._codecs={},e._howls=[],e._muted=!1,e._volume=1,e._canPlayEvent="canplaythrough",e._navigator="u">typeof window&&window.navigator?window.navigator:null,e.masterGain=null,e.noAudio=!1,e.usingWebAudio=!0,e.autoSuspend=!0,e.ctx=null,e.autoUnlock=!0,e._setup(),e},volume:function(e){var t=this||n;if(e=parseFloat(e),t.ctx||d(),"u">typeof e&&e>=0&&e<=1){if(t._volume=e,t._muted)return t;t.usingWebAudio&&t.masterGain.gain.setValueAtTime(e,n.ctx.currentTime);for(var o=0;o<t._howls.length;o++)if(!t._howls[o]._webAudio)for(var r=t._howls[o]._getSoundIds(),i=0;i<r.length;i++){var a=t._howls[o]._soundById(r[i]);a&&a._node&&(a._node.volume=a._volume*e)}return t}return t._volume},mute:function(e){var t=this||n;t.ctx||d(),t._muted=e,t.usingWebAudio&&t.masterGain.gain.setValueAtTime(e?0:t._volume,n.ctx.currentTime);for(var o=0;o<t._howls.length;o++)if(!t._howls[o]._webAudio)for(var r=t._howls[o]._getSoundIds(),i=0;i<r.length;i++){var a=t._howls[o]._soundById(r[i]);a&&a._node&&(a._node.muted=!!e||a._muted)}return t},stop:function(){for(var e=this||n,t=0;t<e._howls.length;t++)e._howls[t].stop();return e},unload:function(){for(var e=this||n,t=e._howls.length-1;t>=0;t--)e._howls[t].unload();return e.usingWebAudio&&e.ctx&&"u">typeof e.ctx.close&&(e.ctx.close(),e.ctx=null,d()),e},codecs:function(e){return(this||n)._codecs[e.replace(/^x-/,"")]},_setup:function(){var e=this||n;if(e.state=e.ctx&&e.ctx.state||"suspended",e._autoSuspend(),!e.usingWebAudio){if("u">typeof Audio)try{var t=new Audio;typeof t.oncanplaythrough>"u"&&(e._canPlayEvent="canplay")}catch{e.noAudio=!0}else e.noAudio=!0}try{var t=new Audio;t.muted&&(e.noAudio=!0)}catch{}return e.noAudio||e._setupCodecs(),e},_setupCodecs:function(){var e=this||n,t=null;try{t="u">typeof Audio?new Audio:null}catch{return e}if(!t||"function"!=typeof t.canPlayType)return e;var o=t.canPlayType("audio/mpeg;").replace(/^no$/,""),r=e._navigator?e._navigator.userAgent:"",i=r.match(/OPR\/([0-6].)/g),a=i&&33>parseInt(i[0].split("/")[1],10),s=-1!==r.indexOf("Safari")&&-1===r.indexOf("Chrome"),u=r.match(/Version\/(.*?) /),_=s&&u&&15>parseInt(u[1],10);return e._codecs={mp3:!!(!a&&(o||t.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!o,opus:!!t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(t.canPlayType('audio/wav; codecs="1"')||t.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!t.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!t.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(t.canPlayType("audio/x-m4b;")||t.canPlayType("audio/m4b;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(t.canPlayType("audio/x-mp4;")||t.canPlayType("audio/mp4;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!_&&t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!_&&t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!t.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(t.canPlayType("audio/x-flac;")||t.canPlayType("audio/flac;")).replace(/^no$/,"")},e},_unlockAudio:function(){var e=this||n;if(!(e._audioUnlocked||!e.ctx)){e._audioUnlocked=!1,e.autoUnlock=!1,e._mobileUnloaded||44100===e.ctx.sampleRate||(e._mobileUnloaded=!0,e.unload()),e._scratchBuffer=e.ctx.createBuffer(1,1,22050);var t=function(n){for(;e._html5AudioPool.length<e.html5PoolSize;)try{var o=new Audio;o._unlocked=!0,e._releaseHtml5Audio(o)}catch{e.noAudio=!0;break}for(var r=0;r<e._howls.length;r++)if(!e._howls[r]._webAudio)for(var i=e._howls[r]._getSoundIds(),a=0;a<i.length;a++){var s=e._howls[r]._soundById(i[a]);s&&s._node&&!s._node._unlocked&&(s._node._unlocked=!0,s._node.load())}e._autoResume();var u=e.ctx.createBufferSource();u.buffer=e._scratchBuffer,u.connect(e.ctx.destination),typeof u.start>"u"?u.noteOn(0):u.start(0),"function"==typeof e.ctx.resume&&e.ctx.resume(),u.onended=function(){u.disconnect(0),e._audioUnlocked=!0,document.removeEventListener("touchstart",t,!0),document.removeEventListener("touchend",t,!0),document.removeEventListener("click",t,!0),document.removeEventListener("keydown",t,!0);for(var n=0;n<e._howls.length;n++)e._howls[n]._emit("unlock")}};return document.addEventListener("touchstart",t,!0),document.addEventListener("touchend",t,!0),document.addEventListener("click",t,!0),document.addEventListener("keydown",t,!0),e}},_obtainHtml5Audio:function(){var e=this||n;if(e._html5AudioPool.length)return e._html5AudioPool.pop();var t=new Audio().play();return t&&"u">typeof Promise&&(t instanceof Promise||"function"==typeof t.then)&&t.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(e){var t=this||n;return e._unlocked&&t._html5AudioPool.push(e),t},_autoSuspend:function(){var e=this;if(!(!e.autoSuspend||!e.ctx||typeof e.ctx.suspend>"u"||!n.usingWebAudio)){for(var t=0;t<e._howls.length;t++)if(e._howls[t]._webAudio){for(var o=0;o<e._howls[t]._sounds.length;o++)if(!e._howls[t]._sounds[o]._paused)return e}return e._suspendTimer&&clearTimeout(e._suspendTimer),e._suspendTimer=setTimeout(function(){if(e.autoSuspend){e._suspendTimer=null,e.state="suspending";var t=function(){e.state="suspended",e._resumeAfterSuspend&&(delete e._resumeAfterSuspend,e._autoResume())};e.ctx.suspend().then(t,t)}},3e4),e}},_autoResume:function(){var e=this;if(!(!e.ctx||typeof e.ctx.resume>"u"||!n.usingWebAudio))return"running"===e.state&&"interrupted"!==e.ctx.state&&e._suspendTimer?(clearTimeout(e._suspendTimer),e._suspendTimer=null):"suspended"===e.state||"running"===e.state&&"interrupted"===e.ctx.state?(e.ctx.resume().then(function(){e.state="running";for(var t=0;t<e._howls.length;t++)e._howls[t]._emit("resume")}),e._suspendTimer&&(clearTimeout(e._suspendTimer),e._suspendTimer=null)):"suspending"===e.state&&(e._resumeAfterSuspend=!0),e}},n=new t,(o=function(e){if(!e.src||0===e.src.length){console.error("An array of source files must be passed with any new Howl.");return}this.init(e)}).prototype={init:function(e){var t=this;return n.ctx||d(),t._autoplay=e.autoplay||!1,t._format="string"!=typeof e.format?e.format:[e.format],t._html5=e.html5||!1,t._muted=e.mute||!1,t._loop=e.loop||!1,t._pool=e.pool||5,t._preload="boolean"!=typeof e.preload&&"metadata"!==e.preload||e.preload,t._rate=e.rate||1,t._sprite=e.sprite||{},t._src="string"!=typeof e.src?e.src:[e.src],t._volume=void 0!==e.volume?e.volume:1,t._xhr={method:e.xhr&&e.xhr.method?e.xhr.method:"GET",headers:e.xhr&&e.xhr.headers?e.xhr.headers:null,withCredentials:!!e.xhr&&!!e.xhr.withCredentials&&e.xhr.withCredentials},t._duration=0,t._state="unloaded",t._sounds=[],t._endTimers={},t._queue=[],t._playLock=!1,t._onend=e.onend?[{fn:e.onend}]:[],t._onfade=e.onfade?[{fn:e.onfade}]:[],t._onload=e.onload?[{fn:e.onload}]:[],t._onloaderror=e.onloaderror?[{fn:e.onloaderror}]:[],t._onplayerror=e.onplayerror?[{fn:e.onplayerror}]:[],t._onpause=e.onpause?[{fn:e.onpause}]:[],t._onplay=e.onplay?[{fn:e.onplay}]:[],t._onstop=e.onstop?[{fn:e.onstop}]:[],t._onmute=e.onmute?[{fn:e.onmute}]:[],t._onvolume=e.onvolume?[{fn:e.onvolume}]:[],t._onrate=e.onrate?[{fn:e.onrate}]:[],t._onseek=e.onseek?[{fn:e.onseek}]:[],t._onunlock=e.onunlock?[{fn:e.onunlock}]:[],t._onresume=[],t._webAudio=n.usingWebAudio&&!t._html5,"u">typeof n.ctx&&n.ctx&&n.autoUnlock&&n._unlockAudio(),n._howls.push(t),t._autoplay&&t._queue.push({event:"play",action:function(){t.play()}}),t._preload&&"none"!==t._preload&&t.load(),t},load:function(){var e,t,o=null;if(n.noAudio){this._emit("loaderror",null,"No audio support.");return}"string"==typeof this._src&&(this._src=[this._src]);for(var i=0;i<this._src.length;i++){if(this._format&&this._format[i])e=this._format[i];else{if("string"!=typeof(t=this._src[i])){this._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}(e=/^data:audio\/([^;,]+);/i.exec(t))||(e=/\.([^.]+)$/.exec(t.split("?",1)[0])),e&&(e=e[1].toLowerCase())}if(e||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),e&&n.codecs(e)){o=this._src[i];break}}if(!o){this._emit("loaderror",null,"No codec support for selected audio sources.");return}return this._src=o,this._state="loading","https:"===window.location.protocol&&"http:"===o.slice(0,5)&&(this._html5=!0,this._webAudio=!1),new r(this),this._webAudio&&a(this),this},play:function(e,t){var o=this,r=null;if("number"==typeof e)r=e,e=null;else{if("string"==typeof e&&"loaded"===o._state&&!o._sprite[e])return null;if(typeof e>"u"&&(e="__default",!o._playLock)){for(var i=0,a=0;a<o._sounds.length;a++)o._sounds[a]._paused&&!o._sounds[a]._ended&&(i++,r=o._sounds[a]._id);1===i?e=null:r=null}}var s=r?o._soundById(r):o._inactiveSound();if(!s)return null;if(r&&!e&&(e=s._sprite||"__default"),"loaded"!==o._state){s._sprite=e,s._ended=!1;var u=s._id;return o._queue.push({event:"play",action:function(){o.play(u)}}),u}if(r&&!s._paused)return t||o._loadQueue("play"),s._id;o._webAudio&&n._autoResume();var _=Math.max(0,s._seek>0?s._seek:o._sprite[e][0]/1e3),d=Math.max(0,(o._sprite[e][0]+o._sprite[e][1])/1e3-_),l=1e3*d/Math.abs(s._rate),c=o._sprite[e][0]/1e3,p=(o._sprite[e][0]+o._sprite[e][1])/1e3;s._sprite=e,s._ended=!1;var f=function(){s._paused=!1,s._seek=_,s._start=c,s._stop=p,s._loop=!!(s._loop||o._sprite[e][2])};if(_>=p){o._ended(s);return}var h=s._node;if(o._webAudio){var m=function(){o._playLock=!1,f(),o._refreshBuffer(s);var e=s._muted||o._muted?0:s._volume;h.gain.setValueAtTime(e,n.ctx.currentTime),s._playStart=n.ctx.currentTime,typeof h.bufferSource.start>"u"?s._loop?h.bufferSource.noteGrainOn(0,_,86400):h.bufferSource.noteGrainOn(0,_,d):s._loop?h.bufferSource.start(0,_,86400):h.bufferSource.start(0,_,d),l!==1/0&&(o._endTimers[s._id]=setTimeout(o._ended.bind(o,s),l)),t||setTimeout(function(){o._emit("play",s._id),o._loadQueue()},0)};"running"===n.state&&"interrupted"!==n.ctx.state?m():(o._playLock=!0,o.once("resume",m),o._clearTimer(s._id))}else{var y=function(){h.currentTime=_,h.muted=s._muted||o._muted||n._muted||h.muted,h.volume=s._volume*n.volume(),h.playbackRate=s._rate;try{var r=h.play();if(r&&"u">typeof Promise&&(r instanceof Promise||"function"==typeof r.then)?(o._playLock=!0,f(),r.then(function(){o._playLock=!1,h._unlocked=!0,t?o._loadQueue():o._emit("play",s._id)}).catch(function(){o._playLock=!1,o._emit("playerror",s._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),s._ended=!0,s._paused=!0})):t||(o._playLock=!1,f(),o._emit("play",s._id)),h.playbackRate=s._rate,h.paused){o._emit("playerror",s._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}"__default"!==e||s._loop?o._endTimers[s._id]=setTimeout(o._ended.bind(o,s),l):(o._endTimers[s._id]=function(){o._ended(s),h.removeEventListener("ended",o._endTimers[s._id],!1)},h.addEventListener("ended",o._endTimers[s._id],!1))}catch(e){o._emit("playerror",s._id,e)}};"data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"===h.src&&(h.src=o._src,h.load());var v=window&&window.ejecta||!h.readyState&&n._navigator.isCocoonJS;if(h.readyState>=3||v)y();else{o._playLock=!0,o._state="loading";var A=function(){o._state="loaded",y(),h.removeEventListener(n._canPlayEvent,A,!1)};h.addEventListener(n._canPlayEvent,A,!1),o._clearTimer(s._id)}}return s._id},pause:function(e){var t=this;if("loaded"!==t._state||t._playLock)return t._queue.push({event:"pause",action:function(){t.pause(e)}}),t;for(var n=t._getSoundIds(e),o=0;o<n.length;o++){t._clearTimer(n[o]);var r=t._soundById(n[o]);if(r&&!r._paused&&(r._seek=t.seek(n[o]),r._rateSeek=0,r._paused=!0,t._stopFade(n[o]),r._node)){if(t._webAudio){if(!r._node.bufferSource)continue;typeof r._node.bufferSource.stop>"u"?r._node.bufferSource.noteOff(0):r._node.bufferSource.stop(0),t._cleanBuffer(r._node)}else isNaN(r._node.duration)&&r._node.duration!==1/0||r._node.pause()}arguments[1]||t._emit("pause",r?r._id:null)}return t},stop:function(e,t){var n=this;if("loaded"!==n._state||n._playLock)return n._queue.push({event:"stop",action:function(){n.stop(e)}}),n;for(var o=n._getSoundIds(e),r=0;r<o.length;r++){n._clearTimer(o[r]);var i=n._soundById(o[r]);i&&(i._seek=i._start||0,i._rateSeek=0,i._paused=!0,i._ended=!0,n._stopFade(o[r]),i._node&&(n._webAudio?i._node.bufferSource&&(typeof i._node.bufferSource.stop>"u"?i._node.bufferSource.noteOff(0):i._node.bufferSource.stop(0),n._cleanBuffer(i._node)):isNaN(i._node.duration)&&i._node.duration!==1/0||(i._node.currentTime=i._start||0,i._node.pause(),i._node.duration===1/0&&n._clearSound(i._node))),t||n._emit("stop",i._id))}return n},mute:function(e,t){var o=this;if("loaded"!==o._state||o._playLock)return o._queue.push({event:"mute",action:function(){o.mute(e,t)}}),o;if(typeof t>"u"){if("boolean"!=typeof e)return o._muted;o._muted=e}for(var r=o._getSoundIds(t),i=0;i<r.length;i++){var a=o._soundById(r[i]);a&&(a._muted=e,a._interval&&o._stopFade(a._id),o._webAudio&&a._node?a._node.gain.setValueAtTime(e?0:a._volume,n.ctx.currentTime):a._node&&(a._node.muted=!!n._muted||e),o._emit("mute",a._id))}return o},volume:function(){var e,t,o,r=this,i=arguments;if(0===i.length)return r._volume;if(1===i.length||2===i.length&&typeof i[1]>"u"?r._getSoundIds().indexOf(i[0])>=0?o=parseInt(i[0],10):t=parseFloat(i[0]):i.length>=2&&(t=parseFloat(i[0]),o=parseInt(i[1],10)),!("u">typeof t)||!(t>=0)||!(t<=1))return(e=o?r._soundById(o):r._sounds[0])?e._volume:0;if("loaded"!==r._state||r._playLock)return r._queue.push({event:"volume",action:function(){r.volume.apply(r,i)}}),r;typeof o>"u"&&(r._volume=t),o=r._getSoundIds(o);for(var a=0;a<o.length;a++)(e=r._soundById(o[a]))&&(e._volume=t,i[2]||r._stopFade(o[a]),r._webAudio&&e._node&&!e._muted?e._node.gain.setValueAtTime(t,n.ctx.currentTime):e._node&&!e._muted&&(e._node.volume=t*n.volume()),r._emit("volume",e._id));return r},fade:function(e,t,o,r){var i=this;if("loaded"!==i._state||i._playLock)return i._queue.push({event:"fade",action:function(){i.fade(e,t,o,r)}}),i;e=Math.min(Math.max(0,parseFloat(e)),1),t=Math.min(Math.max(0,parseFloat(t)),1),o=parseFloat(o),i.volume(e,r);for(var a=i._getSoundIds(r),s=0;s<a.length;s++){var u=i._soundById(a[s]);if(u){if(r||i._stopFade(a[s]),i._webAudio&&!u._muted){var _=n.ctx.currentTime,d=_+o/1e3;u._volume=e,u._node.gain.setValueAtTime(e,_),u._node.gain.linearRampToValueAtTime(t,d)}i._startFadeInterval(u,e,t,o,a[s],typeof r>"u")}}return i},_startFadeInterval:function(e,t,n,o,r,i){var a=this,s=t,u=n-t,_=Math.abs(u/.01),d=Date.now();e._fadeTo=n,e._interval=setInterval(function(){var r=(Date.now()-d)/o;d=Date.now(),s+=u*r,s=Math.round(100*s)/100,s=u<0?Math.max(n,s):Math.min(n,s),a._webAudio?e._volume=s:a.volume(s,e._id,!0),i&&(a._volume=s),(n<t&&s<=n||n>t&&s>=n)&&(clearInterval(e._interval),e._interval=null,e._fadeTo=null,a.volume(n,e._id),a._emit("fade",e._id))},Math.max(4,_>0?o/_:o))},_stopFade:function(e){var t=this._soundById(e);return t&&t._interval&&(this._webAudio&&t._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(t._interval),t._interval=null,this.volume(t._fadeTo,e),t._fadeTo=null,this._emit("fade",e)),this},loop:function(){var e,t,n,o=arguments;if(0===o.length)return this._loop;if(1===o.length){if("boolean"!=typeof o[0])return!!(n=this._soundById(parseInt(o[0],10)))&&n._loop;e=o[0],this._loop=e}else 2===o.length&&(e=o[0],t=parseInt(o[1],10));for(var r=this._getSoundIds(t),i=0;i<r.length;i++)(n=this._soundById(r[i]))&&(n._loop=e,this._webAudio&&n._node&&n._node.bufferSource&&(n._node.bufferSource.loop=e,e&&(n._node.bufferSource.loopStart=n._start||0,n._node.bufferSource.loopEnd=n._stop,this.playing(r[i])&&(this.pause(r[i],!0),this.play(r[i],!0)))));return this},rate:function(){var e,t,o,r=this,i=arguments;if(0===i.length?o=r._sounds[0]._id:1===i.length?r._getSoundIds().indexOf(i[0])>=0?o=parseInt(i[0],10):t=parseFloat(i[0]):2===i.length&&(t=parseFloat(i[0]),o=parseInt(i[1],10)),"number"!=typeof t)return(e=r._soundById(o))?e._rate:r._rate;if("loaded"!==r._state||r._playLock)return r._queue.push({event:"rate",action:function(){r.rate.apply(r,i)}}),r;typeof o>"u"&&(r._rate=t),o=r._getSoundIds(o);for(var a=0;a<o.length;a++)if(e=r._soundById(o[a])){r.playing(o[a])&&(e._rateSeek=r.seek(o[a]),e._playStart=r._webAudio?n.ctx.currentTime:e._playStart),e._rate=t,r._webAudio&&e._node&&e._node.bufferSource?e._node.bufferSource.playbackRate.setValueAtTime(t,n.ctx.currentTime):e._node&&(e._node.playbackRate=t);var s=r.seek(o[a]),u=1e3*((r._sprite[e._sprite][0]+r._sprite[e._sprite][1])/1e3-s)/Math.abs(e._rate);(r._endTimers[o[a]]||!e._paused)&&(r._clearTimer(o[a]),r._endTimers[o[a]]=setTimeout(r._ended.bind(r,e),u)),r._emit("rate",e._id)}return r},seek:function(){var e,t,o=this,r=arguments;if(0===r.length?o._sounds.length&&(t=o._sounds[0]._id):1===r.length?o._getSoundIds().indexOf(r[0])>=0?t=parseInt(r[0],10):o._sounds.length&&(t=o._sounds[0]._id,e=parseFloat(r[0])):2===r.length&&(e=parseFloat(r[0]),t=parseInt(r[1],10)),typeof t>"u")return 0;if("number"==typeof e&&("loaded"!==o._state||o._playLock))return o._queue.push({event:"seek",action:function(){o.seek.apply(o,r)}}),o;var i=o._soundById(t);if(i){if("number"==typeof e&&e>=0){var a=o.playing(t);a&&o.pause(t,!0),i._seek=e,i._ended=!1,o._clearTimer(t),o._webAudio||!i._node||isNaN(i._node.duration)||(i._node.currentTime=e);var s=function(){a&&o.play(t,!0),o._emit("seek",t)};if(a&&!o._webAudio){var u=function(){o._playLock?setTimeout(u,0):s()};setTimeout(u,0)}else s()}else{if(!o._webAudio)return i._node.currentTime;var _=o.playing(t)?n.ctx.currentTime-i._playStart:0,d=i._rateSeek?i._rateSeek-i._seek:0;return i._seek+(d+_*Math.abs(i._rate))}}return o},playing:function(e){if("number"==typeof e){var t=this._soundById(e);return!!t&&!t._paused}for(var n=0;n<this._sounds.length;n++)if(!this._sounds[n]._paused)return!0;return!1},duration:function(e){var t=this._duration,n=this._soundById(e);return n&&(t=this._sprite[n._sprite][1]/1e3),t},state:function(){return this._state},unload:function(){for(var e=this,t=e._sounds,o=0;o<t.length;o++)t[o]._paused||e.stop(t[o]._id),e._webAudio||(e._clearSound(t[o]._node),t[o]._node.removeEventListener("error",t[o]._errorFn,!1),t[o]._node.removeEventListener(n._canPlayEvent,t[o]._loadFn,!1),t[o]._node.removeEventListener("ended",t[o]._endFn,!1),n._releaseHtml5Audio(t[o]._node)),delete t[o]._node,e._clearTimer(t[o]._id);var r=n._howls.indexOf(e);r>=0&&n._howls.splice(r,1);var a=!0;for(o=0;o<n._howls.length;o++)if(n._howls[o]._src===e._src||e._src.indexOf(n._howls[o]._src)>=0){a=!1;break}return i&&a&&delete i[e._src],n.noAudio=!1,e._state="unloaded",e._sounds=[],e=null,null},on:function(e,t,n,o){var r=this["_on"+e];return"function"==typeof t&&r.push(o?{id:n,fn:t,once:o}:{id:n,fn:t}),this},off:function(e,t,n){var o=this["_on"+e],r=0;if("number"==typeof t&&(n=t,t=null),t||n)for(r=0;r<o.length;r++){var i=n===o[r].id;if(t===o[r].fn&&i||!t&&i){o.splice(r,1);break}}else if(e)this["_on"+e]=[];else{var a=Object.keys(this);for(r=0;r<a.length;r++)0===a[r].indexOf("_on")&&Array.isArray(this[a[r]])&&(this[a[r]]=[])}return this},once:function(e,t,n){return this.on(e,t,n,1),this},_emit:function(e,t,n){for(var o=this["_on"+e],r=o.length-1;r>=0;r--)(!o[r].id||o[r].id===t||"load"===e)&&(setTimeout((function(e){e.call(this,t,n)}).bind(this,o[r].fn),0),o[r].once&&this.off(e,o[r].fn,o[r].id));return this._loadQueue(e),this},_loadQueue:function(e){if(this._queue.length>0){var t=this._queue[0];t.event===e&&(this._queue.shift(),this._loadQueue()),e||t.action()}return this},_ended:function(e){var t=e._sprite;if(!this._webAudio&&e._node&&!e._node.paused&&!e._node.ended&&e._node.currentTime<e._stop)return setTimeout(this._ended.bind(this,e),100),this;var o=!!(e._loop||this._sprite[t][2]);if(this._emit("end",e._id),!this._webAudio&&o&&this.stop(e._id,!0).play(e._id),this._webAudio&&o){this._emit("play",e._id),e._seek=e._start||0,e._rateSeek=0,e._playStart=n.ctx.currentTime;var r=(e._stop-e._start)*1e3/Math.abs(e._rate);this._endTimers[e._id]=setTimeout(this._ended.bind(this,e),r)}return this._webAudio&&!o&&(e._paused=!0,e._ended=!0,e._seek=e._start||0,e._rateSeek=0,this._clearTimer(e._id),this._cleanBuffer(e._node),n._autoSuspend()),this._webAudio||o||this.stop(e._id,!0),this},_clearTimer:function(e){if(this._endTimers[e]){if("function"!=typeof this._endTimers[e])clearTimeout(this._endTimers[e]);else{var t=this._soundById(e);t&&t._node&&t._node.removeEventListener("ended",this._endTimers[e],!1)}delete this._endTimers[e]}return this},_soundById:function(e){for(var t=0;t<this._sounds.length;t++)if(e===this._sounds[t]._id)return this._sounds[t];return null},_inactiveSound:function(){this._drain();for(var e=0;e<this._sounds.length;e++)if(this._sounds[e]._ended)return this._sounds[e].reset();return new r(this)},_drain:function(){var e=this._pool,t=0,n=0;if(!(this._sounds.length<e)){for(n=0;n<this._sounds.length;n++)this._sounds[n]._ended&&t++;for(n=this._sounds.length-1;n>=0;n--){if(t<=e)return;this._sounds[n]._ended&&(this._webAudio&&this._sounds[n]._node&&this._sounds[n]._node.disconnect(0),this._sounds.splice(n,1),t--)}}},_getSoundIds:function(e){if(!(typeof e>"u"))return[e];for(var t=[],n=0;n<this._sounds.length;n++)t.push(this._sounds[n]._id);return t},_refreshBuffer:function(e){return e._node.bufferSource=n.ctx.createBufferSource(),e._node.bufferSource.buffer=i[this._src],e._panner?e._node.bufferSource.connect(e._panner):e._node.bufferSource.connect(e._node),e._node.bufferSource.loop=e._loop,e._loop&&(e._node.bufferSource.loopStart=e._start||0,e._node.bufferSource.loopEnd=e._stop||0),e._node.bufferSource.playbackRate.setValueAtTime(e._rate,n.ctx.currentTime),this},_cleanBuffer:function(e){var t=n._navigator&&n._navigator.vendor.indexOf("Apple")>=0;if(n._scratchBuffer&&e.bufferSource&&(e.bufferSource.onended=null,e.bufferSource.disconnect(0),t))try{e.bufferSource.buffer=n._scratchBuffer}catch{}return e.bufferSource=null,this},_clearSound:function(e){/MSIE |Trident\//.test(n._navigator&&n._navigator.userAgent)||(e.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}},(r=function(e){this._parent=e,this.init()}).prototype={init:function(){var e=this._parent;return this._muted=e._muted,this._loop=e._loop,this._volume=e._volume,this._rate=e._rate,this._seek=0,this._paused=!0,this._ended=!0,this._sprite="__default",this._id=++n._counter,e._sounds.push(this),this.create(),this},create:function(){var e=this._parent,t=n._muted||this._muted||this._parent._muted?0:this._volume;return e._webAudio?(this._node=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),this._node.gain.setValueAtTime(t,n.ctx.currentTime),this._node.paused=!0,this._node.connect(n.masterGain)):n.noAudio||(this._node=n._obtainHtml5Audio(),this._errorFn=this._errorListener.bind(this),this._node.addEventListener("error",this._errorFn,!1),this._loadFn=this._loadListener.bind(this),this._node.addEventListener(n._canPlayEvent,this._loadFn,!1),this._endFn=this._endListener.bind(this),this._node.addEventListener("ended",this._endFn,!1),this._node.src=e._src,this._node.preload=!0===e._preload?"auto":e._preload,this._node.volume=t*n.volume(),this._node.load()),this},reset:function(){var e=this._parent;return this._muted=e._muted,this._loop=e._loop,this._volume=e._volume,this._rate=e._rate,this._seek=0,this._rateSeek=0,this._paused=!0,this._ended=!0,this._sprite="__default",this._id=++n._counter,this},_errorListener:function(){this._parent._emit("loaderror",this._id,this._node.error?this._node.error.code:0),this._node.removeEventListener("error",this._errorFn,!1)},_loadListener:function(){var e=this._parent;e._duration=Math.ceil(10*this._node.duration)/10,0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue()),this._node.removeEventListener(n._canPlayEvent,this._loadFn,!1)},_endListener:function(){var e=this._parent;e._duration===1/0&&(e._duration=Math.ceil(10*this._node.duration)/10,e._sprite.__default[1]===1/0&&(e._sprite.__default[1]=1e3*e._duration),e._ended(this)),this._node.removeEventListener("ended",this._endFn,!1)}},i={},a=function(e){var t=e._src;if(i[t]){e._duration=i[t].duration,_(e);return}if(/^data:[^;]+;base64,/.test(t)){for(var n=atob(t.split(",")[1]),o=new Uint8Array(n.length),r=0;r<n.length;++r)o[r]=n.charCodeAt(r);u(o.buffer,e)}else{var a=new XMLHttpRequest;a.open(e._xhr.method,t,!0),a.withCredentials=e._xhr.withCredentials,a.responseType="arraybuffer",e._xhr.headers&&Object.keys(e._xhr.headers).forEach(function(t){a.setRequestHeader(t,e._xhr.headers[t])}),a.onload=function(){var t=(a.status+"")[0];if("0"!==t&&"2"!==t&&"3"!==t){e._emit("loaderror",null,"Failed loading audio file with status: "+a.status+".");return}u(a.response,e)},a.onerror=function(){e._webAudio&&(e._html5=!0,e._webAudio=!1,e._sounds=[],delete i[t],e.load())},s(a)}},s=function(e){try{e.send()}catch{e.onerror()}},u=function(e,t){var o=function(){t._emit("loaderror",null,"Decoding audio data failed.")},r=function(e){e&&t._sounds.length>0?(i[t._src]=e,_(t,e)):o()};"u">typeof Promise&&1===n.ctx.decodeAudioData.length?n.ctx.decodeAudioData(e).then(r).catch(o):n.ctx.decodeAudioData(e,r,o)},_=function(e,t){t&&!e._duration&&(e._duration=t.duration),0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue())},d=function(){if(n.usingWebAudio){try{"u">typeof AudioContext?n.ctx=new AudioContext:"u">typeof webkitAudioContext?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch{n.usingWebAudio=!1}n.ctx||(n.usingWebAudio=!1);var e=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),t=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),o=t?parseInt(t[1],10):null;if(e&&o&&o<9){var r=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());n._navigator&&!r&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.setValueAtTime(n._muted?0:n._volume,n.ctx.currentTime),n.masterGain.connect(n.ctx.destination)),n._setup()}},"function"==typeof define&&define.amd&&define([],function(){return{Howler:n,Howl:o}}),"u">typeof e&&(e.Howler=n,e.Howl=o),"u">typeof global?(global.HowlerGlobal=t,global.Howler=n,global.Howl=o,global.Sound=r):"u">typeof window&&(window.HowlerGlobal=t,window.Howler=n,window.Howl=o,window.Sound=r),HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(e){if(!this.ctx||!this.ctx.listener)return this;for(var t=this._howls.length-1;t>=0;t--)this._howls[t].stereo(e);return this},HowlerGlobal.prototype.pos=function(e,t,n){return this.ctx&&this.ctx.listener?(t="number"!=typeof t?this._pos[1]:t,n="number"!=typeof n?this._pos[2]:n,"number"!=typeof e)?this._pos:(this._pos=[e,t,n],"u">typeof this.ctx.listener.positionX?(this.ctx.listener.positionX.setTargetAtTime(this._pos[0],Howler.ctx.currentTime,.1),this.ctx.listener.positionY.setTargetAtTime(this._pos[1],Howler.ctx.currentTime,.1),this.ctx.listener.positionZ.setTargetAtTime(this._pos[2],Howler.ctx.currentTime,.1)):this.ctx.listener.setPosition(this._pos[0],this._pos[1],this._pos[2]),this):this},HowlerGlobal.prototype.orientation=function(e,t,n,o,r,i){if(!this.ctx||!this.ctx.listener)return this;var a=this._orientation;return(t="number"!=typeof t?a[1]:t,n="number"!=typeof n?a[2]:n,o="number"!=typeof o?a[3]:o,r="number"!=typeof r?a[4]:r,i="number"!=typeof i?a[5]:i,"number"!=typeof e)?a:(this._orientation=[e,t,n,o,r,i],"u">typeof this.ctx.listener.forwardX?(this.ctx.listener.forwardX.setTargetAtTime(e,Howler.ctx.currentTime,.1),this.ctx.listener.forwardY.setTargetAtTime(t,Howler.ctx.currentTime,.1),this.ctx.listener.forwardZ.setTargetAtTime(n,Howler.ctx.currentTime,.1),this.ctx.listener.upX.setTargetAtTime(o,Howler.ctx.currentTime,.1),this.ctx.listener.upY.setTargetAtTime(r,Howler.ctx.currentTime,.1),this.ctx.listener.upZ.setTargetAtTime(i,Howler.ctx.currentTime,.1)):this.ctx.listener.setOrientation(e,t,n,o,r,i),this)},Howl.prototype.init=(l=Howl.prototype.init,function(e){return this._orientation=e.orientation||[1,0,0],this._stereo=e.stereo||null,this._pos=e.pos||null,this._pannerAttr={coneInnerAngle:"u">typeof e.coneInnerAngle?e.coneInnerAngle:360,coneOuterAngle:"u">typeof e.coneOuterAngle?e.coneOuterAngle:360,coneOuterGain:"u">typeof e.coneOuterGain?e.coneOuterGain:0,distanceModel:"u">typeof e.distanceModel?e.distanceModel:"inverse",maxDistance:"u">typeof e.maxDistance?e.maxDistance:1e4,panningModel:"u">typeof e.panningModel?e.panningModel:"HRTF",refDistance:"u">typeof e.refDistance?e.refDistance:1,rolloffFactor:"u">typeof e.rolloffFactor?e.rolloffFactor:1},this._onstereo=e.onstereo?[{fn:e.onstereo}]:[],this._onpos=e.onpos?[{fn:e.onpos}]:[],this._onorientation=e.onorientation?[{fn:e.onorientation}]:[],l.call(this,e)}),Howl.prototype.stereo=function(e,t){var n=this;if(!n._webAudio)return n;if("loaded"!==n._state)return n._queue.push({event:"stereo",action:function(){n.stereo(e,t)}}),n;var o=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof t>"u"){if("number"!=typeof e)return n._stereo;n._stereo=e,n._pos=[e,0,0]}for(var r=n._getSoundIds(t),i=0;i<r.length;i++){var a=n._soundById(r[i]);if(a){if("number"!=typeof e)return a._stereo;a._stereo=e,a._pos=[e,0,0],a._node&&(a._pannerAttr.panningModel="equalpower",a._panner&&a._panner.pan||f(a,o),"spatial"===o?"u">typeof a._panner.positionX?(a._panner.positionX.setValueAtTime(e,Howler.ctx.currentTime),a._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),a._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):a._panner.setPosition(e,0,0):a._panner.pan.setValueAtTime(e,Howler.ctx.currentTime)),n._emit("stereo",a._id)}}return n},Howl.prototype.pos=function(e,t,n,o){var r=this;if(!r._webAudio)return r;if("loaded"!==r._state)return r._queue.push({event:"pos",action:function(){r.pos(e,t,n,o)}}),r;if(t="number"!=typeof t?0:t,n="number"!=typeof n?-.5:n,typeof o>"u"){if("number"!=typeof e)return r._pos;r._pos=[e,t,n]}for(var i=r._getSoundIds(o),a=0;a<i.length;a++){var s=r._soundById(i[a]);if(s){if("number"!=typeof e)return s._pos;s._pos=[e,t,n],s._node&&((!s._panner||s._panner.pan)&&f(s,"spatial"),"u">typeof s._panner.positionX?(s._panner.positionX.setValueAtTime(e,Howler.ctx.currentTime),s._panner.positionY.setValueAtTime(t,Howler.ctx.currentTime),s._panner.positionZ.setValueAtTime(n,Howler.ctx.currentTime)):s._panner.setPosition(e,t,n)),r._emit("pos",s._id)}}return r},Howl.prototype.orientation=function(e,t,n,o){var r=this;if(!r._webAudio)return r;if("loaded"!==r._state)return r._queue.push({event:"orientation",action:function(){r.orientation(e,t,n,o)}}),r;if(t="number"!=typeof t?r._orientation[1]:t,n="number"!=typeof n?r._orientation[2]:n,typeof o>"u"){if("number"!=typeof e)return r._orientation;r._orientation=[e,t,n]}for(var i=r._getSoundIds(o),a=0;a<i.length;a++){var s=r._soundById(i[a]);if(s){if("number"!=typeof e)return s._orientation;s._orientation=[e,t,n],s._node&&(s._panner||(s._pos||(s._pos=r._pos||[0,0,-.5]),f(s,"spatial")),"u">typeof s._panner.orientationX?(s._panner.orientationX.setValueAtTime(e,Howler.ctx.currentTime),s._panner.orientationY.setValueAtTime(t,Howler.ctx.currentTime),s._panner.orientationZ.setValueAtTime(n,Howler.ctx.currentTime)):s._panner.setOrientation(e,t,n)),r._emit("orientation",s._id)}}return r},Howl.prototype.pannerAttr=function(){var e,t,n,o=arguments;if(!this._webAudio)return this;if(0===o.length)return this._pannerAttr;if(1===o.length){if("object"!=typeof o[0])return(n=this._soundById(parseInt(o[0],10)))?n._pannerAttr:this._pannerAttr;e=o[0],typeof t>"u"&&(e.pannerAttr||(e.pannerAttr={coneInnerAngle:e.coneInnerAngle,coneOuterAngle:e.coneOuterAngle,coneOuterGain:e.coneOuterGain,distanceModel:e.distanceModel,maxDistance:e.maxDistance,refDistance:e.refDistance,rolloffFactor:e.rolloffFactor,panningModel:e.panningModel}),this._pannerAttr={coneInnerAngle:"u">typeof e.pannerAttr.coneInnerAngle?e.pannerAttr.coneInnerAngle:this._coneInnerAngle,coneOuterAngle:"u">typeof e.pannerAttr.coneOuterAngle?e.pannerAttr.coneOuterAngle:this._coneOuterAngle,coneOuterGain:"u">typeof e.pannerAttr.coneOuterGain?e.pannerAttr.coneOuterGain:this._coneOuterGain,distanceModel:"u">typeof e.pannerAttr.distanceModel?e.pannerAttr.distanceModel:this._distanceModel,maxDistance:"u">typeof e.pannerAttr.maxDistance?e.pannerAttr.maxDistance:this._maxDistance,refDistance:"u">typeof e.pannerAttr.refDistance?e.pannerAttr.refDistance:this._refDistance,rolloffFactor:"u">typeof e.pannerAttr.rolloffFactor?e.pannerAttr.rolloffFactor:this._rolloffFactor,panningModel:"u">typeof e.pannerAttr.panningModel?e.pannerAttr.panningModel:this._panningModel})}else 2===o.length&&(e=o[0],t=parseInt(o[1],10));for(var r=this._getSoundIds(t),i=0;i<r.length;i++)if(n=this._soundById(r[i])){var a=n._pannerAttr;a={coneInnerAngle:"u">typeof e.coneInnerAngle?e.coneInnerAngle:a.coneInnerAngle,coneOuterAngle:"u">typeof e.coneOuterAngle?e.coneOuterAngle:a.coneOuterAngle,coneOuterGain:"u">typeof e.coneOuterGain?e.coneOuterGain:a.coneOuterGain,distanceModel:"u">typeof e.distanceModel?e.distanceModel:a.distanceModel,maxDistance:"u">typeof e.maxDistance?e.maxDistance:a.maxDistance,refDistance:"u">typeof e.refDistance?e.refDistance:a.refDistance,rolloffFactor:"u">typeof e.rolloffFactor?e.rolloffFactor:a.rolloffFactor,panningModel:"u">typeof e.panningModel?e.panningModel:a.panningModel};var s=n._panner;s?(s.coneInnerAngle=a.coneInnerAngle,s.coneOuterAngle=a.coneOuterAngle,s.coneOuterGain=a.coneOuterGain,s.distanceModel=a.distanceModel,s.maxDistance=a.maxDistance,s.refDistance=a.refDistance,s.rolloffFactor=a.rolloffFactor,s.panningModel=a.panningModel):(n._pos||(n._pos=this._pos||[0,0,-.5]),f(n,"spatial"))}return this},Sound.prototype.init=(c=Sound.prototype.init,function(){var e=this._parent;this._orientation=e._orientation,this._stereo=e._stereo,this._pos=e._pos,this._pannerAttr=e._pannerAttr,c.call(this),this._stereo?e.stereo(this._stereo):this._pos&&e.pos(this._pos[0],this._pos[1],this._pos[2],this._id)}),Sound.prototype.reset=(p=Sound.prototype.reset,function(){var e=this._parent;return this._orientation=e._orientation,this._stereo=e._stereo,this._pos=e._pos,this._pannerAttr=e._pannerAttr,this._stereo?e.stereo(this._stereo):this._pos?e.pos(this._pos[0],this._pos[1],this._pos[2],this._id):this._panner&&(this._panner.disconnect(0),this._panner=void 0,e._refreshBuffer(this)),p.call(this)}),f=function(e,t){"spatial"===(t=t||"spatial")?(e._panner=Howler.ctx.createPanner(),e._panner.coneInnerAngle=e._pannerAttr.coneInnerAngle,e._panner.coneOuterAngle=e._pannerAttr.coneOuterAngle,e._panner.coneOuterGain=e._pannerAttr.coneOuterGain,e._panner.distanceModel=e._pannerAttr.distanceModel,e._panner.maxDistance=e._pannerAttr.maxDistance,e._panner.refDistance=e._pannerAttr.refDistance,e._panner.rolloffFactor=e._pannerAttr.rolloffFactor,e._panner.panningModel=e._pannerAttr.panningModel,"u">typeof e._panner.positionX?(e._panner.positionX.setValueAtTime(e._pos[0],Howler.ctx.currentTime),e._panner.positionY.setValueAtTime(e._pos[1],Howler.ctx.currentTime),e._panner.positionZ.setValueAtTime(e._pos[2],Howler.ctx.currentTime)):e._panner.setPosition(e._pos[0],e._pos[1],e._pos[2]),"u">typeof e._panner.orientationX?(e._panner.orientationX.setValueAtTime(e._orientation[0],Howler.ctx.currentTime),e._panner.orientationY.setValueAtTime(e._orientation[1],Howler.ctx.currentTime),e._panner.orientationZ.setValueAtTime(e._orientation[2],Howler.ctx.currentTime)):e._panner.setOrientation(e._orientation[0],e._orientation[1],e._orientation[2])):(e._panner=Howler.ctx.createStereoPanner(),e._panner.pan.setValueAtTime(e._stereo,Howler.ctx.currentTime)),e._panner.connect(e._node),e._paused||e._parent.pause(e._id,!0).play(e._id,!0)}}),i=(0,o.b)(r(),1),a=class{_howl;constructor({src:e}){this._howl=new i.Howl({src:e})}play(){return this._howl.play()}pause(){return this._howl.pause()}playing(){return this._howl.playing()}rate(){return this._howl.rate()}seek(){return this._howl.seek()}setVolume(){return this._howl.volume()}unload(){this._howl.unload()}}}}]);