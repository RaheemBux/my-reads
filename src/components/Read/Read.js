import React, { Component } from 'react'
import Book from '../Book/Book'
import '../Read/Read.css'

export default class Read extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            shelfs: ["Read","Currently Reading","Want To Read"],
        }
    }
    render() {
        return (
            <div>
                <h2>Read</h2>
                <hr></hr>
                {
                    this.props.books.map(book=>{
                        return <Book book={book} shelfs={this.state.shelfs}></Book>
                    })
                }
            </div>
        )
    }
}
