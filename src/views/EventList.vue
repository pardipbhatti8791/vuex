<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in event.events" :key="event.id" :event="event"/>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    EventCard
  },
  created() {
    this.$store.dispatch('event/getEvents')
  },
  computed: mapState(['event'])
}
</script>
