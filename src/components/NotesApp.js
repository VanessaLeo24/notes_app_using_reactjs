import React from "react";
import NotesHeader from "./NotesHeader";
import NotesInput from "./NotesInput";
import NotesList from "./NotesList";
import { getInitialData, showFormattedDate } from "../utils/index.js";


class NotesApp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            notes: getInitialData(),
            date:showFormattedDate(new Date()),
            searchInput: '',
            text: ''
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchivedHandler = this.onArchivedHandler.bind(this);
        this.onUndoArchivedHandler = this.onUndoArchivedHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
        
    }

    onDeleteHandler(id){
        const notes = this.state.notes.filter(note => note.id !== id);

        this.setState({notes});
    }

    onArchivedHandler(id){
        const notes = this.state.notes.map(note => note.id === id ? {...note, archived : !note.archived} : note);

        this.setState({notes});
    }

    onUndoArchivedHandler(id) {
        const notes = this.state.notes.filter((note) => note.id === id);
        const undoNotes = (notes[0].archived = false);
        this.setState({ undoNotes });
      }

    
    onAddNoteHandler({title, body}){
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        createdAt: new Date().toDateString(),
                        body,
                        archived: false
                    }
                ]
            }
        })

    }

    onSearchHandler(event){
        this.setState(() => {
            return {
                searchInput: event.target.value
            }
        })

       
    }

    
    render(){
        const notes = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.searchInput.toLowerCase())); 

        const activeNote = notes.filter(note => note.archived === false);

        const archivedNote = notes.filter(note => note.archived === true);

        return (
            <div>
                <NotesHeader searchInput={this.state.searchInput} onSearch={this.onSearchHandler} />
                <div className="note-app__body">
                <NotesInput addNote={this.onAddNoteHandler} />

                <h2>Catatan Aktif</h2>
                {activeNote.length > 0 ? 
                <NotesList notes={activeNote} archived={this.state.notes.archived} onDelete={this.onDeleteHandler} onArchived={this.onArchivedHandler} />
                : <p className="notes-list__empty-message">Tidak ada catatan</p>}
                </div>

            <div className="note-app__body archive-class">
                <h2>Catatan Arsip</h2>
                {archivedNote.length > 0 ? 
                <NotesList notes={archivedNote} archived={this.state.notes.archived} onDelete={this.onDeleteHandler} onArchived={this.onArchivedHandler} onUndo={this.onUndoArchivedHandler}  /> 
                 : <p className="notes-list__empty-message">Tidak ada catatan</p>} </div>
           
            
            </div>
        )
    }
}

export default NotesApp;