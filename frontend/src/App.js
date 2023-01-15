import Controller from "./components/Controller/Controller";
import { GlobalStyle } from "./Body_style";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import News from "./components/User/Dashboard/News/News";
import Timetable from "./components/User/TimeTable/Timetable";
import Grades from "./components/User/Grades";
import Dashboard from "./components/User/Dashboard/Dashboard";
import Attendance from "./components/User/Attendance/Attendance";
import Form from "./components/Form/Form";
import Index from "./components/Index/Index";

import Registration from "./components/admin/Student/Registration";
import AddFaculty from "./components/admin/AddFaculty";
import AddNewCourse from "./components/admin/Course/AddNewCourse";
import UpdateStudent from "./components/admin/Student/UpdateStudent";

const App = () => {
  const { role, logged } = useSelector(({ loginReducer }) => loginReducer);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        {!logged && <Route path="/" element={<Index />} />}
        {logged && (
          <Route path="/" element={<Controller />}>
            <Route index element={<Dashboard />} />

            {role === "student" && (
              <>
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/grades" element={<Grades />} />
                <Route path="/timetable" element={<Timetable />} />
                <Route path="/news" element={<News />} />
                <Route path="/form" element={<Form />} />
              </>
            )}
            {role === "faculty" && (
              <>
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/assignment" element={<Grades />} />
              </>
            )}
          </Route>
        )}
        <Route path="/admin" element={<Controller />}>
          <Route index path="register-student" element={<Registration />} />
          <Route index path="update-student" element={<UpdateStudent />} />
          <Route path="add-faculty" element={<AddFaculty />} />
          <Route path="add-course" element={<AddNewCourse />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
