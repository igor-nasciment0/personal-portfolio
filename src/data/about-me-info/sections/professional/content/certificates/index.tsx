import "./index.scss";
const certificatesFolderPath = "/assets/certificates/";

export default function Certificates() {
    return (
        <div className="certificados">
            <h1>Certificados</h1>
            <hr />

            <section>
                {certificates.map(certificate =>
                    <div className="certificate" onClick={() => window.open(certificatesFolderPath + certificate.filePath)}>
                        <h2>{certificate.name}</h2>

                        <img src={certificatesFolderPath + certificate.imgPath} alt="" />
                    </div>
                )
                }
            </section >
        </div >
    )
}

interface certificate {
    name: string,
    imgPath: string,
    filePath: string
}

const certificates: certificate[] = [
    { name: "Udemy: Data Structures & Algorithms", imgPath: "udemy-dsa.jpg", filePath: "udemy-dsa.pdf" },
    { name: "CS50: Introdução à Ciência da Computação (Harvard)", imgPath: "cs50.jpg", filePath: "cs50.pdf"},
    { name: "Alura: vários cursos", imgPath: "alura.jpg", filePath: "alura.pdf"}
]