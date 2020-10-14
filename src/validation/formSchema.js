import * as yup from 'yup';


export default yup.object().shape({


    name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters in length'),

    email: 
    yup
    .string()
    .email()
    .required('E-mail address is required'),


    password:
    yup
    .string()
    // .password()
    .required('You must provide a password')
    .min(5, 'Password must be at least 5 characters in length'),

    citizenshipstatus:
    yup
    .string()
    .oneOf(['citizen', 'noncitizen'], 'You must select your citizenship status'),

    tos:
    yup
    .boolean()


})