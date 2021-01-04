<template>
  <div>Post</div>
</template>

<script>
export default {
  name: 'Post',
  mounted () {
    console.log(this.$route.params.id)
  }
}
</script>
