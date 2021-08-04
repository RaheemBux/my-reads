import { Component } from 'react';
import '../Modal/Modal.css'

class Modal extends Component {

    constructor(props){
        super(props)
    }

   
    render(){

        return <>
        <div id="demo-modal" className="modal">
            <div className="modal__content">
                <h1>Add Book</h1>
                <form onSubmit={this.props.handleSubmit}>
                    <label>Name : </label>
                    <input type="text" name="name" value={this.props.state.name} onChange={(e)=>this.props.handleFormChange(e)}></input><br></br><br></br>

                    <label>Shelf : </label>
                    <input type="text" name="shelf" value={this.props.state.shelf} onChange={(e)=>this.props.handleFormChange(e)}></input><br></br><br></br>

                    <label>Image Url : </label>
                    <input type="text" name="url" value={this.props.state.url} onChange={(e)=>this.props.handleFormChange(e)}></input><br></br><br></br>

                    <input type="submit" value="Add"></input>

                </form>
                
                <a href="#" className="modal__close">&times;</a>
            </div>
        </div>
        </>

    }  
}
export default Modal;