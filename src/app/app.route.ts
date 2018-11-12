import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

export const route: Routes = [
    {
        path:'',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                loadChildren: ''
            },
            {
                path: 'login',
                loadChildren: ''
            },
            {
                path: 'signup',
                loadChildren: ''
            }
        ]
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        RouterModule.forRoot(route,{enableTracing: false})
    ],
    exports: [
        RouterModule
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppRouteModule{}