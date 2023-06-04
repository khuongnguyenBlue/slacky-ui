import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChannelComponent } from './channel/channel.component';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { CreateChannelComponent } from './create-channel/create-channel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { AppRoutingModule } from './shared/app-routing.modules';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ChannelComponent,
    ChannelListComponent,
    CreateChannelComponent,
    LoginComponent,
    WorkspaceComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
