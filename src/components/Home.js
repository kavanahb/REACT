import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
function Home() {
  return (
    <div style={{ width: "350px", border: "2px", margin: "auto", padding: "30px" }}>
      <h2>Welcome to Homepage</h2>

      <div style={{ display: "grid", gap: "30px" }}>
        <Link to="/Course">
          <button>CREATE-COURSE</button>
        </Link>
        <Link to="/Batch">
          <button>CREATE-BATCH</button>
        </Link>
        <Link to="/Student">
          <button>ASSIGN-STUDENT</button>
        </Link>
      </div>
    </div>


  );
}

export default Home;
