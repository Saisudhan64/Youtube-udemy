(this.webpackJsonpvideos=this.webpackJsonpvideos||[]).push([[0],{25:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),c=n(18),r=n.n(c),o=(n(25),n(9)),a=n.n(o),j=n(19),d=n(3),u=n(4),b=n(6),l=n(5),p=(n(27),n(28),n(0)),v=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(d.a)(this,n);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={value:""},e.onsubmitform=function(t){t.preventDefault(),e.props.onFormSubmit(e.state.value)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{children:Object(p.jsxs)("form",{onSubmit:this.onsubmitform,children:[Object(p.jsx)("label",{style:{position:"absolute",top:"5.6vw",left:"28.5vw"},children:Object(p.jsx)("b",{children:"Video search"})}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{onChange:function(t){e.setState({value:t.target.value})},value:this.state.value,className:"inputfield",type:"text"})]})})}}]),n}(i.Component),h=n(20),O=n.n(h).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:5,key:"AIzaSyD64SwtNCbs_SGLEF64mx4RNw81ef4pQpE",type:"video"}}),m=(n(8),function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{onClick:function(){return e.props.onVideoSelect(e.props.video)},className:"item",children:[Object(p.jsx)("img",{alt:this.props.video.snippet.title,src:this.props.video.snippet.thumbnails.medium.url}),Object(p.jsx)("span",{style:{verticalAlign:"top",fontWeight:"bold",paddingLeft:"1vw"},children:this.props.video.snippet.title})]}),Object(p.jsx)("br",{})]})}}]),n}(i.Component)),f=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props.videos.map((function(t){return Object(p.jsx)(m,{onVideoSelect:e.props.onVideoSelect,video:t},t.id.videoId)}));return Object(p.jsx)("div",{className:"list",children:t})}}]),n}(i.Component),x=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){if(!this.props.svideo)return Object(p.jsxs)("div",{children:[" ",Object(p.jsx)("span",{style:{marginLeft:"23.7VW"},children:Object(p.jsx)("b",{})}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]});var e="https://www.youtube.com/embed/".concat(this.props.svideo.id.videoId);return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"player",children:Object(p.jsx)("iframe",{title:"video player",className:"i",src:e})}),"  ",Object(p.jsx)("br",{}),Object(p.jsxs)("div",{className:"videodetail",children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("b",{children:this.props.svideo.snippet.title}),Object(p.jsx)("br",{})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("span",{children:[this.props.svideo.snippet.description,Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]})]}),Object(p.jsx)("br",{})]})}}]),n}(i.Component),y=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(d.a)(this,n);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={videos:[],SelectedVideo:null},e.onTermsubmit=function(){var t=Object(j.a)(a.a.mark((function t(n){var i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.get("/search",{params:{q:n}});case 2:i=t.sent,e.setState({videos:i.data.items,SelectedVideo:i.data.items[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({SelectedVideo:t})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.onTermsubmit("Cars")}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(v,{onFormSubmit:this.onTermsubmit}),Object(p.jsxs)("div",{className:"griddisplay",children:[Object(p.jsx)(x,{svideo:this.state.SelectedVideo}),Object(p.jsx)(f,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})]})]})}}]),n}(i.Component),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),s(e),c(e),r(e)}))};r.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root")),S()},8:function(e,t,n){}},[[48,1,2]]]);
//# sourceMappingURL=main.16f59fec.chunk.js.map