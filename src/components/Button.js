import styles from '../App.module.css';
function Button({ btnName, onClickEvent }) {
  return (
    <button onClick={onClickEvent} className={styles.btn}>
      {btnName}
    </button>
  );
}

export default Button;
