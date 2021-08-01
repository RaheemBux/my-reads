import { Component } from 'react'
import '../Book/Book.css'

class Book extends Component {

    constructor(props){
        super(props)

        this.state = {
            shelf : '',
        }
    }
    render(){

        return <div key={this.props.book.id} className="book">
            {
                console.log('propsss ',this.props)
            }
            <img src={this.props.book.imageLinks.thumbnail}></img>
            <p>{this.props.book.title}</p>
            <select name="shelf" onChange={(e)=>this.props.handleChange(e,this.props.book.id)}>
                <option value={this.props.shelfs[0]}>{this.props.shelfs[0]}</option>
                <option value={this.props.shelfs[1]}>{this.props.shelfs[1]}</option>
                <option value={this.props.shelfs[2]}>{this.props.shelfs[2]}</option>
            </select>
            <p>{this.state.shelf}</p>
        </div>

    }
}
export default Book
