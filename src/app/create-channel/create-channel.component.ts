import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ChannelService } from '../shared/channel/channel.service';
import { CreateChannelDto } from '../shared/channel/channel.dto';

@Component({
  selector: 'app-create-channel',
  templateUrl: './create-channel.component.html',
  styleUrls: ['./create-channel.component.css'],
})
export class CreateChannelComponent {
  channelForm = new FormGroup({
    name: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
  });

  constructor(private channelService: ChannelService) {}

  onSubmit() {
    const channelData = {
      ...this.channelForm.value,
      workspaceId: 1,
    };
    this.channelService
      .createChannel(channelData as CreateChannelDto)
      .subscribe({
        next: (channel) => {
          alert(`Channel '${channel.name}' created.`);
          this.channelForm.reset();
          this.channelService.updateChannelsList(channel);
        },
        error: (error) => {
          console.log(error.error.message);
          alert('Error creating channel.');
        },
      });
  }
}
