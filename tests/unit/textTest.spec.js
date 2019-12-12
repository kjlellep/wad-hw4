import { mount } from '@vue/test-utils'
import Header from '../../src/components/Header.vue'

describe('List text', () => {

    const wrapper = mount(Header)

    it('displays date correctly', () => {
        expect(wrapper.html()).toContain('h3')
    })

    it('displays year correctly', () => {
        expect(wrapper.html()).toContain('h3')
    })

    it('displays month correctly', () => {
        expect(wrapper.html()).toContain('h3')
    })

    it('displays day of the week correctly', () => {
        expect(wrapper.html()).toContain('h3')
    })
});