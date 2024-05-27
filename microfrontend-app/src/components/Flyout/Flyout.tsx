import { createContext, useContext, useState } from "react"
import styles from "./styles.module.css";
import ListIcon from '@mui/icons-material/List';

const FlyOutContext = createContext(null);

export const Flyout = ({ children }) => {
    const [open, toggle] = useState<boolean>(false);

    return (
        <FlyOutContext.Provider value={{ open: open, toggle }}>
            <div className={styles.flyoutContainer}>
                {children}
            </div>
        </FlyOutContext.Provider>
    )
}


const Toggle = ({ children }) => {
    const { open, toggle } = useContext(FlyOutContext);

    return (
        <div>
            <button onClick={() => toggle(!open)}>
                <ListIcon />
            </button>
            {open && children}
        </div>)
}

const List = ({ children }) => {
    return (
        <ul>
            {children}
        </ul>
    )
}

const ListItem = ({ children }) => {
    return (<li>{children}</li>)
}

Flyout.Toggle = Toggle;
Flyout.List = List;
Flyout.ListItem = ListItem;