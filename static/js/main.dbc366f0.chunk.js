(this.webpackJsonptodoreact=this.webpackJsonptodoreact||[]).push([[0],{199:function(e,a,t){e.exports=t(352)},352:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(46),c=t.n(r),o=t(48),i=t(40),u=(t(204),t(27)),s=t(28),m=t(30),d=t(29),p=t(360),h=t(369),E=t(363),b=t(365),f=t(361),v=t(367),g=(n.Component,t(362),t(370)),k=t(366),y=t(364),C=t(38),S=t.n(C),j=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).handleChange=function(e,a){var t=a.value;return n.setState({value:t})},n.state={data:[],loader:[1,2,3,4,5,6,7]},n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;S()({method:"GET",url:"https://coronavirus-tracker-india-covid-19.p.rapidapi.com/api/getStatewiseSorted",headers:{"content-type":"application/octet-stream","x-rapidapi-host":"coronavirus-tracker-india-covid-19.p.rapidapi.com","x-rapidapi-key":"713cd8f77bmsh9a5002439da72bbp1d520fjsnd2b28b8cfaab",useQueryString:!0}}).then((function(a){e.setState({data:a.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement(h.a,{as:"h2",icon:"plug",content:"COVID 19"}),l.a.createElement(b.a.Group,null,l.a.createElement(b.a,{fluid:!0},l.a.createElement(b.a.Content,null,l.a.createElement(b.a.Header,null,"Covid-19 Stats by States"),l.a.createElement(b.a.Description,null,0==this.state.data.length?this.state.loader.map((function(e){return l.a.createElement(b.a,{fluid:!0},l.a.createElement(b.a.Description,null,l.a.createElement(g.a,{raised:!0},l.a.createElement(k.a,null,l.a.createElement(k.a.Header,{image:!0},l.a.createElement(k.a.Line,null),l.a.createElement(k.a.Line,null))))))})):"",this.state.data.length>0?l.a.createElement(y.a,null,l.a.createElement(y.a.Header,null,l.a.createElement(y.a.Row,null,l.a.createElement(y.a.HeaderCell,null,"State"),l.a.createElement(y.a.HeaderCell,null,l.a.createElement(h.a,{as:"h4",color:"orange"},"Confirmed")),l.a.createElement(y.a.HeaderCell,null,l.a.createElement(h.a,{as:"h4",color:"green"},"Recovered")),l.a.createElement(y.a.HeaderCell,null,l.a.createElement(h.a,{as:"h4",color:"red"},"Deaths")))),l.a.createElement(y.a.Body,null,this.state.data.map((function(e){return l.a.createElement(y.a.Row,{key:e.name},l.a.createElement(y.a.Cell,null,e.name),l.a.createElement(y.a.Cell,null,e.cases),l.a.createElement(y.a.Cell,null,e.recovered),l.a.createElement(y.a.Cell,null,e.deaths))})))):"")))))}}]),t}(n.Component),w=t(89),O=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).state={data:[],loader:[1,2,3,4,5,6,7],ribbon:["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"]},n.handleChange=function(e,a){var t=a.value;return n.setState({value:t})},n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;S()({method:"GET",url:"https://type.fit/api/quotes"}).then((function(a){e.setState({data:a.data}),console.log(a)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return l.a.createElement(p.a,null,l.a.createElement(h.a,{as:"h2",icon:"plug",content:"Popular Quotes"}),l.a.createElement(b.a.Group,null,0==this.state.data.length?this.state.loader.map((function(e){return l.a.createElement(b.a,{fluid:!0},l.a.createElement(b.a.Description,null,l.a.createElement(g.a,{raised:!0},l.a.createElement(k.a,null,l.a.createElement(k.a.Header,{image:!0},l.a.createElement(k.a.Line,null),l.a.createElement(k.a.Line,null))))))})):"",this.state.data.map((function(a){return l.a.createElement(b.a,{fluid:!0},l.a.createElement(g.a,null,l.a.createElement(w.a,{as:"a",color:e.state.ribbon[Math.floor(Math.random()*e.state.ribbon.length)],ribbon:"left"},a.author?a.author:"Unknown"),l.a.createElement(b.a.Content,null,l.a.createElement(b.a.Header,{style:{padding:"15px",fontSize:"20px"}},a.text))))}))))}}]),t}(n.Component),D=t(64),x=t(368),H=t(187),I=t(60),G=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).state={data:[],loader:[1,2,3,4,5,6,7],ribbon:["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],activeItem:"Ordinary Drink",categories:[]},n.handleChange=function(e,a){var t=a.value;return n.setState({value:t})},n.handleItemClick=function(e,a){var t=a.name;n.setState({activeItem:t}),n.loadData(t)},n.loadData=function(e){var a=Object(D.a)(n);S()({method:"GET",url:"https://the-cocktail-db.p.rapidapi.com/filter.php",headers:{"content-type":"application/octet-stream","x-rapidapi-host":"the-cocktail-db.p.rapidapi.com","x-rapidapi-key":"713cd8f77bmsh9a5002439da72bbp1d520fjsnd2b28b8cfaab",useQueryString:!0},params:{c:e}}).then((function(e){a.setState({data:e.data.drinks}),console.log(e)})).catch((function(e){console.log(e)}))},n.category=function(){var e=Object(D.a)(n);S()({method:"GET",url:"https://the-cocktail-db.p.rapidapi.com/list.php",headers:{"content-type":"application/octet-stream","x-rapidapi-host":"the-cocktail-db.p.rapidapi.com","x-rapidapi-key":"713cd8f77bmsh9a5002439da72bbp1d520fjsnd2b28b8cfaab",useQueryString:!0},params:{c:"list"}}).then((function(a){e.setState({categories:a.data.drinks}),console.log(a)})).catch((function(e){console.log(e)}))},n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.category(),this.loadData(this.state.activeItem)}},{key:"render",value:function(){var e=this,a=this.state.activeItem;return l.a.createElement(p.a,null,l.a.createElement(h.a,{as:"h2",icon:"plug",content:"Cocktails"}),l.a.createElement(x.a,{text:!0},this.state.categories.map((function(t){return l.a.createElement(x.a.Item,{name:t.strCategory,active:a===t.strCategory,onClick:e.handleItemClick},t.strCategory)}))),l.a.createElement(b.a.Group,null,this.state.data.map((function(e){return l.a.createElement(b.a,null,l.a.createElement(H.a,{src:e.strDrinkThumb,wrapped:!0,ui:!1}),l.a.createElement(b.a.Content,null,l.a.createElement(b.a.Header,null,e.strDrink)),l.a.createElement(b.a.Content,{extra:!0},l.a.createElement("a",null,l.a.createElement(I.a,{name:"user"}),"22 Friends")))})),0==this.state.data.length?this.state.loader.map((function(e){return l.a.createElement(b.a,{fluid:!0},l.a.createElement(b.a.Description,null,l.a.createElement(g.a,{raised:!0},l.a.createElement(k.a,null,l.a.createElement(k.a.Header,{image:!0},l.a.createElement(k.a.Line,null),l.a.createElement(k.a.Line,null))))))})):""))}}]),t}(n.Component);n.Component,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/quotes"},"Quotes")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/cocktail"},"Cocktail")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/covid"},"Covid-19"))),l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/quotes"},l.a.createElement(O,null)),l.a.createElement(i.a,{path:"/cocktail"},l.a.createElement(G,null)),l.a.createElement(i.a,{path:"/covid"},l.a.createElement(j,null)))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[199,1,2]]]);
//# sourceMappingURL=main.dbc366f0.chunk.js.map