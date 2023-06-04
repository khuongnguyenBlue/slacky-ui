import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ChannelListComponent } from '../channel-list/channel-list.component';
import { AuthGuard } from '../shared/auth/auth.guard';
import { WorkspaceComponent } from '../workspace/workspace.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: WorkspaceComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
