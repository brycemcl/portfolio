import styles from './Footer.module.css'
const component = ({}) => {
  return (
    <div className={`${styles.svg}`}>
      <div className={`${styles.background}`}>
        <svg
          height='100%'
          width='100%'
          preserveAspectRatio='none'
          viewBox='0 -80 1440 368'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M0 58.781L264 120.587C264 120.587 505.169 130.811 623.5 137.444C765.158 145.385 987 137.444 987 137.444L1304.5 0L1440 120.587V373H0V58.781Z'
            fill='#E8E8E8'
          />
        </svg>
      </div>
      <div className={`${styles.foreground}`}>
        <svg
          height='100%'
          width='100%'
          preserveAspectRatio='none'
          viewBox='0 -50 1440 167'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M1440 49.8505L1178 103.5L818 22.5L453 80.4299L140.5 0L0 73.8772V172H1440V49.8505Z'
            fill='#F3F3F3'
          />
        </svg>
      </div>
    </div>
  )
}

export default component
