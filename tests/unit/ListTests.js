import { mount } from '@vue/test-utils'
import List from '../../src/components/List.vue'

describe('List text', () => {

    const wrapper = mount(List);
    it('displays text "Add your first Todo task" with empty list', () => {
        const heading = wrapper.find('h3');
        expect(heading.text()).toBe("Add your first Todo task")
    });

    const testList = [
        {id: 1,
            title: 'Test 1',
            done: false
        }];

    const wrapper2 = mount(List, {
        propsData: {
            list: testList
        }
    });

    it('List item is updated correctly', () => {
        const button = wrapper2.find('span');
        button.trigger('click');
        expect (wrapper2.props("list")[0].done).toBe(true);
    })
});