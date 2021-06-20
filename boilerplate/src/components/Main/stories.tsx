import { Meta, Story } from '@storybook/react'

import Main from '.'

type MainProps = {
  title: string
  description: string
}

export default {
  title: 'components/Main',
  component: Main
} as Meta

const Template: Story<MainProps> = (args) => <Main {...args} />

export const Basic = Template.bind({})

Basic.args = {
  title: 'React Avançado'
}
