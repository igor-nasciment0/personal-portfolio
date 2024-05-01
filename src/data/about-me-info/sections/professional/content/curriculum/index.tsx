import "./index.scss";

export default function Curriculum() {
    return (
        <div className="plain-text curriculum">
            <h1>Meu Currículo</h1>
            <hr />
            <img onClick={() => window.open("/assets/curriculum/curriculum.pdf")} src="/assets/curriculum/curriculum.jpg" alt="" />
        </div>
    )
}