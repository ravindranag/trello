export type Member = {
  name: string;
  avatar: string;
}


export type Tags = string[]

export type Card = {
  id: string;
  title: string;
  description?: string;
  coverImage?: string;
  members: number;
  tags: Tags;
  comments: number;
  likes: number;
  attachments: number;
  swimlaneId: string;
}

export type Swimlane = {
  id: string;
  title: string;
  cards: Card[]
}

export type Board = {
  id: string;
  title: string;
  members: number;
  swimlanes: Swimlane[];
}

export type Dashboard = {
  boards: Board[]
}

