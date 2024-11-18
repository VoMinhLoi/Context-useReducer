import styles from './Button.module.scss'
import clsx from 'clsx'
function Button({primary, disable}){
    return (
    // <button className={[styles.btn, styles.primary].join(' ')}>Hello</button>
    <button className={clsx(styles.btn, {
        [styles.primary]: primary,
        [styles.disable]: disable
    })}>Hello</button>)
}
export default Button