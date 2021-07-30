import React, { Component } from 'react'
import Book from '../Book/Book'
import '../WantToRead/WantToRead.css'

export default class WantToRead extends Component {

    constructor(props){
        super(props)

        this.state = {
            shelfs: ["Want To Read","Read","Currently Reading"],
        }
    }
    render() {
        return (
            <div>
                <h2>Want to Read</h2>
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
