import { useState } from "react"

const CaixaTexto = () => {
    const [texto, setTexto] = useState('yessir');

    const gerenciaTexto = (event) => {
        setTexto(event.target.value) // pega o valor do campo que disparou o evento
    }

    return (
        <div>
            <h3>Input</h3>
            <input type="text" value={texto} onInput={gerenciaTexto} />
            <br /> <br />
            <p>Você digitou: {texto} </p>
        </div>
    )
}

export default CaixaTexto