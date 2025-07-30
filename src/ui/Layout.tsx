import { Link, Outlet } from "react-router";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import "@/src/ui/App.css";

function Layout() {
  return (
    <div className="flex flex-col justify-between w-screen h-screen">
      <header>
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink>
                <Link to="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>
                <Link to="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer>
        <p>
          Copyright &copy; 2025 CERC Wedding Liturgy Generator. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default Layout;
