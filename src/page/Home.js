import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Note from '../components/Note';
import CreateArea from '../components/CreateArea';

function Home() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((note, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header/>
            <CreateArea onAdd={addNote}/>
            {notes.map((note, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={note.title}
                        content={note.content}
                        onDelete={deleteNote}
                    />
                );
            })}
            <Footer/>
        </div>
    )
}

export default Home;