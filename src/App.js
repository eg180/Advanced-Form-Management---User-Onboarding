import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import User from "./components/User";
import UserForm from './components/UserForm';
import * as yup from 'yup';
import schema from '../src/validation/formSchema';
import axios from 'axios';




const initialFormValues = {
  name: "",
  email: "",
  password: "",
  citizen: "",
  tos: false
}



const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  citizen: "",
};

const initialUsers = [];
const initialDisabled = true;





export default function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(initialDisabled);







  const postNewuser = (newUser) => {
    axios
    .post("https://reqres.in/api/users", newUser)
    .then((res) => {
      setUsers([res.data, ...users]);
      setFormValues(initialFormValues);
    })
  }


// Handle change from updated form on submit - see line 7 on UserForm
const inputChange = (name, value) => {
  yup
  .reach(schema, name)
  .validate(value)
  .then(() => {
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  })
  .catch((err) => {
    setFormErrors({
      ...formErrors,
      [name]: err.errors[0],
    });
  });
  setFormValues({
    ...formValues,
    [name]: value,
  });
}


const formSubmit = () => {
  const newUser = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    citizenshipstatus: formValues.citizenshipstatus.trim(),
  }
  postNewuser(newUser);
};

useEffect(() => {
  // 
  schema.isValid(formValues).then((valid) => {
    setDisabled(!valid);
  });
}, [formValues]);

// useEffect(() => {
//   getUsers();
// }, []);





  return (
    <div className="App">
      <h1>Sign up! (By Erick)</h1>
      <UserForm
      change={inputChange}
      submit={formSubmit}
      values={formValues}
      disabled={disabled}
      errors={formErrors}
      />

      {users.map((user) => {
        return <User key={user.id} details={user} />;
      })}

    </div>
  );
}


