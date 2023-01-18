import React from "react";
import DeleteButton from "./DeleteButton";
import ArchivedButton from "./ArchivedButton";

function NotesItemAction({ id, archived, onDelete, onArchived}){
    return (
       <div className="note-item__action">
            <DeleteButton id={id} onDelete={onDelete} />
            <ArchivedButton id={id} archived={archived} onArchived={onArchived} />
       </div> 
    )
}

export default NotesItemAction;