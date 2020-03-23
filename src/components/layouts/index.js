import Navigation from "../navigation"

const Layout = (Page, props) => {
    return class Layout extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            const className =
                this.props.pageConfig && this.props.pageConfig.className
                    ? " " + this.props.pageConfig.className
                    : "";
            return (
                <div>
                    <header></header>
                    <main>
                        <div className="pages">
                            <Page {...this.props} />
                        </div>
                    </main>
                    <footer>
                        <Navigation />
                    </footer>
                </div>
            );
        }
    };
}

export default Layout;
