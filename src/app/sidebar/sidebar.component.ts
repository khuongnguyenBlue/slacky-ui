import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  channels: string[] = [
    'General',
    'Random',
    'Marketing',
    'Design',
    'Development',
  ];
  directMessages: string[] = [
    'John Doe',
    'Jane Smith',
    'Alex Johnson',
    'Sarah Lee',
  ];
  selectedChannel: string = 'General';
  selectedDirectMessage: string = '';
}
