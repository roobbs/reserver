import { Conversation } from "./auth/AuthContext";

interface ConversationCardProps {
  conv: Conversation;
  onClick: () => void;
}

export default function ConversationCard({
  conv,
  onClick,
}: ConversationCardProps) {
  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer items-center gap-4 overflow-hidden rounded-full bg-blue-950 px-4 py-2 text-white transition-colors hover:bg-slate-900"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white bg-white font-bold text-blue-800">
        {conv.business.name[0]}
      </div>
      <div>
        <div className="text-md font-bold">{conv.business.name}</div>
        <div className="850p:hidden 755p:block text-center italic text-gray-300">
          {conv.lastMessage
            ? conv.lastMessage
            : "Inicia una conversacion ahora"}
        </div>
      </div>
    </div>
  );
}
