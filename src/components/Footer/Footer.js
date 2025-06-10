import styles from "./Footer.module.css";

function Footer() { // Nome do módulo
    return(
        // Conteúdo a ser exibido
        // O conteúdo será um JSX ==> Html + Xml (é um html dentro do Javascript)
        <footer className={styles.footer}>
            <h2> ReactFlix &copy; Desenvolvido por Prof Bruno</h2>
        </footer>
    )
}
export default Footer; // A comunidade de React usa ";"
