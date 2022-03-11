import Logo from "./Logo";

const NavOpen = () => {
  return (
    <nav className="bg-white w-screen h-screen">
      <div className="flex items-center justify-between">
        <Logo url="" />
        <div>
          <button className="uppercase">Close</button>
        </div>
      </div>
    </nav>
  );
};

export default NavOpen;
