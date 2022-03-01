import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Titles = () => {

    const [title, setTitle] = useState('')
    const [novels, setNovels] = useState([])
    const [filteredNovels, setFilteredNovels] = useState([])

    useEffect(() => {
        const fetchTitleAndAuthor = async () => {
            const fetchedNovels = await axios.get('http://localhost:1337/api/novels')
          setNovels(fetchedNovels.data)
        }
        fetchTitleAndAuthor ()
    }, [])

    useEffect(() => {
        setFilteredNovels(novels.filter((novel) => novel.title.toUpperCase().includes(title.toUpperCase())))

    }, [title, novels])

    return (
        <div className="Novels">
           <h1 className="Header">Novels </h1>
            <input type="text" onChange={(event) => setTitle(event.target.value)} />
           <div>{title} </div>
            <div>{filteredNovels.map(novel => {
                return(
                    <div className="Title">
                        <u> {novel.title}</u>  by:
                        <h2 className="Author">{novel.author.nameFirst} {novel.author.nameLast}</h2>
                </div>    
                )
            })
        } </div>
    </div>
    )
}

export default Titles