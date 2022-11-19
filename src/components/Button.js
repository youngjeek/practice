import styles from '../App.module.css';
function Button({ btnName }) {
  return <button className={styles.btn}>{btnName}</button>;
}

export default Button;
