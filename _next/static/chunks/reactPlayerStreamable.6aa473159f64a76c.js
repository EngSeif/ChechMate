(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2546],{2982:function(e,t,r){let s,a,o;var l=Object.create,n=Object.defineProperty,i=Object.getOwnPropertyDescriptor,p=Object.getOwnPropertyNames,u=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty,y=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t,r,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of p(t))h.call(e,a)||a===r||n(e,a,{get:()=>t[a],enumerable:!(s=i(t,a))||s.enumerable});return e},d=(e,t,r)=>(y(e,"symbol"!=typeof t?t+"":t,r),r),m={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(m,{default:()=>g}),e.exports=c(n({},"__esModule",{value:!0}),m);var f=(o=null!=(s=r(2265))?l(u(s)):{},c(!a&&s&&s.__esModule?o:n(o,"default",{value:s,enumerable:!0}),s)),b=r(5700),P=r(9375);class g extends f.Component{constructor(){super(...arguments),d(this,"callPlayer",b.callPlayer),d(this,"duration",null),d(this,"currentTime",null),d(this,"secondsLoaded",null),d(this,"mute",()=>{this.callPlayer("mute")}),d(this,"unmute",()=>{this.callPlayer("unmute")}),d(this,"ref",e=>{this.iframe=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,b.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js","playerjs").then(e=>{this.iframe&&(this.player=new e.Player(this.iframe),this.player.setLoop(this.props.loop),this.player.on("ready",this.props.onReady),this.player.on("play",this.props.onPlay),this.player.on("pause",this.props.onPause),this.player.on("seeked",this.props.onSeek),this.player.on("ended",this.props.onEnded),this.player.on("error",this.props.onError),this.player.on("timeupdate",({duration:e,seconds:t})=>{this.duration=e,this.currentTime=t}),this.player.on("buffered",({percent:e})=>{this.duration&&(this.secondsLoaded=this.duration*e)}),this.props.muted&&this.player.mute())},this.props.onError)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("setCurrentTime",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",100*e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){let e=this.props.url.match(P.MATCH_URL_STREAMABLE)[1];return f.default.createElement("iframe",{ref:this.ref,src:`https://streamable.com/o/${e}`,frameBorder:"0",scrolling:"no",style:{width:"100%",height:"100%"},allow:"encrypted-media; autoplay; fullscreen;"})}}d(g,"displayName","Streamable"),d(g,"canPlay",P.canPlay.streamable)}}]);