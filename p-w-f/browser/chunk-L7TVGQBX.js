import{b as Z,c as ee,d as te}from"./chunk-72X2RZM6.js";import{a as H,b as q}from"./chunk-HTBQQW6J.js";import{a as $,b as U}from"./chunk-WJWYX7P2.js";import"./chunk-IHFUZGS2.js";import"./chunk-FWIQBBLO.js";import{a as N,b as Q,c as W}from"./chunk-3YU5MEQP.js";import"./chunk-M2ZU7GXD.js";import{a as G}from"./chunk-RAT4GOAS.js";import"./chunk-Q6IZA5MS.js";import"./chunk-XSSXK7EZ.js";import{a as X,b as Y}from"./chunk-ILOFINLE.js";import{a as K}from"./chunk-TWKP3DDW.js";import"./chunk-JLWJS3NC.js";import{f as M,k as R,v as L,x as J}from"./chunk-VK5SKOH2.js";import{a as oe}from"./chunk-YKOQL55W.js";import{a as g}from"./chunk-MACVMKOA.js";import{d as D}from"./chunk-YCONRSTD.js";import{v as B}from"./chunk-AY5GOTEJ.js";import{Hb as l,Ib as u,Jb as f,Ob as F,Pb as z,Qa as s,Qb as k,T as I,Y as j,Z as d,ca as O,f as ne,fb as c,hb as S,la as x,m as E,ma as v,mb as C,nb as T,ob as A,pb as V,qb as e,rb as r,sb as m,wb as w,xb as y,yb as P}from"./chunk-IAIY7PNC.js";var _=ne(oe());var ie=(()=>{let n=class n{constructor(o){this._http=o,this.actualizacionSubject=new E,this.actualizacionObservable=this.actualizacionSubject.asObservable(),this.urlApi=g.api,this.urlRuta="api/v1/seguidores"}postSeguir(o){return this._http.post(`${this.urlApi}${this.urlRuta}`,o)}};n.\u0275fac=function(a){return new(a||n)(j(B))},n.\u0275prov=I({token:n,factory:n.\u0275fac,providedIn:"root"});let i=n;return i})();var ae=()=>({objectFit:"cover",objectPosition:"top"}),le=()=>({borderRadius:"50%"});function se(i,n){if(i&1){let p=w();e(0,"button",28),y("click",function(){x(p);let a=P();return v(a.seguir("seguir"))}),r()}}function me(i,n){if(i&1){let p=w();e(0,"button",29),y("click",function(){x(p);let a=P();return v(a.seguir("siguiendo"))}),r()}}function ce(i,n){i&1&&(m(0,"i",30),e(1,"span",31),l(2,"Publicaciones"),r())}function pe(i,n){i&1&&(e(0,"span"),l(1,"Publicaciones"),r())}function de(i,n){i&1&&l(0," Collecciones ")}function ue(i,n){if(i&1&&(e(0,"div",23)(1,"div",32)(2,"p",33),l(3),r(),e(4,"span"),l(5),r()()()),i&2){let p=n.$implicit;s(3),f("Titulo ",p.titulo,""),s(2),u(p.descripcion)}}function fe(i,n){i&1&&(e(0,"div",23)(1,"div",21),m(2,"i",22),e(3,"span"),l(4,"Aun no has colecciones"),r()()())}function ge(i,n){i&1&&(m(0,"i",34),e(1,"span",31),l(2,"Descripcion"),r())}var $e=(()=>{let n=class n{constructor(){this.total=0,this.estadoSeguir=!1,this._route=d(D),this._service=d(G),this._p=d(K),this._seguir=d(ie),this._toast=d(M),this.imagen=g.api,this.informacion={}}ngOnInit(){this._route.params.subscribe(o=>{let a=o.id,t=g.key,h=_.AES.decrypt(a,t).toString(_.enc.Utf8),b=parseInt(h,10);this.id=b}),this._p.getListaLibrosxUsuario(this.id).subscribe(o=>{this.listaColleciones=o,this.lista=o,this.listaCollecionLibros=this.lista?.filter(a=>a.genero?.categoria?.descripcion=="libro"),console.log(this.listaCollecionLibros)}),this._service.getInforListaxAutor(this.id).subscribe(o=>{this.total=o.totalPublicaciones}),this._service.getInformacionAutor(this.id).subscribe(o=>{this.informacion=o,console.log(o)}),this._service.getInformacionAutor(localStorage.getItem("id")).subscribe(o=>{let a=o;this.validarSeguimiento=a.seguimiento?.some(t=>{let h=t.seguimiento_usuario?.some(b=>b.id_tipo_seguimiento==2&&b.id_autor_seguido===this.id);this.estadoSeguir=h}),console.log(this.validarSeguimiento)})}seguir(o){if(o=="seguir"){let a={tipo:1,id_autor_v:this.id,id:localStorage.getItem("id")};this._seguir.postSeguir(a).subscribe(t=>{this._toast.add({severity:"success",key:"msjS",summary:"Seguimiento",detail:t.msj})}),this.estadoSeguir=!1}else if(o=="siguiendo"){let a={tipo:2,id_autor_v:this.id,id:localStorage.getItem("id")};this._seguir.postSeguir(a).subscribe(t=>{this._toast.add({severity:"success",key:"msjS",summary:"Seguimiento",detail:t.msj})}),this.estadoSeguir=!0}}};n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=O({type:n,selectors:[["app-perfil"]],standalone:!0,features:[F([M]),z],decls:61,vars:16,consts:[[1,"surface-section"],["imageClass","h-15rem w-full",1,"port",3,"src","imageStyle","preview"],[1,"flex","flex-column","justify-content-center","gap-3","md:flex-row","lg:justify-content-between","md:justify-content-center","sm:justify-contenet-center","px-4","py-4","md:px-6","lg:flex-row","lg:px-8","md:flex-column","sm:flex-columm","sm:px-4"],[1,"flex","flex-column","align-items-center","gap-4","lg:-mt-8","md:-mt-8","sm:-mt-8"],["imageClass"," h-10rem w-10rem foto-perfil t",1,"add",3,"src","preview","imageStyle"],[1,"flex","flex-column","gap-2","align-items-center","justify-content-center"],[1,"text-700","text-base"],[1,"text-1xl","p-2"],[1,"flex","align-items-center","gap-2"],["pButton","","pRipple","","label","Siguiendo","icon","pi pi-user-edit",1,"border-round"],[1,"flex","gap-2","flex-column","lg:w-10","md:w-full","sm:w-full","min-w-30rem"],[1,"flex","flex-column","align-items-center","md:align-items-center","sm:align-items-center","xl:align-items-start"],[1,"font-semibold","text-900","line-height-3","capitalize","text-2xl"],[1,"pi","pi-verified","text-primary-500"],[1,"flex","flex-row","gap-4","align-items-start"],[1,"flex","flex-column","align-items-center"],[1,"font-bold","text-gray-500"],[1,"text-1xl","font-semibold","text-gray-800"],["pTemplate","header"],[1,"flex","w-full","flex-column","justify-content-center","align-items-center"],[1,"col-11","surface-card","shadow-3"],[1,"flex","flex-column","align-items-center","m-4","p-6","justify-content-center"],[1,"pi","pi-folder-open","text-8xl"],[1,"surface-card","shadow-2","m-2"],[1,"flex","flex-column","py-5","gap-4"],["header","Descripcion",1,"shadow-2"],["header","Dcupacion",1,"shadow-2"],["key","msjS"],["pButton","","pRipple","","label","Siguiendo","icon","pi pi-user-edit",1,"border-round",3,"click"],["pButton","","pRipple","","label","Seguir","icon","pi pi-user-edit",1,"border-round",3,"click"],[1,"pi","pi-book"],[1,"px-1"],[1,"flex","flex-column","gap-2","p-4"],[1,"font-bold","capitalize"],[1,"pi","pi-id-card"]],template:function(a,t){a&1&&(e(0,"section",0),m(1,"p-image",1),e(2,"div",2)(3,"div",3),m(4,"p-image",4),e(5,"div",5)(6,"span",6),l(7),r(),e(8,"p-chip")(9,"div",7),l(10),r()()(),e(11,"div",8),c(12,se,1,0,"button",9)(13,me,1,0),r()(),e(14,"div",10)(15,"div",11)(16,"h3",12),l(17),m(18,"i",13),r(),e(19,"div",14)(20,"div",15)(21,"p",16),l(22,"Seguidores"),r(),e(23,"span",17),l(24,"0"),r()(),e(25,"div",15)(26,"p",16),l(27,"Seguidos"),r(),e(28,"span",17),l(29,"0"),r()(),e(30,"div",15)(31,"p",16),l(32,"Publicaciones"),r(),e(33,"span",17),l(34),r()()()(),e(35,"p-tabView")(36,"p-tabPanel"),c(37,ce,3,0,"ng-template",18),e(38,"div")(39,"p-tabView")(40,"p-tabPanel"),c(41,pe,2,0,"ng-template",18),e(42,"div",19)(43,"div",20)(44,"div",21),m(45,"i",22),e(46,"span"),l(47,"Aun no has publicaciones"),r()()()()(),e(48,"p-tabPanel"),c(49,de,1,0,"ng-template",18),A(50,ue,6,2,"div",23,T),c(52,fe,5,0,"div",23),r()()()(),e(53,"p-tabPanel"),c(54,ge,3,0,"ng-template",18),e(55,"div",24)(56,"p-card",25),l(57),r(),e(58,"p-card",26),l(59),r()()()()()()(),m(60,"p-toast",27)),a&2&&(s(),S("src",t.imagen+t.informacion.foto_portada)("imageStyle",k(14,ae))("preview",!0),s(3),S("src",t.imagen+t.informacion.foto_perfil)("preview",!0)("imageStyle",k(15,le)),s(3),u(t.informacion.nick_name),s(3),u(t.informacion.ocupacion),s(2),C(12,t.estadoSeguir?12:13),s(5),f("",(t.informacion.usuario==null||t.informacion.usuario.persona==null?null:t.informacion.usuario.persona.nombre)+" "+(t.informacion.usuario==null||t.informacion.usuario.persona==null?null:t.informacion.usuario.persona.apellido_paterno)," "),s(17),u(t.total),s(16),V(t.listaColleciones),s(2),C(52,(t.listaColleciones==null?null:t.listaColleciones.length)==0?52:-1),s(5),f(" ",t.informacion.descripcion," "),s(2),f(" ",t.informacion.ocupacion," "))},dependencies:[W,Q,N,R,U,$,Z,te,ee,J,L,q,H,Y,X],styles:["[_nghost-%COMP%]  .add .p-image-preview-container>button.p-image-preview-indicator{border-radius:50%}@media (min-width: 576px){.f-t[_ngcontent-%COMP%]{width:100%}}[_nghost-%COMP%]  .port .p-image-preview-container>button.p-image-preview-indicator{border-radius:0}[_nghost-%COMP%]  .port span.p-image{width:-webkit-fill-available}[_nghost-%COMP%]  .ft.styled-box-green .p-ink{background:#4baf504d}[_ngcontent-%COMP%]:is()   .p-scroller-viewport[_ngcontent-%COMP%]{flex:none}[_ngcontent-%COMP%]:is()   p-skeleton[_ngcontent-%COMP%]{width:100%}.t[_ngcontent-%COMP%]{margin:2rem auto;max-width:100%;overflow:auto;box-sizing:border-box;padding:0 1rem}.t[_ngcontent-%COMP%]::-webkit-scrollbar{-webkit-appearance:none}.t[_ngcontent-%COMP%]::-webkit-scrollbar:vertical{width:10px}.t[_ngcontent-%COMP%]::-webkit-scrollbar-button:increment, .contenedor[_ngcontent-%COMP%]::-webkit-scrollbar-button{display:none}.t[_ngcontent-%COMP%]::-webkit-scrollbar:horizontal{height:10px}.t[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#797979;border-radius:20px;border:2px solid #f1f2f3}.t[_ngcontent-%COMP%]::-webkit-scrollbar-track{border-radius:10px}"]});let i=n;return i})();export{$e as default};
