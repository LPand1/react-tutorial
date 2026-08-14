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

    const editTarefa = (id, novoTexto) => {
        setTarefas(tarefas.map(tarefa => tarefa.id === id ? {...tarefa, texto: novoTexto} : tarefa)); // modifica apenas o que tiver o id requisitado e decompõe o objeto     
    }

    const deleteTarefa = (id) => {
        setTarefas(tarefas.filter(tarefa => tarefa.id !== id)); // filter remove todos que retornarem false, igual ao que eu quero apagar
    }

    return (
        <div>
            <h1>Tarefas</h1>
            <TarefasForm onAddTarefa={addTarefa} />
            <TarefasLista tarefas={tarefas} onEditTarefa={editTarefa} onDeleteTarefa={deleteTarefa} />
        </div>
    );
}

export default AppTarefas;