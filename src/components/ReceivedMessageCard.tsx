interface Message {
  senderId: string;
  receiverId: string;
  conversationId: string;
  content: string;
  createdAt: string;
}

export default function ReceivedMessagesCard({
  message,
}: {
  message: Message;
}) {
  return (
    <div className="border border-blue-950 bg-white text-blue-800">
      <div>{message.content}</div>
      <div>{message.createdAt}</div>
    </div>
  );
}
