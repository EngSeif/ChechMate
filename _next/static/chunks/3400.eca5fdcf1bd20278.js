(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3400],{6434:function(t){!function(){var e={675:function(t,e){"use strict";e.byteLength=function(t){var e=l(t),i=e[0],r=e[1];return(i+r)*3/4-r},e.toByteArray=function(t){var e,i,n=l(t),s=n[0],a=n[1],h=new o((s+a)*3/4-a),u=0,d=a>0?s-4:s;for(i=0;i<d;i+=4)e=r[t.charCodeAt(i)]<<18|r[t.charCodeAt(i+1)]<<12|r[t.charCodeAt(i+2)]<<6|r[t.charCodeAt(i+3)],h[u++]=e>>16&255,h[u++]=e>>8&255,h[u++]=255&e;return 2===a&&(e=r[t.charCodeAt(i)]<<2|r[t.charCodeAt(i+1)]>>4,h[u++]=255&e),1===a&&(e=r[t.charCodeAt(i)]<<10|r[t.charCodeAt(i+1)]<<4|r[t.charCodeAt(i+2)]>>2,h[u++]=e>>8&255,h[u++]=255&e),h},e.fromByteArray=function(t){for(var e,r=t.length,o=r%3,n=[],s=0,a=r-o;s<a;s+=16383)n.push(function(t,e,r){for(var o,n=[],s=e;s<r;s+=3)n.push(i[(o=(t[s]<<16&16711680)+(t[s+1]<<8&65280)+(255&t[s+2]))>>18&63]+i[o>>12&63]+i[o>>6&63]+i[63&o]);return n.join("")}(t,s,s+16383>a?a:s+16383));return 1===o?n.push(i[(e=t[r-1])>>2]+i[e<<4&63]+"=="):2===o&&n.push(i[(e=(t[r-2]<<8)+t[r-1])>>10]+i[e>>4&63]+i[e<<2&63]+"="),n.join("")};for(var i=[],r=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,a=n.length;s<a;++s)i[s]=n[s],r[n.charCodeAt(s)]=s;function l(t){var e=t.length;if(e%4>0)throw Error("Invalid string. Length must be a multiple of 4");var i=t.indexOf("=");-1===i&&(i=e);var r=i===e?0:4-i%4;return[i,r]}r["-".charCodeAt(0)]=62,r["_".charCodeAt(0)]=63},72:function(t,e,i){"use strict";var r=i(675),o=i(783),n="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function s(t){if(t>2147483647)throw RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,a.prototype),e}function a(t,e,i){if("number"==typeof t){if("string"==typeof e)throw TypeError('The "string" argument must be of type string. Received type number');return u(t)}return l(t,e,i)}function l(t,e,i){if("string"==typeof t)return function(t,e){if(("string"!=typeof e||""===e)&&(e="utf8"),!a.isEncoding(e))throw TypeError("Unknown encoding: "+e);var i=0|c(t,e),r=s(i),o=r.write(t,e);return o!==i&&(r=r.slice(0,o)),r}(t,e);if(ArrayBuffer.isView(t))return d(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(O(t,ArrayBuffer)||t&&O(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(O(t,SharedArrayBuffer)||t&&O(t.buffer,SharedArrayBuffer)))return function(t,e,i){var r;if(e<0||t.byteLength<e)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(i||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(r=void 0===e&&void 0===i?new Uint8Array(t):void 0===i?new Uint8Array(t,e):new Uint8Array(t,e,i),a.prototype),r}(t,e,i);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');var r=t.valueOf&&t.valueOf();if(null!=r&&r!==t)return a.from(r,e,i);var o=function(t){if(a.isBuffer(t)){var e,i=0|p(t.length),r=s(i);return 0===r.length||t.copy(r,0,0,i),r}return void 0!==t.length?"number"!=typeof t.length||(e=t.length)!=e?s(0):d(t):"Buffer"===t.type&&Array.isArray(t.data)?d(t.data):void 0}(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return a.from(t[Symbol.toPrimitive]("string"),e,i);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function h(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function u(t){return h(t),s(t<0?0:0|p(t))}function d(t){for(var e=t.length<0?0:0|p(t.length),i=s(e),r=0;r<e;r+=1)i[r]=255&t[r];return i}function p(t){if(t>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function c(t,e){if(a.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||O(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var i=t.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===i)return 0;for(var o=!1;;)switch(e){case"ascii":case"latin1":case"binary":return i;case"utf8":case"utf-8":return S(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*i;case"hex":return i>>>1;case"base64":return x(t).length;default:if(o)return r?-1:S(t).length;e=(""+e).toLowerCase(),o=!0}}function f(t,e,i){var o,n,s=!1;if((void 0===e||e<0)&&(e=0),e>this.length||((void 0===i||i>this.length)&&(i=this.length),i<=0||(i>>>=0)<=(e>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,e,i){var r=t.length;(!e||e<0)&&(e=0),(!i||i<0||i>r)&&(i=r);for(var o="",n=e;n<i;++n)o+=I[t[n]];return o}(this,e,i);case"utf8":case"utf-8":return g(this,e,i);case"ascii":return function(t,e,i){var r="";i=Math.min(t.length,i);for(var o=e;o<i;++o)r+=String.fromCharCode(127&t[o]);return r}(this,e,i);case"latin1":case"binary":return function(t,e,i){var r="";i=Math.min(t.length,i);for(var o=e;o<i;++o)r+=String.fromCharCode(t[o]);return r}(this,e,i);case"base64":return o=e,n=i,0===o&&n===this.length?r.fromByteArray(this):r.fromByteArray(this.slice(o,n));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,e,i){for(var r=t.slice(e,i),o="",n=0;n<r.length;n+=2)o+=String.fromCharCode(r[n]+256*r[n+1]);return o}(this,e,i);default:if(s)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),s=!0}}function v(t,e,i){var r=t[e];t[e]=t[i],t[i]=r}function m(t,e,i,r,o){var n;if(0===t.length)return -1;if("string"==typeof i?(r=i,i=0):i>2147483647?i=2147483647:i<-2147483648&&(i=-2147483648),(n=i=+i)!=n&&(i=o?0:t.length-1),i<0&&(i=t.length+i),i>=t.length){if(o)return -1;i=t.length-1}else if(i<0){if(!o)return -1;i=0}if("string"==typeof e&&(e=a.from(e,r)),a.isBuffer(e))return 0===e.length?-1:y(t,e,i,r,o);if("number"==typeof e)return(e&=255,"function"==typeof Uint8Array.prototype.indexOf)?o?Uint8Array.prototype.indexOf.call(t,e,i):Uint8Array.prototype.lastIndexOf.call(t,e,i):y(t,[e],i,r,o);throw TypeError("val must be string, number or Buffer")}function y(t,e,i,r,o){var n,s=1,a=t.length,l=e.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return -1;s=2,a/=2,l/=2,i/=2}function h(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(o){var u=-1;for(n=i;n<a;n++)if(h(t,n)===h(e,-1===u?0:n-u)){if(-1===u&&(u=n),n-u+1===l)return u*s}else -1!==u&&(n-=n-u),u=-1}else for(i+l>a&&(i=a-l),n=i;n>=0;n--){for(var d=!0,p=0;p<l;p++)if(h(t,n+p)!==h(e,p)){d=!1;break}if(d)return n}return -1}function g(t,e,i){i=Math.min(t.length,i);for(var r=[],o=e;o<i;){var n,s,a,l,h=t[o],u=null,d=h>239?4:h>223?3:h>191?2:1;if(o+d<=i)switch(d){case 1:h<128&&(u=h);break;case 2:(192&(n=t[o+1]))==128&&(l=(31&h)<<6|63&n)>127&&(u=l);break;case 3:n=t[o+1],s=t[o+2],(192&n)==128&&(192&s)==128&&(l=(15&h)<<12|(63&n)<<6|63&s)>2047&&(l<55296||l>57343)&&(u=l);break;case 4:n=t[o+1],s=t[o+2],a=t[o+3],(192&n)==128&&(192&s)==128&&(192&a)==128&&(l=(15&h)<<18|(63&n)<<12|(63&s)<<6|63&a)>65535&&l<1114112&&(u=l)}null===u?(u=65533,d=1):u>65535&&(u-=65536,r.push(u>>>10&1023|55296),u=56320|1023&u),r.push(u),o+=d}return function(t){var e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t);for(var i="",r=0;r<e;)i+=String.fromCharCode.apply(String,t.slice(r,r+=4096));return i}(r)}function _(t,e,i){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+e>i)throw RangeError("Trying to access beyond buffer length")}function b(t,e,i,r,o,n){if(!a.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<n)throw RangeError('"value" argument is out of bounds');if(i+r>t.length)throw RangeError("Index out of range")}function w(t,e,i,r,o,n){if(i+r>t.length||i<0)throw RangeError("Index out of range")}function C(t,e,i,r,n){return e=+e,i>>>=0,n||w(t,e,i,4,34028234663852886e22,-34028234663852886e22),o.write(t,e,i,r,23,4),i+4}function A(t,e,i,r,n){return e=+e,i>>>=0,n||w(t,e,i,8,17976931348623157e292,-17976931348623157e292),o.write(t,e,i,r,52,8),i+8}e.Buffer=a,e.SlowBuffer=function(t){return+t!=t&&(t=0),a.alloc(+t)},e.INSPECT_MAX_BYTES=50,e.kMaxLength=2147483647,a.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),a.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}}),a.poolSize=8192,a.from=function(t,e,i){return l(t,e,i)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array),a.alloc=function(t,e,i){return(h(t),t<=0)?s(t):void 0!==e?"string"==typeof i?s(t).fill(e,i):s(t).fill(e):s(t)},a.allocUnsafe=function(t){return u(t)},a.allocUnsafeSlow=function(t){return u(t)},a.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==a.prototype},a.compare=function(t,e){if(O(t,Uint8Array)&&(t=a.from(t,t.offset,t.byteLength)),O(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),!a.isBuffer(t)||!a.isBuffer(e))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;for(var i=t.length,r=e.length,o=0,n=Math.min(i,r);o<n;++o)if(t[o]!==e[o]){i=t[o],r=e[o];break}return i<r?-1:r<i?1:0},a.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(t,e){if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return a.alloc(0);if(void 0===e)for(i=0,e=0;i<t.length;++i)e+=t[i].length;var i,r=a.allocUnsafe(e),o=0;for(i=0;i<t.length;++i){var n=t[i];if(O(n,Uint8Array)&&(n=a.from(n)),!a.isBuffer(n))throw TypeError('"list" argument must be an Array of Buffers');n.copy(r,o),o+=n.length}return r},a.byteLength=c,a.prototype._isBuffer=!0,a.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)v(this,e,e+1);return this},a.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)v(this,e,e+3),v(this,e+1,e+2);return this},a.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)v(this,e,e+7),v(this,e+1,e+6),v(this,e+2,e+5),v(this,e+3,e+4);return this},a.prototype.toString=function(){var t=this.length;return 0===t?"":0==arguments.length?g(this,0,t):f.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(t){if(!a.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===a.compare(this,t)},a.prototype.inspect=function(){var t="",i=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,i).replace(/(.{2})/g,"$1 ").trim(),this.length>i&&(t+=" ... "),"<Buffer "+t+">"},n&&(a.prototype[n]=a.prototype.inspect),a.prototype.compare=function(t,e,i,r,o){if(O(t,Uint8Array)&&(t=a.from(t,t.offset,t.byteLength)),!a.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===i&&(i=t?t.length:0),void 0===r&&(r=0),void 0===o&&(o=this.length),e<0||i>t.length||r<0||o>this.length)throw RangeError("out of range index");if(r>=o&&e>=i)return 0;if(r>=o)return -1;if(e>=i)return 1;if(e>>>=0,i>>>=0,r>>>=0,o>>>=0,this===t)return 0;for(var n=o-r,s=i-e,l=Math.min(n,s),h=this.slice(r,o),u=t.slice(e,i),d=0;d<l;++d)if(h[d]!==u[d]){n=h[d],s=u[d];break}return n<s?-1:s<n?1:0},a.prototype.includes=function(t,e,i){return -1!==this.indexOf(t,e,i)},a.prototype.indexOf=function(t,e,i){return m(this,t,e,i,!0)},a.prototype.lastIndexOf=function(t,e,i){return m(this,t,e,i,!1)},a.prototype.write=function(t,e,i,r){if(void 0===e)r="utf8",i=this.length,e=0;else if(void 0===i&&"string"==typeof e)r=e,i=this.length,e=0;else if(isFinite(e))e>>>=0,isFinite(i)?(i>>>=0,void 0===r&&(r="utf8")):(r=i,i=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var o,n,s,a,l,h,u,d,p,c,f,v,m=this.length-e;if((void 0===i||i>m)&&(i=m),t.length>0&&(i<0||e<0)||e>this.length)throw RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var y=!1;;)switch(r){case"hex":return function(t,e,i,r){i=Number(i)||0;var o=t.length-i;r?(r=Number(r))>o&&(r=o):r=o;var n=e.length;r>n/2&&(r=n/2);for(var s=0;s<r;++s){var a=parseInt(e.substr(2*s,2),16);if(a!=a)break;t[i+s]=a}return s}(this,t,e,i);case"utf8":case"utf-8":return l=e,h=i,E(S(t,this.length-l),this,l,h);case"ascii":return u=e,d=i,E(k(t),this,u,d);case"latin1":case"binary":return o=this,n=t,s=e,a=i,E(k(n),o,s,a);case"base64":return p=e,c=i,E(x(t),this,p,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return f=e,v=i,E(function(t,e){for(var i,r,o=[],n=0;n<t.length&&!((e-=2)<0);++n)r=(i=t.charCodeAt(n))>>8,o.push(i%256),o.push(r);return o}(t,this.length-f),this,f,v);default:if(y)throw TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),y=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},a.prototype.slice=function(t,e){var i=this.length;t=~~t,e=void 0===e?i:~~e,t<0?(t+=i)<0&&(t=0):t>i&&(t=i),e<0?(e+=i)<0&&(e=0):e>i&&(e=i),e<t&&(e=t);var r=this.subarray(t,e);return Object.setPrototypeOf(r,a.prototype),r},a.prototype.readUIntLE=function(t,e,i){t>>>=0,e>>>=0,i||_(t,e,this.length);for(var r=this[t],o=1,n=0;++n<e&&(o*=256);)r+=this[t+n]*o;return r},a.prototype.readUIntBE=function(t,e,i){t>>>=0,e>>>=0,i||_(t,e,this.length);for(var r=this[t+--e],o=1;e>0&&(o*=256);)r+=this[t+--e]*o;return r},a.prototype.readUInt8=function(t,e){return t>>>=0,e||_(t,1,this.length),this[t]},a.prototype.readUInt16LE=function(t,e){return t>>>=0,e||_(t,2,this.length),this[t]|this[t+1]<<8},a.prototype.readUInt16BE=function(t,e){return t>>>=0,e||_(t,2,this.length),this[t]<<8|this[t+1]},a.prototype.readUInt32LE=function(t,e){return t>>>=0,e||_(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},a.prototype.readUInt32BE=function(t,e){return t>>>=0,e||_(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},a.prototype.readIntLE=function(t,e,i){t>>>=0,e>>>=0,i||_(t,e,this.length);for(var r=this[t],o=1,n=0;++n<e&&(o*=256);)r+=this[t+n]*o;return r>=(o*=128)&&(r-=Math.pow(2,8*e)),r},a.prototype.readIntBE=function(t,e,i){t>>>=0,e>>>=0,i||_(t,e,this.length);for(var r=e,o=1,n=this[t+--r];r>0&&(o*=256);)n+=this[t+--r]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*e)),n},a.prototype.readInt8=function(t,e){return(t>>>=0,e||_(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},a.prototype.readInt16LE=function(t,e){t>>>=0,e||_(t,2,this.length);var i=this[t]|this[t+1]<<8;return 32768&i?4294901760|i:i},a.prototype.readInt16BE=function(t,e){t>>>=0,e||_(t,2,this.length);var i=this[t+1]|this[t]<<8;return 32768&i?4294901760|i:i},a.prototype.readInt32LE=function(t,e){return t>>>=0,e||_(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},a.prototype.readInt32BE=function(t,e){return t>>>=0,e||_(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},a.prototype.readFloatLE=function(t,e){return t>>>=0,e||_(t,4,this.length),o.read(this,t,!0,23,4)},a.prototype.readFloatBE=function(t,e){return t>>>=0,e||_(t,4,this.length),o.read(this,t,!1,23,4)},a.prototype.readDoubleLE=function(t,e){return t>>>=0,e||_(t,8,this.length),o.read(this,t,!0,52,8)},a.prototype.readDoubleBE=function(t,e){return t>>>=0,e||_(t,8,this.length),o.read(this,t,!1,52,8)},a.prototype.writeUIntLE=function(t,e,i,r){if(t=+t,e>>>=0,i>>>=0,!r){var o=Math.pow(2,8*i)-1;b(this,t,e,i,o,0)}var n=1,s=0;for(this[e]=255&t;++s<i&&(n*=256);)this[e+s]=t/n&255;return e+i},a.prototype.writeUIntBE=function(t,e,i,r){if(t=+t,e>>>=0,i>>>=0,!r){var o=Math.pow(2,8*i)-1;b(this,t,e,i,o,0)}var n=i-1,s=1;for(this[e+n]=255&t;--n>=0&&(s*=256);)this[e+n]=t/s&255;return e+i},a.prototype.writeUInt8=function(t,e,i){return t=+t,e>>>=0,i||b(this,t,e,1,255,0),this[e]=255&t,e+1},a.prototype.writeUInt16LE=function(t,e,i){return t=+t,e>>>=0,i||b(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},a.prototype.writeUInt16BE=function(t,e,i){return t=+t,e>>>=0,i||b(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},a.prototype.writeUInt32LE=function(t,e,i){return t=+t,e>>>=0,i||b(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},a.prototype.writeUInt32BE=function(t,e,i){return t=+t,e>>>=0,i||b(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},a.prototype.writeIntLE=function(t,e,i,r){if(t=+t,e>>>=0,!r){var o=Math.pow(2,8*i-1);b(this,t,e,i,o-1,-o)}var n=0,s=1,a=0;for(this[e]=255&t;++n<i&&(s*=256);)t<0&&0===a&&0!==this[e+n-1]&&(a=1),this[e+n]=(t/s>>0)-a&255;return e+i},a.prototype.writeIntBE=function(t,e,i,r){if(t=+t,e>>>=0,!r){var o=Math.pow(2,8*i-1);b(this,t,e,i,o-1,-o)}var n=i-1,s=1,a=0;for(this[e+n]=255&t;--n>=0&&(s*=256);)t<0&&0===a&&0!==this[e+n+1]&&(a=1),this[e+n]=(t/s>>0)-a&255;return e+i},a.prototype.writeInt8=function(t,e,i){return t=+t,e>>>=0,i||b(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},a.prototype.writeInt16LE=function(t,e,i){return t=+t,e>>>=0,i||b(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},a.prototype.writeInt16BE=function(t,e,i){return t=+t,e>>>=0,i||b(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},a.prototype.writeInt32LE=function(t,e,i){return t=+t,e>>>=0,i||b(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},a.prototype.writeInt32BE=function(t,e,i){return t=+t,e>>>=0,i||b(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},a.prototype.writeFloatLE=function(t,e,i){return C(this,t,e,!0,i)},a.prototype.writeFloatBE=function(t,e,i){return C(this,t,e,!1,i)},a.prototype.writeDoubleLE=function(t,e,i){return A(this,t,e,!0,i)},a.prototype.writeDoubleBE=function(t,e,i){return A(this,t,e,!1,i)},a.prototype.copy=function(t,e,i,r){if(!a.isBuffer(t))throw TypeError("argument should be a Buffer");if(i||(i=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<i&&(r=i),r===i||0===t.length||0===this.length)return 0;if(e<0)throw RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw RangeError("Index out of range");if(r<0)throw RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-i&&(r=t.length-e+i);var o=r-i;if(this===t&&"function"==typeof Uint8Array.prototype.copyWithin)this.copyWithin(e,i,r);else if(this===t&&i<e&&e<r)for(var n=o-1;n>=0;--n)t[n+e]=this[n+i];else Uint8Array.prototype.set.call(t,this.subarray(i,r),e);return o},a.prototype.fill=function(t,e,i,r){if("string"==typeof t){if("string"==typeof e?(r=e,e=0,i=this.length):"string"==typeof i&&(r=i,i=this.length),void 0!==r&&"string"!=typeof r)throw TypeError("encoding must be a string");if("string"==typeof r&&!a.isEncoding(r))throw TypeError("Unknown encoding: "+r);if(1===t.length){var o,n=t.charCodeAt(0);("utf8"===r&&n<128||"latin1"===r)&&(t=n)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<i)throw RangeError("Out of range index");if(i<=e)return this;if(e>>>=0,i=void 0===i?this.length:i>>>0,t||(t=0),"number"==typeof t)for(o=e;o<i;++o)this[o]=t;else{var s=a.isBuffer(t)?t:a.from(t,r),l=s.length;if(0===l)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<i-e;++o)this[o+e]=s[o%l]}return this};var L=/[^+/0-9A-Za-z-_]/g;function S(t,e){e=e||1/0;for(var i,r=t.length,o=null,n=[],s=0;s<r;++s){if((i=t.charCodeAt(s))>55295&&i<57344){if(!o){if(i>56319||s+1===r){(e-=3)>-1&&n.push(239,191,189);continue}o=i;continue}if(i<56320){(e-=3)>-1&&n.push(239,191,189),o=i;continue}i=(o-55296<<10|i-56320)+65536}else o&&(e-=3)>-1&&n.push(239,191,189);if(o=null,i<128){if((e-=1)<0)break;n.push(i)}else if(i<2048){if((e-=2)<0)break;n.push(i>>6|192,63&i|128)}else if(i<65536){if((e-=3)<0)break;n.push(i>>12|224,i>>6&63|128,63&i|128)}else if(i<1114112){if((e-=4)<0)break;n.push(i>>18|240,i>>12&63|128,i>>6&63|128,63&i|128)}else throw Error("Invalid code point")}return n}function k(t){for(var e=[],i=0;i<t.length;++i)e.push(255&t.charCodeAt(i));return e}function x(t){return r.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(L,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function E(t,e,i,r){for(var o=0;o<r&&!(o+i>=e.length)&&!(o>=t.length);++o)e[o+i]=t[o];return o}function O(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}var I=function(){for(var t="0123456789abcdef",e=Array(256),i=0;i<16;++i)for(var r=16*i,o=0;o<16;++o)e[r+o]=t[i]+t[o];return e}()},783:function(t,e){e.read=function(t,e,i,r,o){var n,s,a=8*o-r-1,l=(1<<a)-1,h=l>>1,u=-7,d=i?o-1:0,p=i?-1:1,c=t[e+d];for(d+=p,n=c&(1<<-u)-1,c>>=-u,u+=a;u>0;n=256*n+t[e+d],d+=p,u-=8);for(s=n&(1<<-u)-1,n>>=-u,u+=r;u>0;s=256*s+t[e+d],d+=p,u-=8);if(0===n)n=1-h;else{if(n===l)return s?NaN:1/0*(c?-1:1);s+=Math.pow(2,r),n-=h}return(c?-1:1)*s*Math.pow(2,n-r)},e.write=function(t,e,i,r,o,n){var s,a,l,h=8*n-o-1,u=(1<<h)-1,d=u>>1,p=23===o?5960464477539062e-23:0,c=r?0:n-1,f=r?1:-1,v=e<0||0===e&&1/e<0?1:0;for(isNaN(e=Math.abs(e))||e===1/0?(a=isNaN(e)?1:0,s=u):(s=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-s))<1&&(s--,l*=2),s+d>=1?e+=p/l:e+=p*Math.pow(2,1-d),e*l>=2&&(s++,l/=2),s+d>=u?(a=0,s=u):s+d>=1?(a=(e*l-1)*Math.pow(2,o),s+=d):(a=e*Math.pow(2,d-1)*Math.pow(2,o),s=0));o>=8;t[i+c]=255&a,c+=f,a/=256,o-=8);for(s=s<<o|a,h+=o;h>0;t[i+c]=255&s,c+=f,s/=256,h-=8);t[i+c-f]|=128*v}}},i={};function r(t){var o=i[t];if(void 0!==o)return o.exports;var n=i[t]={exports:{}},s=!0;try{e[t](n,n.exports,r),s=!1}finally{s&&delete i[t]}return n.exports}r.ab="//";var o=r(72);t.exports=o}()},853:function(t,e,i){"use strict";i.d(e,{a:function(){return h},b:function(){return d}});var r=Object.create,o=Object.defineProperty,n=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,a=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,h=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),u=(t,e,i,r)=>{if(e&&"object"==typeof e||"function"==typeof e)for(let a of s(e))l.call(t,a)||a===i||o(t,a,{get:()=>e[a],enumerable:!(r=n(e,a))||r.enumerable});return t},d=(t,e,i)=>(i=null!=t?r(a(t)):{},u(!e&&t&&t.__esModule?i:o(i,"default",{value:t,enumerable:!0}),t))},5580:function(t,e,i){"use strict";let r,o,n,s,a,l,h;i.d(e,{a:function(){return eo},b:function(){return en},c:function(){return es},d:function(){return el},e:function(){return eI},f:function(){return e$},g:function(){return eP},h:function(){return eM},i:function(){return eT},j:function(){return eU}});var u=i(6434).Buffer,d={},p=function(t,e,i,r,o){var n=new Worker(d[e]||(d[e]=URL.createObjectURL(new Blob([t+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return n.onmessage=function(t){var e=t.data,i=e.$e$;if(i){var r=Error(i[0]);r.code=i[1],r.stack=i[2],o(r,null)}else o(null,e)},n.postMessage(i,r),n},c=Uint8Array,f=Uint16Array,v=Int32Array,m=new c([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),y=new c([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),g=new c([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),_=function(t,e){for(var i=new f(31),r=0;r<31;++r)i[r]=e+=1<<t[r-1];for(var o=new v(i[30]),r=1;r<30;++r)for(var n=i[r];n<i[r+1];++n)o[n]=n-i[r]<<5|r;return{b:i,r:o}},b=_(m,2),w=b.b,C=b.r;w[28]=258,C[258]=28;var A=_(y,0).b,L=new f(32768);for(k=0;k<32768;++k)S=(61680&(S=(52428&(S=(43690&k)>>1|(21845&k)<<1))>>2|(13107&S)<<2))>>4|(3855&S)<<4,L[k]=((65280&S)>>8|(255&S)<<8)>>1;var S,k,x=function(t,e,i){for(var r,o=t.length,n=0,s=new f(e);n<o;++n)t[n]&&++s[t[n]-1];var a=new f(e);for(n=1;n<e;++n)a[n]=a[n-1]+s[n-1]<<1;if(i){r=new f(1<<e);var l=15-e;for(n=0;n<o;++n)if(t[n])for(var h=n<<4|t[n],u=e-t[n],d=a[t[n]-1]++<<u,p=d|(1<<u)-1;d<=p;++d)r[L[d]>>l]=h}else for(r=new f(o),n=0;n<o;++n)t[n]&&(r[n]=L[a[t[n]-1]++]>>15-t[n]);return r},E=new c(288);for(k=0;k<144;++k)E[k]=8;for(k=144;k<256;++k)E[k]=9;for(k=256;k<280;++k)E[k]=7;for(k=280;k<288;++k)E[k]=8;var k,O=new c(32);for(k=0;k<32;++k)O[k]=5;var k,I=x(E,9,1),$=x(O,5,1),P=function(t){for(var e=t[0],i=1;i<t.length;++i)t[i]>e&&(e=t[i]);return e},M=function(t,e,i){var r=e/8|0;return(t[r]|t[r+1]<<8)>>(7&e)&i},T=function(t,e){var i=e/8|0;return(t[i]|t[i+1]<<8|t[i+2]<<16)>>(7&e)},U=function(t){return(t+7)/8|0},B=function(t,e,i){return(null==e||e<0)&&(e=0),(null==i||i>t.length)&&(i=t.length),new c(t.subarray(e,i))},N=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],j=function(t,e,i){var r=Error(e||N[t]);if(r.code=t,Error.captureStackTrace&&Error.captureStackTrace(r,j),!i)throw r;return r},z=function(t,e,i,r){var o=t.length,n=r?r.length:0;if(!o||e.f&&!e.l)return i||new c(0);var s=!i,a=s||2!=e.i,l=e.i;s&&(i=new c(3*o));var h=function(t){var e=i.length;if(t>e){var r=new c(Math.max(2*e,t));r.set(i),i=r}},u=e.f||0,d=e.p||0,p=e.b||0,f=e.l,v=e.d,_=e.m,b=e.n,C=8*o;do{if(!f){u=M(t,d,1);var L=M(t,d+1,3);if(d+=3,L){if(1==L)f=I,v=$,_=9,b=5;else if(2==L){var S=M(t,d,31)+257,k=M(t,d+10,15)+4,E=S+M(t,d+5,31)+1;d+=14;for(var O=new c(E),N=new c(19),z=0;z<k;++z)N[g[z]]=M(t,d+3*z,7);d+=3*k;for(var R=P(N),D=(1<<R)-1,F=x(N,R,1),z=0;z<E;){var V=F[M(t,d,D)];d+=15&V;var q=V>>4;if(q<16)O[z++]=q;else{var H=0,Z=0;for(16==q?(Z=3+M(t,d,3),d+=2,H=O[z-1]):17==q?(Z=3+M(t,d,7),d+=3):18==q&&(Z=11+M(t,d,127),d+=7);Z--;)O[z++]=H}}var J=O.subarray(0,S),W=O.subarray(S);_=P(J),b=P(W),f=x(J,_,1),v=x(W,b,1)}else j(1)}else{var q=U(d)+4,K=t[q-4]|t[q-3]<<8,Y=q+K;if(Y>o){l&&j(0);break}a&&h(p+K),i.set(t.subarray(q,Y),p),e.b=p+=K,e.p=d=8*Y,e.f=u;continue}if(d>C){l&&j(0);break}}a&&h(p+131072);for(var X=(1<<_)-1,G=(1<<b)-1,Q=d;;Q=d){var H=f[T(t,d)&X],tt=H>>4;if((d+=15&H)>C){l&&j(0);break}if(H||j(2),tt<256)i[p++]=tt;else if(256==tt){Q=d,f=null;break}else{var te=tt-254;if(tt>264){var z=tt-257,ti=m[z];te=M(t,d,(1<<ti)-1)+w[z],d+=ti}var tr=v[T(t,d)&G],to=tr>>4;tr||j(3),d+=15&tr;var W=A[to];if(to>3){var ti=y[to];W+=T(t,d)&(1<<ti)-1,d+=ti}if(d>C){l&&j(0);break}a&&h(p+131072);var tn=p+te;if(p<W){var ts=n-W,ta=Math.min(W,tn);for(ts+p<0&&j(3);p<ta;++p)i[p]=r[ts+p]}for(;p<tn;++p)i[p]=i[p-W]}}e.l=f,e.p=Q,e.b=p,e.f=u,f&&(u=1,e.m=_,e.d=v,e.n=b)}while(!u);return p!=i.length&&s?B(i,0,p):i.subarray(0,p)},R=new c(0),D=function(t,e){var i={};for(var r in t)i[r]=t[r];for(var r in e)i[r]=e[r];return i},F=function(t,e,i){for(var r=t(),o=t.toString(),n=o.slice(o.indexOf("[")+1,o.lastIndexOf("]")).replace(/\s+/g,"").split(","),s=0;s<r.length;++s){var a=r[s],l=n[s];if("function"==typeof a){e+=";"+l+"=";var h=a.toString();if(a.prototype){if(-1!=h.indexOf("[native code]")){var u=h.indexOf(" ",8)+1;e+=h.slice(u,h.indexOf("(",u))}else for(var d in e+=h,a.prototype)e+=";"+l+".prototype."+d+"="+a.prototype[d].toString()}else e+=h}else i[l]=a}return e},V=[],q=function(t){var e=[];for(var i in t)t[i].buffer&&e.push((t[i]=new t[i].constructor(t[i])).buffer);return e},H=function(t,e,i,r){if(!V[i]){for(var o="",n={},s=t.length-1,a=0;a<s;++a)o=F(t[a],o,n);V[i]={c:F(t[s],o,n),e:n}}var l=D({},V[i].e);return p(V[i].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",i,l,q(l),r)},Z=function(){return[c,f,v,m,y,g,w,A,I,$,L,N,x,P,M,T,U,B,j,z,Q,J,W]},J=function(t){return postMessage(t,[t.buffer])},W=function(t){return t&&{out:t.size&&new c(t.size),dictionary:t.dictionary}},K=function(t,e,i,r,o,n){var s=H(i,r,o,function(t,e){s.terminate(),n(t,e)});return s.postMessage([t,e],e.consume?[t.buffer]:[]),function(){s.terminate()}},Y=function(t,e){return t[e]|t[e+1]<<8},X=function(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0},G=function(t,e){return X(t,e)+4294967296*X(t,e+4)};function Q(t,e){return z(t,{i:2},e&&e.out,e&&e.dictionary)}var tt="u">typeof TextDecoder&&new TextDecoder;try{tt.decode(R,{stream:!0})}catch{}var te=function(t){for(var e="",i=0;;){var r=t[i++],o=(r>127)+(r>223)+(r>239);if(i+o>t.length)return{s:e,r:B(t,i-1)};o?3==o?e+=String.fromCharCode(55296|(r=((15&r)<<18|(63&t[i++])<<12|(63&t[i++])<<6|63&t[i++])-65536)>>10,56320|1023&r):1&o?e+=String.fromCharCode((31&r)<<6|63&t[i++]):e+=String.fromCharCode((15&r)<<12|(63&t[i++])<<6|63&t[i++]):e+=String.fromCharCode(r)}};function ti(t,e){if(e){for(var i="",r=0;r<t.length;r+=16384)i+=String.fromCharCode.apply(null,t.subarray(r,r+16384));return i}if(tt)return tt.decode(t);var o=te(t),n=o.s,i=o.r;return i.length&&j(8),n}var tr=function(t,e,i){var r=Y(t,e+28),o=ti(t.subarray(e+46,e+46+r),!(2048&Y(t,e+8))),n=e+46+r,s=X(t,e+20),a=i&&4294967295==s?to(t,n):[s,X(t,e+24),X(t,e+42)],l=a[0],h=a[1],u=a[2];return[Y(t,e+10),l,h,o,n+Y(t,e+30)+Y(t,e+32),u]},to=function(t,e){for(;1!=Y(t,e);e+=4+Y(t,e+2));return[G(t,e+12),G(t,e+4),G(t,e+20)]},tn="function"==typeof queueMicrotask?queueMicrotask:"function"==typeof setTimeout?setTimeout:function(t){t()},ts=class extends Error{issues;constructor(t){super(t[0].message),this.name="ValiError",this.issues=t}};function ta(t,e,i,r){if(!e||!e.length)return{output:t};let o,n,s=t;for(let t of e){let e=t(s);if(e.issue){var a,l;let t=(a=o=o||{reason:r,origin:null==i?void 0:i.origin,abortEarly:null==i?void 0:i.abortEarly,abortPipeEarly:null==i?void 0:i.abortPipeEarly},l=e.issue,{reason:null==a?void 0:a.reason,validation:l.validation,origin:(null==a?void 0:a.origin)||"value",message:l.message,input:l.input,abortEarly:null==a?void 0:a.abortEarly,abortPipeEarly:null==a?void 0:a.abortPipeEarly});if(n?n.push(t):n=[t],o.abortEarly||o.abortPipeEarly)break}else s=e.output}return n?{issues:n}:{output:s}}function tl(t,e){return t&&"string"!=typeof t?[void 0,t]:[t,e]}function th(t,e,i,r,o,n){return{issues:[{reason:e,validation:i,origin:(null==t?void 0:t.origin)||"value",message:r,input:o,issues:n,abortEarly:null==t?void 0:t.abortEarly,abortPipeEarly:null==t?void 0:t.abortPipeEarly}]}}function tu(t,e,i){let[r,o]=tl(e,i);return{schema:"array",array:{item:t},async:!1,_parse(e,i){if(!Array.isArray(e))return th(i,"type","array",r||"Invalid type",e);let n,s=[];for(let r=0;r<e.length;r++){let o=e[r],a=t._parse(o,i);if(a.issues){let t={schema:"array",input:e,key:r,value:o};for(let e of a.issues)e.path?e.path.unshift(t):e.path=[t],null==n||n.push(e);if(n||(n=a.issues),null!=i&&i.abortEarly)break}else s.push(a.output)}return n?{issues:n}:ta(s,o,i,"array")}}}function td(t,e){let[i,r]=tl(t,e);return{schema:"boolean",async:!1,_parse:(t,e)=>"boolean"!=typeof t?th(e,"type","boolean",i||"Invalid type",t):ta(t,r,e,"boolean")}}function tp(t,e){return{schema:"literal",literal:t,async:!1,_parse:(i,r)=>i!==t?th(r,"type","literal",e||"Invalid type",i):{output:i}}}function tc(t,e){let[i,r]=tl(t,e);return{schema:"number",async:!1,_parse:(t,e)=>"number"!=typeof t?th(e,"type","number",i||"Invalid type",t):ta(t,r,e,"number")}}function tf(t,e,i){let[r,o]=tl(e,i),n;return{schema:"object",object:t,async:!1,_parse(e,i){if(!e||"object"!=typeof e)return th(i,"type","object",r||"Invalid type",e);n=n||Object.entries(t);let s,a={};for(let[t,r]of n){let o=e[t],n=r._parse(o,i);if(n.issues){let r={schema:"object",input:e,key:t,value:o};for(let t of n.issues)t.path?t.path.unshift(r):t.path=[r],null==s||s.push(t);if(s||(s=n.issues),null!=i&&i.abortEarly)break}else a[t]=n.output}return s?{issues:s}:ta(a,o,i,"object")}}}function tv(t){return{schema:"optional",wrapped:t,async:!1,_parse:(e,i)=>void 0===e?{output:e}:t._parse(e,i)}}function tm(t,e){let[i,r]=tl(t,e);return{schema:"string",async:!1,_parse:(t,e)=>"string"!=typeof t?th(e,"type","string",i||"Invalid type",t):ta(t,r,e,"string")}}var ty=["__proto__","prototype","constructor"];function tg(t,e,i,r){let[o,n,s]=function(t,e,i){if("object"==typeof t&&!Array.isArray(t)){let[r,o]=tl(e,i);return[t,r,o]}let[r,o]=tl(t,e);return[void 0,r,o]}(e,i,r);return{schema:"tuple",tuple:{items:t,rest:o},async:!1,_parse(e,i){if(!Array.isArray(e)||!o&&t.length!==e.length||o&&t.length>e.length)return th(i,"type","tuple",n||"Invalid type",e);let r,a=[];for(let o=0;o<t.length;o++){let n=e[o],s=t[o]._parse(n,i);if(s.issues){let t={schema:"tuple",input:e,key:o,value:n};for(let e of s.issues)e.path?e.path.unshift(t):e.path=[t],null==r||r.push(e);if(r||(r=s.issues),null!=i&&i.abortEarly)break}else a[o]=s.output}if(o)for(let n=t.length;n<e.length;n++){let t=e[n],s=o._parse(t,i);if(s.issues){let o={schema:"tuple",input:e,key:n,value:t};for(let t of s.issues)t.path?t.path.unshift(o):t.path=[o],null==r||r.push(t);if(r||(r=s.issues),null!=i&&i.abortEarly)break}else a[n]=s.output}return r?{issues:r}:ta(a,s,i,"tuple")}}}function t_(t,e){return{schema:"union",union:t,async:!1,_parse(i,r){let o,n;for(let e of t){let t=e._parse(i,r);if(t.issues){if(o)for(let e of t.issues)o.push(e);else o=t.issues}else{n=[t.output];break}}return n?{output:n[0]}:th(r,"type","union",e||"Invalid type",i,o)}}}function tb(t,e,i){let[r,o]=tl(e,i);return tf(t.reduce((t,e)=>({...t,...e.object}),{}),r,o)}function tw(t,e){return i=>i>t?{issue:{validation:"max_value",message:e||"Invalid value",input:i}}:{output:i}}function tC(t,e){return i=>i<t?{issue:{validation:"min_value",message:e||"Invalid value",input:i}}:{output:i}}var tA=Object.create,tL=Object.defineProperty,tS=Object.getOwnPropertyDescriptor,tk=Object.getOwnPropertyNames,tx=Object.getPrototypeOf,tE=Object.prototype.hasOwnProperty,tO=(t,e,i)=>e in t?tL(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,tI=(t,e)=>function(){return e||(0,t[tk(t)[0]])((e={exports:{}}).exports,e),e.exports},t$=(t,e,i)=>(tO(t,"symbol"!=typeof e?e+"":e,i),i),tP=tI({"../../node_modules/.pnpm/@rgba-image+copy@0.1.3/node_modules/@rgba-image/copy/dist/index.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.copy=void 0,t.copy=(t,e,i=0,r=0,o=t.width-i,n=t.height-r,s=0,a=0)=>{if(i|=0,r|=0,n|=0,s|=0,a|=0,(o|=0)<=0||n<=0)return;let l=new Uint32Array(t.data.buffer),h=new Uint32Array(e.data.buffer);for(let u=0;u<n;u++){let n=r+u;if(n<0||n>=t.height)continue;let d=a+u;if(!(d<0||d>=e.height))for(let r=0;r<o;r++){let o=i+r;if(o<0||o>=t.width)continue;let a=s+r;if(a<0||a>=e.width)continue;let u=n*t.width+o;h[d*e.width+a]=l[u]}}}}}),tM=tI({"../../node_modules/.pnpm/@rgba-image+create-image@0.1.1/node_modules/@rgba-image/create-image/dist/index.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.CreateImageFactory=(t=[0,0,0,0],e=4)=>{if(isNaN(e=Math.floor(e))||e<1)throw TypeError("channels should be a positive non-zero number");if(!("length"in t)||t.length<e)throw TypeError(`fill should be iterable with at least ${e} members`);let i=(t=new Uint8ClampedArray(t).slice(0,e)).every(t=>0===t);return(r,o,n)=>{if(void 0===r||void 0===o)throw TypeError("Not enough arguments");if(r=Math.floor(r),o=Math.floor(o),isNaN(r)||r<1||isNaN(o)||o<1)throw TypeError("Index or size is negative or greater than the allowed amount");let s=r*o*e;if(void 0===n&&(n=new Uint8ClampedArray(s)),n instanceof Uint8ClampedArray){if(n.length!==s)throw TypeError("Index or size is negative or greater than the allowed amount");if(!i)for(let i=0;i<o;i++)for(let o=0;o<r;o++){let s=(i*r+o)*e;for(let i=0;i<e;i++)n[s+i]=t[i]}return{get width(){return r},get height(){return o},get data(){return n}}}throw TypeError("Expected data to be Uint8ClampedArray or undefined")}},t.createImage=t.CreateImageFactory()}}),tT=tI({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/filters.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.filters=void 0;var e=(t,e)=>{if(t<=-e||t>=e||0==t)return 0;let i=t*Math.PI;return Math.sin(i)/i*Math.sin(i/e)/(i/e)},i=t=>Math.round(16383*t);t.filters=(t,r,o,n,s)=>{let a=s?2:3,l=1/o,h=Math.min(1,o),u=a/h,d=new Int16Array((Math.floor((u+1)*2)+2)*r),p=0;for(let o=0;o<r;o++){let s=(o+.5)*l+n,c=Math.max(0,Math.floor(s-u)),f=Math.min(t-1,Math.ceil(s+u)),v=f-c+1,m=new Float32Array(v),y=new Int16Array(v),g=0,_=0;for(let t=c;t<=f;t++){let i=e((t+.5-s)*h,a);g+=i,m[_]=i,_++}let b=0;for(let t=0;t<m.length;t++){let e=m[t]/g;b+=e,y[t]=i(e)}y[r>>1]+=i(1-b);let w=0;for(;w<y.length&&0===y[w];)w++;let C=y.length-1;for(;C>0&&0===y[C];)C--;let A=c+w,L=C-w+1;d[p++]=A,d[p++]=L,d.set(y.subarray(w,C+1),p),p+=L}return d}}}),tU=tI({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/convolve.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.convolve=void 0,t.convolve=(t,e,i,r,o,n)=>{let s=0,a=0;for(let l=0;l<r;l++){let h=0;for(let i=0;i<o;i++){let i=s+4*n[h++]|0,o=0,l=0,u=0,d=0;for(let e=n[h++];e>0;e--){let e=n[h++];o=o+e*t[i]|0,l=l+e*t[i+1]|0,u=u+e*t[i+2]|0,d=d+e*t[i+3]|0,i=i+4|0}e[a]=o+8192>>14,e[a+1]=l+8192>>14,e[a+2]=u+8192>>14,e[a+3]=d+8192>>14,a=a+4*r|0}a=(l+1)*4|0,s=(l+1)*i*4|0}}}}),tB=tI({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/index.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.lanczos2=t.lanczos=void 0;var e=tP(),i=tM(),r=tT(),o=tU(),n=(t,e,i=!1)=>{let n=e.width/t.width,s=e.height/t.height,a=r.filters(t.width,e.width,n,0,i),l=r.filters(t.height,e.height,s,0,i),h=new Uint8ClampedArray(e.width*t.height*4);o.convolve(t.data,h,t.width,t.height,e.width,a),o.convolve(h,e.data,t.height,e.width,e.height,l)};t.lanczos=(t,r,o=0,s=0,a=t.width-o,l=t.height-s,h=0,u=0,d=r.width-h,p=r.height-u)=>{if(o|=0,s|=0,l|=0,h|=0,u|=0,d|=0,p|=0,(a|=0)<=0||l<=0||d<=0||p<=0)return;if(0===o&&0===s&&a===t.width&&l===t.height&&0===h&&0===u&&d===r.width&&p===r.height){n(t,r);return}let c=i.createImage(a,l),f=i.createImage(d,p);e.copy(t,c,o,s),n(c,f),e.copy(f,r,0,0,f.width,f.height,h,u)},t.lanczos2=(t,r,o=0,s=0,a=t.width-o,l=t.height-s,h=0,u=0,d=r.width-h,p=r.height-u)=>{if(o|=0,s|=0,l|=0,h|=0,u|=0,d|=0,p|=0,(a|=0)<=0||l<=0||d<=0||p<=0)return;if(0===o&&0===s&&a===t.width&&l===t.height&&0===h&&0===u&&d===r.width&&p===r.height){n(t,r,!0);return}let c=i.createImage(a,l),f=i.createImage(d,p);e.copy(t,c,o,s),n(c,f,!0),e.copy(f,r,0,0,f.width,f.height,h,u)}}}),tN=((r=tN||{}).Bounce="bounce",r.Normal="normal",r),tj=tf({autoplay:tv(td()),defaultTheme:tv(tm()),direction:tv(t_([tp(1),tp(-1)])),hover:tv(td()),id:tm(),intermission:tv(tc()),loop:tv(t_([td(),tc()])),playMode:tv({schema:"native_enum",nativeEnum:tN,async:!1,_parse:(t,e)=>Object.values(tN).includes(t)?{output:t}:th(e,"type","native_enum","Invalid type",t)}),speed:tv(tc()),themeColor:tv(tm())}),tz=tf({animations:tu(tm()),id:tm()}),tR=tf({activeAnimationId:tv(tm()),animations:tu(tj),author:tv(tm()),custom:tv(function(t,e,i,r){let[o,n,s,a]=function(t,e,i,r){if("object"==typeof e&&!Array.isArray(e)){let[o,n]=tl(i,r);return[t,e,o,n]}let[o,n]=tl(e,i);return[tm(),t,o,n]}(t,e,void 0,void 0);return{schema:"record",record:{key:o,value:n},async:!1,_parse(t,e){if(!t||"object"!=typeof t)return th(e,"type","record",s||"Invalid type",t);let i,r={};for(let[s,a]of Object.entries(t))if(!ty.includes(s)){let l,h=o._parse(s,{origin:"key",abortEarly:null==e?void 0:e.abortEarly,abortPipeEarly:null==e?void 0:e.abortPipeEarly});if(h.issues){for(let e of(l={schema:"record",input:t,key:s,value:a},h.issues))e.path=[l],null==i||i.push(e);if(i||(i=h.issues),null!=e&&e.abortEarly)break}let u=n._parse(a,e);if(u.issues){for(let e of(l=l||{schema:"record",input:t,key:s,value:a},u.issues))e.path?e.path.unshift(l):e.path=[l],null==i||i.push(e);if(i||(i=u.issues),null!=e&&e.abortEarly)break}h.issues||u.issues||(r[h.output]=u.output)}return i?{issues:i}:ta(r,a,e,"record")}}}(tm(),function(t=[]){return{schema:"any",async:!1,_parse:(e,i)=>ta(e,t,i,"any")}}())),description:tv(tm()),generator:tv(tm()),keywords:tv(tm()),revision:tv(tc()),themes:tv(tu(tz)),states:tv(tu(tm())),version:tv(tm())}),tD=function(t,e,i,r){let[o,n]=tl(void 0,void 0);return tf(Object.entries(t.object).reduce((t,[i,r])=>e.includes(i)?t:{...t,[i]:r},{}),o,n)}(tj,["id"]),tF=tf({state:tm()}),tV=tb([tF,tf({ms:tc()})]),tq=tb([tF,tf({count:tc()})]),tH=tb([tF,tf({threshold:tv(tu(tc([tC(0),tw(1)])))})]),tZ=tf({onAfter:tv(tV),onClick:tv(tF),onComplete:tv(tF),onEnter:tv(tq),onMouseEnter:tv(tF),onMouseLeave:tv(tF),onShow:tv(tH)}),tJ=tb([tD,tf({playOnScroll:tv(tg([tc([tC(0),tw(1)]),tc([tC(0),tw(1)])])),segments:tv(t_([tg([tc(),tc()]),tm()]))})]);tb([tZ,tf({animationId:tv(tm()),playbackSettings:tJ})]);var tW={jpeg:"image/jpeg",png:"image/png",gif:"image/gif",bmp:"image/bmp",svg:"image/svg+xml",webp:"image/webp",mpeg:"audio/mpeg",mp3:"audio/mp3"},tK={jpeg:[255,216,255],png:[137,80,78,71,13,10,26,10],gif:[71,73,70],bmp:[66,77],webp:[82,73,70,70,87,69,66,80],svg:[60,63,120],mp3:[73,68,51,3,0,0,0,0],mpeg:[73,68,51,3,0,0,0,0]},tY=t=>{let e=null,i=[];if(!t)return null;let r=t.substring(t.indexOf(",")+1),o=new Uint8Array((e=typeof window>"u"?u.from(r,"base64").toString("binary"):atob(r)).length);for(let t=0;t<e.length;t+=1)o[t]=e.charCodeAt(t);for(let t in i=Array.from(o.subarray(0,8)),tK){let e=tK[t];if(e&&i.every((t,i)=>t===e[i]))return tW[t]}return null},tX=class extends Error{constructor(t,e){super(t),t$(this,"code"),this.name="[dotlottie-js]",this.code=e}};function tG(t){let e;if(typeof window>"u")e=u.from(t).toString("base64");else{let i=Array.prototype.map.call(t,t=>String.fromCharCode(t)).join("");e=window.btoa(i)}return`data:${tY(e)};base64,${e}`}function tQ(t){return"w"in t&&"h"in t&&!("xt"in t)&&"p"in t}function t0(t){return!("h"in t)&&!("w"in t)&&"p"in t&&"e"in t&&"u"in t&&"id"in t}async function t1(t,e=()=>!0){if(!(t instanceof Uint8Array))throw new tX("DotLottie not found","INVALID_DOTLOTTIE");return await new Promise((i,r)=>{!function(t,e,i){i||(i=e,e={}),"function"!=typeof i&&j(7);var r=[],o=function(){for(var t=0;t<r.length;++t)r[t]()},n={},s=function(t,e){tn(function(){i(t,e)})};tn(function(){s=i});for(var a=t.length-22;101010256!=X(t,a);--a)if(!a||t.length-a>65558)return s(j(13,0,1),null),o;var l=Y(t,a+8);if(l){var h=l,u=X(t,a+16),d=4294967295==u||65535==h;if(d){var p=X(t,a-12);(d=101075792==X(t,p))&&(h=l=X(t,p+32),u=X(t,p+48))}for(var f=e&&e.filter,v=0;v<h;++v)!function(e){var i=tr(t,u,d),a=i[0],h=i[1],p=i[2],v=i[3],m=i[4],y=i[5],g=y+30+Y(t,y+26)+Y(t,y+28);u=m;var _=function(t,e){t?(o(),s(t,null)):(e&&(n[v]=e),--l||s(null,n))};if(!f||f({name:v,size:h,originalSize:p,compression:a})){if(a){if(8==a){var b,w,C=t.subarray(g,g+h);if(h<32e4)try{_(null,Q(C,{out:new c(p)}))}catch(t){_(t,null)}else r.push((b={size:p},(w=_)||(w=b,b={}),"function"!=typeof w&&j(7),K(C,b,[Z],function(t){return J(Q(t.data[0],W(t.data[1])))},1,w)))}else _(j(14,"unknown compression type "+a,1),null)}else _(null,B(t,g,g+h))}else _(null,null)}(0)}else s(null,{})}(t,{filter:e},(t,e)=>{t&&r(t),i(e)})})}async function t2(t,e,i){if(!(t instanceof Uint8Array))throw new tX("DotLottie not found","INVALID_DOTLOTTIE");return(await t1(t,t=>t.name===e&&(!i||i(t))))[e]}async function t3(t){let e="manifest.json",i=(await t1(t,t=>t.name===e))[e];if(!(typeof i>"u"))return JSON.parse(ti(i,!1))}async function t6(t){var e;let i;if(!(t instanceof Uint8Array))return{success:!1,error:"DotLottie not found"};let r=await t3(t);if(typeof r>"u")return{success:!1,error:"Invalid .lottie file, manifest.json is missing"};let o=(i=tR._parse(r,void 0)).issues?{success:!1,error:new ts(i.issues),issues:i.issues}:{success:!0,data:i.output,output:i.output};return o.success?{success:!0}:{success:!1,error:`Invalid .lottie file, manifest.json structure is invalid, ${JSON.stringify((Array.isArray(e=o.error)?e:e.issues).reduce((t,e)=>{if(e.path){let i=e.path.map(({key:t})=>t).join(".");t.nested[i]=[...t.nested[i]||[],e.message]}else t.root=[...t.root||[],e.message];return t},{nested:{}}).nested,null,2)}`}}async function t7(t){let e=new Uint8Array(t),i=await t6(e);if(i.error)throw new tX(i.error,"INVALID_DOTLOTTIE");return e}async function t4(t,e){let i=await t1(t,t=>{let i=t.name.replace("audio/","");return t.name.startsWith("audio/")&&(!e||e({...t,name:i}))}),r={};for(let t in i){let e=i[t];e instanceof Uint8Array&&(r[t.replace("audio/","")]=tG(e))}return r}async function t8(t,e){var i;let r=new Map;for(let[t,o]of Object.entries(e))for(let e of o.assets||[])if(t0(e)){let o=e.p;r.has(o)||r.set(o,new Set),null==(i=r.get(o))||i.add(t)}let o=await t4(t,t=>r.has(t.name));for(let[t,i]of r){let r=o[t];if(r)for(let o of i){let i=e[o];for(let e of(null==i?void 0:i.assets)||[])t0(e)&&e.p===t&&(e.p=r,e.u="",e.e=1)}}}async function t5(t,e){let i=await t1(t,t=>{let i=t.name.replace("images/","");return t.name.startsWith("images/")&&(!e||e({...t,name:i}))}),r={};for(let t in i){let e=i[t];e instanceof Uint8Array&&(r[t.replace("images/","")]=tG(e))}return r}async function t9(t,e){var i;let r=new Map;for(let[t,o]of Object.entries(e))for(let e of o.assets||[])if(tQ(e)){let o=e.p;r.has(o)||r.set(o,new Set),null==(i=r.get(o))||i.add(t)}let o=await t5(t,t=>r.has(t.name));for(let[t,i]of r){let r=o[t];if(r)for(let o of i){let i=e[o];for(let e of(null==i?void 0:i.assets)||[])tQ(e)&&e.p===t&&(e.p=r,e.u="",e.e=1)}}}async function et(t,e,{inlineAssets:i}={},r){let o=`animations/${e}.json`,n=await t2(t,o,r);if(typeof n>"u")return;let s=JSON.parse(ti(n,!1));if(!i)return s;let a={[e]:s};return await t9(t,a),await t8(t,a),s}async function ee(t,e,i){let r=`themes/${e}.json`,o=await t2(t,r,i);if(!(typeof o>"u"))return JSON.parse(ti(o,!1))}async function ei(t,e){let i={},r=await t1(t,t=>{let i=t.name.replace("states/","").replace(".json","");return t.name.startsWith("states/")&&(!e||e({...t,name:i}))});for(let t in r){let e=r[t];e instanceof Uint8Array&&(i[t.replace("states/","").replace(".json","")]=ti(e,!1))}return i}async function er(t,e,i){let r=`states/${e}.json`,o=await t2(t,r,i);return typeof o>"u"?void 0:JSON.parse(ti(o,!1))}function eo(t,e="dotLottie-common"){return Error(`[${e}]: ${t}`)}function en(t,e="dotLottie-common",...i){console.error(`[${e}]:`,t,...i)}function es(t,e="dotLottie-common",...i){console.warn(`[${e}]:`,t,...i)}function ea(t){return["v","ip","op","layers","fr","w","h"].every(e=>Object.prototype.hasOwnProperty.call(t,e))}function el(t,e){let i=Object.keys(t).find(i=>t[i]===e);if(void 0===i)throw Error("Value not found in the object.");return i}function eh(t){return JSON.parse(JSON.stringify(t))}s=null!=(o=tB())?tA(tx(o)):{},((t,e,i,r)=>{if(e&&"object"==typeof e||"function"==typeof e)for(let o of tk(e))tE.call(t,o)||o===i||tL(t,o,{get:()=>e[o],enumerable:!(r=tS(e,o))||r.enumerable})})(!n&&o&&o.__esModule?s:tL(s,"default",{value:o,enumerable:!0}),o);var eu=class{_dotLottie;_animationsMap=new Map;_themeMap=new Map;_stateMachinesMap=new Map;_manifest;get dotLottie(){return this._dotLottie}get animationsMap(){return this._animationsMap}get themeMap(){return this._themeMap}get stateMachinesMap(){return this._stateMachinesMap}get manifest(){return this._manifest}async loadFromUrl(t){let e=await fetch(t,{method:"GET",mode:"cors"});if(!e.ok)throw Error(`Failed to load dotLottie from ${t} with status ${e.status}`);let i=e.headers.get("content-type");if(null!=i&&i.includes("application/json")){let i=await e.json();if(!ea(i))throw Error(`Invalid lottie JSON at ${t}`);let r=function(t=""){let e=t.trim(),i=e.lastIndexOf("/"),r=e.substring(i+1),o=r.indexOf(".");return -1!==o?r.substring(0,o):r}(t);this._animationsMap.set(r,i),this._manifest={activeAnimationId:r,animations:[{id:r}]}}else{this._dotLottie=await t7(await e.arrayBuffer());let t=await t3(this._dotLottie);if(!t)throw Error("Manifest not found");this._manifest=t}}loadFromLottieJSON(t){if(!ea(t))throw Error("Invalid lottie JSON");let e="my-animation";this._animationsMap.set(e,t),this._manifest={activeAnimationId:e,animations:[{id:e}]}}async loadFromArrayBuffer(t){this._dotLottie=await t7(t);let e=await t3(this._dotLottie);if(!e)throw Error("Manifest not found");this._manifest=e}async getAnimation(t){if(this._animationsMap.get(t))return this._animationsMap.get(t);if(!this._dotLottie)return;let e=await et(this._dotLottie,t,{inlineAssets:!0});return e&&this._animationsMap.set(t,e),e}async getTheme(t){if(this._themeMap.get(t))return this._themeMap.get(t);if(!this._dotLottie)return;let e=await ee(this._dotLottie,t);return e&&this._themeMap.set(t,e),e}async getStateMachines(){if(!this._dotLottie)return;let t=await ei(this._dotLottie);for(let e in t)if(e){let i=t[e];if(i){let t=JSON.parse(i);if(t){let e=t.descriptor.id;this._stateMachinesMap.get(e)||this._stateMachinesMap.set(e,t)}}}return Array.from(this._stateMachinesMap.values())}async getStateMachine(t){if(this._stateMachinesMap.get(t))return this._stateMachinesMap.get(t);if(!this._dotLottie)return;let e=await er(this._dotLottie,t);return e&&this._stateMachinesMap.set(e.descriptor.id,e),e}};function ed(){throw Error("Cycle detected")}function ep(){if(ev>1)ev--;else{for(var t,e=!1;void 0!==ef;){var i=ef;for(ef=void 0,em++;void 0!==i;){var r=i.o;if(i.o=void 0,i.f&=-3,!(8&i.f)&&eb(i))try{i.c()}catch(i){e||(t=i,e=!0)}i=r}}if(em=0,ev--,e)throw t}}var ec=void 0,ef=void 0,ev=0,em=0,ey=0;function eg(t){if(void 0!==ec){var e=t.n;if(void 0===e||e.t!==ec)return e={i:0,S:t,p:ec.s,n:void 0,t:ec,e:void 0,x:void 0,r:e},void 0!==ec.s&&(ec.s.n=e),ec.s=e,t.n=e,32&ec.f&&t.S(e),e;if(-1===e.i)return e.i=0,void 0!==e.n&&(e.n.p=e.p,void 0!==e.p&&(e.p.n=e.n),e.p=ec.s,e.n=void 0,ec.s.n=e,ec.s=e),e}}function e_(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}function eb(t){for(var e=t.s;void 0!==e;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function ew(t){for(var e=t.s;void 0!==e;e=e.n){var i=e.S.n;if(void 0!==i&&(e.r=i),e.S.n=e,e.i=-1,void 0===e.n){t.s=e;break}}}function eC(t){for(var e=t.s,i=void 0;void 0!==e;){var r=e.p;-1===e.i?(e.S.U(e),void 0!==r&&(r.n=e.n),void 0!==e.n&&(e.n.p=r)):i=e,e.S.n=e.r,void 0!==e.r&&(e.r=void 0),e=r}t.s=i}function eA(t){e_.call(this,void 0),this.x=t,this.s=void 0,this.g=ey-1,this.f=4}function eL(t){var e=t.u;if(t.u=void 0,"function"==typeof e){ev++;var i=ec;ec=void 0;try{e()}catch(e){throw t.f&=-2,t.f|=8,eS(t),e}finally{ec=i,ep()}}}function eS(t){for(var e=t.s;void 0!==e;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,eL(t)}function ek(t){if(ec!==this)throw Error("Out-of-order effect");eC(this),ec=t,this.f&=-2,8&this.f&&eS(this),ep()}function ex(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}e_.prototype.h=function(){return!0},e_.prototype.S=function(t){this.t!==t&&void 0===t.e&&(t.x=this.t,void 0!==this.t&&(this.t.e=t),this.t=t)},e_.prototype.U=function(t){if(void 0!==this.t){var e=t.e,i=t.x;void 0!==e&&(e.x=i,t.e=void 0),void 0!==i&&(i.e=e,t.x=void 0),t===this.t&&(this.t=i)}},e_.prototype.subscribe=function(t){var e=this;return function(t){var e=new ex(t);try{e.c()}catch(t){throw e.d(),t}return e.d.bind(e)}(function(){var i=e.value,r=32&this.f;this.f&=-33;try{t(i)}finally{this.f|=r}})},e_.prototype.valueOf=function(){return this.value},e_.prototype.toString=function(){return this.value+""},e_.prototype.toJSON=function(){return this.value},e_.prototype.peek=function(){return this.v},Object.defineProperty(e_.prototype,"value",{get:function(){var t=eg(this);return void 0!==t&&(t.i=this.i),this.v},set:function(t){if(ec instanceof eA&&function(){throw Error("Computed cannot have side-effects")}(),t!==this.v){em>100&&ed(),this.v=t,this.i++,ey++,ev++;try{for(var e=this.t;void 0!==e;e=e.x)e.t.N()}finally{ep()}}}}),(eA.prototype=new e_).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===ey))return!0;if(this.g=ey,this.f|=1,this.i>0&&!eb(this))return this.f&=-2,!0;var t=ec;try{ew(this),ec=this;var e=this.x();(16&this.f||this.v!==e||0===this.i)&&(this.v=e,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return ec=t,eC(this),this.f&=-2,!0},eA.prototype.S=function(t){if(void 0===this.t){this.f|=36;for(var e=this.s;void 0!==e;e=e.n)e.S.S(e)}e_.prototype.S.call(this,t)},eA.prototype.U=function(t){if(void 0!==this.t&&(e_.prototype.U.call(this,t),void 0===this.t)){this.f&=-33;for(var e=this.s;void 0!==e;e=e.n)e.S.U(e)}},eA.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;void 0!==t;t=t.x)t.t.N()}},eA.prototype.peek=function(){if(this.h()||ed(),16&this.f)throw this.v;return this.v},Object.defineProperty(eA.prototype,"value",{get:function(){1&this.f&&ed();var t=eg(this);if(this.h(),void 0!==t&&(t.i=this.i),16&this.f)throw this.v;return this.v}}),ex.prototype.c=function(){var t=this.S();try{if(8&this.f||void 0===this.x)return;var e=this.x();"function"==typeof e&&(this.u=e)}finally{t()}},ex.prototype.S=function(){1&this.f&&ed(),this.f|=1,this.f&=-9,eL(this),ew(this),ev++;var t=ec;return ec=this,ek.bind(this,t)},ex.prototype.N=function(){2&this.f||(this.f|=2,this.o=ef,ef=this)},ex.prototype.d=function(){this.f|=8,1&this.f||eS(this)};var eE=class{_state;_prevState;constructor(t){this._prevState=t,this._state=new e_(t)}setState(t){this._prevState=this._state.value,this._state.value=t}subscribe(t){return this._state.subscribe(e=>t(e,this._prevState))}};async function eO(t,e){let[{DotLottieStateMachineManager:r}]=await Promise.all([i.e(4577).then(i.bind(i,4577))]);if(!t.length)throw eo("No state machines available inside this .lottie!");return new r(t,e)}var eI=((a=eI||{}).Complete="complete",a.DataFail="data_fail",a.DataReady="data_ready",a.Error="error",a.Frame="frame",a.Freeze="freeze",a.LoopComplete="loopComplete",a.Pause="pause",a.Play="play",a.Ready="ready",a.Stop="stop",a.VisibilityChange="visibilityChange",a),e$=((l=e$||{}).Completed="completed",l.Error="error",l.Fetching="fetching",l.Frozen="frozen",l.Initial="initial",l.Loading="loading",l.Paused="paused",l.Playing="playing",l.Ready="ready",l.Stopped="stopped",l),eP=((h=eP||{}).Bounce="bounce",h.Normal="normal",h),eM={autoplay:!1,direction:1,hover:!1,intermission:0,loop:!1,playMode:"normal",speed:1,defaultTheme:""},eT={activeStateId:"",autoplay:!1,currentState:"initial",frame:0,seeker:0,direction:1,hover:!1,loop:!1,playMode:"normal",speed:1,background:"transparent",intermission:0,currentAnimationId:void 0,visibilityPercentage:0},eU=class{_lottie;_src;_animationConfig;_prevUserPlaybackOptions={};_userPlaybackOptions;_hover=!1;_loop=!1;_counter=0;_intermission=0;_counterInterval=null;_container=null;_name;_mode="normal";_background="transparent";_animation;_defaultTheme;_activeAnimationId;_currentAnimationId;_testId;_listeners=new Map;_currentState="initial";_stateBeforeFreeze="initial";state=new eE(eT);_light=!1;_worker=!1;_dotLottieLoader=new eu;_activeStateId;_inInteractiveMode=!1;_scrollTicking=!1;_scrollCallback=void 0;_onShowIntersectionObserver=void 0;_visibilityPercentage=0;_audios=[];_stateMachineManager;constructor(t,e,i){"string"==typeof t?this._src=t:this._src=eh(t),null!=i&&i.testId&&(this._testId=i.testId),this._defaultTheme=(null==i?void 0:i.defaultTheme)||"",this._userPlaybackOptions=this._validatePlaybackOptions(i||{}),"string"==typeof(null==i?void 0:i.activeAnimationId)&&(this._activeAnimationId=i.activeAnimationId),this._container=e||null,"string"==typeof(null==i?void 0:i.background)&&this.setBackground(i.background),"u">typeof(null==i?void 0:i.activeStateId)&&(this._activeStateId=i.activeStateId);let{rendererSettings:r,...o}=i||{};this._animationConfig={loop:!1,autoplay:!1,renderer:"svg",rendererSettings:{clearCanvas:!0,progressiveLoad:!0,hideOnTransparent:!0,filterSize:{width:"200%",height:"200%",x:"-50%",y:"-50%"},...r},...o},null!=i&&i.light&&(this._light=i.light),null!=i&&i.worker&&(this._worker=i.worker),this._listenToHover(),this._listenToVisibilityChange()}_listenToHover(){var t,e,i,r;let o=()=>{this._hover&&"playing"!==this.currentState&&this.play()},n=()=>{this._hover&&"playing"===this.currentState&&this.stop()};null==(t=this._container)||t.removeEventListener("mouseenter",o),null==(e=this._container)||e.removeEventListener("mouseleave",n),null==(i=this._container)||i.addEventListener("mouseleave",n),null==(r=this._container)||r.addEventListener("mouseenter",o)}_onVisibilityChange(){!this._lottie||typeof document>"u"||(document.hidden&&"playing"===this.currentState?this.freeze():"frozen"===this.currentState&&this.unfreeze())}_listenToVisibilityChange(){"u">typeof document&&"u">typeof document.hidden&&document.addEventListener("visibilitychange",()=>this._onVisibilityChange())}_getOption(t){var e;if("u">typeof this._userPlaybackOptions[t])return this._userPlaybackOptions[t];let i=null==(e=this._dotLottieLoader.manifest)?void 0:e.animations.find(t=>t.id===this._currentAnimationId);return i&&"u">typeof i[t]?i[t]:eM[t]}_getPlaybackOptions(){let t={};for(let e in eM)"u">typeof eM[e]&&(t[e]=this._getOption(e));return t}_setPlayerState(t){var e,i,r;let o=t(this._getPlaybackOptions());try{tD._parse(o)}catch{es(`Invalid PlaybackOptions, ${JSON.stringify(o,null,2)}`);return}"u">typeof o.defaultTheme&&(this._defaultTheme=o.defaultTheme),"u">typeof o.playMode&&(this._mode=o.playMode),"u">typeof o.intermission&&(this._intermission=o.intermission),"u">typeof o.hover&&(this._hover=o.hover),"u">typeof o.loop&&(this.clearCountTimer(),this._loop=o.loop,this._counter=0,null==(e=this._lottie)||e.setLoop("number"==typeof o.loop||o.loop)),"u">typeof o.speed&&(null==(i=this._lottie)||i.setSpeed(o.speed)),"u">typeof o.autoplay&&this._lottie&&(this._lottie.autoplay=o.autoplay),"u">typeof o.direction&&(null==(r=this._lottie)||r.setDirection(o.direction))}_getOptionsFromAnimation(t){let{id:e,...i}=t;return{...eM,...i}}_updateTestData(){this._testId&&this._lottie&&(window.dotLottiePlayer||(window.dotLottiePlayer={[this._testId]:{}}),window.dotLottiePlayer[this._testId]={direction:this._lottie.playDirection,currentState:this._currentState,loop:this.loop,mode:this._mode,speed:this._lottie.playSpeed})}setContainer(t){t!==this._container&&(this._container=t,this.setBackground(this._background),this._listenToHover())}get currentState(){return this._currentState}clearCountTimer(){this._counterInterval&&clearInterval(this._counterInterval)}setCurrentState(t){this._currentState=t,this._notify(),this._updateTestData()}static isPathJSON(t){var e;return(null==(e=t.split(".").pop())?void 0:e.toLowerCase())==="json"}get src(){return this._src}updateSrc(t){this._src!==t&&("string"==typeof t?this._src=t:this._src=eh(t),this._activeAnimationId=void 0,this._currentAnimationId=void 0,this.load())}get intermission(){return this._intermission}get hover(){return this._hover}setHover(t){"boolean"==typeof t&&(this._hover=t,this._userPlaybackOptions.hover=t,this._notify())}setIntermission(t){this._intermission=t,this._userPlaybackOptions.intermission=t,this._notify()}get mode(){return this._mode}get animations(){return this._dotLottieLoader.animationsMap}get themes(){return this._dotLottieLoader.themeMap}setMode(t){"string"==typeof t&&(this._mode=t,this._userPlaybackOptions.playMode=t,this._setPlayerState(()=>({playMode:t})),this._notify(),this._updateTestData())}get container(){if(this._container)return this._container}goToAndPlay(t,e,i){if(!this._lottie||["loading"].includes(this._currentState)){es("goToAndPlay() Can't use whilst loading.");return}this._lottie.goToAndPlay(t,e,i),this.setCurrentState("playing")}goToAndStop(t,e,i){if(!this._lottie||["loading"].includes(this._currentState)){es("goToAndStop() Can't use whilst loading.");return}this._lottie.goToAndStop(t,e,i),this.setCurrentState("stopped")}seek(t){if(!this._lottie||["loading"].includes(this._currentState)){es("seek() Can't use whilst loading.");return}let e=t;"number"==typeof e&&(e=Math.round(e));let i=/^(\d+)(%?)$/u.exec(e.toString());if(!i)return;let r="%"===i[2]?this.totalFrames*Number(i[1])/100:i[1];void 0!==r&&(this._lottie.goToAndPlay(r,!0),"playing"===this.currentState?this.play():"frozen"===this.currentState?this.freeze():this.pause())}_areNumbersInRange(t,e){return t>=0&&t<=1&&e>=0&&e<=1}_updatePosition(t,e,i){let[r,o]=null!=t?t:[0,this.totalFrames-1],[n,s]=null!=e?e:[0,1];if(!this._areNumbersInRange(n,s)){en("threshold values must be between 0 and 1");return}if(this.container){let{height:t,top:e}=this.container.getBoundingClientRect(),a=(window.innerHeight-e)/(window.innerHeight+t),l=r+Math.round((a-n)/(s-n)*(o-r));i&&i(a),this.goToAndStop(l,!0),(l>=o||a>=s)&&this._handleAnimationComplete()}this._scrollTicking=!1}_requestTick(t,e,i){this._scrollTicking||(requestAnimationFrame(()=>this._updatePosition(t,e,i)),this._scrollTicking=!0)}playOnScroll(t){this.stop(),this._scrollCallback&&this.stopPlayOnScroll(),this._scrollCallback=()=>this._requestTick(null==t?void 0:t.segments,null==t?void 0:t.threshold,null==t?void 0:t.positionCallback),window.addEventListener("scroll",this._scrollCallback)}stopPlayOnScroll(){this._scrollCallback&&(window.removeEventListener("scroll",this._scrollCallback),this._scrollCallback=void 0)}stopPlayOnShow(){this._onShowIntersectionObserver&&(this._onShowIntersectionObserver.disconnect(),this._onShowIntersectionObserver=void 0)}addIntersectionObserver(t){if(!this.container)throw eo("Can't play on show, player container element not available.");let e={root:null,rootMargin:"0px",threshold:null!=t&&t.threshold?t.threshold:[0,1]};this._onShowIntersectionObserver=new IntersectionObserver(e=>{e.forEach(e=>{var i,r;this._visibilityPercentage=100*e.intersectionRatio,e.isIntersecting?(null!=t&&t.callbackOnIntersect&&t.callbackOnIntersect(this._visibilityPercentage),null==(i=this._container)||i.dispatchEvent(new Event("visibilityChange"))):null!=t&&t.callbackOnIntersect&&(t.callbackOnIntersect(0),null==(r=this._container)||r.dispatchEvent(new Event("visibilityChange")))})},e),this._onShowIntersectionObserver.observe(this.container)}playOnShow(t){var e;if(this.stop(),!this.container)throw eo("Can't play on show, player container element not available.");this._onShowIntersectionObserver&&this.stopPlayOnShow(),this.addIntersectionObserver({threshold:null!=(e=null==t?void 0:t.threshold)?e:[],callbackOnIntersect:t=>{0===t?this.pause():this.play()}})}_validatePlaybackOptions(t){if(!t)return{};let e={};for(let[i,r]of Object.entries(t))switch(i){case"autoplay":"boolean"==typeof r&&(e.autoplay=r);break;case"direction":"number"==typeof r&&[1,-1].includes(r)&&(e.direction=r);break;case"loop":("boolean"==typeof r||"number"==typeof r)&&(e.loop=r);break;case"playMode":"string"==typeof r&&["normal","bounce"].includes(r)&&(e.playMode=r);break;case"speed":"number"==typeof r&&(e.speed=r);break;case"themeColor":"string"==typeof r&&(e.themeColor=r);break;case"hover":"boolean"==typeof r&&(e.hover=r);break;case"intermission":"number"==typeof r&&(e.intermission=r);break;case"defaultTheme":"string"==typeof r&&(e.defaultTheme=r)}return this._requireValidPlaybackOptions(e),e}_requireAnimationsInTheManifest(){var t;if(!(null!=(t=this._dotLottieLoader.manifest)&&t.animations.length))throw eo("No animations found in manifest.")}_requireAnimationsToBeLoaded(){if(0===this._dotLottieLoader.animationsMap.size)throw eo("No animations have been loaded.")}async play(t,e){var i,r;if(["initial","loading"].includes(this._currentState)){es("Player unable to play whilst loading.");return}if(this._requireAnimationsInTheManifest(),this._requireAnimationsToBeLoaded(),this._lottie&&!t){-1===this._lottie.playDirection&&0===this._lottie.currentFrame?this._lottie.goToAndPlay(this._lottie.totalFrames,!0):this._lottie.play(),this.setCurrentState("playing");return}if("number"==typeof t){let r=null==(i=this._dotLottieLoader.manifest)?void 0:i.animations[t];if(!r)throw eo("animation not found.");"function"==typeof e?await this.render({id:r.id,...e(this._getPlaybackOptions(),this._getOptionsFromAnimation(r))}):await this.render({id:r.id})}if("string"==typeof t){let i=null==(r=this._dotLottieLoader.manifest)?void 0:r.animations.find(e=>e.id===t);if(!i)throw eo("animation not found.");"function"==typeof e?await this.render({id:i.id,...e(this._getPlaybackOptions(),this._getOptionsFromAnimation(i))}):await this.render({id:i.id})}}playSegments(t,e){if(!this._lottie||["loading"].includes(this._currentState)){es("playSegments() Can't use whilst loading.");return}this._lottie.playSegments(t,e),this.setCurrentState("playing")}resetSegments(t){if(!this._lottie||["loading"].includes(this._currentState)){es("resetSegments() Can't use whilst loading.");return}this._lottie.resetSegments(t)}togglePlay(){"playing"===this.currentState?this.pause():this.play()}_getAnimationByIdOrIndex(t){var e,i;if(this._requireAnimationsInTheManifest(),this._requireAnimationsToBeLoaded(),"number"==typeof t){let i=null==(e=this._dotLottieLoader.manifest)?void 0:e.animations[t];if(!i)throw eo("animation not found.");return i}if("string"==typeof t){let e=null==(i=this._dotLottieLoader.manifest)?void 0:i.animations.find(e=>e.id===t);if(!e)throw eo("animation not found.");return e}throw eo("first param must be a number or string")}get activeAnimationId(){return this._getActiveAnimationId()}get currentAnimationId(){return this._currentAnimationId}get activeStateId(){return this._activeStateId}async _startInteractivity(t){if(!this._inInteractiveMode){en("Can't start interactivity. Not in interactive mode. Call enterInteractiveMode(stateId: string) to start.");return}if(0===this._dotLottieLoader.stateMachinesMap.size&&await this._dotLottieLoader.getStateMachines(),0===this._dotLottieLoader.stateMachinesMap.size)throw eo("No interactivity states are available.");if("undefined"===t)throw eo("stateId is not specified.");this._stateMachineManager||(this._stateMachineManager=await eO(Array.from(this._dotLottieLoader.stateMachinesMap.values()),this)),this._stateMachineManager.start(t)}enterInteractiveMode(t){var e;if(t)this._inInteractiveMode||(this._prevUserPlaybackOptions={...this._userPlaybackOptions}),this._inInteractiveMode&&(null==(e=this._stateMachineManager)||e.stop()),this._activeStateId=t,this._inInteractiveMode=!0,this._startInteractivity(t);else throw eo("stateId must be a non-empty string.")}exitInteractiveMode(){var t;this._inInteractiveMode&&(this._inInteractiveMode=!1,this._activeStateId="",null==(t=this._stateMachineManager)||t.stop(),this._userPlaybackOptions={},this._userPlaybackOptions={...this._prevUserPlaybackOptions},this._prevUserPlaybackOptions={},this.reset())}reset(){var t;let e=this._getActiveAnimationId(),i=null==(t=this._dotLottieLoader.manifest)?void 0:t.animations.find(t=>t.id===e);if(this._inInteractiveMode&&this.exitInteractiveMode(),!i)throw eo("animation not found.");this.play(e)}previous(t){if(!this._dotLottieLoader.manifest||!this._dotLottieLoader.manifest.animations.length)throw eo("manifest not found.");if(this._inInteractiveMode){es("previous() is not supported in interactive mode.");return}let e=this._dotLottieLoader.manifest.animations.findIndex(t=>t.id===this._currentAnimationId);if(-1===e)throw eo("animation not found.");let i=this._dotLottieLoader.manifest.animations[(e-1+this._dotLottieLoader.manifest.animations.length)%this._dotLottieLoader.manifest.animations.length];if(!i||!i.id)throw eo("animation not found.");"function"==typeof t?this.render({id:i.id,...t(this._getPlaybackOptions(),this._getOptionsFromAnimation(i))}):this.render({id:i.id})}next(t){if(!this._dotLottieLoader.manifest||!this._dotLottieLoader.manifest.animations.length)throw eo("manifest not found.");if(this._inInteractiveMode){es("next() is not supported in interactive mode.");return}let e=this._dotLottieLoader.manifest.animations.findIndex(t=>t.id===this._currentAnimationId);if(-1===e)throw eo("animation not found.");let i=this._dotLottieLoader.manifest.animations[(e+1)%this._dotLottieLoader.manifest.animations.length];if(!i||!i.id)throw eo("animation not found.");"function"==typeof t?this.render({id:i.id,...t(this._getPlaybackOptions(),this._getOptionsFromAnimation(i))}):this.render({id:i.id})}getManifest(){return this._dotLottieLoader.manifest}resize(){if(!this._lottie||["loading"].includes(this._currentState)){es("resize() Can't use whilst loading.");return}this._lottie.resize()}stop(){if(!this._lottie||["loading"].includes(this._currentState)){es("stop() Can't use whilst loading.");return}this.clearCountTimer(),this._counter=0,this._setPlayerState(()=>({direction:this._getOption("direction")})),this._lottie.stop(),this.setCurrentState("stopped")}pause(){if(!this._lottie||["loading"].includes(this._currentState)){es("pause() Can't use whilst loading.");return}this.clearCountTimer(),this._lottie.pause(),this.setCurrentState("paused")}freeze(){if(!this._lottie||["loading"].includes(this._currentState)){es("freeze() Can't use whilst loading.");return}"frozen"!==this.currentState&&(this._stateBeforeFreeze=this.currentState),this._lottie.pause(),this.setCurrentState("frozen")}unfreeze(){if(!this._lottie||["loading"].includes(this._currentState)){es("unfreeze() Can't use whilst loading.");return}"playing"===this._stateBeforeFreeze?this.play():this.pause()}destroy(){var t,e;null!=(t=this._container)&&t.__lottie&&(this._container.__lottie.destroy(),this._container.__lottie=null),this._audios.length&&(this._audios.forEach(t=>{t.unload()}),this._audios=[]),this.clearCountTimer(),"u">typeof document&&document.removeEventListener("visibilitychange",()=>this._onVisibilityChange()),this._counter=0,null==(e=this._lottie)||e.destroy(),this._lottie=void 0}getAnimationInstance(){return this._lottie}static getLottieWebVersion(){return"^5.12.2"}addEventListener(t,e){var i,r,o;this._listeners.has(t)||this._listeners.set(t,new Set),null==(i=this._listeners.get(t))||i.add(e);try{"complete"===t?null==(r=this._container)||r.addEventListener(t,e):null==(o=this._lottie)||o.addEventListener(t,e)}catch(t){en(`addEventListener ${t}`)}}getState(){var t,e,i,r,o,n,s;return{autoplay:null!=(e=null==(t=this._lottie)?void 0:t.autoplay)&&e,currentState:this._currentState,frame:this._frame,visibilityPercentage:this._visibilityPercentage,seeker:this._seeker,direction:null!=(r=null==(i=this._lottie)?void 0:i.playDirection)?r:1,hover:this._hover,loop:this._loop||!1,playMode:this._mode,speed:null!=(n=null==(o=this._lottie)?void 0:o.playSpeed)?n:1,background:this._background,intermission:this._intermission,defaultTheme:this._defaultTheme,currentAnimationId:this._currentAnimationId,activeStateId:null!=(s=this._activeStateId)?s:""}}_notify(){this.state.setState(this.getState())}get totalFrames(){var t;return(null==(t=this._lottie)?void 0:t.totalFrames)||0}get direction(){return this._lottie?this._lottie.playDirection:1}setDirection(t){this._requireValidDirection(t),this._setPlayerState(()=>({direction:t})),this._userPlaybackOptions.direction=t}get speed(){var t;return(null==(t=this._lottie)?void 0:t.playSpeed)||1}setSpeed(t){this._requireValidSpeed(t),this._setPlayerState(()=>({speed:t})),this._userPlaybackOptions.speed=t}get autoplay(){var t,e;return null!=(e=null==(t=this._lottie)?void 0:t.autoplay)&&e}setAutoplay(t){if(this._requireValidAutoplay(t),!this._lottie||["loading"].includes(this._currentState)){es("setAutoplay() Can't use whilst loading.");return}this._setPlayerState(()=>({autoplay:t})),this._userPlaybackOptions.autoplay=t}toggleAutoplay(){if(!this._lottie||["loading"].includes(this._currentState)){es("toggleAutoplay() Can't use whilst loading.");return}this.setAutoplay(!this._lottie.autoplay)}get defaultTheme(){return this._defaultTheme}setDefaultTheme(t){this._setPlayerState(()=>({defaultTheme:t})),this._userPlaybackOptions.defaultTheme=t,this._animation&&this.render()}get loop(){return this._loop}setLoop(t){this._requireValidLoop(t),this._setPlayerState(()=>({loop:t})),this._userPlaybackOptions.loop=t}toggleLoop(){if(!this._lottie||["loading"].includes(this._currentState)){es("toggleLoop() Can't use whilst loading.");return}this.setLoop(!this._loop)}get background(){return this._background}setBackground(t){this._requireValidBackground(t),this._background=t,this._container&&(this._container.style.backgroundColor=t)}get _frame(){return this._lottie?"completed"===this.currentState?-1===this.direction?0:this._lottie.totalFrames:this._lottie.currentFrame:0}get _seeker(){return this._lottie?this._frame/this._lottie.totalFrames*100:0}async revertToManifestValues(t){var e;let i;i=Array.isArray(t)&&0!==t.length?t:["autoplay","defaultTheme","direction","hover","intermission","loop","playMode","speed","activeAnimationId"];let r=!1;if(i.includes("activeAnimationId")){let t=null==(e=this._dotLottieLoader.manifest)?void 0:e.activeAnimationId,i=this._getAnimationByIdOrIndex(t||0);this._activeAnimationId=t,await this._setCurrentAnimation(i.id),r=!0}i.forEach(t=>{switch(t){case"autoplay":delete this._userPlaybackOptions.autoplay,this.setAutoplay(this._getOption("autoplay"));break;case"defaultTheme":delete this._userPlaybackOptions.defaultTheme,this.setDefaultTheme(this._getOption("defaultTheme"));break;case"direction":delete this._userPlaybackOptions.direction,this.setDirection(this._getOption("direction"));break;case"hover":delete this._userPlaybackOptions.hover,this.setHover(this._getOption("hover"));break;case"intermission":delete this._userPlaybackOptions.intermission,this.setIntermission(this._getOption("intermission"));break;case"loop":delete this._userPlaybackOptions.loop,this.setLoop(this._getOption("loop"));break;case"playMode":delete this._userPlaybackOptions.playMode,this.setMode(this._getOption("playMode")),this.setDirection(this._getOption("direction"));break;case"speed":delete this._userPlaybackOptions.speed,this.setSpeed(this._getOption("speed"))}}),r&&this.render()}removeEventListener(t,e){var i,r,o;try{"complete"===t?null==(i=this._container)||i.removeEventListener(t,e):null==(r=this._lottie)||r.removeEventListener(t,e),null==(o=this._listeners.get(t))||o.delete(e)}catch(t){en("removeEventListener",t)}}_handleAnimationComplete(){var t;"number"==typeof this._loop&&this.stop();let e=-1===this.direction?0:this.totalFrames-1;this.goToAndStop(e,!0),this._counter=0,this.clearCountTimer(),this.setCurrentState("completed"),null==(t=this._container)||t.dispatchEvent(new Event("complete"))}addEventListeners(){var t;if(!this._lottie||["loading"].includes(this._currentState)){es("addEventListeners() Can't use whilst loading.");return}for(let[e,i]of(this._lottie.addEventListener("enterFrame",()=>{var t;if(!this._lottie){es("enterFrame event : Lottie is undefined.");return}0===Math.floor(this._lottie.currentFrame)&&-1===this.direction&&(null==(t=this._container)||t.dispatchEvent(new Event("complete")),this.loop||this.setCurrentState("completed")),this._notify()}),this._lottie.addEventListener("loopComplete",()=>{var t;if(!this._lottie){es("loopComplete event : Lottie is undefined.");return}null==(t=this._container)||t.dispatchEvent(new Event("loopComplete")),this.intermission>0&&this.pause();let e=this._lottie.playDirection;if("number"==typeof this._loop&&this._loop>0&&(this._counter+="bounce"===this._mode?.5:1,this._counter>=this._loop)){this._handleAnimationComplete();return}"bounce"===this._mode&&"number"==typeof e&&(e=-1*Number(e));let i=-1===e?this._lottie.totalFrames-1:0;this.intermission?(this.goToAndPlay(i,!0),this.pause(),this._counterInterval=window.setTimeout(()=>{this._lottie&&(this._setPlayerState(()=>({direction:e})),this.goToAndPlay(i,!0))},this._intermission)):(this._setPlayerState(()=>({direction:e})),this.goToAndPlay(-1===e?this.totalFrames-1:0,!0))}),this._lottie.addEventListener("complete",()=>{if(this._lottie&&!1===this._loop&&"bounce"===this._mode){if(this._counter+=.5,this._counter>=1){this._handleAnimationComplete();return}this._counterInterval=window.setTimeout(()=>{if(!this._lottie)return;let t=this._lottie.playDirection;"bounce"===this._mode&&"number"==typeof t&&(t=-1*Number(t));let e=-1===t?this.totalFrames-1:0;this._setPlayerState(()=>({direction:t})),this.goToAndPlay(e,!0)},this._intermission)}else this._handleAnimationComplete()}),this._listeners))if("complete"===e)for(let r of i)null==(t=this._container)||t.addEventListener(e,r);else for(let t of i)this._lottie.addEventListener(e,t)}async _setCurrentAnimation(t){this._currentState="loading";let e=await this._dotLottieLoader.getAnimation(t);this._currentAnimationId=t,this._animation=e,this._currentState="ready"}async _getAudioFactory(){let t;if(this._animation&&(t=this._animation.assets)&&t.some(t=>t0(t))){let{DotLottieAudio:t}=await i.e(4649).then(i.bind(i,4649));return e=>{let i=new t({src:[e]});return this._audios.push(i),i}}return null}async render(t){var e,i,r,o,n,s,a,l,h,u,d,p,c,f,v,m,y,g;if(null!=t&&t.id)await this._setCurrentAnimation(t.id);else if(!this._animation)throw eo("no animation selected");let _=null!=(e=eM.loop)&&e,b=null!=(i=eM.autoplay)&&i,w=null!=(r=eM.playMode)?r:"normal",C=null!=(o=eM.intermission)?o:0,A=null!=(n=eM.hover)&&n,L=null!=(s=eM.direction)?s:1,S=null!=(a=eM.speed)?a:1,k=null!=(l=eM.defaultTheme)?l:"";_=null!=(h=null==t?void 0:t.loop)?h:this._getOption("loop"),b=null!=(u=null==t?void 0:t.autoplay)?u:this._getOption("autoplay"),w=null!=(d=null==t?void 0:t.playMode)?d:this._getOption("playMode"),C=null!=(p=null==t?void 0:t.intermission)?p:this._getOption("intermission"),A=null!=(c=null==t?void 0:t.hover)?c:this._getOption("hover"),L=null!=(f=null==t?void 0:t.direction)?f:this._getOption("direction"),S=null!=(v=null==t?void 0:t.speed)?v:this._getOption("speed"),k=null!=(m=null==t?void 0:t.defaultTheme)?m:this._getOption("defaultTheme");let x={...this._animationConfig,autoplay:!A&&b,loop:"number"==typeof _||_,renderer:this._worker?"svg":null!=(y=this._animationConfig.renderer)?y:"svg"},[E,O,I]=await Promise.all([this._dotLottieLoader.getTheme(k),this._getLottiePlayerInstance(),this._getAudioFactory()]);if(E&&this._animation?(this._animation=eh(this._animation),this._animation.slots=E):this._animation=await this._dotLottieLoader.getAnimation(null!=(g=this._currentAnimationId)?g:""),this._activeStateId&&!this._inInteractiveMode){this.enterInteractiveMode(this._activeStateId);return}this.destroy(),this._setPlayerState(()=>({defaultTheme:k,playMode:w,intermission:C,hover:A,loop:_})),I?this._lottie=O.loadAnimation({...x,container:this._container,animationData:this._animation,audioFactory:I}):this._lottie=O.loadAnimation({...x,container:this._container,animationData:this._animation}),typeof this._lottie.resetSegments>"u"&&(this._lottie.resetSegments=()=>{var t;null==(t=this._lottie)||t.playSegments([0,this._lottie.totalFrames],!0)}),this.addEventListeners(),this._container&&(this._container.__lottie=this._lottie),this._setPlayerState(()=>({direction:L,speed:S})),b&&!A&&(!1===_&&-1===L?this.play():this.setCurrentState("playing")),this._updateTestData()}async _getLottiePlayerInstance(){var t;let e=null!=(t=this._animationConfig.renderer)?t:"svg",r;if(this._worker)return"svg"!==e&&es("Worker is only supported with svg renderer. Change or remove renderer prop to get rid of this warning."),(r=await i.e(9703).then(i.bind(i,8872))).default;switch(e){case"svg":r=this._light?await i.e(6873).then(i.bind(i,3110)):await i.e(5154).then(i.bind(i,7903));break;case"canvas":r=this._light?await i.e(4548).then(i.bind(i,1338)):await i.e(8894).then(i.bind(i,897));break;case"html":r=this._light?await i.e(2639).then(i.bind(i,5519)):await i.e(1501).then(i.bind(i,1311));break;default:throw Error(`Invalid renderer: ${e}`)}return r.default}_getActiveAnimationId(){var t,e,i,r;let o=this._dotLottieLoader.manifest;return null!=(r=null!=(i=null!=(t=this._activeAnimationId)?t:null==o?void 0:o.activeAnimationId)?i:null==(e=null==o?void 0:o.animations[0])?void 0:e.id)?r:void 0}async load(t){if("loading"===this._currentState){es("Loading in progress..");return}try{if(this.setCurrentState("loading"),"string"==typeof this._src){if(function(t){try{let e=JSON.parse(t);return ea(e)}catch{return!1}}(this._src)){let t=JSON.parse(this._src);this._dotLottieLoader.loadFromLottieJSON(t)}else{let t=new URL(this._src,window.location.href);await this._dotLottieLoader.loadFromUrl(t.toString())}}else if("object"==typeof this._src&&ea(this._src))this._dotLottieLoader.loadFromLottieJSON(this._src);else throw eo("Invalid src provided");if(!this._dotLottieLoader.manifest)throw eo("No manifest found");let e=this._getActiveAnimationId();if(!e)throw eo("No active animation found");await this._setCurrentAnimation(e),await this.render(t)}catch(t){this.setCurrentState("error"),t instanceof Error&&en(`Error loading animation: ${t.message}`)}}setErrorState(t){this.setCurrentState("error"),en(t)}_requireValidDirection(t){if(-1!==t&&1!==t)throw eo("Direction can only be -1 (backwards) or 1 (forwards)")}_requireValidIntermission(t){if(t<0||!Number.isInteger(t))throw eo("intermission must be a positive number")}_requireValidLoop(t){if("number"==typeof t&&(!Number.isInteger(t)||t<0))throw eo("loop must be a positive number or boolean")}_requireValidSpeed(t){if("number"!=typeof t)throw eo("speed must be a number")}_requireValidBackground(t){if("string"!=typeof t)throw eo("background must be a string")}_requireValidAutoplay(t){if("boolean"!=typeof t)throw eo("autoplay must be a boolean")}_requireValidPlaybackOptions(t){t.direction&&this._requireValidDirection(t.direction),t.intermission&&this._requireValidIntermission(t.intermission),t.loop&&this._requireValidLoop(t.loop),t.speed&&this._requireValidSpeed(t.speed)}}},1076:function(t,e,i){"use strict";i.d(e,{a:function(){return n}});var r=Object.defineProperty,o=Object.getOwnPropertyDescriptor,n=(t,e,i,n)=>{for(var s,a=n>1?void 0:n?o(e,i):e,l=t.length-1;l>=0;l--)(s=t[l])&&(a=(n?s(e,i,a):s(a))||a);return n&&a&&r(e,i,a),a}},3400:function(t,e,i){"use strict";var r,o,n,s,a,l=window,h=l.ShadowRoot&&(void 0===l.ShadyCSS||l.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,u=Symbol(),d=new WeakMap,p=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==u)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(h&&void 0===t){let i=void 0!==e&&1===e.length;i&&(t=d.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&d.set(e,t))}return t}toString(){return this.cssText}},c=t=>new p("string"==typeof t?t:t+"",void 0,u),f=(t,e)=>{h?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{let i=document.createElement("style"),r=l.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=e.cssText,t.appendChild(i)})},v=h?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return c(e)})(t):t,m=window,y=m.trustedTypes,g=y?y.emptyScript:"",_=m.reactiveElementPolyfillSupport,b={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},w=(t,e)=>e!==t&&(e==e||t==t),C={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:w},A="finalized",L=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,i)=>{let r=this._$Ep(i,e);void 0!==r&&(this._$Ev.set(r,i),t.push(r))}),t}static createProperty(t,e=C){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){let o=this[t];this[e]=r,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||C}static finalize(){if(this.hasOwnProperty(A))return!1;this[A]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties;for(let e of[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)])this.createProperty(e,t[e])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t))for(let i of new Set(t.flat(1/0).reverse()))e.unshift(v(i));else void 0!==t&&e.push(v(t));return e}static _$Ep(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return f(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=C){var r;let o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){let n=((null===(r=i.converter)||void 0===r?void 0:r.toAttribute)!==void 0?i.converter:b).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;let r=this.constructor,o=r._$Ev.get(t);if(void 0!==o&&this._$El!==o){let t=r.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)!==void 0?t.converter:b;this._$El=o,this[o]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let r=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||w)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1,i=this._$AL;try{(e=this.shouldUpdate(i))?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};L[A]=!0,L.elementProperties=new Map,L.elementStyles=[],L.shadowRootOptions={mode:"open"},null==_||_({ReactiveElement:L}),(null!==(a=m.reactiveElementVersions)&&void 0!==a?a:m.reactiveElementVersions=[]).push("1.6.3");var S,k=window,x=k.trustedTypes,E=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,O="$lit$",I=`lit$${(Math.random()+"").slice(9)}$`,$="?"+I,P=`<${$}>`,M=document,T=()=>M.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,B=Array.isArray,N=t=>B(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),j=`[ 	
\f\r]`,z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,D=/>/g,F=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,q=/"/g,H=/^(?:script|style|textarea|title)$/i,Z=(t,...e)=>({_$litType$:1,strings:t,values:e}),J=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),K=new WeakMap,Y=M.createTreeWalker(M,129,null,!1);function X(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}var G=(t,e)=>{let i=t.length-1,r=[],o,n=2===e?"<svg>":"",s=z;for(let e=0;e<i;e++){let i=t[e],a,l,h=-1,u=0;for(;u<i.length&&(s.lastIndex=u,null!==(l=s.exec(i)));)u=s.lastIndex,s===z?"!--"===l[1]?s=R:void 0!==l[1]?s=D:void 0!==l[2]?(H.test(l[2])&&(o=RegExp("</"+l[2],"g")),s=F):void 0!==l[3]&&(s=F):s===F?">"===l[0]?(s=null!=o?o:z,h=-1):void 0===l[1]?h=-2:(h=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?F:'"'===l[3]?q:V):s===q||s===V?s=F:s===R||s===D?s=z:(s=F,o=void 0);let d=s===F&&t[e+1].startsWith("/>")?" ":"";n+=s===z?i+P:h>=0?(r.push(a),i.slice(0,h)+O+i.slice(h)+I+d):i+I+(-2===h?(r.push(void 0),e):d)}return[X(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),r]},Q=class t{constructor({strings:e,_$litType$:i},r){let o;this.parts=[];let n=0,s=0,a=e.length-1,l=this.parts,[h,u]=G(e,i);if(this.el=t.createElement(h,r),Y.currentNode=this.el.content,2===i){let t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=Y.nextNode())&&l.length<a;){if(1===o.nodeType){if(o.hasAttributes()){let t=[];for(let e of o.getAttributeNames())if(e.endsWith(O)||e.startsWith(I)){let i=u[s++];if(t.push(e),void 0!==i){let t=o.getAttribute(i.toLowerCase()+O).split(I),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?to:"?"===e[1]?ts:"@"===e[1]?ta:tr})}else l.push({type:6,index:n})}for(let e of t)o.removeAttribute(e)}if(H.test(o.tagName)){let t=o.textContent.split(I),e=t.length-1;if(e>0){o.textContent=x?x.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],T()),Y.nextNode(),l.push({type:2,index:++n});o.append(t[e],T())}}}else if(8===o.nodeType){if(o.data===$)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(I,t+1));)l.push({type:7,index:n}),t+=I.length-1}}n++}}static createElement(t,e){let i=M.createElement("template");return i.innerHTML=t,i}};function tt(t,e,i=t,r){var o,n,s;if(e===J)return e;let a=void 0!==r?null===(o=i._$Co)||void 0===o?void 0:o[r]:i._$Cl,l=U(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==l&&(null===(n=null==a?void 0:a._$AO)||void 0===n||n.call(a,!1),void 0===l?a=void 0:(a=new l(t))._$AT(t,i,r),void 0!==r?(null!==(s=i._$Co)&&void 0!==s?s:i._$Co=[])[r]=a:i._$Cl=a),void 0!==a&&(e=tt(t,a._$AS(t,e.values),a,r)),e}var te=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:i},parts:r}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:M).importNode(i,!0);Y.currentNode=o;let n=Y.nextNode(),s=0,a=0,l=r[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new ti(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new tl(n,this,t)),this._$AV.push(e),l=r[++a]}s!==(null==l?void 0:l.index)&&(n=Y.nextNode(),s++)}return Y.currentNode=M,o}v(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},ti=class t{constructor(t,e,i,r){var o;this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cp=null===(o=null==r?void 0:r.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&(null==t?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){U(t=tt(this,t,e))?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==J&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):N(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==W&&U(this._$AH)?this._$AA.nextSibling.data=t:this.$(M.createTextNode(t)),this._$AH=t}g(t){var e;let{values:i,_$litType$:r}=t,o="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=Q.createElement(X(r.h,r.h[0]),this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(i);else{let t=new te(o,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new Q(t)),e}T(e){B(this._$AH)||(this._$AH=[],this._$AR());let i=this._$AH,r,o=0;for(let n of e)o===i.length?i.push(r=new t(this.k(T()),this.k(T()),this,this.options)):r=i[o],r._$AI(n),o++;o<i.length&&(this._$AR(r&&r._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}},tr=class{constructor(t,e,i,r,o){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,r){let o=this.strings,n=!1;if(void 0===o)(n=!U(t=tt(this,t,e,0))||t!==this._$AH&&t!==J)&&(this._$AH=t);else{let r=t,s,a;for(t=o[0],s=0;s<o.length-1;s++)(a=tt(this,r[i+s],e,s))===J&&(a=this._$AH[s]),n||(n=!U(a)||a!==this._$AH[s]),a===W?t=W:t!==W&&(t+=(null!=a?a:"")+o[s+1]),this._$AH[s]=a}n&&!r&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}},to=class extends tr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}},tn=x?x.emptyScript:"",ts=class extends tr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==W?this.element.setAttribute(this.name,tn):this.element.removeAttribute(this.name)}},ta=class extends tr{constructor(t,e,i,r,o){super(t,e,i,r,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=tt(this,t,e,0))&&void 0!==i?i:W)===J)return;let r=this._$AH,o=t===W&&r!==W||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==W&&(r===W||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}},tl=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){tt(this,t)}},th=k.litHtmlPolyfillSupport;null==th||th(Q,ti),(null!==(S=k.litHtmlVersions)&&void 0!==S?S:k.litHtmlVersions=[]).push("2.8.0");var tu=(t,e,i)=>{var r,o;let n=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:e,s=n._$litPart$;if(void 0===s){let t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=s=new ti(e.insertBefore(T(),t),t,void 0,null!=i?i:{})}return s._$AI(t),s},td=class extends L{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=tu(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return J}};td.finalized=!0,td._$litElement$=!0,null===(o=globalThis.litElementHydrateSupport)||void 0===o||o.call(globalThis,{LitElement:td});var tp=globalThis.litElementPolyfillSupport;null==tp||tp({LitElement:td}),(null!==(n=globalThis.litElementVersions)&&void 0!==n?n:globalThis.litElementVersions=[]).push("3.3.3");var tc=((t,...e)=>new p(1===t.length?t[0]:e.reduce((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]),t,u))`
  @font-face {
    font-family: 'Karla';
    font-weight: regular;
    src: url('./fonts/Karla-regular.woff') format('woff');
  }

  :host {
    --lottie-player-toolbar-height: 35px;
    --lottie-player-toolbar-background-color: transparent;
    --lottie-player-toolbar-hover-background-color: #f3f6f8;
    --lottie-player-toolbar-icon-color: #20272c;
    --lottie-player-toolbar-icon-hover-color: #f3f6f8;
    --lottie-player-toolbar-icon-active-color: #00ddb3;
    --lottie-player-seeker-track-color: #00ddb3;
    --lottie-player-seeker-accent-color: #00c1a2;
    --lottie-player-seeker-thumb-color: #00c1a2;
    --lottie-player-options-separator: #d9e0e6;

    display: block;
    width: 100%;
    height: 100%;

    font-family: 'Karla', sans-serif;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host * {
    box-sizing: border-box;
  }

  .active {
    color: var(--lottie-player-toolbar-icon-active-color) !important;
  }

  .main {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .animation {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
  }
  .animation.controls {
    height: calc(100% - var(--lottie-player-toolbar-height));
  }

  .toolbar {
    display: flex;
    align-items: center;
    justify-items: center;
    background-color: var(--lottie-player-toolbar-background-color);
    margin: 0 8px;
    height: var(--lottie-player-toolbar-height);
  }

  .btn-spacing-left {
    margin-right: 4px;
    margin-left: 8px;
  }

  .btn-spacing-center {
    margin-right: 4px;
    margin-left: 4px;
  }

  .btn-spacing-right {
    margin-right: 8px;
    margin-left: 4px;
  }

  .toolbar button {
    color: #20272c;
    cursor: pointer;
    fill: var(--lottie-player-toolbar-icon-color);
    display: flex;
    background: none;
    border: 0px;
    border-radius: 4px;
    padding: 4px;
    outline: none;
    width: 24px;
    height: 24px;
    align-items: center;
  }

  .toolbar button:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
    border-style: solid;
    border-radius: 2px;
  }

  .toolbar button.active {
    fill: var(--lottie-player-toolbar-icon-active-color);
  }

  .toolbar button.active:hover {
    fill: var(--lottie-player-toolbar-icon-hover-color);
    border-radius: 4px;
  }

  .toolbar button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .toolbar button svg {
    width: 16px;
    height: 16px;
  }

  .toolbar button.disabled svg {
    display: none;
  }

  .popover {
    position: absolute;
    bottom: 40px;
    left: calc(100% - 239px);
    width: 224px;
    min-height: 84px;
    max-height: 300px;
    background-color: #ffffff;
    box-shadow: 0px 8px 48px 0px rgba(243, 246, 248, 0.15), 0px 8px 16px 0px rgba(61, 72, 83, 0.16),
      0px 0px 1px 0px rgba(61, 72, 83, 0.36);
    border-radius: 8px;
    padding: 8px;
    z-index: 100;
    overflow-y: scroll;
    scrollbar-width: none;
  }
  .popover:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .popover::-webkit-scrollbar {
    width: 0px;
  }

  .popover-button {
    background: none;
    border: none;
    font-family: inherit;
    width: 100%;
    flex-direction: row;
    cursor: pointer;
    height: 32px;
    color: #20272c;
    justify-content: space-between;
    display: flex;
    padding: 4px 8px;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    border-radius: 4px;
  }

  .popover-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .popover-button:hover {
    background-color: var(--lottie-player-toolbar-hover-background-color);
  }

  .popover-button-text {
    display: flex;
    color: #20272c;
    flex-direction: column;
    align-self: stretch;
    justify-content: center;
    font-family: inherit;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.28px;
  }

  .reset-btn {
    font-size: 12px;
    cursor: pointer;
    font-family: inherit;
    background: none;
    border: none;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #63727e;
    padding: 0;
    width: 31px;
    height: 18px;
  }
  .reset-btn:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }
  .reset-btn:hover {
    color: #20272c;
  }

  .option-title-button {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 32px;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    cursor: pointer;
    color: var(--lottie-player-toolbar-icon-color);
    border: none;
    background: none;
    padding: 4px;
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.32px;
  }
  .option-title-button.themes {
    width: auto;
    padding: 0;
  }
  .option-title-button:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
  }

  .option-title-themes-row {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
  }
  .option-title-themes-row:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
  }

  .option-title-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .option-title-text {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.32px;
  }

  .option-title-separator {
    margin: 8px -8px;
    border-bottom: 1px solid var(--lottie-player-options-separator);
  }

  .option-title-chevron {
    display: flex;
    padding: 4px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .option-row {
    display: flex;
    flex-direction: column;
  }
  .option-row > ul {
    padding: 0;
    margin: 0;
  }

  .option-button {
    width: 100%;
    background: none;
    border: none;
    font-family: inherit;
    display: flex;
    padding: 4px 8px;
    color: #20272c;
    overflow: hidden;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    cursor: pointer;
    height: 32px;
    font-family: inherit;
    font-size: 14px;
    border-radius: 4px;
  }
  .option-button:hover {
    background-color: var(--lottie-player-toolbar-hover-background-color);
  }
  .option-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .option-tick {
    display: flex;
    width: 24px;
    height: 24px;
    align-items: flex-start;
    gap: 8px;
  }

  .seeker {
    height: 4px;
    width: 95%;
    outline: none;
    -webkit-appearance: none;
    -moz-apperance: none;
    border-radius: 9999px;
    cursor: pointer;
    background-image: linear-gradient(
      to right,
      rgb(0, 221, 179) calc(var(--seeker) * 1%),
      rgb(217, 224, 230) calc(var(--seeker) * 1%)
    );
  }
  .seeker.to-left {
    background-image: linear-gradient(
      to right,
      rgb(217, 224, 230) calc(var(--seeker) * 1%),
      rgb(0, 221, 179) calc(var(--seeker) * 1%)
    );
  }
  .seeker::-webkit-slider-runnable-track:focus-visible {
    color: #f07167;
    accent-color: #00ddb3;
  }

  .seeker::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
  }
  .seeker::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--lottie-player-seeker-thumb-color);
    cursor: pointer;
    margin-top: -5px;
  }
  .seeker:focus-visible::-webkit-slider-thumb {
    background: var(--lottie-player-seeker-thumb-color);
    outline: 2px solid var(--lottie-player-seeker-track-color);
    border: 1.5px solid #ffffff;
  }
  .seeker::-webkit-slider-thumb:hover {
    background: #019d91;
  }
  .seeker::-moz-range-thumb {
    appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--lottie-player-seeker-thumb-color);
    cursor: pointer;
    margin-top: -5px;
    border-color: transparent;
  }
  .seeker:focus-visible::-moz-range-thumb {
    background: var(--lottie-player-seeker-thumb-color);
    outline: 2px solid var(--lottie-player-seeker-track-color);
    border: 1.5px solid #ffffff;
  }

  .error {
    display: flex;
    justify-content: center;
    margin: auto;
    height: 100%;
    align-items: center;
  }
