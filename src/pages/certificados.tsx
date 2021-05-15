import style from '../styles/main.module.scss';
import styleCertificates from '../styles/certificados.module.scss';
import certificates from '../../certificate.json';

export default function Certificados() {
    const front = certificates.filter(certificates => certificates.categoria === "front-end");
    const back = certificates.filter(certificates => certificates.categoria === "back-end");
    const outros = certificates.filter(certificates => certificates.categoria === "outros");
    return (
        <main className={style.main}>
            <div className={style.mainContent}>
                <section className={styleCertificates.mainCertificate}>
                    <header>
                        <h1>Certificados</h1>
                    </header>

                    <section className={styleCertificates.section}>
                        <header>
                            <h2>Front-end</h2>
                        </header>
                        {front.map((item, key) => (
                            <article className={styleCertificates.certificateArticle} key={key}>
                                <div className={styleCertificates.imgCertificate}>
                                    <img src={item.imgUrl} alt={item.nome} />
                                </div>
                            </article>
                        ))}
                    </section>

                    <section className={styleCertificates.section}>
                        <header>
                            <h2>Back-end</h2>
                        </header>
                        {back.map((item, key) => (
                            <article className={styleCertificates.certificateArticle} key={key}>
                                <div className={styleCertificates.imgCertificate}>
                                    <img src={item.imgUrl} alt={item.nome} />
                                </div>
                            </article>
                        ))}
                    </section>

                    <section className={styleCertificates.section}>
                        <header>
                            <h2>Outros</h2>
                        </header>
                        {outros.map((item, key) => (
                            <article className={styleCertificates.certificateArticle} key={key}>
                                <div className={styleCertificates.imgCertificate}>
                                    <img src={item.imgUrl} alt={item.nome} />
                                </div>
                            </article>
                        ))}
                    </section>

                </section>
            </div>
        </main>
    );
}