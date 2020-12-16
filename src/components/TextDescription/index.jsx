import './Style.scss'

export default function TextDescription(props){

    const {title,description} = props;

    return(
        <>
            <div className="textdescription">
            <h2>{title}</h2>
            <span>{description}</span>
            </div>
        </>
    )
}