`,tf=i(5580);i(853);var tv=i(1076),tm=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}}:{...e,finisher(i){i.createProperty(e.key,t)}},ty=(t,e,i)=>{e.constructor.createProperty(i,t)};function tg(t){return(e,i)=>void 0!==i?ty(t,e,i):tm(t,e)}(null===(s=window.HTMLSlotElement)||void 0===s?void 0:s.prototype.assignedElements)!=null||((t,e)=>t.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE));var t_="dotlottie-player",tb=class extends td{defaultTheme="";container;playMode=tf.g.Normal;autoplay=!1;background="transparent";controls=!1;direction=1;hover=!1;loop;renderer="svg";speed=1;src;intermission=0;activeAnimationId=null;light=!1;worker=!1;activeStateId;_seeker=0;_dotLottieCommonPlayer;_io;_loop;_renderer="svg";_unsubscribeListeners;_hasMultipleAnimations=!1;_hasMultipleThemes=!1;_hasMultipleStates=!1;_popoverIsOpen=!1;_animationsTabIsOpen=!1;_statesTabIsOpen=!1;_styleTabIsOpen=!1;_themesForCurrentAnimation=[];_statesForCurrentAnimation=[];_parseLoop(t){let e=parseInt(t,10);return Number.isInteger(e)&&e>0?(this._loop=e,e):"string"==typeof t&&["true","false"].includes(t)?(this._loop="true"===t,this._loop):((0,tf.c)("loop must be a positive integer or a boolean"),!1)}_handleSeekChange(t){let e=t.currentTarget;try{let t=parseInt(e.value,10);if(!this._dotLottieCommonPlayer)return;let i=t/100*this._dotLottieCommonPlayer.totalFrames;this.seek(i)}catch{throw(0,tf.a)("Error while seeking animation")}}_initListeners(){let t=this._dotLottieCommonPlayer;if(void 0===t){(0,tf.c)("player not initialized - cannot add event listeners","dotlottie-player-component");return}this._unsubscribeListeners=t.state.subscribe((t,e)=>{this._seeker=t.seeker,this.requestUpdate(),e.currentState!==t.currentState&&this.dispatchEvent(new CustomEvent(t.currentState)),this.dispatchEvent(new CustomEvent(tf.e.Frame,{detail:{frame:t.frame,seeker:t.seeker}})),this.dispatchEvent(new CustomEvent(tf.e.VisibilityChange,{detail:{visibilityPercentage:t.visibilityPercentage}}))}),t.addEventListener("complete",()=>{this.dispatchEvent(new CustomEvent(tf.e.Complete))}),t.addEventListener("loopComplete",()=>{this.dispatchEvent(new CustomEvent(tf.e.LoopComplete))}),t.addEventListener("DOMLoaded",()=>{let t=this.getManifest();t&&t.themes&&(this._themesForCurrentAnimation=t.themes.filter(t=>t.animations.includes(this.getCurrentAnimationId()||""))),t&&t.states&&(this._hasMultipleStates=t.states.length>0,this._statesForCurrentAnimation=[],t.states.forEach(t=>{this._statesForCurrentAnimation.push(t)})),this.dispatchEvent(new CustomEvent(tf.e.Ready))}),t.addEventListener("data_ready",()=>{this.dispatchEvent(new CustomEvent(tf.e.DataReady))}),t.addEventListener("data_failed",()=>{this.dispatchEvent(new CustomEvent(tf.e.DataFail))}),window&&window.addEventListener("click",t=>this._clickOutListener(t))}async load(t,e,i){if(!this.shadowRoot)return;this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.destroy(),this._dotLottieCommonPlayer=new tf.j(t,this.container,{rendererSettings:null!=e?e:{scaleMode:"noScale",clearCanvas:!0,progressiveLoad:!0,hideOnTransparent:!0},hover:this.hasAttribute("hover")?this.hover:void 0,renderer:this.hasAttribute("renderer")?this._renderer:void 0,loop:this.hasAttribute("loop")?this._loop:void 0,direction:this.hasAttribute("direction")?1===this.direction?1:-1:void 0,speed:this.hasAttribute("speed")?this.speed:void 0,intermission:this.hasAttribute("intermission")?Number(this.intermission):void 0,playMode:this.hasAttribute("playMode")?this.playMode:void 0,autoplay:this.hasAttribute("autoplay")?this.autoplay:void 0,activeAnimationId:this.hasAttribute("activeAnimationId")?this.activeAnimationId:void 0,defaultTheme:this.hasAttribute("defaultTheme")?this.defaultTheme:void 0,light:this.light,worker:this.worker,activeStateId:this.hasAttribute("activeStateId")?this.activeStateId:void 0}),await this._dotLottieCommonPlayer.load(i);let r=this.getManifest();this._hasMultipleAnimations=this.animationCount()>1,r&&(r.themes&&(this._themesForCurrentAnimation=r.themes.filter(t=>t.animations.includes(this.getCurrentAnimationId()||"")),this._hasMultipleThemes=r.themes.length>0),r.states&&(this._hasMultipleStates=r.states.length>0,this._statesForCurrentAnimation=[],r.states.forEach(t=>{this._statesForCurrentAnimation.push(t)}))),this._initListeners()}getCurrentAnimationId(){var t;return null==(t=this._dotLottieCommonPlayer)?void 0:t.currentAnimationId}animationCount(){var t;return this._dotLottieCommonPlayer&&(null==(t=this._dotLottieCommonPlayer.getManifest())?void 0:t.animations.length)||0}animations(){if(!this._dotLottieCommonPlayer)return[];let t=this._dotLottieCommonPlayer.getManifest();return(null==t?void 0:t.animations.map(t=>t.id))||[]}currentAnimation(){return this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.currentAnimationId?this._dotLottieCommonPlayer.currentAnimationId:""}getState(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.getState():tf.i}getManifest(){var t;return null==(t=this._dotLottieCommonPlayer)?void 0:t.getManifest()}getLottie(){var t;return null==(t=this._dotLottieCommonPlayer)?void 0:t.getAnimationInstance()}getVersions(){return{lottieWebVersion:tf.j.getLottieWebVersion(),dotLottiePlayerVersion:"2.7.12"}}previous(t){var e;null==(e=this._dotLottieCommonPlayer)||e.previous(t)}next(t){var e;null==(e=this._dotLottieCommonPlayer)||e.next(t)}reset(){var t;null==(t=this._dotLottieCommonPlayer)||t.reset()}play(t,e){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.play(t,e)}pause(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.pause()}stop(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stop()}playOnShow(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.playOnShow(t)}stopPlayOnShow(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stopPlayOnShow()}playOnScroll(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.playOnScroll(t)}stopPlayOnScroll(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stopPlayOnScroll()}seek(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.seek(t)}snapshot(t=!0){if(!this.shadowRoot)return"";let e=this.shadowRoot.querySelector(".animation svg"),i=new XMLSerializer().serializeToString(e);if(t){let t=document.createElement("a");t.href=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`,t.download=`download_${this._seeker}.svg`,document.body.appendChild(t),t.click(),document.body.removeChild(t)}return i}setTheme(t){var e;null==(e=this._dotLottieCommonPlayer)||e.setDefaultTheme(t)}themes(){var t;if(!this._dotLottieCommonPlayer)return[];let e=this._dotLottieCommonPlayer.getManifest();return(null==(t=null==e?void 0:e.themes)?void 0:t.map(t=>t.id))||[]}getDefaultTheme(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.defaultTheme:""}getActiveStateMachine(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.activeStateId:""}_freeze(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.freeze()}setSpeed(t=1){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setSpeed(t)}setDirection(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setDirection(t)}setLooping(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setLoop(t)}isLooping(){return!!this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.loop}togglePlay(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.togglePlay()}toggleLooping(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.toggleLoop()}setPlayMode(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setMode(t)}enterInteractiveMode(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.enterInteractiveMode(t)}exitInteractiveMode(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.exitInteractiveMode()}revertToManifestValues(t){var e;null==(e=this._dotLottieCommonPlayer)||e.revertToManifestValues(t)}static get styles(){return tc}async firstUpdated(){var t;this.container=null==(t=this.shadowRoot)?void 0:t.querySelector("#animation"),"IntersectionObserver"in window&&(this._io=new IntersectionObserver(t=>{var e,i;void 0!==t[0]&&t[0].isIntersecting?(null==(e=this._dotLottieCommonPlayer)?void 0:e.currentState)===tf.f.Frozen&&this.play():(null==(i=this._dotLottieCommonPlayer)?void 0:i.currentState)===tf.f.Playing&&this._freeze()}),this._io.observe(this.container)),this.loop?this._parseLoop(this.loop):this.hasAttribute("loop")&&this._parseLoop("true"),"svg"===this.renderer?this._renderer="svg":"canvas"===this.renderer?this._renderer="canvas":"html"===this.renderer&&(this._renderer="html"),this.src&&await this.load(this.src)}disconnectedCallback(){var t,e;this._io&&(this._io.disconnect(),this._io=void 0),null==(t=this._dotLottieCommonPlayer)||t.destroy(),null==(e=this._unsubscribeListeners)||e.call(this),window&&window.removeEventListener("click",t=>this._clickOutListener(t))}_clickOutListener(t){!t.composedPath().some(t=>t instanceof HTMLElement&&(t.classList.contains("popover")||"lottie-animation-options"===t.id))&&this._popoverIsOpen&&(this._popoverIsOpen=!1,this.requestUpdate())}renderControls(){var t,e,i,r,o;let n=(null==(t=this._dotLottieCommonPlayer)?void 0:t.currentState)===tf.f.Playing,s=(null==(e=this._dotLottieCommonPlayer)?void 0:e.currentState)===tf.f.Paused;return Z`
      <div id="lottie-controls" aria-label="lottie-animation-controls" class="toolbar">
        ${this._hasMultipleAnimations?Z`
              <button @click=${()=>this.previous()} aria-label="Previous animation" class="btn-spacing-left">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.69214 13.5C1.69214 13.7761 1.916 14 2.19214 14C2.46828 14 2.69214 13.7761 2.69214 13.5L2.69214 2.5C2.69214 2.22386 2.46828 2 2.19214 2C1.916 2 1.69214 2.22386 1.69214 2.5V13.5ZM12.5192 13.7828C13.1859 14.174 14.0254 13.6933 14.0254 12.9204L14.0254 3.0799C14.0254 2.30692 13.1859 1.8262 12.5192 2.21747L4.13612 7.13769C3.47769 7.52414 3.47769 8.4761 4.13612 8.86255L12.5192 13.7828Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:Z``}
        <button
          id="lottie-play-button"
          @click=${()=>{this.togglePlay()}}
          class=${n||s?`active ${this._hasMultipleAnimations?"btn-spacing-center":"btn-spacing-right"}`:`${this._hasMultipleAnimations?"btn-spacing-center":"btn-spacing-right"}`}
          aria-label="play / pause animation"
        >
          ${n?Z`
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.99996 2C3.26358 2 2.66663 2.59695 2.66663 3.33333V12.6667C2.66663 13.403 3.26358 14 3.99996 14H5.33329C6.06967 14 6.66663 13.403 6.66663 12.6667V3.33333C6.66663 2.59695 6.06967 2 5.33329 2H3.99996Z"
                    fill="#20272C"
                  />
                  <path
                    d="M10.6666 2C9.93025 2 9.33329 2.59695 9.33329 3.33333V12.6667C9.33329 13.403 9.93025 14 10.6666 14H12C12.7363 14 13.3333 13.403 13.3333 12.6667V3.33333C13.3333 2.59695 12.7363 2 12 2H10.6666Z"
                    fill="#20272C"
                  />
                </svg>
              `:Z`
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.33337 3.46787C3.33337 2.52312 4.35948 1.93558 5.17426 2.41379L12.8961 6.94592C13.7009 7.41824 13.7009 8.58176 12.8961 9.05408L5.17426 13.5862C4.35948 14.0644 3.33337 13.4769 3.33337 12.5321V3.46787Z"
                    fill="#20272C"
                  />
                </svg>
              `}
        </button>
        ${this._hasMultipleAnimations?Z`
              <button @click=${()=>this.next()} aria-label="Next animation" class="btn-spacing-right">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.3336 2.5C14.3336 2.22386 14.1097 2 13.8336 2C13.5574 2 13.3336 2.22386 13.3336 2.5V13.5C13.3336 13.7761 13.5574 14 13.8336 14C14.1097 14 14.3336 13.7761 14.3336 13.5V2.5ZM3.50618 2.21722C2.83954 1.82595 2 2.30667 2 3.07965V12.9201C2 13.6931 2.83954 14.1738 3.50618 13.7825L11.8893 8.86231C12.5477 8.47586 12.5477 7.52389 11.8893 7.13745L3.50618 2.21722Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:Z``}
        <input
          id="lottie-seeker-input"
          class="seeker ${(null==(i=this._dotLottieCommonPlayer)?void 0:i.direction)===-1?"to-left":""}"
          type="range"
          min="0"
          step="1"
          max="100"
          .value=${this._seeker}
          @input=${t=>this._handleSeekChange(t)}
          @mousedown=${()=>{this._freeze()}}
          @mouseup=${()=>{var t;null==(t=this._dotLottieCommonPlayer)||t.unfreeze()}}
          aria-valuemin="1"
          aria-valuemax="100"
          role="slider"
          aria-valuenow=${this._seeker}
          aria-label="lottie-seek-input"
          style=${`--seeker: ${this._seeker}`}
        />
        <button
          id="lottie-loop-toggle"
          @click=${()=>this.toggleLooping()}
          class=${null!=(r=this._dotLottieCommonPlayer)&&r.loop?"active btn-spacing-left":"btn-spacing-left"}
          aria-label="loop-toggle"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8654 2.31319C11.0607 2.11793 11.3772 2.11793 11.5725 2.31319L13.4581 4.19881C13.6534 4.39407 13.6534 4.71066 13.4581 4.90592L11.5725 6.79154C11.3772 6.9868 11.0607 6.9868 10.8654 6.79154C10.6701 6.59628 10.6701 6.27969 10.8654 6.08443L11.6162 5.33362H4V6.66695C4 7.03514 3.70152 7.33362 3.33333 7.33362C2.96514 7.33362 2.66666 7.03514 2.66666 6.66695L2.66666 4.66695C2.66666 4.29876 2.96514 4.00028 3.33333 4.00028H11.8454L10.8654 3.0203C10.6701 2.82504 10.6701 2.50846 10.8654 2.31319Z"
              fill="currentColor"
            />
            <path
              d="M12.4375 11.9999C12.8057 11.9999 13.1042 11.7014 13.1042 11.3332V9.33321C13.1042 8.96502 12.8057 8.66655 12.4375 8.66655C12.0693 8.66655 11.7708 8.96502 11.7708 9.33321V10.6665H4.15462L4.90543 9.91573C5.10069 9.72047 5.10069 9.40389 4.90543 9.20862C4.71017 9.01336 4.39359 9.01336 4.19832 9.20862L2.31271 11.0942C2.11744 11.2895 2.11744 11.6061 2.31271 11.8013L4.19832 13.687C4.39359 13.8822 4.71017 13.8822 4.90543 13.687C5.10069 13.4917 5.10069 13.1751 4.90543 12.9799L3.92545 11.9999H12.4375Z"
              fill="currentColor"
            />
          </svg>
        </button>
        ${this._hasMultipleAnimations||this._hasMultipleThemes||this._hasMultipleStates?Z`
              <button
                id="lottie-animation-options"
                @click=${()=>{this._popoverIsOpen=!this._popoverIsOpen,this.requestUpdate()}}
                aria-label="options"
                class="btn-spacing-right"
                style=${`background-color: ${this._popoverIsOpen?"var(--lottie-player-toolbar-icon-hover-color)":""}`}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.33337 11.6666C7.78109 11.6666 7.33337 12.1143 7.33337 12.6666C7.33337 13.2189 7.78109 13.6666 8.33337 13.6666C8.88566 13.6666 9.33337 13.2189 9.33337 12.6666C9.33337 12.1143 8.88566 11.6666 8.33337 11.6666Z"
                    fill="#20272C"
                  />
                  <path
                    d="M7.33337 7.99992C7.33337 7.44763 7.78109 6.99992 8.33337 6.99992C8.88566 6.99992 9.33338 7.44763 9.33338 7.99992C9.33338 8.5522 8.88566 8.99992 8.33337 8.99992C7.78109 8.99992 7.33337 8.5522 7.33337 7.99992Z"
                    fill="#20272C"
                  />
                  <path
                    d="M7.33337 3.33325C7.33337 2.78097 7.78109 2.33325 8.33337 2.33325C8.88566 2.33325 9.33338 2.78097 9.33338 3.33325C9.33338 3.88554 8.88566 4.33325 8.33337 4.33325C7.78109 4.33325 7.33337 3.88554 7.33337 3.33325Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:Z``}
      </div>
      ${this._popoverIsOpen?Z`
            <div
              id="popover"
              class="popover"
              tabindex="0"
              aria-label="lottie animations themes popover"
              style="min-height: ${this.themes().length>0?"84px":"auto"}"
            >
              ${this._animationsTabIsOpen||this._styleTabIsOpen||this._statesTabIsOpen?Z``:Z`
                    <button
                      class="popover-button"
                      tabindex="0"
                      aria-label="animations"
                      @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate()}}
                      @keydown=${t=>{("Space"===t.code||"Enter"===t.code)&&(this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate())}}
                    >
                      <div class="popover-button-text">Animations</div>
                      <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                            fill="#4C5863"
                          />
                        </svg>
                      </div>
                    </button>
                  `}
              ${!this._hasMultipleThemes||this._styleTabIsOpen||this._animationsTabIsOpen||this._statesTabIsOpen?"":Z` <button
                    class="popover-button"
                    aria-label="Themes"
                    @click=${()=>{this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate()}}
                    @keydown=${t=>{("Space"===t.code||"Enter"===t.code)&&(this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate())}}
                  >
                    <div class="popover-button-text">Themes</div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                          fill="#4C5863"
                        />
                      </svg>
                    </div>
                  </button>`}
              ${!this._hasMultipleStates||this._styleTabIsOpen||this._animationsTabIsOpen||this._statesTabIsOpen?"":Z` <button
                    class="popover-button"
                    aria-label="States"
                    @click=${()=>{this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate()}}
                    @keydown=${t=>{("Space"===t.code||"Enter"===t.code)&&(this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate())}}
                  >
                    <div class="popover-button-text">States</div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                          fill="#4C5863"
                        />
                      </svg>
                    </div>
                  </button>`}
              ${this._animationsTabIsOpen?Z`<button
                      class="option-title-button"
                      aria-label="Back to main popover menu"
                      @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate()}}
                    >
                      <div class="option-title-chevron">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                            fill="#20272C"
                          />
                        </svg>
                      </div>
                      <div>Animations</div>
                    </button>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this.animations().map(t=>Z`
                            <li>
                              <button
                                class="option-button"
                                aria-label=${`${t}`}
                                @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this._popoverIsOpen=!this._popoverIsOpen,this.play(t),this.requestUpdate()}}
                                @keydown=${e=>{("Space"===e.code||"Enter"===e.code)&&(this._animationsTabIsOpen=!this._animationsTabIsOpen,this._popoverIsOpen=!this._popoverIsOpen,this.play(t),this.requestUpdate())}}
                              >
                                <div class="option-tick">
                                  ${this.currentAnimation()===t?Z`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:Z`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${t}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div> `:Z``}
              ${this._styleTabIsOpen?Z`<div class="option-title-themes-row">
                      <button
                        class="option-title-button themes"
                        aria-label="Back to main popover menu"
                        @click=${()=>{this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate()}}
                      >
                        <div class="option-title-chevron">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                              fill="#20272C"
                            />
                          </svg>
                        </div>
                        <div class="option-title-text">Themes</div>
                        ${(null==(o=this._dotLottieCommonPlayer)?void 0:o.defaultTheme)===""?Z``:Z`
                              <button
                                class="reset-btn"
                                @click=${()=>{this.setTheme(""),this.requestUpdate()}}
                              >
                                Reset
                              </button>
                            `}
                      </button>
                    </div>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this._themesForCurrentAnimation.map(t=>Z`
                            <li>
                              <button
                                class="option-button"
                                aria-label="${t.id}"
                                @click=${()=>{this.setTheme(t.id)}}
                                @keydown=${e=>{("Space"===e.code||"Enter"===e.code)&&this.setTheme(t.id)}}
                              >
                                <div class="option-tick">
                                  ${this.getDefaultTheme()===t.id?Z`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:Z`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${t.id}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div>`:Z``}
              ${this._statesTabIsOpen?Z`<div class="option-title-themes-row">
                      <button
                        class="option-title-button themes"
                        aria-label="Back to main popover menu"
                        @click=${()=>{this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate()}}
                      >
                        <div class="option-title-chevron">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                              fill="#20272C"
                            />
                          </svg>
                        </div>
                        <div class="option-title-text">States</div>
                        <button
                          class="reset-btn"
                          @click=${()=>{this.exitInteractiveMode(),this.requestUpdate()}}
                        >
                          Reset
                        </button>
                      </button>
                    </div>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this._statesForCurrentAnimation.map(t=>Z`
                            <li>
                              <button
                                class="option-button"
                                aria-label="${t}"
                                @click=${()=>{this.enterInteractiveMode(t)}}
                                @keydown=${e=>{("Space"===e.code||"Enter"===e.code)&&this.enterInteractiveMode(t)}}
                              >
                                <div class="option-tick">
                                  ${this.getActiveStateMachine()===t?Z`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:Z`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${t}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div>`:Z``}
            </div>
          `:Z``}
    `}render(){var t;let e=this.controls?"main controls":"main",i=this.controls?"animation controls":"animation";return Z`
      <div id="animation-container" class=${e} lang="en" role="img" aria-label="lottie-animation-container">
        <div id="animation" class=${i} style="background:${this.background};">
          ${(null==(t=this._dotLottieCommonPlayer)?void 0:t.currentState)===tf.f.Error?Z` <div class="error">⚠️</div> `:void 0}
        </div>
        ${this.controls?this.renderControls():void 0}
      </div>
    `}};(0,tv.a)([tg({type:String})],tb.prototype,"defaultTheme",2),(0,tv.a)([(r="#animation",(({finisher:t,descriptor:e})=>(i,r)=>{var o;if(void 0===r){let r=null!==(o=i.originalKey)&&void 0!==o?o:i.key,n=null!=e?{kind:"method",placement:"prototype",key:r,descriptor:e(i.key)}:{...i,key:r};return null!=t&&(n.finisher=function(e){t(e,r)}),n}{let o=i.constructor;void 0!==e&&Object.defineProperty(i,r,e(r)),null==t||t(o,r)}})({descriptor:t=>({get(){var t,e;return null!==(e=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(r))&&void 0!==e?e:null},enumerable:!0,configurable:!0})}))],tb.prototype,"container",2),(0,tv.a)([tg()],tb.prototype,"playMode",2),(0,tv.a)([tg({type:Boolean})],tb.prototype,"autoplay",2),(0,tv.a)([tg({type:String})],tb.prototype,"background",2),(0,tv.a)([tg({type:Boolean})],tb.prototype,"controls",2),(0,tv.a)([tg({type:Number})],tb.prototype,"direction",2),(0,tv.a)([tg({type:Boolean})],tb.prototype,"hover",2),(0,tv.a)([tg({type:String})],tb.prototype,"loop",2),(0,tv.a)([tg({type:String})],tb.prototype,"renderer",2),(0,tv.a)([tg({type:Number})],tb.prototype,"speed",2),(0,tv.a)([tg({type:String})],tb.prototype,"src",2),(0,tv.a)([tg()],tb.prototype,"intermission",2),(0,tv.a)([tg({type:String})],tb.prototype,"activeAnimationId",2),(0,tv.a)([tg({type:Boolean})],tb.prototype,"light",2),(0,tv.a)([tg({type:Boolean})],tb.prototype,"worker",2),(0,tv.a)([tg({type:String})],tb.prototype,"activeStateId",2),(0,tv.a)([tg({state:!0})],tb.prototype,"_seeker",2),customElements.get(t_)||customElements.define(t_,tb)}}]);