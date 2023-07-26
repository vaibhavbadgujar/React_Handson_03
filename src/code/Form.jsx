import { useState } from "react";
import './style.css';
import Data from './Data.jsx';
const Form = () => {

    const [formState, setFormState] = useState({
        name:"",
        department:"",
        rating:"",
        data:[],
    });

    const [submitState, setSubmitState] = useState(false);

    const toGoBack = () => {
        setSubmitState(!submitState);
    };

    const handleOnChange = (event) => {
        const {name, value} = event.target;
        setFormState({...formState, [name]:value});
    };

    const buttonFunc = (event) => {
        event.preventDefault();
        const saveData = {
            name: formState.name,
            department: formState.department,
            rating: formState.rating
        }
        const arr = formState.data;
        arr.push(saveData);
        setFormState({data : arr});
        setSubmitState(true);
    };

    
    return(
        <div>
            {!submitState ?
            <>
            <h1>Employee Feedback Form</h1>
            <form>
                <label> Name &nbsp; &nbsp;
                    <input type={"text"} name={"name"} value={formState.name} onChange={handleOnChange} />
                </label>
                <br/><br/>
                <label> Department &nbsp; &nbsp;
                    <input type={"text"} name={"department"} value={formState.department} onChange={handleOnChange} />
                </label>
                <br/><br/>
                <label> Rating &nbsp; &nbsp;
                    <input type={"number"} name={"rating"} value={formState.rating} onChange={handleOnChange} />
                </label>
                <br/><br/><br/><br/>
                <button type="submit" onClick={buttonFunc}>Submit</button>
            </form>
            </> :
            <Data empData = {formState.data} goBack = {toGoBack} /> }
        </div>
    );
}

export default Form;