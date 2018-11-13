import { NgModule } from "@angular/core";
import { SignupComponent } from "./sign-up/sign-up.component";
import { loginComponent } from "./login/login.component";
import { AccountRouteModule } from "./account.route";

@NgModule({
    imports: [
        AccountRouteModule
    ],
    declarations: [
        SignupComponent,
        loginComponent
    ],
    exports: []
})
export class AccountModule {

}