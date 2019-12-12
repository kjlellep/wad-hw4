import { mount } from '@vue/test-utils'
import List from '../../src/components/List.vue'

describe('List text', () => {

    const wrapper = mount(List)
    it('displays text "Add your first Todo task" with empty list', () => {
        const heading = wrapper.find('h3')
        expect(heading.text()).toBe("Add your first Todo task")
    })
});