import { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import {
    Home as HomeIcon,
    Search as SearchIcon,
    LocalMall as LocalMallIcon,
    Person as PersonIcon
} from "@material-ui/icons";
import Router from "next/router";

const Navigation = pathname => {
    const [active, setActive] = useState(pathname);
    const [openSearch, setOpenSearch] = useState(false);

    return (
        <>
            <BottomNavigation
                className="bottom-navigation"
                value={active}
                onChange={(event, newValue) => {
                    setActive(newValue);
                    switch (newValue) {
                        case "home":
                            Router.push("/");
                            return;
                        case "search":
                            Router.push('/search')
                            return;
                        case "cart":
                            Router.push("/cart");
                            return;
                        case "account":
                            Router.push("/customer/account");
                            return;
                        default:
                            return;
                    }
                }}
            >
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
        </>
    );
};

export default Navigation;
