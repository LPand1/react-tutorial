import imagem from './assets/imagem.webp'

function Paragrafo() {
    return (
    <>
        <p>Parágrafo explicativo</p>
        <p><img src={imagem} width={150} /></p>
    </>
    )
}

export default Paragrafo