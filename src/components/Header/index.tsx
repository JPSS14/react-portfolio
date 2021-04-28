import style from './Header.module.scss';
import Link from 'next/link';
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

export function Header() {
    return (
        <header className={style.mainHeader}>
            <h1 className={style.logo}><Link href="/"><a>MyPortfolio</a></Link></h1>
            <nav className={style.mainHeaderNav}>
                <ul>
                    <li><a className="/icon-linkedin2" href="https://www.linkedin.com/in/jo%C3%A3o-pedro-s-silva/"></a></li>
                    <li><a href="https://github.com/JPSS14">
                        <img className={style.git} src="/github-1.svg" alt="Github"/>
                    </a></li>
                </ul>
            </nav>
            
        </header>
        
    );
}