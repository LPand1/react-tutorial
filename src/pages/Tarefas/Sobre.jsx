import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const Sobre = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={theme}>
                <h2>Sobre</h2>
                <p>Aqui você fica sabendo tudo sobre nossa aplicação</p>
        </div>
    );
}

export default Sobre;