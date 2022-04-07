import styles from './Table.module.css';
import { CgTrash, CgEye } from "react-icons/cg";

const Table = () => {
    return (
        <>
            <table className={styles.container_table}>
            <ol className="list-group list-group-numbered">
                <li className="list-group-item">A list item
                <button className={styles.icons}>
                <CgTrash size={20} color="gray" />
                </button>
                <button>
                <CgEye size={20} color="gray" />
                </button>
                </li>
                <li className="list-group-item">A list item</li>
                <li className="list-group-item">A list item</li>
            </ol>
            </table>
        
        </>

    );
}
 
export default Table;