import React from "react";

function ArchivedButton({ id, archived, onArchived}){
    return <button className="note-item__archive-button" onClick={() => onArchived(id)}>{archived === true ? 'Undo' : 'Archive'}</button>
}

export default ArchivedButton;