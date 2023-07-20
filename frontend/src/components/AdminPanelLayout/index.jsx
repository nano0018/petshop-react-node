
import AdminPanelSidebar from '@components/AdminPanelSidebar';
import PropTypes from 'prop-types';
function AdminPanelLayout({ children }) {
  return (
    <div className="flex flex-row justify-start items-center w-full">
      <AdminPanelSidebar />
      {children}
    </div>
  );
}

AdminPanelLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AdminPanelLayout
