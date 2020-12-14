import "./InputField.scss";

export function InputField(props) {

	const { placeholder, label, type, onChange, value, idendifier } = props;

	return (
		<div className={idendifier}>
			<label className="label">
				{label} <span className="asterisk">*</span>
			</label>
			<input
				className="input"
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={event => onChange(event.target.value)}
			/>
		</div>
	);

}

export default InputField;
