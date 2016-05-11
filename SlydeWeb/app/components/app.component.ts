import { Component, OnInit } from '@angular/core';
import {Routes, Router, ROUTER_DIRECTIVES} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';

@Component({
    selector: 'my-app',
    template: `
     <h1>{{title}}</h1>
     <nav>
        <a routerLink="['/login']">login</a>
        <a routerLink="['/home']">home</a>
     </nav>
     <router-outlet></router-outlet>
  `, directives: [ROUTER_DIRECTIVES]
})
    @Routes([
        { path: '/login', component: LoginComponent},
        { path: '/home', component: HomeComponent},
])
export class AppComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
        this.router.navigate(['/home']);
    }

}