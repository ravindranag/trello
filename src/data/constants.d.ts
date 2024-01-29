export type Member = {
  name: string;
  avatar: string;
}


export type Tags = string[]

export type Card = {
  title: string;
  description?: string;
  coverImage?: string;
  members: number;
  tags: Tags;
  comments: number;
  likes: number;
  attachments: number;
}

export type Swimlane = {
  title: string;
  cards: Card[]
}

export type Board = {
  title: string;
  members: number;
  swimlanes: Swimlane[];
}

export type Dashboard = {
  boards: Board[]
}

