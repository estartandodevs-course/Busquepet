import "./styles.scss";

const TextDescription = ({ title, description }) => (
  <div className="textdescription">
    <h2 class="label-profilepet">{title}</h2>
    <span class="description-profilepet">{description}</span>
  </div>
);

export default TextDescription;
