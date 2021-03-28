<template>
    <div>
        <header class="header">
            <p
                v-text="'ヘッダー ( layout )'"
            />
            <p
                v-if="userDetailData"
                v-text="`ユーザー名: ${userDetailData.name}`"
            />
        </header>
        <Nuxt />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    computed: {
        userDetailData (): any {
            return this.$accessor.api.me.userDetailData
        }
    }
})
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.header {
  background-color: #35495e;
  height: 50px;
  color: #fff;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
