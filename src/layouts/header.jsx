import { useState, useRef, useEffect } from "react";
import { useTheme } from "@/hooks/use-theme";
import { Bell, ChevronsLeft, Moon, Search, Sun } from "lucide-react";
import profileImg from "@/assets/profile-image.jpg";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"; // ✅ Importa hook certo

export const Header = ({ collapsed, setCollapsed }) => {
    const { theme, setTheme } = useTheme();
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const profileRef = useRef();
    const navigate = useNavigate(); // ✅ Hook correto

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setShowProfileMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="relative z-10 flex h-[60px] items-center justify-between bg-white px-4 shadow-md transition-colors dark:bg-slate-900">
            <div className="flex items-center gap-x-3">
                <button
                    className="btn-ghost size-10"
                    onClick={() => setCollapsed(!collapsed)}
                >
                    <ChevronsLeft className={collapsed && "rotate-180"} />
                </button>
                <div className="input">
                    <Search
                        size={20}
                        className="text-slate-300"
                    />
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search..."
                        className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:text-slate-50"
                    />
                </div>
            </div>
            <div
                className="relative flex items-center gap-x-3"
                ref={profileRef}
            >
                <button
                    className="btn-ghost size-10"
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                    <Sun
                        size={20}
                        className="dark:hidden"
                    />
                    <Moon
                        size={20}
                        className="hidden dark:block"
                    />
                </button>
                <button className="btn-ghost size-10">
                    <Bell size={20} />
                </button>
                <button
                    className="size-10 overflow-hidden rounded-full"
                    onClick={() => setShowProfileMenu((prev) => !prev)}
                >
                    <img
                        src={profileImg}
                        alt="profile image"
                        className="size-full object-cover"
                    />
                </button>

                {/* Dropdown Menu */}
                {showProfileMenu && (
                    <div className="absolute right-0 top-14 w-48 rounded-md bg-white p-2 shadow-lg dark:bg-slate-800">
                        <button
                            className="w-full rounded px-4 py-2 text-left text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
                            onClick={() => {
                                navigate("/minha-conta");
                                setShowProfileMenu(false);
                            }}
                        >
                            Minha Conta
                        </button>
                        <button
                            className="w-full rounded px-4 py-2 text-left text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
                            onClick={() => {
                                navigate("/Configuracoes");
                                setShowProfileMenu(false);
                            }}
                        >
                            Configurações
                        </button>
                        <button
                            className="w-full rounded px-4 py-2 text-left text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
                            onClick={() => {
                                localStorage.removeItem("token");
                                navigate("/login");
                            }}
                        >
                            Sair
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

Header.propTypes = {
    collapsed: PropTypes.bool,
    setCollapsed: PropTypes.func,
};
