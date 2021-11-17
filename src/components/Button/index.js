import Text from "../Text";
import { Variant } from './StyledButton';

const ButtonTest = ({name, icon, typeVariant }) => {
  const ButtonVariations = Variant[typeVariant];

  return (
    <ButtonVariations
    >
      <div>
        <Text type="textbutton">{name}</Text>
        {icon && <img className="Icons" src={icon} alt="icon" />}
      </div>
    </ButtonVariations>
)
};

  export default ButtonTest;