import Controller from "./components/Controller/Controller";
import { GlobalStyle } from "./Body_style";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import News from "./components/User/Dashboard/News/News";
import Timetable from "./components/User/TimeTable/Timetable";
import Grades from "./components/User/Grades";
import Dashboard from "./components/User/Dashboard/Dashboard";
import Attendance from "./components/User/Attendance/Attendance";
import Form from "./components/Form/Form";
import Index from "./components/Index/Index";
import { useState } from "react";
import { useSelector } from "react-redux";
import Registration from "./components/admin/Registration";
import Modify from "./components/admin/Modify";

const App = () => {
  const { role } = useSelector(({ loginReducer }) => loginReducer);
  console.log(role);
  const [login, setLogin] = useState(false);
  // const navigate = useNavigate();
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        {!login && <Route path="/" element={<Index setLogin={setLogin} />} />}
        {login && (
          <Route path="/" element={<Controller setLogin={setLogin} />}>
            <Route index element={<Dashboard />} />

            {role === "user" && (
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
        <Route path="/admin" element={<Controller setLogin={setLogin} />}>
          <Route index path="register" element={<Registration />} />
          <Route path="modify" element={<Modify />} />
        </Route>
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
export default App;
