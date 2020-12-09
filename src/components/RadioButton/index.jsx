import './RadioButton.scss';
import Text from '../Text'

function RadioButton(props) {
    const { text, name, id, onChange } = props;
    return (

            <label className="radioContainer" htmlFor={id}>
                <input type="radio" name={name} id={id} onChange={(event) => onChange(event.target.id)} />
                <span className="circle" />
                <Text type="textform">{text}</Text>
            </label>
    )
}

export default RadioButton