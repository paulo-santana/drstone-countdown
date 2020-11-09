import { IconContext } from "react-icons";
import styles from "./IconButton.module.css";

export default function IconButton({ Icon, onClick }) {
  return (
    <button className={styles.iconButton} onClick={onClick}>
      <IconContext.Provider value={{ className: styles.icon, size: 24 }}>
        <Icon />
      </IconContext.Provider>
    </button>
  );
}
