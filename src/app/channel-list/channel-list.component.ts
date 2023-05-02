import { Component, OnInit } from '@angular/core';
import { Channel } from '../shared/channel/channel.interface';
import { ChannelService } from '../shared/channel/channel.service';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css'],
})
export class ChannelListComponent implements OnInit {
  channels: Channel[] = [];
  selectedId: number = 0;
  // selectedDirectMessage: string = '';

  constructor(private channelService: ChannelService) {}

  ngOnInit(): void {
    this.channelService.channels$.subscribe((channels) => {
      this.channels = channels;
      this.selectedId = channels[0] ? channels[0].id : 0;
    });
  }
}
