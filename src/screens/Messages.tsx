import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../components/socket/SocketContext";
import { AuthContext, Conversation } from "../components/auth/AuthContext";

interface Message {
  sender: string;
  content: string;
  timestamp: string;
}

export default function Messages() {
  const { socket } = useContext(SocketContext);
  const { user, conversations } = useContext(AuthContext);

  const [selectedConversation, setSelectedConversation] =
    useState<Conversation | null>(null);
  const [newMessage, setNewMessage] = useState<string>("");

  // Obtener conversaciones del usuario cuando el componente se monta
  useEffect(() => {
    async function fetchConversations() {
      try {
        const response = await fetch(
          `http://localhost:3000/api/conversations/${user?.id}`,
        );
        const data = await response.json();
        setConversations(data);
      } catch (error) {
        console.error("Error al obtener conversaciones:", error);
      }
    }

    if (user?._id) {
      fetchConversations();
    }
  }, [user]);

  // Escuchar mensajes en tiempo real
  useEffect(() => {
    if (socket && selectedConversation) {
      socket.on("mensaje", (msg: Message) => {
        if (selectedConversation._id === msg.conversationId) {
          setSelectedConversation((prev) => ({
            ...prev!,
            messages: [...prev!.messages, msg],
          }));
        }
      });

      return () => {
        socket.off("mensaje");
      };
    }
  }, [socket, selectedConversation]);

  const handleConversationSelect = (conversation: Conversation) => {
    setSelectedConversation(conversation);
  };

  const handleSendMessage = () => {
    if (socket && selectedConversation && newMessage.trim() !== "") {
      const messageData = {
        conversationId: selectedConversation._id,
        sender: user?._id,
        content: newMessage,
      };

      socket.emit("mensaje", messageData);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-1 gap-8 bg-gray-200 text-blue-950">
      <div className="w-1/3 px-4 py-8">
        {conversations.length === 0 && (
          <div>Aún no tienes ninguna conversación</div>
        )}
        {conversations.map((conversation) => (
          <div
            key={conversation._id}
            onClick={() => handleConversationSelect(conversation)}
            className="conversation-item"
          >
            <p>{conversation.business}</p>
          </div>
        ))}
      </div>
      <div className="flex-1 rounded-l-lg bg-white p-8">
        <div>Selecciona una conversación para enviar un mensaje</div>
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
