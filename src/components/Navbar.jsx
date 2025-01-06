function Navbar() {
  return (
    <nav className="flex flex-row justify-between p-2">
      <h1 className="text-3xl font-bold">My Blog</h1>
      <ul className="flex flex-row text-xl gap-2">
        <li>About</li>
        <li>
          <button type="button">Login</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
