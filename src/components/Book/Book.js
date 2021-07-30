import { Component } from 'react'
import { get, update } from '../../BookAPI.js'
import '../Book/Book.css'

class Book extends Component {

    constructor(props){
        super(props)

        this.state = {
            shelf : '',
        }
    }
    handleChange = (e,id)=>{
		//this.setState({ [e.target.name]: e.target.value});
        console.log('idddd ',id)
        console.log('Value ',e.target.value)
        get(id).then(rec=>update(rec.data.book,e.target.value))
	}
    render(){

        return <div key={this.props.book.id} className="book">
            <img src={this.props.book.imageLinks.thumbnail}></img>
            <p>{this.props.book.title}</p>
            <select name="shelf" onChange={(e)=>this.handleChange(e,this.props.book.id)}>
                <option value={this.props.shelfs[0]}>{this.props.shelfs[0]}</option>
                <option value={this.props.shelfs[1]}>{this.props.shelfs[1]}</option>
                <option value={this.props.shelfs[2]}>{this.props.shelfs[2]}</option>
            </select>
            <p>{this.state.shelf}</p>
            
        </div>

    }
}
export default Book
