import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <header className="bg-secondary">
      <div className="p-4 flex items-center justify-between container mx-auto">
        <h1 className="text-xl font-semibold">Case Converter Tool Online</h1>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
