import './style.css';
const Data = (props) => {
    return(
        <>
        <h1>EMPLOYEE FEEDBACK DATA</h1>
        <br/><br/>
        <div className="dataBox">
            {
                props.empData.map( (item,index)=>{
                return(
                    <div className="displayBox">
                        <span>Name: {item.name} | </span>
                        <span>Department: {item.department} | </span>
                        <span>Rating: {item.rating}</span>
                    </div>
                );
                })
            }
        </div>
        <br/><br/><br/><br/><br/><br/>
        <button onClick={props.goBack}> GO BACK </button>
        </>
    );
}

export default Data;