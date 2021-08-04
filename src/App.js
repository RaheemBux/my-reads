import './App.css';
import CurrentlyReading from './components/CurrentlyReading/CurrentlyReading';
import WantToRead from './components/WantToRead/WantToRead';
import Read from './components/Read/Read';
import { Component } from 'react';
import { getAll,get,create } from './BookAPI';
import AddButton from './components/AddButton/AddButton';
import './components/Modal/Modal.css'
import Modal from './components/Modal/Modal';

class App extends Component{

  constructor(props){
    super(props)

    this.state = {
      books:[],
      name : '',
      shelf:'',
      url:'',
    }
  }
  componentDidMount(){
    getAll().then(respone=>{
      console.log(respone.data.books)
      this.setState({books:respone.data.books})
      })     
  }
  handleChange = (e,id) =>{   
        get(id).then(response=>{ 
          let newbook={...response.data.book}
          let newShelf = e.target.value
          if(newShelf==='Read'){
            newbook.shelf='read'
          }
          if(newShelf==='Want To Read'){
            newbook.shelf='wantToRead'
          }
          if(newShelf==='Currently Reading'){
            newbook.shelf='currentlyReading'
          }
          let newbooks  = [...this.state.books]
          newbooks=newbooks.filter(book=>book.id!=id)
          this.setState({
            books:[newbook,...newbooks]
          })
        })
	}
  handleFormChange = (e)=>{
    this.setState({ [e.target.name]: e.target.value}); 
  }
  handleSubmit = (e) =>{
    let newBook = {
      name:this.state.name,
      shelf:this.state.shelf,
      imageLinks:{thumbnail:this.state.url}
    }
    this.setState({
      books:[newBook,...this.state.books]
    })
    create(newBook)
    e.preventDefault()
}
  render(){
    return (
      <div className="app">
        <div className="header">
          <h1>My Reads </h1>
        </div>
       
        <CurrentlyReading handleChange={this.handleChange} books={this.state.books.filter(book=>book.shelf==='currentlyReading')}></CurrentlyReading>
        <WantToRead handleChange={this.handleChange} books={this.state.books.filter(book=>book.shelf==='wantToRead')}></WantToRead>
        <Read handleChange={this.handleChange} books={this.state.books.filter(book=>book.shelf==='read')}></Read>   
        <Modal handleSubmit={this.handleSubmit} state={this.state} handleFormChange={(e)=>this.handleFormChange(e)}></Modal>
        <AddButton href="#demo-modal"></AddButton>
        {   console.log('sateeee ',this.state)}
      </div>
    );
  }
}
export default App;