import { computed, defineComponent, ref } from "vue";

import { usePlacesStore } from "@/composables";
import SearchResults from "@/components/search-results/SearchResults.vue";

export default defineComponent({
    name: 'SearchBar',
    components: { SearchResults },

    setup() {
        const { searchPlacesByTerm } = usePlacesStore();

        const debounceTimeOut = ref();
        const debouncedValue = ref('');

        return {
            debouncedValue,
            searchTerm: computed({
                get() { return debouncedValue.value; },
                set(val: string) {
                    if (debounceTimeOut.value) { clearTimeout(debounceTimeOut.value); }
                    debounceTimeOut.value = setTimeout(() => {
                        debouncedValue.value = val;
                        searchPlacesByTerm(val);
                    }, 750);
                }
            }),
            searchPlacesByTerm
        }
    }
});
