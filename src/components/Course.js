import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
function Course() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    toast.success("Login Successful!");
    navigate("/CourseDetails");
  };
  return (
    <div style={{ width: "350px", height: "100px", margin: "auto", padding: "90px" }}>
      <h2>Course details</h2>
      <form onSubmit={handleLogin}>
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br />
        <button type="submit">Submit</button>
      </form>

    </div>
  );
}
export default Course;