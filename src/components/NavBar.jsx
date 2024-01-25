import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [serachTerm, setSearchTerm] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermUrl = urlParams.get('searchTerm');
    if (searchTermUrl) {
      setSearchTerm(searchTermUrl);
    }
  }, [location.search]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', serachTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <nav className='bg-slate-200 shadow-md sticky top-0 left-0 right-0 z-50'>
      <div className='flex items-center justify-between p-3 max-w-6xl mx-auto '>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Zant</span>
            <span className='text-slate-700'>Estate</span>
          </h1>
        </Link>
        <form
          className='bg-slate-100 p-2 rounded-lg flex items-center'
          onSubmit={handleSubmit}
        >
          <input
            type='search'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
            value={serachTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li
              className={`${
                location.pathname === '/' ? 'font-bold' : ''
              } hidden sm:inline text-slate-700 hover:underline`}
            >
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li
              className={`${
                location.pathname === '/about' ? 'font-bold' : ''
              } hidden sm:inline text-slate-700 hover:underline`}
            >
              About
            </li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='w-7 h-7 rounded-full object-cover '
                src={currentUser.photo}
                alt='Profile'
              />
            ) : (
              <li
                className={`${
                  location.pathname === '/sign-in' ? 'font-bold' : ''
                } text-slate-700 hover:underline`}
              >
                Sign in
              </li>
            )}
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
