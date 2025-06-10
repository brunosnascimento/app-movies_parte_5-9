import styles from "./Header.module.css";

function Header() { // Nome do módulo
    return(
        // Conteúdo a ser exibido
        // O conteúdo será um JSX ==> Html + Xml (é um html dentro do Javascript)
        <header className={styles.header}>
            <span>ReactFlix</span>
            <nav>
                <a href="#">Home</a>
                <a href="#">Assistir</a>
            </nav>
        </header>
    )
}
export default Header; // A comunidade de React usa ";"
