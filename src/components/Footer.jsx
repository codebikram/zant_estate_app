import { Link } from 'react-router-dom';
import { GiVintageRobot } from 'react-icons/gi';

const Footer = () => {
  return (
    <footer className=' bg-slate-100 text-slate-700'>
      <p className='p-2 sm:p-5 fixed bottom-10 right-0 z-50 text-7xl'>
        <Link to='/about' className='text-blue-500 font-bold hover:underline '>
          <GiVintageRobot />
        </Link>
      </p>

      <p className='p-2 sm:p-5 text-center text-sm'>
        Copyright &copy; 2024 All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
