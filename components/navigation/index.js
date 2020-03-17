import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import {
    Home as HomeIcon,
    Search as SearchIcon,
    LocalMall as LocalMallIcon,
    Person as PersonIcon
} from "@material-ui/icons";

const Navigation = () => {
    return (
        <BottomNavigation value="recent">
            <BottomNavigationAction
                label="Home"
                value="home"
                icon={<HomeIcon />}
            />
            <BottomNavigationAction
                label="Search"
                value="search"
                icon={<SearchIcon />}
            />
            <BottomNavigationAction
                label="Cart"
                value="cart"
                icon={<LocalMallIcon />}
            />
            <BottomNavigationAction
                label="Account"
                value="account"
                icon={<PersonIcon />}
            />
        </BottomNavigation>
    );
}

export default Navigation;
