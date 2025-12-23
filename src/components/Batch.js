import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
function Batch() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

  };
  return (
    <div style={{ width: "350px", height: "100px", margin: "auto", padding: "90px" }}>
      <h2>Batch details</h2>

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
export default Batch;