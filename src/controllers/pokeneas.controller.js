const { json } = require("express")

const pokeneas = [
  {
    "id": 0,
    "name": "Bulbasaur",
    "height": 0.7,
    "hability": "Espesura de CocaCola",
    "image": "Bulbasaur.png",
    "phrase": "Crecer requiere paciencia; las raíces más profundas dan los frutos más dulces."
  },
  {
    "id": 1,
    "name": "Charmander",
    "height": 0.6,
    "hability": "Mar de caballos",
    "image": "Charmander.png",
    "phrase": "Mientras mi llama arda, mi espíritu jamás se apagará."
  },
  {
    "id": 2,
    "name": "Squirtle",
    "height": 0.5,
    "hability": "Torrente sanguineo",
    "image": "Squirtle.png",
    "phrase": "Sé como el agua: fluye, adapta, y encuentra siempre tu camino."
  },
  {
    "id": 3,
    "name": "Pikachu",
    "height": 0.4,
    "hability": "Electricidad Dinamica",
    "image": "Pikachu.png",
    "phrase": "La pequeñez no define la fuerza; un rayo basta para iluminar la noche."
  },
  {
    "id": 4,
    "name": "Jigglypuff",
    "height": 0.5,
    "hability": "Ojos que no ven, corazon que no siente",
    "image": "Jigglypuff.png",
    "phrase": "Quien escucha en silencio, encuentra la verdad más profunda."
  },
  {
    "id": 5,
    "name": "Meowth",
    "height": 0.4,
    "hability": "Recogida de monedas de 1000 pesos",
    "image": "Meowth.png",
    "phrase": "El verdadero tesoro no se acumula, se comparte."
  },
  {
    "id": 6,
    "name": "Gengar",
    "height": 1.5,
    "hability": "Levitación de perritos calientes",
    "image": "Gengar.png",
    "phrase": "Las sombras no existen sin luz; acepta tu lado oscuro para conocerte entero."
  },
  {
    "id": 7,
    "name": "Gyarados",
    "height": 6.5,
    "hability": "Intimidación a las hormigas",
    "image": "Gyarados.png",
    "phrase": "De los desprecios del pasado nace la fuerza que nadie podrá ignorar."
  },
  {
    "id": 8,
    "name": "Snorlax",
    "height": 2.1,
    "hability": "Inmunidad a los estornudos de 9am a 9:01am",
    "image": "Snorlax.png",
    "phrase": "El descanso no es pereza; es el arte de honrar al cuerpo y la mente."
  },
  {
    "id": 9,
    "name": "Mewtwo",
    "height": 2.0,
    "hability": "Presión arterial alta",
    "image": "Mewtwo.png",
    "phrase": "No somos lo que nos crearon para ser, sino lo que decidimos llegar a ser."
  }
]

const os = require('os')
const BUCKET_URL = process.env.GCP_BUCKET_URL

exports.index = (req , res) => {
    const randomId = Math.floor(Math.random() * pokeneas.length)

    const pokenea = pokeneas.find(pokenea => pokenea.id === randomId)

    const pokeneaWithBucketImage = {
        ...pokenea,
        image: `${BUCKET_URL}/${pokenea.image}`
    }
    const containerId = os.hostname()

    console.log(pokeneaWithBucketImage)

    return res.render('indexPokenea' , {title: "Inicio" , pokenea: pokeneaWithBucketImage , containerId})
}

exports.showJson = (req, res) => {
    const randomId = Math.floor(Math.random() * pokeneas.length)

    const pokenea = pokeneas.find(pokenea => pokenea.id === randomId)
    const containerId = os.hostname()

    const { id , name , height , hability } = pokenea

    return res.json({ id , name , height , hability , containerId })
}