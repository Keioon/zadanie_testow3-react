(this["webpackJsonpzadanie_testow3-react"]=this["webpackJsonpzadanie_testow3-react"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var r=n(1),u=n.n(r),o=n(3),c=n.n(o),a=(n(12),n(4)),s=n(5),i=n(7),h=n(6),b=(n(13),n(0)),d=function(t){return Object(b.jsxs)(u.a.Fragment,{children:[Object(b.jsx)("h2",{children:t.quote}),Object(b.jsx)("h3",{children:t.author})]})},j=(n(15),function(t){Object(i.a)(n,t);var e=Object(h.a)(n);function n(t){var r;return Object(a.a)(this,n),(r=e.call(this,t)).drawBtnHandleClick=function(){r.setState({previousQuote:r.state.currentQuote,previousQuoteAutor:r.state.currentQuoteAutor}),fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json").then((function(t){return t.json()})).then((function(t){var e=Math.floor(Math.random()*(t.length-0))+0;r.setState({currentQuote:t[e].quote,currentQuoteAutor:t[e].author})}))},r.prevBtnHandleClick=function(){""!==r.state.previousQuote&&r.setState({currentQuote:r.state.previousQuote,currentQuoteAutor:r.state.previousQuoteAutor})},r.state={currentQuote:"",currentQuoteAutor:"",previousQuote:"",previousQuoteAutor:""},r}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.currentQuote,n=t.currentQuoteAutor;return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("button",{onClick:this.drawBtnHandleClick,children:"Draw a quote"}),Object(b.jsx)("button",{onClick:this.prevBtnHandleClick,children:"Previous quote"}),Object(b.jsx)(d,{quote:e,author:n})]})}}]),n}(u.a.Component));c.a.render(Object(b.jsx)(u.a.StrictMode,{children:Object(b.jsx)(j,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8468b8c4.chunk.js.map