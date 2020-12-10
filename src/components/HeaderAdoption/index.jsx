import './Style.scss'

export default function HeaderAdoption(props){

    const {titleName, imageOne,imageTwo,identification} = props;

    return(
        <>
        <header className={identification}>
                <img src={imageOne} alt="seta volta"/>
                <h1>{titleName}</h1>
                <img src={imageTwo} alt="coracao"/>
            </header>
        </>
    )
}