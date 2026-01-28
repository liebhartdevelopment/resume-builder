import { Route, Routes } from "react-router-dom";
import { Dashboard, Home, Layout, Login, Preview, ResumeBuilder } from "#pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='app' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='builder/:resumeId' element={<ResumeBuilder />} />
        </Route>

        <Route path='view/:resumeId' element={<Preview />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
