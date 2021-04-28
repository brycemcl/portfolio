import styles from './Icons.module.css'
const component = ({ icon, href, color }) => {
  return (
    <div className={styles.container}>
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
    </div>
  )
}

export default component
