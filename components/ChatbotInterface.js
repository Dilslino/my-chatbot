import React, { useState, useRef } from 'react'
import { Send, Mic, Image as ImageIcon, Paperclip, MoreVertical } from 'lucide-react'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { ScrollArea } from "../components/ui/scroll-area"
import axios from 'axios'

export default function ChatbotInterface() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Halo! Bagaimana saya bisa membantu Anda hari ini?", sender: "bot" },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "") {
      setError("Pesan tidak boleh kosong.")
      return
    }

    setError(null)
    const newMessage = { id: messages.length + 1, text: inputMessage, sender: "user" }
    setMessages([...messages, newMessage])
    setInputMessage("")
    setIsLoading(true)

    try {
      const response = await axios.post('/api/chat', { message: inputMessage })
      const botMessage = { id: messages.length + 2, text: response.data.message, sender: "bot" }
      setMessages(prev => [...prev, botMessage])
    } catch (err) {
      console.error(err)
      setError("Gagal memproses permintaan. Silakan coba lagi.")
    } finally {
      setIsLoading(false)
    }
    const handleImageUpload = () => {
        fileInputRef.current.click();
      };
      
      const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          setSelectedFile(file);
          console.log('File diupload:', file.name);
          // Tambahkan logika untuk mengirim file ke server di sini
        }
      };
      
      const handleAttachFile = () => {
        fileInputRef.current.click();
      };
      
      const handleVoiceInput = () => {
        console.log('Fitur input suara belum diimplementasikan');
        // Implementasi fitur input suara di sini
      };
  }

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <header className="flex items-center justify-between p-4 bg-primary text-primary-foreground">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src="/placeholder.svg" alt="AI" />
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
          <div>
          <h1 className="text-lg font-bold">xDill Assistant</h1>
            <p className="text-sm opacity-75">Online</p>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-6 w-6" />
        </Button>
      </header>

      <ScrollArea className="flex-grow p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.sender === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[70%] rounded-lg p-3 bg-secondary text-secondary-foreground">
              Sedang memproses...
            </div>
          </div>
        )}
        {error && (
          <div className="flex justify-center">
            <div className="text-red-500">{error}</div>
          </div>
        )}
      </ScrollArea>

      <footer className="p-4 bg-background border-t">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon">
            <ImageIcon className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Paperclip className="h-4 w-4" />
          </Button>
          <Input
            type="text"
            placeholder="Ketik pesan..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-grow"
          />
          <Button variant="outline" size="icon">
            <Mic className="h-4 w-4" />
          </Button>
          <Button onClick={handleSendMessage} disabled={isLoading}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </footer>
    </div>
  )
}