"use strict";(self.webpackChunkshopping_cart=self.webpackChunkshopping_cart||[]).push([[208],{2208:(A,i,r)=>{r.r(i),r.d(i,{DashboardModule:()=>g});var u=r(6895),d=r(529),s=r(6773),t=r(8256);let c=(()=>{class o{constructor(e){this.router=e}canActivate(e,a){return 1==JSON.parse(localStorage.getItem("loginForm")||"{}").UserRole&&this.router.navigate(["/dashboard/admin"]),!0}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(s.F0))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),m=(()=>{class o{constructor(e){this.http=e}admin(){return this.http.get("http://angular.pureecosoft.com/api/user/list")}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(d.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function h(o,n){if(1&o&&(t.TgZ(0,"tbody")(1,"tr")(2,"td"),t._uU(3),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td")(13,"button",3),t._uU(14,"Edit"),t.qZA()(),t.TgZ(15,"td")(16,"button",4),t._uU(17,"Remove"),t.qZA()()()()),2&o){const e=n.$implicit;t.xp6(3),t.Oqu(e.User_ID),t.xp6(2),t.Oqu(e.UserName),t.xp6(2),t.Oqu(e.UserEmail),t.xp6(2),t.Oqu(e.UserDOB),t.xp6(2),t.Oqu(e.UserMobile)}}const l=[{path:"",redirectTo:"admin",pathMatch:"full"},{path:"admin",component:(()=>{class o{constructor(e){this.admins=e,this.username(),this.admins.admin().subscribe(a=>{console.warn(a),this.user=a})}username(){const e=JSON.parse(localStorage.getItem("loginForm")||"{}");this.show_name=e,console.log(this.show_name)}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-admin"]],decls:24,vars:2,consts:[[1,"table"],["scope","col"],[4,"ngFor","ngForOf"],[1,"btn","btn-info"],[1,"btn","btn-danger"]],template:function(e,a){1&e&&(t.TgZ(0,"p"),t._uU(1,"admin works!"),t.qZA(),t.TgZ(2,"h1"),t._uU(3,"dhsidi"),t.qZA(),t.TgZ(4,"div"),t._uU(5),t.TgZ(6,"table",0)(7,"thead")(8,"tr")(9,"th",1),t._uU(10,"Id"),t.qZA(),t.TgZ(11,"th",1),t._uU(12,"Name"),t.qZA(),t.TgZ(13,"th",1),t._uU(14,"Email"),t.qZA(),t.TgZ(15,"th",1),t._uU(16,"DOB"),t.qZA(),t.TgZ(17,"th",1),t._uU(18,"MOB"),t.qZA(),t.TgZ(19,"th",1),t._uU(20,"Edit"),t.qZA(),t.TgZ(21,"th",1),t._uU(22,"Delete"),t.qZA()()(),t.YNc(23,h,18,5,"tbody",2),t.qZA()()),2&e&&(t.xp6(5),t.hij(" ",a.show_name.UserName," "),t.xp6(18),t.Q6J("ngForOf",a.user.Data))},dependencies:[u.sg]}),o})(),canActivate:[c]}];let p=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.Bz.forChild(l),s.Bz]}),o})(),g=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.ez,d.JF,p]}),o})()}}]);