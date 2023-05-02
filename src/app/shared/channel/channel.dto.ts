import { ChannelType } from './channel.interface';

export interface CreateChannelDto {
  workspaceId: number;
  name: string;
  type: ChannelType;
}
