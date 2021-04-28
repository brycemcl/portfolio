import styles from './Icons.module.css'
const component = ({ icon, href, color }) => {
  return (
    <li className={`px-1 ${styles.container}`}>
      <button
        style={{ position: 'absolute' }}
        className={styles.button}
        onClick={() => window.open(href, '_blank')}>
        {icon}
      </button>
      <button
        style={{ background: color }}
        className={styles.button}
        onClick={() => window.open(href, '_blank')}>
        {icon}
      </button>
    </li>
  )
}

export default component
