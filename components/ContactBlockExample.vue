<template>
    <div>
        {{ title }}
    </div>
    <button class="bg-[orange] p-4" @click.prevent="$emit('onCLick', `${id} was deleted from table`)">click me</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        title: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
        }
    },
    setup () {
        const amount = ref<number>(100)
        const name = ref<string>('Kanagat')
        
        return {}
    }
})
</script>