function Header() {
    return (
        <nav className="indigo darken-2">
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">
                    React Shop
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="https://github.com/denchikchor/simple-react-shop">
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
