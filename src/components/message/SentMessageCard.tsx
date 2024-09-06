interface Message {
  senderId: string;
  // receiverId: string;
  conversationId: string;
  content: string;
  createdAt: string;
}

export default function SentMessageCard({ message }: { message: Message }) {
  return (
    <div className="max-w-[70%] self-end rounded-xl bg-blue-800 px-4 py-2 text-white">
      <div className="font-bold">{message.content}</div>
      <div className="text-right text-sm">
        {new Date(message.createdAt).toLocaleDateString()}
      </div>
    </div>
  );
}
