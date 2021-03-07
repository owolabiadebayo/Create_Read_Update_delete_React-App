import React, { useState } from 'react'

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: '', username: '' }
const [user, setUser] = useState(initialFormState)


const handleInputChange = (e) => {
  const { name, value } = e.target
console.log(name);
console.log(value);
  setUser({ ...user, [name]: value })
}
console.log(user);
  return (
    <form onSubmit={event => {
      event.preventDefault()
      if (!user.name || !user.username) 
      return
  
      props.addUser(user)
      setUser(initialFormState)
    }}>
  <label>Name</label>
  <input
    type="text"
    name="name"
    value={user.name}
    onChange={handleInputChange}
  />
  <label>Username</label>
  <input
    type="text"
    name="username"
    value={user.username}
    onChange={handleInputChange}
  />
  <button>Add new user</button>
</form>
  )
}

export default AddUserForm