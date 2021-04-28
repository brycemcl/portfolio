import { useRouter } from 'next/router'
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
      <a href={href}>{text}</a>
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
          className={`flex flex-row md:justify-end justify-center px-2 md:px-12 flex-1 items-center ${styles.ul}`}>
          <NavItem href='/' text='About me' />
          <NavItem href='/projects' text='Projects' />
          <NavItem href='/experience' text='Experience' />
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
      <svg
        className={`${styles.panel}`}
        viewBox='0 160 1440 250'
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
