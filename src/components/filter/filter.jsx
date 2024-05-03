import styles from '../addContactForm/addContactForm.module.css';

const Filter = ({ filter, handleChange }) => {
  return (
    <>
      <label className={styles.label} htmlFor="filter">
        Find contacts by name
      </label>
      <input id="filter" name="filter" value={filter} onChange={handleChange} />
    </>
  );
};

export default Filter;
