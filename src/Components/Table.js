import styles from './Table.module.css';
import { CgTrash, CgEye } from "react-icons/cg";

const Table = ({open, close}) => {

    return (

        <>
            <table className={styles.container_table}>
            <ol className="list-group list-group-numbered">
                <li className="list-group-item">A list item
                    <CgTrash className={styles.icons}size={20} color="gray" ><button classes={{root:"button-root"}} variant="contained"  onClick={()=>{
                  open()
                }}>Visualizar</button></CgTrash>
                    <CgEye onClick={open} className={styles.icons} size={20} color="gray" />
                </li>
                <li className="list-group-item">A list item</li>
                <li className="list-group-item">A list item</li>
            </ol>
            </table>  
        </>

    );
}
 
export default Table;