import React, { ReactNode } from 'react';
import FlashMessages from './flashmessages';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <FlashMessages />
      <header className="bg-blue-500 text-white p-4">
        <h1>My Application</h1>
      </header>
      <main className="flex-grow p-4">
        {children}
      </main>
      <footer className="bg-gray-800 text-white p-4">
        <p>Footer content here</p>
      </footer>
    </div>
  );
};

export default Layout;
