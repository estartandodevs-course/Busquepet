import afonsoImage from '../assets/images/afonso.svg'
import starkImage from '../assets/images/stark.svg'
import melImage from '../assets/images/mel.svg'
import timaoImage from '../assets/images/timao.svg'
import venusImage from '../assets/images/venus.svg'
import mingauImage from '../assets/images/mingau.svg'
import tecaImage from '../assets/images/teca.svg'


const res = localStorage.getItem("myForm")
const result = JSON.parse(res)

export const petsMock = [
    {
        id: 1,
        name: "Afosinho",
        age: "1 - 3 meses",
        type: "cao",
        image: afonsoImage
    },
    {
        id: 2,
        name: "Stark",
        age: "1 - 3 meses",
        type: "cao",
        image: starkImage
    },
    {
        id: 3,
        name: "Mel",
        age: "1 ano",
        type: "cao",
        image: melImage
    },
    {
        id: 4,
        name: "Timão",
        age: "1 - 2 meses",
        type: "gato",
        image: timaoImage
    },
    {
        id: 5,
        name: "MVênusel",
        age: "2 anos",
        type: "gato",
        image: venusImage
    },
    {
        id: 6,
        name: "Mingau",
        age: "8 anos +",
        type: "gato",
        image: mingauImage
    },
    {
        id: 7,
        name: "Teca",
        age: "1 - 3 meses",
        type: "gato",
        image: tecaImage

        name: result.namePet,
        age: result.agePet,
        type: result.typePet,
        image: venusImage

    }
]