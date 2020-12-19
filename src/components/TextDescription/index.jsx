import './Style.scss'

export default function TextDescription(props){

    const {title,description} = props;

    return(
        <>
            <div className="textdescription">
            <h2 class="label-profilepet" >{title}</h2>
            <span class="description-profilepet">{description}</span>
            </div>
        </>
    )
}