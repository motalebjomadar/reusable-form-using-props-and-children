

const ReusableForm = ({formTitle, handleSubmit, submitBtnText='Submit', children}) => {

    const handleLocalSubmit = e =>{
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data);
    }

    return (
        <div>
        <h3>{formTitle}</h3>
        <h2>{children}</h2>
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name"/>
                <br/>
                <input type="text" name="email" required/>
                <br/>
                <input type="text" name="password" required/>
                <br/><br/>
                <input type="submit" value={submitBtnText}/>
            </form>
        </div>
    );
};

export default ReusableForm;