import certificates from '../../../certificate.json';
import style from './Certificates.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Certificates() {
    const [certificateList, setCertificateList] = useState([]);
    const [category, setCategory] = useState("front-end");

    useEffect(() => {
        setCertificateList(certificates.filter(certificates => certificates.destaque === "1"));
    }, []);

    function certificateType(type:string){
        switch (type){
            case "destaque": setCertificateList(certificates.filter(certificates => certificates.destaque === "1")); break;
            case "front-end": setCertificateList(certificates.filter(certificates => certificates.categoria === "front-end" && certificates.index === "1")); break;
            case "back-end": setCertificateList(certificates.filter(certificates => certificates.categoria === "back-end" && certificates.index === "1")); break;
            case "outros": setCertificateList(certificates.filter(certificates => certificates.categoria === "outros" && certificates.index === "1")); break;
        }
    }
    return (
        <div className={style.mainCertificates}>
            <header>
                <h1>Certificados</h1>
                <p>Aqui estão todos os certificados que conquistei através de cursos.</p>
            </header>

            <div className={style.certificatesMenu}>
                <button type="button" onClick={() => certificateType("destaque")}>Destaques</button>
                <button type="button" onClick={() => certificateType("front-end")}>Front-end</button>
                <button type="button" onClick={() => certificateType("back-end")}>Back-end</button>
                <button type="button" onClick={() => certificateType("outros")}>Outros</button>
            </div>

            <section className={style.certificatesSection}>

                {(category === "front-end") ? (
                    certificateList.map((item, key) => (
                        <article className={style.certificateArticle} key={key}>
                            <div className={style.imgCertificate}>
                                <img src={item.imgUrl} alt={item.nome} />
                            </div>
                        </article>
                    ))
                ) : (<></>)
                }


                {/* <article className={style.certificateArticle}>
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
                </article> */}
            </section>

            <button className={style.readMore}>Ver todos</button>
        </div>
    );
}