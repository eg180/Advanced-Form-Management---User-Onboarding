import React, { useState } from 'react';

export default function UserForm(props) {
    const { values, submit, change, disabled, errors } = props;



    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }
    
    
    const onChange = (evt) => {
        const {name, value, type, checked} = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
    }

    


    return(
        <form onSubmit={onSubmit}>
            <div>
                <label>Name: 
                <input
                value={values.name}
                type="text"
                placeholder="Enter Name"
                name="name"
                onChange={onChange}
                /> 
                </label>
                <br />

                <label>Email:
                    <input
                    value={values.email}
                    type="email"
                    placeholder="Enter e-mail"
                    name="email"
                    onChange={onChange}
                    />
                </label>
                <br />

                <label>Password:
                    <input
                    value={values.password}
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={onChange}
                    />
                </label>
                <br />

                <label>U.S. Citizen:
                    <input
                    value="citizen"
                    type="radio"
                    name="citizenshipstatus"
                    checked={values.citizenshipstatus === "citizen"}
                    onChange={onChange}
                    />
                </label>
                <br />
                <label>Not a U.S. Citizen:
                    <input
                    value="noncitizen"
                    type="radio"
                    name="citizenshipstatus"
                    checked={values.citizenshipstatus === "noncitizen"}
                    onChange={onChange}
                    />
                </label>
                <br />

                <label>Accept TOS
                    <input
                    checked={values.tos}
                    type="checkbox"
                    name="tos"
                    onChange={onChange}
                    />
                </label>
                <br />

                    <button disabled={disabled}>Submit</button>
                
                
            
            </div>
        </form>
    )
}