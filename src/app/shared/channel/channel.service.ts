import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Channel } from '../channel/channel.interface';
import { CreateChannelDto } from './channel.dto';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ChannelService {
  private apiUrl = 'http://localhost:3000/philip.anderson/channels';
  private channelsSubject = new BehaviorSubject<any[]>([]);
  channels$ = this.channelsSubject.asObservable();

  constructor(private http: HttpClient, private authService: AuthService) {
    this.fetchChannels();
  }

  fetchChannels() {
    const options = {
      headers: this.defaultHeaders(),
    };

    this.http.get<Channel[]>(this.apiUrl, options).subscribe({
      next: (channels) => {
        this.channelsSubject.next(channels as any[]);
      },
      error: (error) => {
        console.log(error.error.message);
        alert(`Cannot fetch channels\n${error}`);
      },
    });
  }

  createChannel(body: CreateChannelDto): Observable<Channel> {
    const options = {
      headers: this.defaultHeaders(),
    };

    return this.http.post<Channel>(this.apiUrl, body, options);
  }

  updateChannelsList(newChannelData: any) {
    const currentChannels = this.channelsSubject.value;
    const updatedChannels = [...currentChannels, newChannelData];
    this.channelsSubject.next(updatedChannels);
  }

  private defaultHeaders() {
    const token = this.authService.getToken();
    if (!token) {
      alert('Cannot get token');
      return;
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    return headers;
  }
}
