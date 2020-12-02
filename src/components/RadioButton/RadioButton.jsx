import './RadioButton.scss';

function RadioButton (props) {
    const {text, name, id, onChange} = props;
    return (
        <div>
            <label className="radioContainer" htmlFor={id}>{text}
            <input type="radio" name={name} id={id} onChange={(event) => onChange(event.target.id)} />
            <span className="circle"></span>
            </label>
        </div>
    )
}

export default RadioButton