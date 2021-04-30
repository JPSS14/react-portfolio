import style from './Profile.module.scss';

export function Profile() {
    return (
        <div className={style.mainProfile}>
            <div className={style.mainProfileCard}>
                <div className={style.mainProfileContent}>
                    <div className={style.imgContainer}>
                        <img src="/jp.png" alt="João Pedro Scarabelli Silva" />
                    </div>
                    <div className={style.presentation}>
                        <p>João Pedro Scarabelli Silva</p>
                        <p>Desenvolvedor Web</p>
                        <p>PHP</p>
                        <p>JavaScript</p>
                        <p>TypeScript</p>
                        <p>React</p>
                        <p>Next JS</p>
                    </div>
                </div>
            </div>
        </div>
    );
}