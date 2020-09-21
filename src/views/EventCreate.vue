<template>
  <div>
    <h1>Create Event {{ user.name }} </h1>
    <p>Create Event id: {{ id }} </p>
    <p>Length: {{ catLength }} </p>
    <p>{{ getEventById(1) }}</p>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
export default {
  computed: {
    catLength() {
      return this.$store.getters.catLength
    },
    ...mapGetters(['getEventById']),
    ...mapState({
      user: 'user',
      id: state => state.user.id
    }),
  }
}
</script>

<style scoped>

</style>