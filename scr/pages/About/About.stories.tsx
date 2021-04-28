import About from '.'

export default {
  title: 'pages/About',
  component: About,
}
const Template = (args) => <About {...args} />

export const standard = Template.bind({})
standard.args = {}
export {}
