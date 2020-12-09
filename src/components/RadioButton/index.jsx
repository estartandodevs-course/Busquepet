import './RadioButton.scss';
import Text from '../Text'

function RadioButton(props) {
    const { text, name, id, onChange } = props;
    return (
            <label className="radioContainer" htmlFor={id} onChange={(event) => onChange(event.target.id)} >
                <input type="radio" name={name} id={id} />
                <span className="circle" />
                <Text type="textform">{text}</Text>
            </label>   
    )
}

export default RadioButton