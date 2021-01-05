<template>
  <div>Article</div>
</template>

<script>
export default {
  name: 'Article',
  mounted () {
    console.log(this.$route.params.id)
  }
}
</script>
