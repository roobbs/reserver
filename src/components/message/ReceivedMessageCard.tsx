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
      <div className="rounded-xl border border-blue-950 bg-white px-4 py-2 text-blue-800">
        <div className="font-bold">{message.content}</div>
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
