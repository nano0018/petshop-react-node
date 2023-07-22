import AdminPanelSidebar from "@components/AdminPanelSidebar";
import PropTypes from "prop-types";
function AdminPanelLayout({ children }) {
  return (
    <>
      <AdminPanelSidebar />
      <div className="flex flex-row justify-center items-center w-full">
        {children}
      </div>
    </>
  );
}

AdminPanelLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AdminPanelLayout;
