import buttonImage from '../../plus.png';
import '../AddButton/AddButton.css'

const AddButton = (props) =>{
    
    const {onClick,name,href} = props
    return <button
            className="btn"
            onClick={onClick}       
            name={name}>
            <a href={href}><img src={buttonImage} className="img"></img></a>    
    </button>

}
export default AddButton;