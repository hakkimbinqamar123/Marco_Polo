import { Link, NavLink, Outlet } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

const SellerLayout = () => {
    const { setIsSeller } = useAppContext();

    const dashboardicon = (
        <i className="bi bi-folder-plus text-black" style={{ fontSize: "24px" }}></i>
    );

    const overviewicon = (
        <i className="bi bi-list-check text-black" style={{ fontSize: "24px" }}></i>
    );

    const chaticon = (
        <i className="bi bi-bag-check text-black" style={{ fontSize: "24px" }}></i>
    );

    const sidebarLinks = [
        { name: "Add Product", path: "/seller", icon: dashboardicon },
        { name: "Product List", path: "/seller/product-list", icon: overviewicon },
        { name: "Orders", path: "/seller/orders", icon: chaticon },
    ];

    const logout = async () => {
        setIsSeller(false);
    };

    return (
        <>
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white">
                <Link
                    to="/seller"
                    className="navbar-brand d-flex flex-column text-center fw-bold lh-2 no-underline"
                >
                    <span>MARCO POLO</span>
                    <small className="text-muted" style={{ fontSize: "0.75rem" }}>
                        MEN'S WEAR
                    </small>
                </Link>
                <div className="flex items-center gap-4 p-2 text-black">
                    <p className="mt-2 text-base">Hi! Admin</p>
                    <button
                        onClick={logout}
                        className="border bg-[#e9c810] hover:text-white rounded-full text-sm px-4 py-1"
                    >
                        Logout
                    </button>
                </div>
            </div>

            <div className="flex">
                <div className="md:w-64 w-16 border-r h-[550px]text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
                    {sidebarLinks.map((item) => (
                        <NavLink
                            to={item.path}
                            key={item.name}
                            end={item.path === "/seller"}
                            style={{ textDecoration: "none" }}
                            className={({ isActive }) =>
                                `flex items-center justify-start py-3 px-4 gap-3 text-xl
                             ${isActive
                                    ? "border-r-4 md:border-r-[6px] border-[#e9c810] text-black font-semibold bg-yellow-100/40"
                                    : "hover:bg-yellow-100/40 text-gray-700"
                                }`
                            }
                        >
                            <span className="flex items-center gap-3">
                                {item.icon}
                                <span className="md:block hidden text-black">{item.name}</span>
                            </span>
                        </NavLink>

                    ))}
                </div>

                <Outlet />
            </div>
        </>
    );
};

export default SellerLayout;
