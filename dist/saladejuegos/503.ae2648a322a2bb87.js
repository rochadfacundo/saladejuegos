"use strict";(self.webpackChunksaladejuegos=self.webpackChunksaladejuegos||[]).push([[503],{3503:(Z,d,s)=>{s.r(d),s.d(d,{AhorcadoModule:()=>v});var g=s(433),l=s(6895),t=s(4650),p=s(9051);function u(o,a){if(1&o&&(t.TgZ(0,"span",12),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.Oqu(e)}}function _(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){const i=t.CHM(e).$implicit,c=t.oxw(2);return t.KtG(c.letraElegida(i))}),t._uU(1),t.qZA()}if(2&o){const e=a.$implicit;t.xp6(1),t.hij(" ",e," ")}}function h(o,a){if(1&o&&(t.TgZ(0,"div",3)(1,"div",4)(2,"h2",5),t._uU(3,"Adivina la palabra"),t.qZA()(),t.TgZ(4,"div"),t._UZ(5,"img",6),t.qZA(),t.TgZ(6,"div",7),t.YNc(7,u,2,1,"span",8),t.qZA(),t._UZ(8,"br")(9,"br"),t.TgZ(10,"div",9),t.YNc(11,_,2,1,"button",10),t.qZA(),t._UZ(12,"br")(13,"br")(14,"br")(15,"br"),t.TgZ(16,"span",11),t._uU(17),t.qZA()()),2&o){const e=t.oxw();t.xp6(5),t.Q6J("src",e.imagen,t.LSH),t.xp6(2),t.Q6J("ngForOf",e.palabraSecreta),t.xp6(4),t.Q6J("ngForOf",e.letras),t.xp6(6),t.hij("Errores: ",e.errores,"")}}function m(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",17)(1,"div",18),t._UZ(2,"br")(3,"br")(4,"br")(5,"br")(6,"br")(7,"br")(8,"br"),t.TgZ(9,"button",19),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.empezarJuego())}),t._uU(10,"JUGAR"),t.qZA(),t._UZ(11,"br"),t.TgZ(12,"button",20),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.volver())}),t._uU(13,"VOLVER"),t.qZA()()()}}function f(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",21)(1,"h2"),t._uU(2,"GANASTE!!!!!!!!!"),t.qZA(),t.TgZ(3,"button",22),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.empezarJuego())}),t._uU(4,"VOLVER A JUGAR"),t.qZA(),t._UZ(5,"br"),t.TgZ(6,"button",23),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.volver())}),t._uU(7,"VOLVER"),t.qZA(),t._UZ(8,"br"),t.qZA()}}function b(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",21)(1,"h2"),t._uU(2,"PERDISTE!!!!!!!!!"),t.qZA(),t.TgZ(3,"button",22),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.empezarJuego())}),t._uU(4,"VOLVER A JUGAR"),t.qZA(),t._UZ(5,"br"),t.TgZ(6,"button",23),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.volver())}),t._uU(7,"VOLVER"),t.qZA()()}}function x(o,a){if(1&o&&(t.YNc(0,m,14,0,"div",14),t.TgZ(1,"div",15),t.YNc(2,f,9,0,"div",16),t.YNc(3,b,8,0,"div",16),t.qZA()),2&o){const e=t.oxw();t.Q6J("ngIf",!e.gana&&!e.pierde),t.xp6(2),t.Q6J("ngIf",e.gana),t.xp6(1),t.Q6J("ngIf",e.pierde)}}const A=[{path:"",children:[{path:"",component:(()=>{class o{constructor(e){this.router=e,this.seJuega=!1,this.palabras=this.cargarPalabras(),this.palabra="",this.palabraSecreta=[],this.gana=!1,this.pierde=!1,this.errores=0,this.imagenes=this.cargarImagenes()}ngOnInit(){}cargarImagenes(){return["../../../../assets/juegos/ahorcado/a1.png","../../../../assets/juegos/ahorcado/a2.png","../../../../assets/juegos/ahorcado/a3.png","../../../../assets/juegos/ahorcado/a4.png","../../../../assets/juegos/ahorcado/a5.png","../../../../assets/juegos/ahorcado/a6.png","../../../../assets/juegos/ahorcado/a7.png"]}empezarJuego(){this.imagen=this.imagenes[0],this.seJuega=!0,this.numero=Math.floor(8*Math.random()+0),this.palabra=this.palabras[this.numero],this.letras=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","\xd1","O","P","Q","R","S","T","U","X","Y","Z"],this.arrayCaracteres=Array.from(this.palabra);for(let r of this.arrayCaracteres)this.palabraSecreta.push(" _ ")}letraElegida(e){this.letras=this.letras.filter(c=>c!=e);let r=!0,n=!1,i=0;for(let c of this.arrayCaracteres)e==c&&(this.palabraSecreta[i]=e,n=!0),i++;i=0;for(let c of this.palabraSecreta)" _ "==this.palabraSecreta[i]&&(r=!1),i++;n||(this.errores++,this.imagen=this.imagenes[this.errores]),6==this.errores&&setTimeout(()=>{this.pierde=!0,this.gana=!1,this.seJuega=!1,this.reset()},800),r&&setTimeout(()=>{this.gana=!0,this.pierde=!1,this.seJuega=!1,this.reset()},800)}reset(){this.arrayCaracteres=[],this.palabra="",this.palabraSecreta=[],this.errores=0}cargarPalabras(){return["MANZANA","EDIFICIO","CALEIDOSCOPIO","HIBRIDO","SERENDIPIA","UTOPIA","LAGUNA","LOBO","COMPONENTE"]}volver(){this.router.navigateByUrl("pages/juegos/lista")}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(p.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-ahorcado"]],decls:4,vars:2,consts:[[1,"miDiv","container","grid-md"],["class","columns contenedor",4,"ngIf","ngIfElse"],["noSeJuega",""],[1,"columns","contenedor"],[1,"column","col-12"],[2,"text-align","center"],["id","palo","width","250px","height","300px","alt","Palo",1,"imagen",3,"src"],[1,"posPalabra"],["class","palabra",4,"ngFor","ngForOf"],[1,"letris"],["class","opciones",3,"click",4,"ngFor","ngForOf"],[2,"font-size","20px","left","20%"],[1,"palabra"],[1,"opciones",3,"click"],["class","contenedor",4,"ngIf"],[1,"center"],["class","text-align: center; ",4,"ngIf"],[1,"contenedor"],[1,"fondo"],["type","button",1,"btn","btn-outline-secondary","btn-lg","btn-block",3,"click"],["type","button",1,"btn","btn-outline-danger","btn-lg","btn-block",3,"click"],[1,"text-align:","center;"],["type","button",1,"btn","btn-outline-secondary","btn-lg","btn-block",2,"bottom","20%",3,"click"],["type","button",1,"btn","btn-outline-danger","btn-lg","btn-block",2,"bottom","20%",3,"click"]],template:function(e,r){if(1&e&&(t.TgZ(0,"div",0),t.YNc(1,h,18,4,"div",1),t.YNc(2,x,4,3,"ng-template",null,2,t.W1O),t.qZA()),2&e){const n=t.MAs(3);t.xp6(1),t.Q6J("ngIf",r.seJuega)("ngIfElse",n)}},dependencies:[l.sg,l.O5],styles:[".miDiv[_ngcontent-%COMP%]{background-image:linear-gradient(120deg,#EECC88 0%,#7E4E1E 100%);font:400 16px/1.5em sans-serif;height:20px;width:auto}.imagen[_ngcontent-%COMP%]{top:10%;left:10;display:block}button[_ngcontent-%COMP%]{justify-content:center}.container[_ngcontent-%COMP%]{background-color:#fff;height:80%;padding:2em}.contenedor[_ngcontent-%COMP%]{position:relative}.contenido[_ngcontent-%COMP%]{position:absolute}.fondo[_ngcontent-%COMP%]{position:absolute;max-width:200%;max-height:200%;width:100%;height:200px;top:0;opacity:.8}.palabra[_ngcontent-%COMP%]{top:20%;margin-top:20%;height:30%;width:50%;size:18px;font-size:4em;font-weight:100;font-family:Franklin Gothic Medium,Arial Narrow,Arial,sans-serif}.posPalabra[_ngcontent-%COMP%]{top:40%;left:30%;width:70%;height:40%;position:absolute}.divOpciones[_ngcontent-%COMP%]{height:100%;width:100%;text-align:center}.center[_ngcontent-%COMP%]{position:relative;top:35%;align-items:center;justify-content:center;text-align:center}.opciones[_ngcontent-%COMP%]{border-radius:20%;border:3px solid #7E4E1E;height:20%;width:4%;text-align:center;background-color:#fff;color:#000;display:block;float:left;cursor:pointer;position:relative;max-width:50%}.opciones[_ngcontent-%COMP%]:hover{background-color:#7e4e1e;color:#f5f5f5}.letris[_ngcontent-%COMP%]{height:40%;position:absolute;left:250px;display:inline;width:70%}.opciones[_ngcontent-%COMP%]:active{transform:scale(.98);box-shadow:3px 2px 1px rgb(#EECC88,#7E4E1E,black)}.abc[_ngcontent-%COMP%]{display:inline-block;padding:.7em;margin:3px;width:60px;text-align:center;border-radius:3px;border:1px dashed #5755d9;text-transform:uppercase}.oculto[_ngcontent-%COMP%]{display:inline-block;padding:.5em;font-size:1.2em;font-weight:700;margin:5px;width:50px;text-align:center;border-bottom:3px solid #666;text-transform:uppercase}#palo[_ngcontent-%COMP%]{transform:scaleX(-1)}"]}),o})()}]}];let C=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.Bz.forChild(A),p.Bz]}),o})(),v=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[l.ez,C,g.u5]}),o})()}}]);