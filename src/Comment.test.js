import React from 'react'
import Comment from './Comment'
import { render } from 'enzyme'

it('should render text', () => {
    const c ={
        comment: 'test'
    }
    const wrapper = render(<Comment c={c}/>)
    expect(wrapper.text()).toBe('test Enviado por: vazio')
})

it('should render empty', () => {
    const wrapper = render(<Comment />)
    expect(wrapper.text()).toBe('vazio Enviado por: vazio')
})