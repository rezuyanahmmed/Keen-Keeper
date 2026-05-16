import { createContext, useState } from 'react';

export const InteractionContext = createContext();

export const InteractionProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addLog = (type, friendName) => {
    const newEntry = {
      id: Date.now(),
      type, // 'Call', 'Text', 'Video'
      name: friendName,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    };
    setTimeline([newEntry, ...timeline]);
  };

  return (
    <InteractionContext.Provider value={{ timeline, addLog }}>
      {children}
    </InteractionContext.Provider>
  );
};