import style from './Header.module.scss';
import Link from 'next/link';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';

export function Header() {
    return (
        <header className={style.mainHeader}>
            <h1 className={style.logo}><Link href="/"><a>My<span>Portfolio</span></a></Link></h1>
            <nav className={style.mainHeaderNav}>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-s-silva/" target="_bank">
                            <AiFillLinkedin className={style.icons}/>
                        </a>
                    </li>

                    <li><a href="https://github.com/JPSS14" target="_bank">
                        <AiOutlineGithub className={style.icons}/>
                    </a></li>
                </ul>
            </nav>

        </header>

    );
}