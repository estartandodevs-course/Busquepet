import './Style.scss'

export default function TextDescription(props){

    const {title,description} = props;

    return(
        <>
            <h2>{title}</h2>
            <span>{description}</span>
        </>
    )
}