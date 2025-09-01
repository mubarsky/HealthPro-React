import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import React from "react";
import {
  Home,
  AboutPage,
  Appointment,
  Doctor,
  HealthLibrary,
  Login,
  Register,
  Service,
  RecoverPassword,
  OtpVerification,
  ResetPassword,
} from "./pages/index";
import * as Dashboard from "./dashboard";
import Layout from "./layout/Layout";
import AuthLayout from "./authLayout/AuthLayout";


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* routes with navbar and footer */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="aboutPage" element={<AboutPage />} />
            <Route path="appointment" element={<Appointment />} />
            <Route path="/doctor-page" element={<Doctor />} />
            <Route path="healthlibrary" element={<HealthLibrary />} />
            <Route path="service" element={<Service />} />
          </Route>
          {/* routes with navbar and footer */}

          {/* auth start */}
          <Route element={<AuthLayout />}>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/recover-password" element={<RecoverPassword />} />
            <Route path="/otp-verification" element={<OtpVerification />} />
            <Route path="/reset-password" element={<ResetPassword/>} />
            {/* New role-specific logins */}
            <Route
              path="/auth/admin-login"
              element={<Dashboard.AdminLogin />}
            />
            <Route
              path="/auth/doctor-login"
              element={<Dashboard.DoctorLogin />}
            />
            <Route
              path="/auth/doctor-register"
              element={<Dashboard.DoctorRegister />}
            />

            <Route
              path="/auth/patient-login"
              element={<Dashboard.PatientLogin />}
            />
            <Route
              path="/auth/doctor-register"
              element={<Dashboard.DoctorRegister />}
            />
          </Route>
          {/* routes without navbar and footer */}

          {/* dashboard start */}

          {/* Admin dashboard */}
          <Route path="/admin" element={<Dashboard.DashboardLayout />}>
            <Route index element={<Dashboard.AdminHome />} />
            <Route path="manage-users" element={<Dashboard.ManageUsers />} />
            <Route path="reports" element={<Dashboard.Reports />} />
          </Route>

          {/* Staff dashboard */}
          <Route path="/doctor" element={<Dashboard.DashboardLayout />}>
            <Route index element={<Dashboard.DoctorHome />} />
            <Route path="patient-list" element={<Dashboard.PatientList />} />
            <Route path="schedule" element={<Dashboard.Schedule />} />
          </Route>

          {/* Patient dashboard */}
          <Route path="/patient" element={<Dashboard.DashboardLayout />}>
            <Route index element={<Dashboard.PatientHome />} />
            <Route path="appointments" element={<Dashboard.Appointments />} />
            <Route path="records" element={<Dashboard.Records />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
