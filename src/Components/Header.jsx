function Header() {
    return (
        <nav className="indigo darken-2">
            <div className="nav-wrapper">
                <a
                    href="https://denchikchor.github.io/react-movies/"
                    className="brand-logo"
                >
                    React Shop
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="https://github.com/denchikchor/react-movies">
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
