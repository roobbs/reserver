interface Message {
  senderId: string;
  receiverId: string;
  conversationId: string;
  content: string;
  createdAt: string;
}

export default function SentMessagesCard({ message }: { message: Message }) {
  return (
    <div className="bg-blue-800 text-white">
      <div>{message.content}</div>
      <div>{message.createdAt}</div>
    </div>
  );
}
