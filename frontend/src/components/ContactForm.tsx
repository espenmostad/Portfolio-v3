import React from "react";
import { useState, type FormEvent } from "react";

const createProject = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  export default function ContactForm( ) {

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<Array<{ id: string; title: string; description: string; createdDate: Date;}>>([]);

    const updateName = (event: FormEvent<HTMLInputElement>) => {
        const input = event.target as HTMLInputElement | null;
        if (!input) return;
        setName(input.value);
    };

    const updateMessage = (event: FormEvent<HTMLInputElement>) => {
        const input = event.target as HTMLInputElement | null;
        if (!input) return;
        setMessage(input.value);
    };

    const newMessage = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      
      const newMessage = {
        id: crypto.randomUUID(), // Auto-generate a unique ID
        name,
        message,
      };
  
      console.log(newMessage)
      // Update the projects list by adding the new project
      setMessages((prevMessages) => [...prevMessages, newMessage]);
   
      
      
      // Clear the input fields after submission
      setName("");
      setMessage("");
    };

    
    return (
      <section className="add-project">
        <h2>Send a message</h2>
        <form onSubmit={newMessage}>
            <label htmlFor="name">
                Ditt navn:<br />
                <input type="text" 
                id="name" 
                name="name"
                onChange={updateName}
                value={name}  /><br />
            </label>
            <label htmlFor="message">
                Melding:<br />
                <textarea 
                  id="message" 
                  name="message"
                  onChange={updateMessage}
                  value={message} /><br />
            </label>
            <button type="submit">Send message</button>
        </form>

        {/* Conditional rendering of messages */}
      {messages.length === 0 ? (
        <p>No messages available </p>
      ) : (
        <>
          <h3>Messages:</h3>
          <ul>
            {messages.map((message, index) => (
              <pre key={index}>
                {/* {msg.name}:</strong> {msg.message} */}
                {JSON.stringify(message)}
              </pre>
            ))}
          </ul>
        </>
      )}
  
      </section> 
    );
  }

