import PropTypes from 'prop-types';

function Layout({children}) {
  return (
    <div className='flex flex-col justify-center items-center mt-16'>{children}</div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};


export default Layout
