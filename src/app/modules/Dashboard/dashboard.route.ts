import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
        // children: [
        //     {
        //         path: '',
        //         component: DashboardComponent,
        //         pathMatch: 'full'
        //     }
        // ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRouteModule {
    
}