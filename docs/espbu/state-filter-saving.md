# State Filter-saving

One of the common problems in management app is filters are not saved when you navigate away from the page. Imagine if the user has to re-select the filters every time they want to see the same page over and over again. So I came up with a solution to save the filters in the state and restore them when the user comes back to the page.

## Implementation

Assuming Vuex is installed and you already have a page that has a filter, let's say a page that shows a list of tasks. The page has a filters like `date`, `shift`, `dispenser`, etc. The user can select the filters and the page will show the tasks based on the selected filters.

- First, Create a file named `index.js` in the store folder to later store the state of the filters.
- Setting up the state of the filters in the `index.js` file. Use the `state()` and `mutations()` functions. Each key in this return object represents a piece of filter data, like 'searchTasks' for task filter data, The value of each key is the initial value of the filter data. Then, the mutation function is used to update the filter data. 

::: details store/index.js
```js
import { createStore } from 'vuex'
export const store = createStore({

  state() {
    return {
      // other filters ..
      searchTasks: {
        page: 1,
        search_user: '',
        search_shift: '',
        search_machine: '',
        search_shift_start_at: '',
        search_per_page: 7,
        order_column: 'tasks.updated_at',
        order_direction: 'desc'
      },
      // other filters ..
    }
  },

  mutations: {
    setSearchTasks(state, searchTask) {
      state.searchTasks = searchTask
    },
  }
})
```
:::

- Then, in the tasks composable, import the `store` and access the `searchTasks` state and assign it to a variable and then return it. 

::: details tasks.js
```js
import { computed } from 'vue'

export default function useTasks() {
  const searchTasks = computed(() => store.state.searchTasks)
  const pageNumber = ref(searchTasks.value.page);
  const search_user = ref(searchTasks.value.search_user);
  const search_shift = ref(searchTasks.value.search_shift);
  const search_machine = ref(searchTasks.value.search_machine);
  const search_shift_start_at = ref(searchTasks.value.search_shift_start_at);
  const search_per_page = ref(searchTasks.value.search_per_page)
  const orderColumn = ref(searchTasks.value.order_column);
  const orderDirection = ref(searchTasks.value.order_direction);

  // other codes .. 

  return {
    searchTasks,
    pageNumber,
    search_user,
    search_shift,
    search_machine,
    search_shift_start_at,
    search_per_page,
    orderColumn,
    orderDirection,
  }
}
```
:::

- Then, in the `TaskIndexComponent.vue` component, import the `store` and the `useTasks` composable. 

::: details TaskIndexComponent.vue
```vue
<script setup>

import useTasks from "../../composables/tasks";

const {
  store,
  pageNumber,
  search_shift_start_at,
  search_user,
  search_shift,
  search_machine,
  search_per_page,
  orderColumn,
  orderDirection,
} = useTasks();

</script>
```
:::

- Create an object containing filter values in the order they match the initial state structure

::: details TaskIndexComponent.vue
```vue
<script setup>

import { ref } from "vue";

const searchTasks = ref({
  pageNumber,
  search_user,
  search_shift,
  search_machine,
  search_shift_start_at,
  search_per_page,
  orderColumn,
  orderDirection
})

</script>
```
:::

- Create the `setSearchTasks` function using the `store` and `commit` function. This function takes the mutation function from the state and `searchTasks` as the payload.In the `onBeforeUnmount` function, call `setSearchTasks` to save the filter values in the state.

::: details TaskIndexComponent.vue
```vue
<script setup>

import { onBeforeUnmount} from "vue";

function setSearchTasks() {
  store.commit('setSearchTasks', searchTasks.value)
}

onBeforeUnmount(() => {
  setSearchTasks()
});

</script>
```
:::

- And there you have it! User filters are now retained unless they refresh the page or open a new tab —a Single Page Application as it should be.

## Preview

Here's a video of me set the filters and navigate away from the page and then come back to the page. The filters are retained.

<iframe width="560" height="315" src="https://www.youtube.com/embed/9DIM8hhJrq8?si=YFCdezZBvRzSR-7P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Additional Notes

In fact, it's entirely possible to save these filters in a database, with each user having their own unique filter state. Implementing this feature, where filters persist across sessions, is just one of the advanced capabilities I can bring to the table.

If you're interested in this kind of functionality or exploring further enhancements for your projects, I'd be delighted to discuss how I can contribute my expertise to your team. Please feel free to reach out, and Let's discuss how I can contribute to your project!