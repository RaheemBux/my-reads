import '../Modal/Modal.css'

const Modal = (props) => {

    const {handleSubmit} = props
    return <>
    <div id="demo-modal" className="modal">
            <div className="modal__content">
                <h1>Add Book</h1>
                <form>
                    <label>Name : </label>
                    <input type="text" name="name"></input><br></br><br></br>

                    <label>Shelf : </label>
                    <input type="text" name="shelf"></input><br></br><br></br>

                    <label>Image Url : </label>
                    <input type="text" name="url"></input><br></br><br></br>

                    <input type="button" onClick={handleSubmit} value="Add"></input>

                </form>
                
                <a href="#" className="modal__close">&times;</a>
            </div>
        </div>
        </>
}
export default Modal;