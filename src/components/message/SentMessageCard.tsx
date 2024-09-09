interface Message {
  senderId: string;
  // receiverId: string;
  conversationId: string;
  content: string;
  createdAt: string;
}

export default function SentMessageCard({ message }: { message: Message }) {
  const messageDate = new Date(message.createdAt);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isToday = messageDate >= today;

  return (
    <div className="flex max-w-[70%] flex-col gap-1 self-end">
      <div className="rounded-xl bg-blue-800 px-4 py-2 text-white">
        <div>{message.content}</div>
      </div>
      <div className="text-right text-sm">
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
