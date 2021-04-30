import { AccessAlarm } from '@material-ui/icons'
import Icons from '.'

export default {
  title: 'atoms/Icons',
  component: Icons,
}
const Template = (args) => <Icons {...args} />

export const standard = Template.bind({})
standard.args = {
  icon: <AccessAlarm />,
  href: 'https://google.com/',
  color: '#6fb83f',
}
import LinkedInIcon from '@material-ui/icons/LinkedIn'
export const linkedin = Template.bind({})
linkedin.args = {
  icon: <LinkedInIcon />,
  href: 'https://www.linkedin.com/in/bryce-mclachlan/',
  color: '#70B7FF',
}
import GitHubIcon from '@material-ui/icons/GitHub'
export const github = Template.bind({})
github.args = {
  icon: <GitHubIcon />,
  href: 'https://github.com/brycemcl',
  color: '#ffffff',
}
export {}
