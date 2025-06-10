import styles from "./Card.module.css";

function Card( {id} ){
    return (
        <section className={styles.Card}>
            <a href={`https://www.youtube.com/watch?v=${id}`} rel="noopener noreferrer" target="_blank">
                <img src={`https://img.youtube.com/vi/${id}/default.jpg`} alt="Capa" />
            </a>
        </section>

   );

}
// 1HIk9mrBB7o
export default Card;

