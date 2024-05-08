import { useContext } from "react";
import CertificatesContent, { certificates } from "./content";
import "./index.scss";
import LanguageContext from "../../../../../../context";
const certificatesFolderPath = "/assets/certificates/";

export default function Certificates() {

    const language = useContext(LanguageContext);

    return (
        <div className="certificados">
            <h1>{CertificatesContent[language].title}</h1>
            <hr />

            <section>
                {certificates.map(certificate =>
                    <div className="certificate" onClick={() => window.open(certificatesFolderPath + certificate.filePath)}>
                        <h2>{certificate.name[language]}</h2>

                        <img src={certificatesFolderPath + certificate.imgPath} alt="" />
                    </div>
                )
                }
            </section >
        </div >
    )
}