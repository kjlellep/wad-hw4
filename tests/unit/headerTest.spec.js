import { mount } from '@vue/test-utils'
import Header from '../../src/components/Header.vue'

describe('Header info', () => {

    const wrapper = mount(Header)
    const current = new Date()
    let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    it('displays date correctly', () => {
        const day = wrapper.find('#weekday')
        expect(day.text().toLowerCase()).toBe(weekdays[current.getDay()].toLowerCase())
    })

    it('displays year correctly', () => {
        const day = wrapper.find('#year')
        expect(day.text()).toBe("2019")
    })

    it('displays month correctly', () => {
        const month = wrapper.find('#month')
        expect(month.text()).toBe("DEC")
    })

    it('displays day of the week correctly', () => {
        const day = wrapper.find('h1')
        expect(day.text()).toBe(current.getDate().toString())
    })
});