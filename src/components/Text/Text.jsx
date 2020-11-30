import './text.scss';


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




function Text(props) {
    const { type, children } = props;

    const types = {
        titleheader: <TitleHeader>{children}</TitleHeader>,
        subtitleheader: <SubtitleHeader>{children}</SubtitleHeader>,
        titleform: <TitleForm>{children}</TitleForm>,
        labelform: <LabelForm>{children}</LabelForm>,
        textform: <TextForm>{children}</TextForm>
    }

    console.log(type)
    return types[type]
}



export default Text;

