import React from "react";
import NotesItemAction from "./NotesItemAction";
import NotesItemBody from "./NotesItemBody";

function NotesItem({ id, title, body,createdAt, archived, onDelete, onArchived}){
    return (
        <div className="note-item">
            <NotesItemBody title={title} createdAt={createdAt} body={body} />
            <NotesItemAction id={id} archived={archived} onDelete={onDelete} onArchived={onArchived} />
        </div>
    )
}

export default NotesItem;