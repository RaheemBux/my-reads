import './App.css';
import CurrentlyReading from './components/CurrentlyReading/CurrentlyReading';
import WantToRead from './components/WantToRead/WantToRead';
import Read from './components/Read/Read';
import { Component } from 'react';
import { getAll,get } from './BookAPI';

class App extends Component{

  constructor(props){
    super(props)

    this.state = {
      books:[],
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
  render(){
    return (
      <div className="app">
        <div className="header">
          <h1>My Reads </h1>
        </div>
        <CurrentlyReading handleChange={this.handleChange} books={this.state.books.filter(book=>book.shelf==='currentlyReading')}></CurrentlyReading>
        <WantToRead handleChange={this.handleChange} books={this.state.books.filter(book=>book.shelf==='wantToRead')}></WantToRead>
        <Read handleChange={this.handleChange} books={this.state.books.filter(book=>book.shelf==='read')}></Read>   
      </div>
    );
  }
}
export default App;
