
import React, { useState } from "react";
import { savePost } from '../lib/firestore';

export default function CreateNote() {
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
  return (
    <form
    onSubmit={ev => {
        ev.preventDefault();
        setTitle(ev.target.titulo.value)
        setNote(ev.target.note.value)

        savePost({title},{note})
    }}
    
    >
      <input type='text' name='titulo' placeholder="Título"></input>
      <input type='text' name='note'  placeholder="Nota"></input>
      <button type='sumbit'>Guardar</button>
    </form>
  );
}
