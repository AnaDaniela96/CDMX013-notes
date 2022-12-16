import React from 'react'

export default function CreateNote () {
    return (
        <div>
           <input placeholder={'Título'} />
           <input placeholder={'Nota'} />
           <button>Guardar</button>
        </div>
    )
}