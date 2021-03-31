import { createLocalVue, shallowMount } from "@vue/test-utils";
import Example from "../src/Example.vue";
import Vuetify from "vuetify";
import { VIcon } from "vuetify/lib";

test("by functional selector", () => {
    const localVue = createLocalVue()
    const vuetify = new Vuetify()
    const wrapper = shallowMount(Example, {
        localVue,
        vuetify,
    });
    let icon = wrapper.findComponent(VIcon);
    expect(icon.exists()).toBe(true);
})

test("by name selector", () => {
    const localVue = createLocalVue()
    const vuetify = new Vuetify()
    const wrapper = shallowMount(Example, {
        localVue,
        vuetify,
    });
    let icon = wrapper.findComponent({ name: 'v-icon' });
    expect(icon.exists()).toBe(true);
})
