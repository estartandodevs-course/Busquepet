import { useHistory } from "react-router-dom";



export default function Redirection(props) {
    const history = useHistory();
    const { person } = props;
    return (
        <>
        {console.log('batata')}
            {person === 'Pessoa Física' ? (
                history.push("/cadastro-pessoa-fisica")
            ) : (
                history.push("/cadastro-pessoa-juridica")
                )}
        </>

    )
}


