import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full p-4 flex items-center justify-center">
        <span className="text-sm text-white-500 text-center">
          © 2024 All Rights Reserved.
          <a
            href="https://github.com/htetoozin"
            className="hover:underline ml-1"
          >
            Developed By Htet Oo Zin.
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
