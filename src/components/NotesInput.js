import React from "react";

class NotesInput extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            body: '',
            titleCharLimit: 50
        }

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onTitleChangeHandler(event){
        if(this.state.titleCharLimit >= 0 && event.target.value.length <= 50){
            this.setState(() => {
                return {
                    title: event.target.value,
                    titleCharLimit: 50 - event.target.value.length
                }
            })    
        }
        
    }

    onBodyChangeHandler(event){
        this.setState(() => {
            return {
                body: event.target.value
            }
        })
    }

    onSubmitHandler(event){
        event.preventDefault();

        this.props.addNote(this.state);
        this.state.body = '';
        this.state.title =''
    
    }

    render(){
        return (
            
        
            
            <form className="note-input" onSubmit={this.onSubmitHandler}>
                <h3 className="note-input__title">Buat Catatan</h3>
                <p className="note-input__title__char-limit">Sisa Karakter : {this.state.titleCharLimit}</p>
              
                <input type="text" value={this.state.title} onChange={this.onTitleChangeHandler} placeholder="Ini adalah judul ..." />
                <textarea className="note-input__body" value={this.state.body} onChange={this.onBodyChangeHandler} placeholder="Tuliskan catatanmu di sini ..."></textarea>
                <button type="submit">Buat</button>
            </form>
           
        )
    }
}

export default NotesInput;