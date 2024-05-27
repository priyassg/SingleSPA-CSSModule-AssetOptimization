import { createContext, useContext, useState } from "react"
import styles from "./styles.module.css";
import PendingRoundedIcon from '@mui/icons-material/PendingRounded';

const FlyOutContext = createContext(null);

export const Flyout = ({ children }) => {
    const [open, toggle] = useState<boolean>(false);

    return (
        <FlyOutContext.Provider value={{ open: open, toggle }}>
            <div >
                {children}
            </div>
        </FlyOutContext.Provider>
    )
}


const Toggle = ({ children }) => {
    const { open, toggle } = useContext(FlyOutContext);

    return (
        <div className={styles.flyoutContainer}>
            <div className={styles.flyoutButton}>
                <PendingRoundedIcon sx={{ color: 'black', width: '50px', height: '50px' }} onClick={() => toggle(!open)} fontSize="large" />
            </div>
            {open && children}
        </div >)
}

const List = ({ children }) => {
    return (
        <ul className={styles.listContainer}>
            {children}
        </ul>
    )
}

const ListItem = ({ children }) => {
    return (<li className={styles.listItem}>{children}</li>)
}

Flyout.Toggle = Toggle;
Flyout.List = List;
Flyout.ListItem = ListItem;