import styles from './Table.module.css';

const Table = () => {
    return (
        <>
            <table className={styles.container_table}>
            <ol className="list-group list-group-numbered">
                <li className="list-group-item">A list item</li>
                <li className="list-group-item">A list item</li>
                <li className="list-group-item">A list item</li>
            </ol>
            </table>
        
        </>

    );
}
 
export default Table;