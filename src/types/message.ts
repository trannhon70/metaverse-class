export type MessageType = {
  id?: string;
  message: string;
  created_date: string;
  sent_by: {
    name: string;
    avatar: string;
    id: string;
  };
};
