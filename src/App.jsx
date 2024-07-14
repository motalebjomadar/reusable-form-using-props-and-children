
import './App.css'
import ReusableForm from './components/ReusableForm/ReusableForm'

function App() {

  const handleSignUpSubmit = data => {
    console.log('Sign Up data', data );
  }

  const handleUpdateProfile = data => {
    console.log('Update profile', data);
  }

  return (
    <>
      <h1>Reusable form using props and children</h1>
      <ReusableForm 
      formTitle={'SIGN UP'} 
      handleSubmit={handleSignUpSubmit}>
      <div>
        <h2>Sign Up</h2>
        <p>Please sign up here</p>
      </div>
      </ReusableForm>


      <ReusableForm 
      formTitle={'PROFILE UPDATE'} 
      submitBtnText='Update' 
      handleSubmit={handleUpdateProfile}>
      <div>
        <h2>Update Profile</h2>
        <p>Please keep update profile</p>
      </div>
      </ReusableForm>
    </>
  )
}

export default App
