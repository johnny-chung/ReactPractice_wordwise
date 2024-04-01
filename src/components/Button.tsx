import styles from './Button.module.css'

interface ButtonProps {
    children: React.ReactNode;
    onClick:  (event: React.MouseEvent<HTMLButtonElement>) => void;
    type:string
}

export default function Button({children, onClick, type}: ButtonProps) {
    return (
        <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
            {children}
        </button>
    )
}
