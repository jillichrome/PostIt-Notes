import React, { useState, useEffect } from 'react';

export default function Note() {
  const [note, setNote] = useState(null);

  const handleClick = () => {
    document.querySelector("#note-input").value = "";
  }

  return(
    <div>
      <div>
        <input id="note-input" onChange={(e) => setNote(e.target.value)} placeholder="Type note here..." />
        <button onClick={() => handleClick()}>Create Note</button>
      </div>
      <div>
        {note}
      </div>
    </div>
  )
}
