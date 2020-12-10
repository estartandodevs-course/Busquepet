import './text.scss';

// Cadastro

function TitleHeader (props) {
    const text = props.children;
    return <p className="title-header">{text}</p>
}

function SubtitleHeader (props) {
    const subtitle = props.children;
    return <p className="subtitle-header">{subtitle}</p>
}

function TitleForm (props) {
    const text = props.children;
    return <p className="title-form">{text}</p>
}

function LabelForm (props) {
    const label = props.children;
    return <p className="label-form">{label}</p>
}

function TextForm (props) {
    const label = props.children;
    return <p className="text-form">{label}</p>
}

function TextButton (props) {
    const label = props.children;
    return <p className="text-button">{label}</p>
}

function TextButtonSkip (props) {
    const label = props.children;
    return <p className="text-buttonskip">{label}</p>
}

function TextFinal (props) {
    const label = props.children;
    return <p className="finaltext-form">{label}</p>
}

function TextFinal2 (props) {
    const label = props.children;
    return <p className="finaltextform2">{label}</p>
}

// Card Pet

function TitlePet (props) {
    const label = props.children;
    return <p className="title-pet">{label}</p>
}

function AgePet (props) {
    const label = props.children;
    return <p className="age-pet">{label}</p>
}

function GenderPet(props) {
    const label = props.children;
    return <p className="gender-pet">{label}</p>
}


function LocationPet (props) {
    const label = props.children;
    return <p className="location-pet">{label}</p>
}





function Text(props) {
    const { type, children } = props;

    const types = {
        //Cadastro
        titleheader: <TitleHeader>{children}</TitleHeader>,
        subtitleheader: <SubtitleHeader>{children}</SubtitleHeader>,
        titleform: <TitleForm>{children}</TitleForm>,
        labelform: <LabelForm>{children}</LabelForm>,
        textform: <TextForm>{children}</TextForm>,
        textbutton: <TextButton>{children}</TextButton>,
        textbuttonskip: <TextButtonSkip>{children}</TextButtonSkip>,
        textfinal: <TextFinal>{children}</TextFinal>,
        textfinal2: <TextFinal2>{children}</TextFinal2>,
        // Card Pet
        titlecardpet: <TitlePet>{children}</TitlePet>,
        agecardpet: <AgePet>{children}</AgePet>,
        gendercardpet: <GenderPet>{children}</GenderPet>,
        locationcardpet: <LocationPet>{children}</LocationPet>,

    }

    console.log(type)
    return types[type]
}



export default Text;

