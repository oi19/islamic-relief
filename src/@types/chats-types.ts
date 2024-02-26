export type ChatType = {
  id: 1;
  name: string;
  email: string;
  created_at: string;
};

export type MessageType = {
  id?: number;
  content?: string;
  sender_id?: number;
  receiver_id?: number;
  sender_type?: string;
  receiver_type?: "User" | "Doctor";
  created_at?: string | Date;
  image?: any;
  senderUserName?: string;
};
