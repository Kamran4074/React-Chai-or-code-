const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-4 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {currentYear} Blog. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Built with ❤️ using React & Appwrite
        </p>
      </div>
    </footer>
  );
};

export default Footer;
