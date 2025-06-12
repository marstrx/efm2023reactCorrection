// Question 8

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./ListStagiaire.module.css"

const ListStagiaire = () => {
    const stagiaires = useSelector(state =>
        state.stag.stagiaires
    );

    return (
        <>
    <div className={styles.row}>
        {
            stagiaires.map((stag, i) => (
                <div key={i} className={styles.container}>
                    <Link to={`/StagiarDetails/${stag.nom}`}>
                        <img src={stag.image} alt={stag.nom} />
                    </Link>
                    <h3>{stag.nom}</h3>
                </div>
            ))
        }
    </div>
</>

    );
};

export default ListStagiaire;
