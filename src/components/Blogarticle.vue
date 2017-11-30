<template>
  <div class="blogarticle" v-editable="blok">
    <h1>
      {{blok.title}}
    </h1>
    <p>
      {{blok.body}}
    </p>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
