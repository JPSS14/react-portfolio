import style from './Certificates.module.scss';
import Link from 'next/link';

export function Certificates() {
    return (
        <div className={style.mainCertificates}>
            <header>
                <h1>Certificados</h1>
                <p>Aqui estão todos os certificados que conquistei através de cursos.</p>
            </header>

            <div className={style.certificatesMenu}>
                <button type="button">Destaques</button>
                <button type="button">Front-end</button>
                <button type="button">Back-end</button>
                <button type="button">Outros</button>
            </div>

            <section className={style.certificatesSection}>

                <article className={style.certificateArticle}>
                    <div className={style.imgCertificate}>
                        <img src="/certificado-webdesign-em-producao.png" alt="Certificado" />
                    </div>
                </article>
                <article className={style.certificateArticle}>
                    <div className={style.imgCertificate}>
                        <img src="/poo-java.png" alt="Certificado" />
                    </div>
                </article>
                <article className={style.certificateArticle}>
                    <div className={style.imgCertificate}>
                        <img src="/dio.png" alt="Certificado" />
                    </div>
                </article>
            </section>

            <button className={style.readMore}>Ver todos</button>
        </div>
    );
}