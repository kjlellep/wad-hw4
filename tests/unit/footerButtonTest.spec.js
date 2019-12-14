import { mount } from '@vue/test-utils'
import Footer from '../../src/components/Footer.vue'

describe('Footer states', () => {

    const wrapper = mount(Footer);
    it('Footer property changes on button click', () => {
        const button = wrapper.find('#button');
        button.trigger('click');
        expect(wrapper.vm.open).toBe(true)
    })
});