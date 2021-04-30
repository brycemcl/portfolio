import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './Header.module.css'
import Icons from '../Icons'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

const NavItem = ({ href, text }) => {
  const router = useRouter()
  return (
    <li
      className={`px-1 ${styles.a} ${
        router && router.asPath === href && styles.active
      }`}>
      <Link href={href}>
        <a>{text}</a>
      </Link>
    </li>
  )
}

const component = ({}) => {
  return (
    <div className={`w-full`}>
      <div className={`flex justify-between flex-wrap ${styles.header}`}>
        <div
          className={`grid place-items-center md:justify-start justify-center flex-1 md:px-12`}>
          <div className={`grid place-items-center`}>
            <div className={`textName`}>Bryce McLachlan</div>
            <div className={`textTitle`}>I turn coffee into code</div>
          </div>
        </div>
        <ul
          className={`flex flex-row md:justify-end justify-center items-center px-2 md:px-12 pb-1 flex-1 ${styles.ul}`}>
          <NavItem href='/' text='About me' />
          <NavItem href='/projects' text='Projects' />
          <Icons
            icon={<GitHubIcon />}
            href='https://github.com/brycemcl'
            color='#ffffff'
          />
          <Icons
            icon={<LinkedInIcon />}
            href='https://www.linkedin.com/in/bryce-mclachlan/'
            color='#ffffff'
          />
        </ul>
      </div>
      {/* <div className={`flex justify-center`}> */}
      <div className={`flex`}>
        <div className={`flex-1 ${styles.header} `}></div>
        <div className={`${styles.panel}`}>
          <svg
            className={`${styles.panel}`}
            preserveAspectRatio='none'
            viewBox='0 0 1440 205'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M0 -195H1440V203.404C1440 203.404 1343.5 212.06 1297 189.057C1250.5 166.053 554.524 -86.984 748 44.5354C941.476 176.055 57.5 204.059 57.5 204.059H0V-195Z'
              fill='#FFE2E2'
            />
          </svg>
        </div>
        <div className={`flex-1 ${styles.header}`}></div>
      </div>
      {/* </div> */}
    </div>
  )
}

export default component
