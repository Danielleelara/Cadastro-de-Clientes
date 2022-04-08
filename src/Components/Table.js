import styles from "./Table.module.css";
import { CgTrash, CgEye } from "react-icons/cg";
import { Link } from "react-router-dom";

const Table = () => {
  return (
    <>
      <table className={styles.container_table}>
        <ul className="list-group ">
          <li className="list-group-item">
            A list item
            <CgTrash className={styles.icons} size={20} color="gray"></CgTrash>
            <Link to={`/details/1`}>
              <CgEye className={styles.icons} size={20} color="gray" />
            </Link>
          </li>
          <li className="list-group-item">A list item</li>
          <li className="list-group-item">A list item</li>
        </ul>
      </table>
    </>
  );
};

export default Table;
