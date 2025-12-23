import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
function StudentList() {
    return (
         <div style={{ width: "350px", height: "100px", margin: "auto", padding: "90px",display:"grid"}}>
            <h1 style={{color:"red"}}>STUDENTS DETAILS</h1>
             <h3>Ajay</h3>
            <h3>Vijay</h3>
            <h3>Abhay</h3>
            <h3>Tanmay</h3>
            <h3>Chinmay</h3></div>
    )
}
export default StudentList;