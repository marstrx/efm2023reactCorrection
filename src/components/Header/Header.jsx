{/* Question 11 */}

import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Headr=()=>{
return(
    <>
    <header className={styles.header}>
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>list des stagiares</Link>
                </li>
                <li>
                    <Link to={"/add"}>Ajouter un stagiare</Link>
                </li>
            </ul>
        </nav>
    </header>
    </>
)
}
export default Headr;