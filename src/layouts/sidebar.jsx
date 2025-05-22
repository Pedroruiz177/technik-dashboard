import { forwardRef, useState } from "react";
import { NavLink } from "react-router-dom";

import { navbarLinks } from "@/constants";

import logoLight from "@/assets/logo-light.svg";
import logoDark from "@/assets/logo-dark.svg";

import { cn } from "@/utils/cn";

import PropTypes from "prop-types";

export const Sidebar = forwardRef(({ collapsed }, ref) => {
    // Estado que armazena os títulos dos menus abertos
    const [openMenus, setOpenMenus] = useState([]);

    // Função para abrir/fechar submenu ao clicar no link principal
    const toggleMenu = (label) => {
        if (openMenus.includes(label)) {
            setOpenMenus(openMenus.filter((item) => item !== label));
        } else {
            setOpenMenus([...openMenus, label]);
        }
    };

    return (
        <aside
            ref={ref}
            className={cn(
                "fixed z-[100] flex h-full w-[240px] flex-col overflow-x-hidden border-r border-slate-300 bg-white [transition:_width_300ms_cubic-bezier(0.4,_0,_0.2,_1),_left_300ms_cubic-bezier(0.4,_0,_0.2,_1),_background-color_150ms_cubic-bezier(0.4,_0,_0.2,_1),_border_150ms_cubic-bezier(0.4,_0,_0.2,_1)] dark:border-slate-700 dark:bg-slate-900",
                collapsed ? "md:w-[70px] md:items-center" : "md:w-[240px]",
                collapsed ? "max-md:-left-full" : "max-md:left-0",
            )}
        >
            <div className="flex gap-x-3 p-3">
                <img
                    src={logoLight}
                    alt="Logoipsum"
                    className="dark:hidden"
                />
                <img
                    src={logoDark}
                    alt="Logoipsum"
                    className="hidden dark:block"
                />
                {!collapsed && <p className="text-lg font-medium text-slate-900 transition-colors dark:text-slate-50">Logoipsum</p>}
            </div>

            <div className="flex w-full flex-col gap-y-4 overflow-y-auto overflow-x-hidden p-3 [scrollbar-width:_thin]">
                {navbarLinks.map((navbarLink) => (
                    <nav
                        key={navbarLink.title}
                        className={cn("sidebar-group", collapsed && "md:items-center")}
                    >
                        <p className={cn("sidebar-group-title", collapsed && "md:w-[45px]")}>{navbarLink.title}</p>

                        {navbarLink.links.map((link) => (
                            <div
                                key={link.label}
                                className="w-full"
                            >
                                {/* Se tiver subLinks, faz clique para abrir/fechar */}
                                {link.subLinks ? (
                                    <button
                                        type="button"
                                        onClick={() => toggleMenu(link.label)}
                                        className={cn("sidebar-item flex w-full items-center justify-between", collapsed && "md:w-[45px]")}
                                    >
                                        <div className="flex items-center gap-x-2">
                                            <link.icon size={22} />
                                            {!collapsed && <p className="whitespace-nowrap">{link.label}</p>}
                                        </div>
                                        {/* Indicador de aberto/fechado */}
                                        {!collapsed && <span className="text-sm">{openMenus.includes(link.label) ? "▾" : "▸"}</span>}
                                    </button>
                                ) : (
                                    <NavLink
                                        to={link.path}
                                        className={cn("sidebar-item", collapsed && "md:w-[45px]")}
                                    >
                                        <link.icon size={22} />
                                        {!collapsed && <p className="whitespace-nowrap">{link.label}</p>}
                                    </NavLink>
                                )}

                                {/* Renderiza os sublinks só se o menu estiver aberto */}
                                {!collapsed && link.subLinks && openMenus.includes(link.label) && (
                                    <div className="ml-6 mt-1 flex flex-col gap-y-1">
                                        {link.subLinks.map((subLink) => (
                                            <NavLink
                                                key={subLink.label}
                                                to={subLink.path}
                                                className={cn(
                                                    "sidebar-subitem flex items-center gap-x-2 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100",
                                                )}
                                            >
                                                <subLink.icon size={16} />
                                                <span>{subLink.label}</span>
                                            </NavLink>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                ))}
            </div>
        </aside>
    );
});

Sidebar.displayName = "Sidebar";

Sidebar.propTypes = {
    collapsed: PropTypes.bool,
};
