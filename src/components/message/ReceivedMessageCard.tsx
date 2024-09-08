interface Message {
  senderId: string;
  conversationId: string;
  content: string;
  createdAt: string;
}

export default function ReceivedMessageCard({ message }: { message: Message }) {
  const messageDate = new Date(message.createdAt);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isToday = messageDate >= today;

  return (
    <div className="flex max-w-[70%] flex-col gap-1 self-start">
      <div className="rounded-xl border border-gray-300 bg-gray-200 px-4 py-2 text-blue-900">
        <strong>{message.content}</strong>
      </div>
      <div className="text-left text-sm">
        {isToday
          ? messageDate.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })
          : `${messageDate.toLocaleDateString()} ${messageDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`}
      </div>
    </div>
  );
}
