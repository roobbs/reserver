import { Conversation } from "./auth/AuthContext";

interface BusinessConversationCardProps {
  conv: Conversation;
  onClick: () => void;
}

export default function BusinessConversationCard({
  conv,
  onClick,
}: BusinessConversationCardProps) {
  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer items-center gap-4 overflow-hidden rounded bg-white px-4 py-2 transition-colors hover:bg-slate-900 hover:text-white"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white bg-slate-900 text-white">
        {conv.user.first_name[0]}
      </div>
      <div>
        <div className="text-lg font-bold">{conv.user.first_name}</div>
        <div className="text-center text-slate-500">
          {conv.lastMessage
            ? conv.lastMessage
            : "Inicia una conversacion ahora"}
        </div>
      </div>
    </div>
  );
}
