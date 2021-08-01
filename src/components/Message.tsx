import React from 'react';

type MessageProps = {
  message: string
  className: string
}

const Message = ({ message, className }: MessageProps) => (
  <div className={`App__Message ${className}`}>
    <p>{message}</p>
  </div>
);

export default Message;
