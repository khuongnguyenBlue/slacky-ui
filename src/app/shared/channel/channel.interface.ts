export interface Channel {
  id: number
  workspaceId: number
  creatorId: number
  name: string
  type: ChannelType
  archived: boolean
  description: string
  createdAt: Date
}

export type ChannelType = 'PUBLIC' | 'PRIVATE' | 'DIRECT_MESSAGE'
