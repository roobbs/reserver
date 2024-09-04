import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../components/socket/SocketContext";
import { AuthContext, Conversation } from "../components/auth/AuthContext";
import ConversationCard from "../components/ConversationCard";
import { IoSend } from "react-icons/io5";

// interface Message {
//   sender: string;
//   content: string;
//   timestamp: string;
// }

export default function Messages() {
  const { socket } = useContext(SocketContext);
  const { user, conversations } = useContext(AuthContext);

  const [selectedConversation, setSelectedConversation] =
    useState<Conversation | null>(null);
  // const [newMessage, setNewMessage] = useState<string>("");

  // Escuchar mensajes en tiempo real
  useEffect(() => {
    // if (socket && selectedConversation) {
    //   socket.on("mensaje", (msg: Message) => {
    //     if (selectedConversation._id === msg.conversationId) {
    //       setSelectedConversation((prev) => ({
    //         ...prev!,
    //         messages: [...prev!.messages, msg],
    //       }));
    //     }
    //   });
    //   return () => {
    //     socket.off("mensaje");
    //   };
    // }
  }, [socket, selectedConversation]);

  const handleConversationSelect = (conversation: Conversation) => {
    setSelectedConversation(conversation);
  };

  // const handleSendMessage = () => {
  //   if (socket && selectedConversation && newMessage.trim() !== "") {
  //     const messageData = {
  //       conversationId: selectedConversation._id,
  //       sender: user?._id,
  //       content: newMessage,
  //     };

  //     socket.emit("mensaje", messageData);
  //     setNewMessage("");
  //   }
  // };

  return (
    <div className="flex flex-1 gap-8 bg-gray-200 text-blue-950">
      <div className="w-1/3 px-4 py-8">
        {conversations.length === 0 && (
          <div>Aún no tienes ninguna conversación</div>
        )}
        {conversations.map((conversation) => (
          <ConversationCard
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
      </div>

      {/* {selectedConversation && (
        <div className="messages-section">
          <h2>Mensajes en la Conversación</h2>
          <div className="messages-list">
            {selectedConversation.messages.map((message, index) => (
              <div key={index} className="message-item">
                <p>
                  <strong>{message.sender}:</strong> {message.content}
                </p>
                <small>{new Date(message.timestamp).toLocaleString()}</small>
              </div>
            ))}
          </div>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Escribe un mensaje..."
            className="message-input"
          />
          <button onClick={handleSendMessage}>Enviar Mensaje</button>
        </div>
      )} */}
    </div>
  );
}
