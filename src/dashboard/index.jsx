// =================== Shared Layout ===================
export { default as DashboardLayout } from "./DashboardLayout";

// =================== Admin Dashboard ===================

export { default as AdminHome } from "./admin/pages/AdminHome";
export { default as ManageUsers } from "./admin/pages/ManageUsers";
export { default as Reports } from "./admin/pages/Reports";
export { default as Lab } from "./admin/pages/Lab";
export { default as Pharmacy } from "./admin/pages/Pharmacy";
export { default as Staff } from "./admin/pages/Staff";

// =================== Staff Dashboard ===================

export { default as DoctorHome } from "./staff/pages/DoctorHome";
export { default as PatientList } from "./staff/pages/PatientList";
export { default as Schedule } from "./staff/pages/Schedule";

// =================== Patient Dashboard ===================

export { default as PatientHome } from "./patient/pages/PatientHome";
export { default as Appointments } from "./patient/pages/Appointments";
export { default as Records } from "./patient/pages/Records";


export { default as AdminLogin } from "./admin/AdminLogin";
export {default as DoctorLogin} from "./staff/DoctorLogin";
export { default as PatientLogin } from "./patient/PatientLogin";
export {default as DoctorRegister} from "./staff/DoctorRegister";