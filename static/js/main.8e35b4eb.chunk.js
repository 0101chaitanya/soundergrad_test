(this.webpackJsonpsoundergrad_test=this.webpackJsonpsoundergrad_test||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(2),a=n(8),r=n.n(a),s=(n(13),n(1)),u=n(3),i=n(4),o=n(6),l=n(5),b=n(0),j=function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this.props,e=t.value,n=t.increment,c=t.decrement,a=t.id;return Object(b.jsxs)("div",{className:"counter container",children:[Object(b.jsx)("b",{className:"lead m-2 p-2",children:e}),Object(b.jsxs)("div",{className:"d-flex",children:[Object(b.jsx)("button",{onClick:function(){return c(a)},className:"btn btn-danger m-2 btn-sm",children:"-"}),Object(b.jsx)("div",{className:"counter-controls",children:Object(b.jsx)("button",{onClick:function(){return n(a)},className:"btn btn-success m-2 btn-sm",children:"+"})})]})]})}}]),n}(c.Component),d=function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this.props,e=(t.id,t.value),n=t.handleClick;return Object(b.jsxs)("div",{className:"counter container",children:[Object(b.jsx)("b",{className:"lead m-2 p-2",children:e}),Object(b.jsxs)("div",{className:"d-flex",children:[Object(b.jsx)("button",{onClick:function(){return n(-1)},className:"btn btn-danger m-2 btn-sm",children:"-"}),Object(b.jsx)("div",{className:"counter-controls",children:Object(b.jsx)("button",{onClick:function(){return n(1)},className:"btn btn-success m-2 btn-sm",children:"+"})})]})]})}}]),n}(c.Component),O=function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this.props,e=t.data,n=t.fourth;return Object(b.jsxs)("div",{className:"counter container",children:["Total :"," ",e.reduce((function(t,e){return t+e.value}),0)+n.value]})}}]),n}(c.Component),h=function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(t,c){var a;return Object(u.a)(this,n),(a=e.call(this,t,c)).onIncrement=function(t){a.setState((function(e){var n=e.data.map((function(e){return e.id===t?Object(s.a)(Object(s.a)({},e),{},{value:e.value+1}):e}));return Object(s.a)(Object(s.a)({},e),{},{data:n})}))},a.onDecrement=function(t){a.setState((function(e){var n=e.data.map((function(e){return e.id===t?Object(s.a)(Object(s.a)({},e),{},{value:e.value-1}):e}));return Object(s.a)(Object(s.a)({},e),{},{data:n})}))},a.handleClick=function(t){a.setState((function(e){return Object(s.a)(Object(s.a)({},e),{},{fourth:Object(s.a)(Object(s.a)({},e.fourth),{},{value:e.fourth.value+t})})}))},a.state={data:[{id:1,value:0},{id:2,value:0},{id:3,value:0}],fourth:{id:3,value:0}},a}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(b.jsxs)("div",{children:[this.state.data.map((function(e){return Object(b.jsx)(j,{increment:t.onIncrement,decrement:t.onDecrement,value:e.value,id:e.id},e.id)})),Object(b.jsx)(d,Object(s.a)(Object(s.a)({},this.state.fourth),{},{handleClick:this.handleClick})),Object(b.jsx)(O,Object(s.a)({},this.state))]})}}]),n}(c.Component);r.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.8e35b4eb.chunk.js.map