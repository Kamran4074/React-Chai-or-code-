const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo or Brand Name */}
        <h1 className="text-xl font-bold">MyApp</h1>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <a href="/" className="hover:text-blue-400">Home</a>
          <a href="/posts" className="hover:text-blue-400">Posts</a>
          <a href="/about" className="hover:text-blue-400">About</a>
          <a href="/contact" className="hover:text-blue-400">Contact</a>
        </nav>

        {/* Login Button */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
