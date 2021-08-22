(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1B1_q",summary:"CartItem_summary__3FMDj",price:"CartItem_price__2Nl0j",amount:"CartItem_amount__jUKEC",actions:"CartItem_actions__UwVPJ"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2pjQw",total:"Cart_total__3pLin",actions:"Cart_actions__1GOmr","button--alt":"Cart_button--alt__1Z2QQ",button:"Cart_button__fw1-t"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__3CMOT",icon:"HeaderCartButton_icon__9KWtg",badge:"HeaderCartButton_badge__1Z3gL",bump:"HeaderCartButton_bump__3atD4"}},,function(e,t,n){e.exports={meal:"MealItem_meal__2uJ70",description:"MealItem_description__2YINS",price:"MealItem_price__3sNYl"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1mfF6",modal:"Modal_modal__4DXUe","slide-down":"Modal_slide-down__W3MdX"}},,function(e,t,n){e.exports={header:"Header_header__zSTUo","main-image":"Header_main-image__2Q3So"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__22zUX"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__2ZLCP","meals-appear":"AvailableMeals_meals-appear__ONwLi"}},function(e,t,n){e.exports={card:"Card_card__1m44e"}},function(e,t,n){e.exports={input:"Input_input__2swPp"}},function(e,t,n){e.exports={form:"MealItemForm_form__32qVd"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=(n(24),n(2)),r=n(1),s=n.n(r),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},m=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),d=n(8),u=n.n(d),j=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useContext)(m).items,d=s.reduce((function(e,t){return e+t.amount}),0),j="".concat(u.a.button," ").concat(a?u.a.bump:"");return Object(r.useEffect)((function(){if(0!==s.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(o.jsxs)("button",{className:j,onClick:e.onClick,children:[Object(o.jsx)("span",{className:u.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:u.a.badge,children:d})]})},b=n.p+"static/media/meals.2971f633.jpeg",O=n(13),x=n.n(O),p=function(e){return Object(o.jsxs)(r.Fragment,{children:[Object(o.jsxs)("header",{className:x.a.header,children:[Object(o.jsx)("h1",{children:"ReactMeals"}),Object(o.jsx)(j,{onClick:e.onShowCart})]}),Object(o.jsx)("div",{className:x.a["main-image"],children:Object(o.jsx)("img",{src:b,alt:"A table full of delicious food!"})})]})},h=n(15),_=n.n(h),f=function(){return Object(o.jsxs)("section",{className:_.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(16),C=n.n(v),g=n(17),N=n.n(g),A=function(e){return Object(o.jsx)("div",{className:N.a.card,children:e.children})},y=n(3),I=n(18),w=n.n(I),M=s.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:w.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(y.a)({ref:t},e.input))]})})),k=n(19),F=n.n(k),H=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useRef)();return Object(o.jsxs)("form",{className:F.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(o.jsx)(M,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(o.jsx)("button",{children:"+ Add"}),!a&&Object(o.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},S=n(10),B=n.n(S),D=function(e){var t=Object(r.useContext)(m),n="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:B.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("div",{className:B.a.description,children:e.description}),Object(o.jsx)("div",{className:B.a.price,children:n})]}),Object(o.jsx)("div",{children:Object(o.jsx)(H,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},E=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],R=function(){var e=E.map((function(e){return Object(o.jsx)(D,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(o.jsx)("section",{className:C.a.meals,children:Object(o.jsx)(A,{children:Object(o.jsx)("ul",{children:e})})})},T=function(){return Object(o.jsxs)(r.Fragment,{children:[Object(o.jsx)(f,{}),Object(o.jsx)(R,{})]})},P=n(11),z=n.n(P),U=function(e){return Object(o.jsx)("div",{className:z.a.backdrop,onClick:e.onClose})},V=function(e){return Object(o.jsx)("div",{className:z.a.modal,children:Object(o.jsx)("div",{className:z.a.content,children:e.children})})},J=document.getElementById("overlays"),L=function(e){return Object(o.jsxs)(r.Fragment,{children:[c.a.createPortal(Object(o.jsx)(U,{onClose:e.onClose}),J),c.a.createPortal(Object(o.jsx)(V,{children:e.children}),J)]})},Q=n(4),Y=n.n(Q),q=function(e){var t="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:Y.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:Y.a.summary,children:[Object(o.jsx)("span",{className:Y.a.price,children:t}),Object(o.jsxs)("span",{className:Y.a.amount,children:["x ",e.amount]})]})]}),Object(o.jsxs)("div",{className:Y.a.actions,children:[Object(o.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(o.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},X=n(5),Z=n.n(X),$=function(e){var t=Object(r.useContext)(m),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.removeItem(e)},i=function(e){t.addItem(e)},s=Object(o.jsx)("ul",{className:Z.a["cart-items"],children:t.items.map((function(e){return Object(o.jsx)(q,{name:e.name,amount:e.amount,price:e.price,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e)},e.id)}))});return Object(o.jsxs)(L,{onClose:e.onClose,children:[s,Object(o.jsxs)("div",{className:Z.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:n})]}),Object(o.jsxs)("div",{className:Z.a.actions,children:[Object(o.jsx)("button",{className:Z.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(o.jsx)("button",{className:Z.a.button,children:"Order"})]})]})},G=n(14),K={items:[],totalAmount:0},W=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(y.a)(Object(y.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(G.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],m=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(y.a)(Object(y.a)({},l),{},{amount:l.amount-1});(s=Object(G.a)(e.items))[o]=d}return{items:s,totalAmount:m}}return K},ee=function(e){var t=Object(r.useReducer)(W,K),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(o.jsx)(m.Provider,{value:s,children:e.children})};var te=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)(ee,{children:[n&&Object(o.jsx)($,{onClose:function(){a(!1)}}),Object(o.jsx)(p,{onShowCart:function(){a(!0)}}),Object(o.jsx)("main",{children:Object(o.jsx)(T,{})})]})};c.a.render(Object(o.jsx)(te,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.4bd14dcf.chunk.js.map