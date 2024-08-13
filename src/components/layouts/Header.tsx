import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
    const { pathname } = useLocation();

    const isActive = (path: string) => pathname === path ? "text-blue-500" : "";

    return (
        <header className="flex font-Yekan justify-between px-8 py-3 border-b-2">
            <div>Logo</div>
            <div>
            <ul className="flex gap-3">
                {['/', '/products', '/projects', '/about'].map((path, index) => {
                    const labels = ['صفحه اصلی', 'محصولات', 'پروژه ها', 'درباره ما'];
                    return (
                        <Link key={path} to={path}>
                            <li className={`cursor-pointer ${isActive(path)}`}>{labels[index]}</li>
                        </Link>
                    );
                })}
            </ul>
                
            </div>
        </header>
    );
}

export default Header;
