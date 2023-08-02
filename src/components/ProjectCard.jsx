import PropTypes from 'prop-types'

function ProjectCard({id,title,image,description,link}) {
    return (
        <>
            <div className="project-card">
                <img src={image} alt="Card-Imagen" className="card-banner" />
                <div className="card-content">
                    <h3 className="title">{title}</h3>
                    <p className="description">{description}</p>
                    <a href={link} target="_blank" className="button">Ir al Proyecto '{title}'</a>
                </div>
            </div>
        </>
    )
}

ProjectCard.prototype = {
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string
}

ProjectCard.defaultProps = {
    id: "#",
    title: "No hay titulo",
    image: "/src/img/projects/no-image.png",
    description: "No hay Descripción-----",
    link: "#"
}

export default ProjectCard
