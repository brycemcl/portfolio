import Header from '.'

export default {
  title: 'atoms/Header',
  component: Header,
}
const Template = (args) => <Header {...args} />

export const standard = Template.bind({})
standard.args = {}
export {}
