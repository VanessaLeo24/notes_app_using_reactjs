import React from "react";
import NotesSearch from "./NotesSearch";

function NotesHeader({searchInput, onSearch}){
    return (
        <header className="note-app__header">
            <h1>Notes</h1>
            <NotesSearch searchInput={searchInput} onSearch={onSearch} />
            </header>
    )
}

export default NotesHeader;