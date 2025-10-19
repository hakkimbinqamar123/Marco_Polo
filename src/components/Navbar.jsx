import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAppContext } from '../context/AppContext'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { user, setUser, setShowUserLogin, navigate, setSearchQuery, searchQuery, getCartCount } = useAppContext()

  const logout = async () => {
    setUser(null);
    navigate("/")
  }

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/allproducts")
    }
  }, [searchQuery])

  return (
    <>
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

        <Link onClick={() => setOpen(false)} to="/home" className="navbar-brand d-flex flex-column text-center fw-bold lh-2">
          <span>MARCO POLO</span>
          <small className="text-muted" style={{ fontSize: "0.75rem" }}>
            MEN'S WEAR
          </small>
        </Link>

        <div className="hidden sm:flex items-center gap-8">
          <NavLink to="/" style={{ textDecoration: "none", color: "black" }} >Home</NavLink>
          <NavLink style={{ textDecoration: "none", color: "black" }} to="/about">About</NavLink>
          <NavLink to="/allproducts" onClick={() => setOpen(false)} style={{ textDecoration: "none", color: "black" }} className="block">All Products</NavLink>
          {user && (
            <NavLink style={{ textDecoration: "none", color: "black" }} href="#">My Orders</NavLink>
          )}
          <NavLink to="/contactus" style={{ textDecoration: "none", color: "black" }} >Contact</NavLink>

          <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
            <input onChange={(e)=>setSearchQuery(e.target.value)} className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
            <i class="bi bi-search"></i>
          </div>

          <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
            <i class="bi bi-cart3"></i>
            <button className="absolute -top-2 -right-3 text-xs text-white bg-[#e9c810] w-[20px] h-[20px] rounded-pill">{getCartCount()}</button>
          </div>

          {!user ? (<button onClick={() => {
            setShowUserLogin(true)
          }}  className="cursor-pointer px-8 py-2 bg-[#e9c810] hover:text-black rounded text-white rounded-full transition">
            Login
          </button>)
            :
            (
              <div className="relative group">
                <img src={"https://www.pngall.com/wp-content/uploads/5/Profile.png"} className="w-10" alt="" />
                <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow
              border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40">
                  <li onClick={() => navigate("my-orders")} className="p-1.5 hover:bg-primary/10 cursor-pointer">My Orders</li>
                  <li onClick={logout} className="p-1.5 hover:bg-primary/10 cursor-pointer">Logout</li>
                </ul>
              </div>
            )}

        </div>
        <div className="flex items-center gap-6 sm:hidden">
          <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
            <i class="bi bi-cart3"></i>
            <button className="absolute -top-2 -right-3 text-xs text-white bg-black w-[18px] h-[18px] rounded-pill">{getCartCount()}</button>
          </div>
        </div>

        <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
          <i className="bi bi-list fs-1"></i>
        </button>

        {open && (
          <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
            <NavLink to="/" onClick={() => setOpen(false)} style={{ textDecoration: "none", color: "black" }} className="block">Home</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)} style={{ textDecoration: "none", color: "black" }} className="block">About</NavLink>
            <NavLink to="/allproducts" onClick={() => setOpen(false)} style={{ textDecoration: "none", color: "black" }} className="block">All Products</NavLink>
            {user &&
              <NavLink onClick={() => setOpen(false)} style={{ textDecoration: "none", color: "black" }} to="/myorders">My Orders</NavLink>
            }
            <a to="/contact" onClick={() => setOpen(false)} style={{ textDecoration: "none", color: "black" }} className="block">Contact</a>
            {!user ? (
              <button onClick={() => {
                setOpen(false)
                setShowUserLogin(true)
              }} className="cursor-pointer px-6 py-2 mt-2 bg-black rounded hover:bg-white transition text-white rounded-full text-sm">
                Login
              </button>
            ) :
              (
                <button onClick={logout} className="cursor-pointer px-6 py-2 mt-2 bg-black rounded hover:bg-white transition text-white rounded-full text-sm">
                  Logout
                </button>
              )
            }
          </div>
        )}

      </nav>
    </>
  );
};

export default Navbar;
