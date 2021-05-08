import style from './Certificates.module.scss';
import Link from 'next/link';

export function Certificates() {
    return (
        <div className={style.mainCertificates}>
            <header>
                <h1>Certificados</h1>
                <p>Aqui estão todos os certificados que conquistei através de cursos.</p>
            </header>

            <section className={style.certificatesSection}>
                <header>
                    <button type="button">Destaques</button>
                    <button type="button">Front-end</button>
                    <button type="button">Back-end</button>
                    <button type="button">Outros</button>
                </header>

                <article className={style.certificateArticle}>
                    <div className={style.imgCertificate}>
                        <img src="/certificado-webdesign-em-producao.png" alt="Certificado" />
                    </div>
                </article>
                <article className={style.certificateArticle}>
                    <div className={style.imgCertificate}>
                        <img src="/certificado-webdesign-em-producao.png" alt="Certificado" />
                    </div>
                </article><article className={style.certificateArticle}>
                    <div className={style.imgCertificate}>
                        <img src="/certificado-webdesign-em-producao.png" alt="Certificado" />
                    </div>
                </article>

            </section>
        </div>
    );
}