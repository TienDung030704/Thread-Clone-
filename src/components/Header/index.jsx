function Header({ children }) {
  return (
    <div className="flex items-center justify-center gap-3 text-center font-medium text-black py-4">
      {children}
    </div>
  );
}
export default Header;
