import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='flex bg-slate-100 flex-wrap justify-between  items-center text-slate-700 text-sm'>
      <p className='p-2 sm:p-5'>
        Need Help?
        <Link to='/about' className='text-blue-700 font-bold hover:underline'>
          Chat with Us
        </Link>
      </p>
      <p className='p-2 sm:p-5'>Copyright &copy; 2024 All rights reserved</p>
    </footer>
  );
};

export default Footer;
