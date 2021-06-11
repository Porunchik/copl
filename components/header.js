function Header({ languages }) {
    return (
        <header class="header">
            <div class="header__content">
                <div class="header__menu">
                    <nav class="menu__body">
                        <ul class="menu__list">
                            <li><a href="/" class="menu__link">Где я?</a></li>
                            {languages.map((language) =>
                                <li><a href={'/languages/' + language.id} class="menu__link">{language.name}</a></li>
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header