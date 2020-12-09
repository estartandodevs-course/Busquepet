import './InputField.scss';

export function InputField(props) {
	const { placeholder, label, type, onChange, value } = props;

	return (
		<div className="input-field">
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
