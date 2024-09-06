import { useContext, useEffect, useRef, useState } from "react";
import { SocketContext } from "../components/socket/SocketContext";
import { AuthContext, Conversation } from "../components/auth/AuthContext";
import ConversationCard from "../components/ConversationCard";
import BusinessConversationCard from "../components/BusinessConversationCard";
import { IoSend } from "react-icons/io5";
import ReceivedMessageCard from "../components/message/ReceivedMessageCard";
import SentMessageCard from "../components/message/SentMessageCard";

interface Message {
  senderId: string;
  conversationId: string;
  content: string;
  createdAt: string;
}

export default function Messages() {
  const { socket } = useContext(SocketContext);
  const { user, conversations, businessConversations } =
    useContext(AuthContext);

  const [selectedConversation, setSelectedConversation] =
    useState<Conversation | null>(null);
  const [newMessage, setNewMessage] = useState<string>("");
  const [conversationMessages, setConversationMessages] = useState<Message[]>(
    [],
  );

  const messagesEndRef = useRef<HTMLDivElement | null>(null); // Ref para el final del contenedor de mensajes

  useEffect(() => {
    if (socket && selectedConversation) {
      socket.emit("joinConversation", selectedConversation._id);

      socket.on("message", (msg: Message) => {
        if (msg.conversationId === selectedConversation._id) {
          setConversationMessages((prevMessages) => [...prevMessages, msg]);
          scrollToBottom(); // Desplazar hacia abajo cuando llegue un nuevo mensaje
        }
      });

      return () => {
        socket.off("message");
      };
    }
  }, [socket, selectedConversation]);

  useEffect(() => {
    scrollToBottom(); // Desplazar hacia abajo al cargar mensajes
  }, [conversationMessages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleConversationSelect = async (conversation: Conversation) => {
    setSelectedConversation(conversation);

    try {
      const response = await fetch(
        `http://localhost:3000/api/conversation/${conversation._id}/messages`,
      );
      const data = await response.json();
      if (data.succes) {
        setConversationMessages(data.messages);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handleSendMessage = () => {
    if (socket && selectedConversation && newMessage.trim() !== "") {
      const messageData = {
        conversationId: selectedConversation._id,
        senderId: user?._id,
        content: newMessage,
      };

      socket.emit("message", messageData);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-1 gap-8 bg-gray-200 text-blue-950">
      <div className="flex w-1/3 flex-col gap-4 px-4 py-8">
        {conversations.length === 0 && !businessConversations && (
          <div>Aún no tienes ninguna conversación</div>
        )}
        {conversations.map((conversation) => (
          <ConversationCard
            key={conversation._id}
            onClick={() => handleConversationSelect(conversation)}
            conv={conversation}
          />
        ))}

        {businessConversations && <div>Las conversaciones de tu negocio:</div>}
        {businessConversations &&
          businessConversations.map((conversation) => (
            <BusinessConversationCard
              key={conversation._id}
              onClick={() => handleConversationSelect(conversation)}
              conv={conversation}
            />
          ))}
      </div>
      <div className="flex flex-1 flex-col justify-between rounded-l-lg bg-white">
        {!selectedConversation && (
          <div className="self-center justify-self-center">
            Selecciona una conversación para enviar un mensaje
          </div>
        )}
        {selectedConversation && (
          <>
            <div className="flex items-center justify-center gap-4 bg-gray-600 p-2 text-white">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-900 bg-slate-900 text-white">
                {selectedConversation.business.name[0] ||
                  selectedConversation.user.first_name[0]}
              </div>
              <div className="text-center text-xl font-bold">
                {selectedConversation.business.name}
              </div>
            </div>
            <div className="flex max-h-[55vh] flex-1 flex-col gap-2 overflow-y-auto scroll-smooth p-4">
              {conversationMessages.map((msg, index) => {
                if (msg.senderId === user?._id) {
                  return <SentMessageCard key={index} message={msg} />;
                } else {
                  return <ReceivedMessageCard key={index} message={msg} />;
                }
              })}
              <div ref={messagesEndRef} />
            </div>
            <div className="p flex justify-center gap-4 bg-slate-900 px-8 py-4">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Escribe un mensaje..."
                className="flex-1 rounded bg-white p-3"
              />
              <button
                onClick={handleSendMessage}
                className="text-white hover:text-emerald-400"
              >
                <IoSend size={30} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
