import "../ProjectsSection/ProjectsSection.css";

function ProjectsSection() {
    const projectsGroups = [
        {
            title: "Portfolio Thiago",
            descript: "Portfolio simples. Linguagens utilizadas foram o React JS, JavaScript, CSS",
            image: "/image-sites/portfolio.png",
            lenguage: [
                "/icons/react-svgrepo-com.svg",
                "/icons/js-svgrepo-com.svg",
                "/icons/css-3-svgrepo-com.svg"
                
            ],
            url: "#",
        },
        {
            title: "Gerenciador de Tarefas",
            descript: "Um sistema de gerenciar tarefas simples. Linguagens utilizadas foram React, JavaScript, CSS",
            image: "/image-sites/gerenciador-de-tarefas.png",
            lenguage: [ "/icons/react-svgrepo-com.svg",
                "/icons/js-svgrepo-com.svg",
                "/icons/css-3-svgrepo-com.svg"],

            url: "https://gerenciador-de-tarefas-tl.netlify.app/",
        },
    ];
    return (
        <section className="projects-section" id="projetos">
            <h1>
                Meus Projetos
            </h1>
            <div className="projects-grid">
                {projectsGroups.map((group) => (
                    <div className="container-projects" href={group.url} key={group.title}>
                        <img src={group.image} className="image-group" />
                        <div className="container-lenguage">
                            <span className="span-lenguage">
                                {group.lenguage.map((icon, index) => (
                                    <img src={icon} className="img-lenguage" key={index}
                                        alt="Tecnologia Utilizada" />
                                        
                                       
                                ))}

                            </span>
                        </div><div className="texts-group">
                        <h1 className="title-group">{group.title}</h1>
                        <p className="descript-group">{group.descript}</p><a target="_blank" rel="noopener noreferrer" href={group.url}>
                        <button className="button-group">Acesse aqui</button></a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProjectsSection;
