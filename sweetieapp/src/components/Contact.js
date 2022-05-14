import React, { useState } from "react";

const Contact = () => {
  const [myname, setMyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newEntry, setNewEntry] = useState([])




  {/*const inputHandler=(e)=>{
  e.preventDefault();
  const name=e.prevent.name;
  const value=e.prevent.value;
  setNewEntry((previousData)=>{
  return{
    ...previousData,
    [name]:value

  }
})}*/}







  const submitHandler = (e) => {
    e.preventDefault();
    const newData = {
      myname: myname,
      email: email,
      password: password
    };

    setNewEntry([...newEntry, newData]);
    setMyName("");
    setEmail("");
    setPassword("");







  }

  return (
    <div className="login">
      <form className="container" onClick={submitHandler}>
        <h1>Login </h1>
        <div className="mb-3">

          <label className="form-label" for="exampleInputName">userName</label>
          <input type="text" className="form-control" id="exampleInputName" name="myname" value={myname} onChange={(e) => setMyName(e.target.value)} />
          {(myname.length < 6) ? <p>name should be more than 6 char</p> :{ myname}}
        </div>
        <div className="mb-1">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} value={email} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          {(email("")) ? <p>theis folder is required......</p> : email}
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
          {(password < 6) && (password > 12) && (password("")) ? <p>password should have min 6 char and max 12 char</p> : password}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        {(password = { password }) && (email = { email }) && (myname = { myname }) ? <p>{myname} is registerted sucessfully...</p> : setNewEntry(false)}
      </form>
    </div>


  );
}

export default Contact;
