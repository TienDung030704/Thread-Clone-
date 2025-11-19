function Header({ children }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <h1 className="text-center font-medium text-black py-4">{children}</h1>
    </div>
  );
}
export default Header;
