<template>
  <CFooter :fixed="false">
    <div>
      <span href="" target="_blank">KoTA 211</span>
      <span class="ml-1">&copy; {{new Date().getFullYear()}}  Tugas Akhir</span>
    </div>
    <div class="mfs-auto">
      <span class="mr-1" target="_blank">Powered by</span>
      <span>KoTA 211</span>
    </div>
  </CFooter>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>
