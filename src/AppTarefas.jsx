import { useState } from "react";
import TarefasLista from "./TarefasLista";
import TarefasForm from "./TarefasForm";

const AppTarefas = () => {
    const [tarefas, setTarefas] = useState([]);

    const addTarefa = (texto) => {
        const novaTarefa = {
            // Usa-se data porque não temos gerenciamento de ID (backend)
            id: Date.now(),
            texto: texto,
        }

        setTarefas(...tarefas, novaTarefa);
    }

    return (
        <div>
            <h1>Tarefas</h1>
            <TarefasForm onAddTarefa={addTarefa} />
            <TarefasLista tarefas={tarefas} />
        </div>
    );
}

export default AppTarefas;