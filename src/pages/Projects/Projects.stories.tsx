import Projects from '.'

export default {
  title: 'pages/Projects',
  component: Projects,
}
const Template = (args) => <Projects {...args} />

export const standard = Template.bind({})
standard.args = {}
export {}
