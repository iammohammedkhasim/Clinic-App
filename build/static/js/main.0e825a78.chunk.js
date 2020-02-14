(this["webpackJsonpclinic-app"]=this["webpackJsonpclinic-app"]||[]).push([[0],{116:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(25),o=a.n(r),c=a(48),s=a(27),i=function(){return n.a.createElement(c.a,{fluid:!0},n.a.createElement(s.a,null,n.a.createElement("h1",null,"Welcome!"),n.a.createElement("p",null,"This is a sample data. Display any data here.")))},m=function(){return n.a.createElement("h1",null,"Haematology")},h=function(){return n.a.createElement("h1",null,"Biochemistry")},u=function(){return n.a.createElement("h1",null,"Microbiology")},d=a(30),p=a(79),E=a(31),y=a(32),g=a(37),b=a(33),S=a(38),f=a(6),T=a(34),v=a(15),C=a(66),B=a(60),k=a(63),w=a.n(k),A=a(80),O=a(41),j=a(40),I=a(47),H=function(e){function t(){return Object(E.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(y.a)(t,[{key:"renderAllCheckBox",value:function(){return this.props.selectedTests.length===this.props.totalTests.length?n.a.createElement(I.a,{onClick:this.props.deSelectAll}):n.a.createElement(I.b,{onClick:this.props.selectAll})}},{key:"renderCheckBox",value:function(e){var t;return this.props.selectedTests.forEach((function(a){a.name===e&&(t=!0)})),t?n.a.createElement(I.a,{onClick:this.props.deSelect}):n.a.createElement(I.b,{onClick:this.props.select})}},{key:"render",value:function(){var e=this;return n.a.createElement(j.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{department:this.props.department},this.renderAllCheckBox()),n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Price"))),n.a.createElement("tbody",null,this.props.totalTests.map((function(t){return n.a.createElement("tr",{key:t.name},n.a.createElement("td",{department:e.props.department},e.renderCheckBox(t.name)),n.a.createElement("td",null,t.name),n.a.createElement("td",null,t.price))}))))}}]),t}(l.Component),D=function(e){function t(){return Object(E.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return n.a.createElement(O.a,{show:this.props.value,onHide:this.props.onClose,backdrop:"static"},n.a.createElement(O.a.Header,{closeButton:!0},n.a.createElement(O.a.Title,null,"Select tests")),n.a.createElement(O.a.Body,null,n.a.createElement(H,{selectedTests:this.props.selectedTests,totalTests:this.props.totalTests,selectAll:this.props.selectAll,deSelectAll:this.props.deSelectAll,select:this.props.select,deSelect:this.props.deSelect,department:this.props.department})),n.a.createElement(O.a.Footer,null,n.a.createElement(T.a,{variant:"secondary",onClick:this.props.onClose,department:this.props.department},"close")))}}]),t}(l.Component),M=a(82),G=a(11),R=a(12),N=[{name:"test1",price:100},{name:"test2",price:100},{name:"test3",price:100},{name:"test4",price:100}],x=[{name:"test5",price:100},{name:"test6",price:100},{name:"test7",price:100},{name:"test8",price:100}],L=[{name:"test9",price:100},{name:"test10",price:100},{name:"test11",price:100},{name:"test12",price:100}],P=function(e){function t(){var e,a;Object(E.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(n)))).state={name:"",phoneNumber:"",haematologySelectedTests:[],bioChemistrySelectedTests:[],microBiologySelectedTests:[],bioChemistryTestsShow:!1,haematologyTestsShow:!1,microBiologyTestsShow:!1},a.handleSubmit=function(e){e.preventDefault(),w.a.post("/create-pdf",a.state).then((function(){return w.a.get("fetch-pdf",{responseType:"blob"})})).then((function(e){var t=new Blob([e.data],{type:"application/pdf"});Object(A.saveAs)(t,a.state.name+".pdf")}))},a.handleChange=function(e){var t=e.target,l=t.value,n=t.id;a.setState(Object(p.a)({},n,l))},a.handleAddTest=function(e,t){t.preventDefault(),"Haematology"===e?a.setState({haematologyTestsShow:!0}):"Biochemistry"===e?a.setState({bioChemistryTestsShow:!0}):"Microbiology"===e&&a.setState({microBiologyTestsShow:!0})},a.handleClose=function(e){e.preventDefault();var t=e.currentTarget.getAttribute("department");"Haematology"===t?a.setState({haematologyTestsShow:!1}):"Biochemistry"===t?a.setState({bioChemistryTestsShow:!1}):"Microbiology"===t&&a.setState({microBiologyTestsShow:!1})},a.handleSelectAll=function(e){e.preventDefault();var t=e.currentTarget.parentElement.getAttribute("department");"Haematology"===t?a.setState({haematologySelectedTests:N}):"Biochemistry"===t?a.setState({bioChemistrySelectedTests:L}):"Microbiology"===t&&a.setState({microBiologySelectedTests:x})},a.handleDeSelectAll=function(e){e.preventDefault();var t=e.currentTarget.parentElement.getAttribute("department");"Haematology"===t?a.setState({haematologySelectedTests:[]}):"Biochemistry"===t?a.setState({bioChemistrySelectedTests:[]}):"Microbiology"===t&&a.setState({microBiologySelectedTests:[]})},a.handleSelect=function(e){e.preventDefault();var t,l=e.currentTarget.parentElement.getAttribute("department"),n=e.currentTarget.parentElement.parentElement.children[1].innerText;"Haematology"===l?(t=Object(d.a)(a.state.haematologySelectedTests),N.forEach((function(e){e.name===n&&t.push(e)})),a.setState({haematologySelectedTests:t})):"Biochemistry"===l?(t=Object(d.a)(a.state.bioChemistrySelectedTests),L.forEach((function(e){e.name===n&&t.push(e)})),a.setState({bioChemistrySelectedTests:t})):"Microbiology"===l&&(t=Object(d.a)(a.state.microBiologySelectedTests),x.forEach((function(e){e.name===n&&t.push(e)})),a.setState({microBiologySelectedTests:t}))},a.handleDeSelect=function(e){e.preventDefault();var t,l=e.currentTarget.parentElement.getAttribute("department"),n=e.currentTarget.parentElement.parentElement.children[1].innerText;"Haematology"===l?(t=(t=Object(d.a)(a.state.haematologySelectedTests)).filter((function(e){return!(e.name===n)})),a.setState({haematologySelectedTests:t})):"Biochemistry"===l?(t=(t=Object(d.a)(a.state.bioChemistrySelectedTests)).filter((function(e){return!(e.name===n)})),a.setState({bioChemistrySelectedTests:t})):"Microbiology"===l&&(t=(t=Object(d.a)(a.state.microBiologySelectedTests)).filter((function(e){return!(e.name===n)})),a.setState({microBiologySelectedTests:t}))},a}return Object(S.a)(t,e),Object(y.a)(t,[{key:"renderTotalCost",value:function(){var e=0;return this.state.haematologySelectedTests.forEach((function(t){e+=t.price})),this.state.bioChemistrySelectedTests.forEach((function(t){e+=t.price})),this.state.microBiologySelectedTests.forEach((function(t){e+=t.price})),n.a.createElement(f.a.Label,null,e)}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{fluid:!0},n.a.createElement(s.a,null,n.a.createElement(C.a,{defaultActiveKey:"0"},n.a.createElement(B.a,null,n.a.createElement(B.a.Header,null,n.a.createElement(C.a.Toggle,{as:T.a,variant:"link",eventKey:"0"},"Report")),n.a.createElement(B.a.Body,null,n.a.createElement(f.a,null,n.a.createElement(f.a.Row,null,n.a.createElement(f.a.Group,{as:v.a,controlId:"name"},n.a.createElement(f.a.Label,null,"Name"),n.a.createElement(f.a.Control,{placeholder:"Enter name",value:this.state.name,onChange:this.handleChange})),n.a.createElement(f.a.Group,{as:v.a,controlId:"phoneNumber"},n.a.createElement(f.a.Label,null,"Mobile:"),n.a.createElement(f.a.Control,{placeholder:"Phone number",value:this.state.phone_number,onChange:this.handleChange}))),n.a.createElement(s.a,null,n.a.createElement(f.a.Row,null,n.a.createElement(f.a.Group,{as:v.a,controlId:"testSelection"},n.a.createElement(M.a,{id:"dropdown-test-button",title:"Add tests"},n.a.createElement(G.a.Item,{onSelect:this.handleAddTest,value:"Haematology",eventKey:"Haematology"},"Haematology"),n.a.createElement(G.a.Item,{onSelect:this.handleAddTest,value:"Microbiology",eventKey:"Microbiology"},"Microbiology"),n.a.createElement(G.a.Item,{onSelect:this.handleAddTest,value:"Biochemistry",eventKey:"Biochemistry"},"Biochemistry")))),n.a.createElement(f.a.Row,null,n.a.createElement(f.a.Group,{as:v.a,controlId:"haematologytestslabel"},n.a.createElement(R.a,null,n.a.createElement(R.a.Item,{key:"HaematologyLabel",variant:"dark"},"Haematology")))),n.a.createElement(f.a.Row,null,n.a.createElement(f.a.Group,{as:v.a,controlId:"haematologytests"},n.a.createElement(R.a,null,n.a.createElement(R.a.Item,null,n.a.createElement(j.a,null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Price"))),n.a.createElement("tbody",null,this.state.haematologySelectedTests.map((function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("td",null,e.name),n.a.createElement("td",null,e.price))})))))))),n.a.createElement(f.a.Row,null,n.a.createElement(f.a.Group,{as:v.a,controlId:"microbiologytestslabel"},n.a.createElement(R.a,null,n.a.createElement(R.a.Item,{key:"MicrobiologyLabel",variant:"dark"},"Microbiology")))),n.a.createElement(f.a.Row,null,n.a.createElement(f.a.Group,{as:v.a,controlId:"microbiologytests"},n.a.createElement(R.a,null,n.a.createElement(R.a.Item,null,n.a.createElement(j.a,null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Price"))),n.a.createElement("tbody",null,this.state.microBiologySelectedTests.map((function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("td",null,e.name),n.a.createElement("td",null,e.price))})))))))),n.a.createElement(f.a.Row,null,n.a.createElement(f.a.Group,{as:v.a,controlId:"bioChemistrytestslabel"},n.a.createElement(R.a,null,n.a.createElement(R.a.Item,{key:"BiochemistryLabel",variant:"dark"},"Biochemistry")))),n.a.createElement(f.a.Row,null,n.a.createElement(f.a.Group,{as:v.a,controlId:"bioChemistrytests"},n.a.createElement(R.a,null,n.a.createElement(R.a.Item,null,n.a.createElement(j.a,null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Price"))),n.a.createElement("tbody",null,this.state.bioChemistrySelectedTests.map((function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("td",null,e.name),n.a.createElement("td",null,e.price))}))))))))),n.a.createElement(s.a,null,n.a.createElement(f.a.Row,null,n.a.createElement(f.a.Group,{as:v.a,controlId:"total"},n.a.createElement(R.a,null,n.a.createElement(R.a.Item,{variant:"success"},n.a.createElement(f.a.Label,null,"Total:"),n.a.createElement(f.a.Label,null,this.renderTotalCost())))))))))))),n.a.createElement(D,{key:"Haematology",value:this.state.haematologyTestsShow,onClose:this.handleClose,totalTests:N,selectedTests:this.state.haematologySelectedTests,selectAll:this.handleSelectAll,deSelectAll:this.handleDeSelectAll,select:this.handleSelect,deSelect:this.handleDeSelect,department:"Haematology"}),n.a.createElement(D,{key:"Microbiology",value:this.state.microBiologyTestsShow,onClose:this.handleClose,selectedTests:this.state.microBiologySelectedTests,totalTests:x,selectAll:this.handleSelectAll,deSelectAll:this.handleDeSelectAll,select:this.handleSelect,deSelect:this.handleDeSelect,department:"Microbiology"}),n.a.createElement(D,{key:"Biochemistry",value:this.state.bioChemistryTestsShow,onClose:this.handleClose,selectedTests:this.state.bioChemistrySelectedTests,totalTests:L,selectAll:this.handleSelectAll,deSelectAll:this.handleDeSelectAll,select:this.handleSelect,deSelect:this.handleDeSelect,department:"Biochemistry"}))}}]),t}(l.Component),K=function(){return n.a.createElement("h1",null,"Get")},F=function(){return n.a.createElement("h1",null,"Pricing")},W=function(e){return n.a.createElement(s.a,null,e.children)},J=a(124),$=a(122),_=a(123),q=function(){return n.a.createElement(J.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},n.a.createElement(J.a.Brand,{href:"/"},n.a.createElement("img",{src:"images/clinic.png",width:"30",height:"30",className:"d-inline-block align-top",alt:"Clinic logo"}),"Clinic"),n.a.createElement(J.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),n.a.createElement(J.a.Collapse,{id:"responsive-navbar-nav"},n.a.createElement($.a,{className:"mr-auto"},n.a.createElement(_.a,{title:"Reports",id:"collasible-reports-nav-dropdown"},n.a.createElement(_.a.Item,{href:"createreport"},"Create report"),n.a.createElement(_.a.Item,{href:"getreport"},"Get report")))))},z=function(){return n.a.createElement("h1",null,"Nothing Here!!")},Q=a(86),U=a(28);a(115),a(116);var V=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(q,null),n.a.createElement(W,null,n.a.createElement(Q.a,null,n.a.createElement(U.c,null,n.a.createElement(U.a,{exact:!0,path:"/",component:i}),n.a.createElement(U.a,{path:"/haematology",component:m}),n.a.createElement(U.a,{path:"/biochemistry",component:h}),n.a.createElement(U.a,{path:"/microbiology",component:u}),n.a.createElement(U.a,{path:"/createreport",component:P}),n.a.createElement(U.a,{path:"/getreport",component:K}),n.a.createElement(U.a,{path:"/pricing",component:F}),n.a.createElement(U.a,{component:z})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},89:function(e,t,a){e.exports=a(119)}},[[89,1,2]]]);
//# sourceMappingURL=main.0e825a78.chunk.js.map