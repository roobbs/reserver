interface Message {
  senderId: string;
  // receiverId: string;
  conversationId: string;
  content: string;
  createdAt: string;
}

export default function ReceivedMessageCard({ message }: { message: Message }) {
  return (
    <div className="max-w-[70%] self-start rounded-xl border border-blue-950 bg-white px-4 py-2 text-blue-800">
      <div className="font-bold">{message.content}</div>
      <div className="text-left text-sm">
        {new Date(message.createdAt).toLocaleDateString()}
      </div>
    </div>
  );
}
