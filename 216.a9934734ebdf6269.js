"use strict";(self.webpackChunkshopping_cart=self.webpackChunkshopping_cart||[]).push([[216],{9216:(P,u,s)=>{s.r(u),s.d(u,{AuthModule:()=>L});var c=s(6895),l=s(6773),e=s(8256);let g=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-forgot-password"]],decls:5,vars:0,consts:[["routerLink","login"]],template:function(o,n){1&o&&(e.TgZ(0,"p"),e._uU(1,"forgot-password works!"),e.qZA(),e.TgZ(2,"h1"),e._UZ(3,"a",0),e._uU(4," login"),e.qZA())},dependencies:[l.yS]}),t})();var d=s(529);let f=(()=>{class t{constructor(o){this.httpclient=o}getLogin(o){return this.httpclient.post("http://angular.pureecosoft.com/api/user/Login",{UserEmail:o.value.name,UserPassword:o.value.password})}}return t.\u0275fac=function(o){return new(o||t)(e.LFG(d.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var r=s(433);function h(t,i){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Please enter valid Mail"),e.qZA())}function Z(t,i){1&t&&(e.TgZ(0,"span",31),e._uU(1,"please enter valid password"),e.qZA())}let _=(()=>{class t{constructor(o,n){this.LoginService=o,this.router=n,this.name=""}ngOnInit(){}loginUser(o){o.form.markAllAsTouched(),!o.invalid&&this.LoginService.getLogin(o).subscribe(n=>{this.myid=localStorage.setItem("loginForm",JSON.stringify(n.Data)),n.Status&&1==n.Data.UserRole&&this.router.navigate(["/dashboard/admin"])},n=>{console.log(n)})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(f),e.Y36(l.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-login"]],decls:41,vars:3,consts:[[1,"vh-100"],[1,"container-fluid","h-custom"],[1,"row","d-flex","justify-content-center","align-items-center","h-100"],[1,"col-md-9","col-lg-6","col-xl-5"],["src","/assets/img/login1.jpg","width","100%","height","100%","alt","Sample image",1,"img-fluid"],[1,"col-md-8","col-lg-6","col-xl-4","offset-xl-1"],["loginForm","ngForm"],[1,"d-flex","flex-row","align-items-center","justify-content-center","justify-content-lg-start"],[1,"lead","fw-normal","mb-0","me-3"],["aria-hidden","true",1,"fa","fa-facebook-square","mx-1",2,"font-size","50px","color","blue"],["aria-hidden","true",1,"fa","fa-twitter-square","mx-1",2,"font-size","50px","color","blue"],["aria-hidden","true",1,"fa","fa-linkedin-square","mx-1",2,"font-size","50px","color","blue"],["aria-hidden","true",1,"fa","fa-google-plus-square","mx-1",2,"font-size","50px","color","blue"],[1,"divider","d-flex","align-items-center","my-4"],[1,"text-center","fw-bold","mx-3","mb-0"],[1,"form-outline","mb-4"],["type","email","email","","name","name","placeholder","Enter email address","ngModel","","required","",1,"form-control","form-control-lg"],["name","ngModel"],["for","form3Example3",1,"form-label"],["class","alert alert-danger","style","color: red;",4,"ngIf"],[1,"form-outline","mb-3"],["type","password","minlength","6","name","password","placeholder","Enter password","ngModel","","required","",1,"form-control","form-control-lg"],["password","ngModel"],["for","form3Example4",1,"form-label"],[1,"d-flex","justify-content-between","align-items-center"],[1,"form-check","mb-0"],["routerLink","/auth/forget-passwored",1,""],[1,"text-center","text-lg-start","mt-4","pt-2"],["type","submit",1,"btn","btn-primary","btn-lg",2,"padding-left","2.5rem","padding-right","2.5rem",3,"disabled","click"],[1,"small","fw-bold","mt-2","pt-1","mb-0"],["routerLink","/auth/registration",1,"link-danger"],[1,"alert","alert-danger",2,"color","red"]],template:function(o,n){if(1&o){const a=e.EpF();e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5)(6,"form",null,6)(8,"div",7)(9,"p",8),e._uU(10,"Sign in with"),e.qZA(),e._UZ(11,"i",9)(12,"i",10)(13,"i",11)(14,"i",12),e.qZA(),e.TgZ(15,"div",13)(16,"p",14),e._uU(17,"Or"),e.qZA()(),e.TgZ(18,"div",15),e._UZ(19,"input",16,17),e.TgZ(21,"label",18),e._uU(22,"Email address"),e.qZA(),e.YNc(23,h,2,0,"span",19),e.qZA(),e.TgZ(24,"div",20),e._UZ(25,"input",21,22),e.TgZ(27,"label",23),e._uU(28,"Password"),e.qZA(),e.YNc(29,Z,2,0,"span",19),e.qZA(),e.TgZ(30,"div",24),e._UZ(31,"div",25),e.TgZ(32,"a",26),e._uU(33,"Forgot password?"),e.qZA()(),e.TgZ(34,"div",27)(35,"button",28),e.NdJ("click",function(){e.CHM(a);const m=e.MAs(7);return e.KtG(n.loginUser(m))}),e._uU(36,"Login"),e.qZA(),e.TgZ(37,"p",29),e._uU(38,"Don't have an account? "),e.TgZ(39,"a",30),e._uU(40,"Register"),e.qZA()()()()()()()()}if(2&o){const a=e.MAs(7),p=e.MAs(20),m=e.MAs(26);e.xp6(23),e.Q6J("ngIf",p.invalid&&p.touched),e.xp6(6),e.Q6J("ngIf",m.invalid&&m.touched),e.xp6(6),e.Q6J("disabled",a.invalid)}},dependencies:[c.O5,l.yS,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.wO,r.on,r.On,r.F],styles:['.divider[_ngcontent-%COMP%]:after, .divider[_ngcontent-%COMP%]:before{content:"";flex:1;height:1px;background:#eee}.h-custom[_ngcontent-%COMP%]{height:calc(100% - 73px)}@media (max-width: 450px){.h-custom[_ngcontent-%COMP%]{height:100%}}']}),t})(),b=(()=>{class t{constructor(o){this.httpclient=o}registerUser1(o){return this.httpclient.post("http://angular.pureecosoft.com/api/user/Registration",{UserName:o.name,UserEmail:o.email,UserPassword:o.password,UserDOB:o.dob,UserMobile:o.mob,UserRole:o.access})}}return t.\u0275fac=function(o){return new(o||t)(e.LFG(d.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function v(t,i){if(1&t){const o=e.EpF();e.TgZ(0,"div",31)(1,"strong"),e._uU(2,"you successfully"),e.qZA(),e.TgZ(3,"button",32),e.NdJ("click",function(){e.CHM(o);const a=e.oxw();return e.KtG(a.closeAlert())}),e._uU(4,"Close"),e.qZA()()}}function w(t,i){1&t&&(e.TgZ(0,"span",33),e._uU(1,"This field is not Valid"),e.qZA())}function T(t,i){1&t&&(e.TgZ(0,"span",33),e._uU(1,"This field is not Valid"),e.qZA())}function U(t,i){1&t&&(e.TgZ(0,"span",33),e._uU(1,"This field is not Valid"),e.qZA())}function A(t,i){1&t&&(e.TgZ(0,"span",33),e._uU(1,"This field is not Valid"),e.qZA())}function q(t,i){1&t&&(e.TgZ(0,"span",33),e._uU(1,"This field is not Valid"),e.qZA())}function x(t,i){1&t&&(e.TgZ(0,"span",33),e._uU(1,"This field is not Valid"),e.qZA())}function C(t,i){1&t&&(e.TgZ(0,"span",33),e._uU(1,"This field is not Valid"),e.qZA())}let y=(()=>{class t{constructor(o){this.register=o,this.message=!1,this.registerForm=new r.cw({name:new r.NI("",[r.kI.required]),email:new r.NI("",[r.kI.required,r.kI.email]),password:new r.NI("",[r.kI.required,r.kI.minLength(5),r.kI.maxLength(35)]),cpassword:new r.NI("",[r.kI.required,r.kI.minLength(5),r.kI.maxLength(35)]),dob:new r.NI("",[r.kI.required]),mob:new r.NI("",[r.kI.required,r.kI.maxLength(10),r.kI.minLength(10)]),access:new r.NI("",[r.kI.required])})}ngOnInit(){}registerUser(){console.warn(this.registerForm.value),this.register.registerUser1(this.registerForm.value).subscribe(o=>{console.warn("result",o),this.message=!0})}closeAlert(){this.message=!1}get name(){return this.registerForm.get("name")}get email(){return this.registerForm.get("email")}get password(){return this.registerForm.get("password")}get cpassword(){return this.registerForm.get("cpassword")}get dob(){return this.registerForm.get("dob")}get mob(){return this.registerForm.get("mob")}get access(){return this.registerForm.get("access")}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(b))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-registration"]],decls:60,vars:10,consts:[[1,""],[1,"mask","d-flex","align-items-center","h-100","gradient-custom-3"],[1,"container","h-100"],[1,"row","d-flex","justify-content-center","align-items-center","h-100"],[1,"col-12","col-md-9","col-lg-7","col-xl-6"],[1,"card",2,"border-radius","15px"],[1,"card-body","p-4"],[1,"text-uppercase","text-center","mb-4"],["class","alert-success alert-dismissible fade show","role","alert","class","alert alert-success",4,"ngIf"],[3,"formGroup"],[1,"form-outline","mb-2"],["type","text","placeholder","Enter Name","name","name","formControlName","name",1,"form-control","form-control-md"],["for","form3Example1cg",1,"form-label"],["style","color:red",4,"ngIf"],["type","email","placeholder","Enter email","name","email","formControlName","email",1,"form-control","form-control-md"],["for","form3Example3cg",1,"form-label"],["type","password","placeholder","Enter password","formControlName","password","name","password",1,"form-control","form-control-md"],["for","form3Example4cg",1,"form-label"],["type","password","placeholder","Enter reenter password","formControlName","cpassword","name","cpassword",1,"form-control","form-control-md"],["for","form3Example4cdg",1,"form-label"],["type","date","placeholder","Enter DOB","name","dob","formControlName","dob",1,"form-control","form-control-md"],["type","text","placeholder","Enter mobile number","name","mob","formControlName","mob",1,"form-control","form-control-md"],["name","access","formControlName","access",1,"select","form-control","form-control-md"],["value","1"],["value","2"],[1,"form-label","select-label"],[1,"d-flex","pt-3"],["type","button",1,"btn","btn-light","btn-md"],[1,"btn","btn-success","btn-md","ms-5","float-end",3,"disabled","click"],[1,"text-center","text-muted","mt-5","mb-0"],["href","#!",1,"fw-bold","text-body"],["role","alert",1,"alert","alert-success"],["data-bs-dismiss","alert",3,"click"],[2,"color","red"]],template:function(o,n){1&o&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"h2",7),e._uU(8,"Create an account"),e.qZA(),e.YNc(9,v,5,0,"div",8),e.TgZ(10,"form",9)(11,"div",10),e._UZ(12,"input",11),e.TgZ(13,"label",12),e._uU(14,"Your Name"),e.qZA(),e.YNc(15,w,2,0,"span",13),e.qZA(),e.TgZ(16,"div",10),e._UZ(17,"input",14),e.TgZ(18,"label",15),e._uU(19,"Your Email"),e.qZA(),e.YNc(20,T,2,0,"span",13),e.qZA(),e.TgZ(21,"div",10),e._UZ(22,"input",16),e.TgZ(23,"label",17),e._uU(24,"Password"),e.qZA(),e.YNc(25,U,2,0,"span",13),e.qZA(),e.TgZ(26,"div",10),e._UZ(27,"input",18),e.TgZ(28,"label",19),e._uU(29,"Confirm password"),e.qZA(),e.YNc(30,A,2,0,"span",13),e.qZA(),e.TgZ(31,"div",10),e._UZ(32,"input",20),e.TgZ(33,"label",12),e._uU(34,"DOB"),e.qZA(),e.YNc(35,q,2,0,"span",13),e.qZA(),e.TgZ(36,"div",10),e._UZ(37,"input",21),e.TgZ(38,"label",12),e._uU(39,"Mob"),e.qZA(),e.YNc(40,x,2,0,"span",13),e.qZA(),e.TgZ(41,"div",10)(42,"select",22)(43,"option",23),e._uU(44,"Full Access"),e.qZA(),e.TgZ(45,"option",24),e._uU(46,"Semi Access"),e.qZA()(),e.TgZ(47,"label",25),e._uU(48,"Access Level"),e.qZA(),e.YNc(49,C,2,0,"span",13),e.qZA(),e.TgZ(50,"div",26)(51,"button",27),e._uU(52,"Reset all"),e.qZA(),e.TgZ(53,"button",28),e.NdJ("click",function(){return n.registerUser()}),e._uU(54,"Submit form"),e.qZA()(),e.TgZ(55,"p",29),e._uU(56,"Have already an account? "),e.TgZ(57,"a",30)(58,"u"),e._uU(59,"Login here"),e.qZA()()()()()()()()()()()),2&o&&(e.xp6(9),e.Q6J("ngIf",n.message),e.xp6(1),e.Q6J("formGroup",n.registerForm),e.xp6(5),e.Q6J("ngIf",n.name&&n.name.invalid&&n.name.touched),e.xp6(5),e.Q6J("ngIf",n.email&&n.email.invalid&&n.email.touched),e.xp6(5),e.Q6J("ngIf",n.password&&n.password.invalid&&n.password.touched),e.xp6(5),e.Q6J("ngIf",n.cpassword&&n.cpassword.invalid&&n.cpassword.touched),e.xp6(5),e.Q6J("ngIf",n.dob&&n.dob.invalid&&n.dob.touched),e.xp6(5),e.Q6J("ngIf",n.mob&&n.mob.invalid&&n.mob.touched),e.xp6(9),e.Q6J("ngIf",n.access&&n.access.invalid&&n.access.touched),e.xp6(4),e.Q6J("disabled",n.registerForm.invalid))},dependencies:[c.O5,r._Y,r.YN,r.Kr,r.Fj,r.EJ,r.JJ,r.JL,r.sg,r.u],styles:[".gradient-custom-3[_ngcontent-%COMP%]{background:#84fab0;background:linear-gradient(to right,rgba(132,250,176,.5),rgba(143,211,244,.5))}.gradient-custom-4[_ngcontent-%COMP%]{background:#84fab0;background:linear-gradient(to right,rgb(132,250,176),rgb(143,211,244))}"]}),t})(),F=(()=>{class t{constructor(o){this.http=o}admin(){return this.http.get("http://angular.pureecosoft.com/api/product/list")}}return t.\u0275fac=function(o){return new(o||t)(e.LFG(d.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function I(t,i){if(1&t&&(e.TgZ(0,"div",4),e._UZ(1,"img",5),e.TgZ(2,"div",6)(3,"h5",7),e._uU(4),e.qZA(),e.TgZ(5,"p",8),e._uU(6),e.qZA(),e.TgZ(7,"a",9),e._uU(8,"Go somewhere"),e.qZA()()()),2&t){const o=i.$implicit;e.xp6(1),e.s9C("src",o.Product_URl,e.LSH),e.xp6(3),e.Oqu(o.Product_Name),e.xp6(2),e.Oqu(o.Product_Price)}}const k=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"forget-passwored",component:g},{path:"registration",component:y},{path:"product",component:(()=>{class t{constructor(o){this.product=o,this.product.admin().subscribe(n=>{console.warn(n),this.user=n})}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(F))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-product"]],decls:6,vars:1,consts:[[1,"d-flex","justify-content-center"],[1,"container"],[1,"row"],["class","card col-xl-3 m-3",4,"ngFor","ngForOf"],[1,"card","col-xl-3","m-3"],["height","200px","width","150px","alt","Card image cap",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],[1,"card-text"],["href","#",1,"btn","btn-primary"]],template:function(o,n){1&o&&(e.TgZ(0,"p"),e._uU(1,"product works!"),e.qZA(),e.TgZ(2,"div",0)(3,"div",1)(4,"div",2),e.YNc(5,I,9,3,"div",3),e.qZA()()()),2&o&&(e.xp6(5),e.Q6J("ngForOf",n.user.Data))},dependencies:[c.sg]}),t})()},{path:"login",component:_}];let N=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.Bz.forChild(k),l.Bz]}),t})(),L=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,N,r.u5,r.UX,d.JF]}),t})()}}]);