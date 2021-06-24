import React, { useEffect } from 'react';
import Note from './note.js';

const notes = props => props.data.map(note => {
  <div>
    {note.text}
  </div>
});

export default NoteList() {
  const [data, setData] = useState(null);

  useEffect(() => {
    if(typeof !== 'undefined') {
      const getData = localStorage.getItem('data');
      if(getData !== "" && getData !== null) {
        return setData(JSON.parse(getData));
      }
      return setData([]);
    }
  }, 0);
  
}
