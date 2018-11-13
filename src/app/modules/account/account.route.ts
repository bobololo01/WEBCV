import { Routes, RouterModule } from "@angular/router";
import { loginComponent } from "./login/login.component";
import { SignupComponent } from "./sign-up/sign-up.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: 'login',
        pathMatch: 'full',
        component: loginComponent
    },
    {
        path: 'signup',
        pathMatch: 'full',
        component: SignupComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRouteModule {

}

