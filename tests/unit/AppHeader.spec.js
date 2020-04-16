import AppHeader from '@/components/AppHeader';
import { shallowMount } from '@vue/test-utils';
import vuetify from "vuetify";
import Vue from 'vue';

describe('AppHeader', () => {
    let wrapper;
    beforeEach(() => {
        Vue.use(vuetify);
        wrapper = shallowMount(AppHeader);
    })

    test('If user is not logged in - Show Sign In and Register', () => {
        expect(wrapper.find('[data-testid="sign-in"]').isVisible()).toBe(true)
        expect(wrapper.find('[data-testid="register"]').isVisible()).toBe(true)
    })

    test('If user is not logged in - Hide Sign Out and Profile', () => {
        expect(wrapper.find('[data-testid="sign-out"]').isVisible()).toBe(false)
        expect(wrapper.find('[data-testid="profile"]').isVisible()).toBe(false)
    })

    test('If user is logged in - Hide Sign In and Register', async () => {
        wrapper.setData({ currentUser: true })
        await wrapper.vm.$nextTick()
        expect(wrapper.find('[data-testid="sign-in"]').isVisible()).toBe(false)
        expect(wrapper.find('[data-testid="register"]').isVisible()).toBe(false)
    })

    test('If user is logged in - Show Sign Out and Profile', async () => {
        wrapper.setData({ currentUser: true })
        await wrapper.vm.$nextTick()
        expect(wrapper.find('[data-testid="sign-out"]').isVisible()).toBe(true)
        expect(wrapper.find('[data-testid="profile"]').isVisible()).toBe(true)
    })
})