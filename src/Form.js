import React from 'react'
import { Field, reduxForm } from 'redux-form';

function myForm(props) {

    const { handleSubmit } = props;

    return (
        <div className="form_wrap" >
            <div className="container">

                <form className="mt-5 w-75 mx-auto" onSubmit={ handleSubmit(formValues => {
                    console.log(formValues)
                })}>

                    <div className="form-group">
                        <label htmlFor="fname" className="font-weight-bold" >First Name:</label>
                        <Field type="text" name="fname" className="form-control" component="input" ></Field>
                    </div>

                    <div className="form-group">
                        <label htmlFor="lname" className="font-weight-bold" >Last Name:</label>
                        <Field type="text" name="lname" className="form-control" component="input" ></Field>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="font-weight-bold" >Email:</label>
                        <Field type="email" name="email" className="form-control" component="input" ></Field>
                    </div>

                    <div className="form-group">
                        <label htmlFor="pwd" className="font-weight-bold" >Password:</label>
                        <Field type="password" name="pwd" className="form-control" component="input" ></Field>
                    </div>

                    <div className="form-group text-center mt-4">
                        <button className="btn btn-md w-25 btn-primary" >Submit</button>
                    </div>

                </form>
            </div>       

        </div>
    )
}

export default reduxForm({
    form : "myForm"
})(myForm);
