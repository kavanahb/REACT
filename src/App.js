import { BrowserRouter, Routes, Route } from "react-router-dom";

import Admin from "./components/Admin";
import Home from "./components/Home";
import Batch from "./components/Batch";
import Course from "./components/Course";
import Student from "./components/Student";
import CourseDetails from "./components/Course_details";
import StudentList from "./components/Student_List";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Student" element={<Student />} />
        <Route path="/Batch" element={< Batch />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/CourseDetails" element={<CourseDetails />} />
        <Route path="/StudentList" element={<StudentList />} />
        </Routes>
    </BrowserRouter>
  );
}
export default App;
