import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
function Student() {
  <Link to="/Student">
    <button>Add student</button>
  </Link>
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
         toast.success("Login Successful!");
        navigate("/StudentList");
    };
  return (
    <div style={{ width: "350px", height: "100px", margin: "auto", padding: "90px"}}>
      <h2>Student details</h2>
      
        <form onSubmit={handleLogin}>
          <input
            type="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /><br />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br />
          <button type="submit">Submit</button>
        </form>
    </div>
  );
}
export default Student;