import style from './Header.module.scss';


export function Header() {
    return (
        <header className={style.mainHeader}>
            <h1 className={style.logo}><a href="/">MyPortfolio</a></h1>
            <nav className={style.mainHeaderNav}>
                <ul>
                    <li><a className="/icon-linkedin2" href="https://www.linkedin.com/in/jo%C3%A3o-pedro-s-silva/"></a></li>
                    <li><a className="/icon-github" href="https://github.com/JPSS14"></a></li>
                </ul>
            </nav>
        </header>
    );
}