import React from "react";
import NotesItem from "./NotesItem";

function NotesList({notes, archived, onDelete, onArchived}){
    return (
        <div className="notes-list">
            {notes.map((note) => (
                <NotesItem key={note.id} id={note.id} archived={archived} onDelete={onDelete} onArchived={onArchived} {...note} />
            ))}
        </div>
    )   
}

export default NotesList;