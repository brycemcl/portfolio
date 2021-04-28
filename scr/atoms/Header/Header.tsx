import styles from './Header.module.css'
import Icons from '../Icons'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
const component = ({}) => {
  return (
    <div>
      <div
        className={`flex justify-between flex-wrap w-screen ${styles.header}`}>
        <div
          className={`grid place-items-center md:justify-start justify-center flex-1 md:p-12`}>
          <div className={`grid place-items-center`}>
            <div className={`textName`}>Bryce McLachlan</div>
            <div className={`textTitle`}>I turn coffee into code</div>
          </div>
        </div>
        <div
          className={`flex flex-row md:justify-end justify-center p-2 md:p-12 flex-1 items-center`}>
          <div className={`px-1`}>Projects</div>
          <div className={`px-1`}>Experience</div>
          <div className={`px-1`}>About Me</div>
          <div className={`px-1`}>
            <Icons
              icon={<GitHubIcon />}
              href='https://github.com/brycemcl'
              color='#ffffff'
            />
          </div>
          <div>
            <Icons
              icon={<LinkedInIcon />}
              href='https://www.linkedin.com/in/bryce-mclachlan/'
              color='#ffffff'
            />
          </div>
        </div>
      </div>
      <svg
        className={`${styles.panel}`}
        viewBox='0 160 1440 399'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M0 -3H1440V399C1440 399 585.5 63 696.5 204.5C945.5 399 0 399 0 399V-3Z'
          fill='#FFE2E2'
        />
      </svg>
    </div>
  )
}

export default component