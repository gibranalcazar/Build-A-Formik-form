import './App.css';
import {useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email:'',
      password:''
    },
    onSubmit: values => {
      console.log('form:', values)
      alert('Login Successful!');
    },
    validate: values => { //This function is expected to return all the errors
      let errors = {};
      if (!values.name) {errors.name = 'Field required'};
      if (!values.email) {errors.email = 'Field required'};
      if (!values.password) {errors.password = 'Field required'};
      return errors;
    }
  });
  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <div>Name</div>
        <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name}/>
        {formik.errors.name ? <div style={{color: 'red'}}>{formik.errors.name}</div> : null }
        <div>Email</div>
        <input id="emailField" type="text" name="email" onChange={formik.handleChange} value={formik.values.email}/>
        <div id="emailError">{formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null }</div>
        <div>Pasword</div>
        <input id="pswField" type="text" name="password" onChange={formik.handleChange} value={formik.values.password}/>
        <div id="pswError">{formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.password}</div> : null }</div>
        <button id="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
