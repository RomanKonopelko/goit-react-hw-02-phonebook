(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={form__container:"form_form__container__24YaH",form:"form_form__3-bcY",input:"form_input__uJgGU",label:"form_label__788fe",button:"form_button__1dyVB"}},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n.n(a),c=n(8),o=n.n(c),i=(n(16),n(10)),s=n(3),u=n(4),l=n(6),m=n(5),b=n(19),h=n(9),d=n(1),f=n.n(d),j=n(0),p=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.phonenumber=function(t){return!!t.match(/^\d{10}$/)},t.nameInputId=Object(b.a)(),t.numberInputId=Object(b.a)(),t.reset=function(){t.setState({name:"",number:""})},t.handleChange=function(e){var n=e.currentTarget,a=n.value,r=n.name;if("number"!==r||!isNaN(a)){if("name"===r){if(!a.match(/^[a-zA-Z ]+(?:\s[a-zA-Z]+)?$/)&&a.length>0)return}t.setState(Object(h.a)({},r,a))}},t.handleSubmit=function(e){return e.preventDefault(),0===t.state.name.length?alert("Write your name"):t.phonenumber(t.state.number)?(t.props.onSubmit(t.state),void t.reset()):alert("An invalid number")},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:f.a.form,onSubmit:this.handleSubmit,children:[Object(j.jsx)("label",{htmlFor:this.nameInputId,className:f.a.label,children:"Name"}),Object(j.jsx)("input",{type:"text",id:this.nameInputId,className:f.a.input,name:"name",value:this.state.name,onChange:this.handleChange,placeholder:"your name"}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{htmlFor:this.numberInputId,className:f.a.label,children:"Number"}),Object(j.jsx)("input",{type:"text",id:this.numberInputId,className:f.a.input,name:"number",value:this.state.number,onChange:this.handleChange,placeholder:"1234567890"}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{type:"submit",className:f.a.button,children:"Add contact"})]})}}]),n}(a.Component);function O(t){var e=t.onFilter,n=t.filteredContacts,a=t.onDeleteContact,r=n;return Object(j.jsxs)("ul",{className:f.a.form,children:[Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)("label",{htmlFor:"filter",children:"Search contact by number or name"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",name:"filter",id:"filter",onChange:function(t){e(t.currentTarget.value)}}),r.map((function(t){return Object(j.jsxs)("li",{className:"contact",children:[t.name," ",t.number,Object(j.jsx)("button",{type:"button",onClick:function(){return a(t.id)},className:f.a.button,children:"delete"})]},t.id)}))]})}function x(t){var e=t.className,n=t.title,a=t.children;return Object(j.jsxs)("div",{className:e,children:[Object(j.jsx)("h2",{children:n}),a]})}var v=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Roman Konopelko",number:"111-222-333"},{id:"id-2",name:"Millhouse Manastorm",number:"111-222-333"},{id:"id-3",name:"Poke Poke",number:"111-222-333"}],filter:""},t.randomID=Object(b.a)(),t.onDeleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return e!==t.id}))}}))},t.getFilteredContats=function(){var e=t.state.filter.toLowerCase();return t.state.contacts.filter((function(n){return n.name.toLowerCase().includes(e)||n.number.includes(t.state.filter)}))},t.onFilter=function(e){return console.log(e),t.setState({filter:e})},t.onSubmit=function(e){var n={id:Object(b.a)(),name:e.name,number:e.number};0===t.state.contacts.filter((function(t){return t.name===n.name||t.number===n.number})).length?t.setState((function(t){return{contacts:[n].concat(Object(i.a)(t.contacts))}})):alert("this contact or number already exist")},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.getFilteredContats()||this.getFilteredNumbers();return Object(j.jsxs)(x,{className:f.a.form__container,title:"Phonebook",children:[Object(j.jsx)(p,{onSubmit:this.onSubmit}),Object(j.jsx)(O,{onFilter:this.onFilter,filteredContacts:t,onDeleteContact:this.onDeleteContact})]})}}]),n}(a.Component);o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.3a8b285d.chunk.js.map