import React from "react";

const ThankYou = () => {
  return (
    <div className="text-center p-[37.5vh] mt-5rem">
      <h1>Thank you for contacting me!</h1>
      <p>I appreciate your message and will get back to you soon.</p>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>Access my LinkedIn: <a href="https://www.linkedin.com/in/michel-adelino/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">here</a></p>
        <p>Access my GitHub: <a href="https://github.com/MichMatrix" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">here</a></p>
      </div>
    </div>
  );
};

export default ThankYou;
