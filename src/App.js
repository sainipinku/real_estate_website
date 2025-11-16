import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "./Home/Main";
import About from "./About/About";
import Blog from "./Blog/Blog";
import Details from "./Blog/Details";
import Career from "./Career/Career";
import Contact from "./Contact/Contact";
import Project from "./Project/Project";
import ProjectDetails from "./Project/Details";
import CareerDetails from "./Career/Details";

import Services from "./Services/Services";
import BlogView from "./Admin/Blog/BlogView";
import { Toaster } from "react-hot-toast";
import ListTeam from "./Admin/Team/ListTeam";
import ContactList from "./Admin/contact/ContactList";
import CareerView from "./Admin/Career/CareerView";
import JobList from "./Admin/Job/JobList";
import AddBlog from "./Admin/Blog/AddBlog";
import ProjectAdd from "./Admin/project/ProjectAdd";
import ProjectList from "./Admin/project/ProjectList"
import AdminProjectDetail from "./Admin/project/Details"

import Login from "./Admin/component/Login";
import Dashboard from "./Admin/Dashboard/Dashboard";
import Setting from "./Admin/setting/Setting";
import ServicesDetails from "./Services/Details";
import ScrollToTop from "./component/ScrollToTop";
import { AudioProvider } from './contexts/AudioContext';

function App() {
  return (
      <AudioProvider>
    <Router>
      <ScrollToTop />   {/* Scroll to top*/}
      <Toaster position="top-right"
        reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServicesDetails />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:slug" element={<ProjectDetails />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/blog/details" element={<Details />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/career/:slug" element={<CareerDetails />} />
        {/* Admin Chnagement */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/team" element={<ListTeam />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/contact-list" element={<ContactList />} />
        <Route path="/admin/blog-list" element={<BlogView />} />
        <Route path="/admin/blog-add" element={<AddBlog />} />
        <Route path="/admin/blog-update/:Id" element={<AddBlog />} />
        <Route path="/admin/job-list" element={<JobList />} />
        <Route path="/admin/career-user-list" element={<CareerView />} />
        <Route path="/admin/project-add" element={<ProjectAdd />} />
        <Route path="/admin/project-edit/:id" element={<ProjectAdd />} />

        <Route path="/admin/project-list" element={<ProjectList />} />
        <Route path="/admin/project-details/:slug" element={<AdminProjectDetail />} />

        <Route path="/admin/project-update/:Id" element={<ProjectAdd />} />
        <Route path="/admin/settings" element={<Setting />} />
      </Routes>
    </Router>
    </AudioProvider>
  );
}
export default App;
