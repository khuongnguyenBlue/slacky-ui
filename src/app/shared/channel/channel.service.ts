import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Channel } from '../channel/channel.interface';
import { CreateChannelDto } from './channel.dto';

@Injectable({
  providedIn: 'root',
})
export class ChannelService {
  private apiUrl = 'http://localhost:3000/philip.anderson/channels';
  private channelsSubject = new BehaviorSubject<any[]>([]);
  channels$ = this.channelsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchChannels();
  }

  fetchChannels() {
    this.http.get<Channel[]>(this.apiUrl).subscribe({
      next: (channels) => {
        this.channelsSubject.next(channels as any[]);
      },
      error: (error) => {
        console.log(error);
        alert(`Cannot fetch channels\n${error}`);
      },
    });
  }

  createChannel(body: CreateChannelDto): Observable<Channel> {
    return this.http.post<Channel>(this.apiUrl, body);
  }

  updateChannelsList(newChannelData: any) {
    const currentChannels = this.channelsSubject.value;
    const updatedChannels = [...currentChannels, newChannelData];
    this.channelsSubject.next(updatedChannels);
  }
}
