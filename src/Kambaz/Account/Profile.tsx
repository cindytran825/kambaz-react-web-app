// import { Link } from "react-router-dom";
// export default function Profile() {
//   return (
//     <div id="wd-profile-screen">
//       <h3>Profile</h3>
//       <input defaultValue="alice" placeholder="username" className="wd-username"/><br/>
//       <input defaultValue="123"   placeholder="password" type="password"
//              className="wd-password" /><br/>
//       <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" /><br/>
//       <input defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" /><br/>
//       <input defaultValue="2000-01-01" type="date" id="wd-dob" /><br/>
//       <input defaultValue="alice@wonderland" type="email" id="wd-email" /><br/>
//       <select defaultValue="FACULTY" id="wd-role">
//         <option value="USER">User</option>       <option value="ADMIN">Admin</option>
//         <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
//       </select><br/>
//       <Link to="/Kambaz/Account/Signin" >Sign out</Link>
//     </div>
// );}
import {  Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-signup-screen">
      <h1>Profile</h1>
      <Form.Control id="wd-name"
        placeholder="alice"
        className="mb-2" />
      <Form.Control id="wd-password"
        placeholder="123" type="name"
        className="mb-2" />
      <Form.Control id="wd-name"
        placeholder="Alice" type="name"
        className="mb-2" />
      <Form.Control id="wd-name"
        placeholder="Wonderland" type="lastname"
        className="mb-2" />
        <Form.Control className="mb-2" type="date" value="2024-05-06" id="wd-available-from" />
        <Form.Control id="wd-name"
        placeholder="alice@wonderland.com" type="email"
        className="mb-2" />
         <Form.Control id="wd-name"
        placeholder="User" type="user"
        className="mb-2" />

      <Link id="wd-signin-btn"
        to="/Kambaz/Account/Profile" 
        className="btn btn-danger w-100 mb-2">
        Sign out </Link>

    
    </div>);
}
