import { HomeComponent } from '../home/home.component';
import { EditFileComponent } from '../edit/edit-file.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'edit', component: EditFileComponent },
    { path: 'edit/:name', component: EditFileComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
