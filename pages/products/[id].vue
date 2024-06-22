<template>
    <div>
        <p>Product details for {{ id }}</p>
    </div>
</template>

<script>
export default {
    setup () {
        const { id } = useRoute().params

        return {id}
    }
}
</script>

<style lang="scss" scoped>

</style>