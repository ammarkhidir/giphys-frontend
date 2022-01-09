import MyFavourite from '@/views/MyFavourite.vue'
import { flushPromises, mount, shallowMount } from '@vue/test-utils'
import fetch from 'node-fetch'

describe('Testing MyFavourite.vue', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })
  it('should show page title', () => {
    // when
    const wrapper = mount(MyFavourite)
    // then
    expect(wrapper.text()).toMatch('This is My Favourite Giphys')
  })
  it('should render the items from the backend', async () => {
    fetch.mockResponseOnce(JSON.stringify([
      { id: 1, title: 'Title1', link: 'url1' },
      { id: 2, title: 'Title2', link: 'url2' }
    ]))
    const item1 = 'Title1'
    const item2 = 'Title2'
    const wrapper = shallowMount(MyFavourite)
    await flushPromises()
    expect(wrapper.text()).toContain(item1)
    expect(wrapper.text()).toContain(item2)
  })
})
