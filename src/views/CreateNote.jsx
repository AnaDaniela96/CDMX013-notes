
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
        .then(() => {
        console.log('El post se guardo correctamente. ');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(
          'El mensaje tiene un error, por eso no se publicó.',
          errorMessage,
        );
      });
    }}
    
    >
      <input type='text' name='titulo' placeholder="Título"></input>
      <input type='text' name='note'  placeholder="Nota"></input>
      <button type='sumbit'>Guardar</button>
    </form>
  );
}
