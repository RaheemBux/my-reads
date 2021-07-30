import './App.css';
import CurrentlyReading from './components/CurrentlyReading/CurrentlyReading';
import WantToRead from './components/WantToRead/WantToRead';
import Read from './components/Read/Read';
import { Component } from 'react';
import { getAll } from './BookAPI';

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
  render(){
    return (
      <div className="app">
        <div className="header">
          <h1>My Reads</h1>
        </div>
        <CurrentlyReading books={this.state.books.filter(book=>book.shelf==='currentlyReading')}></CurrentlyReading>
        <WantToRead books={this.state.books.filter(book=>book.shelf==='wantToRead')}></WantToRead>
        <Read books={this.state.books.filter(book=>book.shelf==='read')}></Read>   
      </div>
    );
  }
  
}

export default App;
