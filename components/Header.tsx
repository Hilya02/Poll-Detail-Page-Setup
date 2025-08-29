
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-brand-primary hover:opacity-80 transition-opacity">
                    AI Polls
                </a>
                <nav>
                    <a href="#" className="text-slate-600 hover:text-brand-primary transition-colors">
                        Home
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
