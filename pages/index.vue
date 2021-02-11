<template>
  <div class="container">
    <h1
      class="title"
      v-text="'nuxt-axios-request-pattern ( page )'"
    />
    <h2
      class="subtitle"
      v-text="'ユーザーデータ ( Vuex ステート, CSR )'"
    />
    <template v-if="userDetailData">
      <p
        class="text"
        v-text="`uuid: ${userDetailData.uuid}`"
      />
      <p
        class="text"
        v-text="`名前: ${userDetailData.name}`"
      />
      <p
        class="text"
        v-text="`年齢: ${userDetailData.age}`"
      />
    </template>
    <p
      v-else
      class="text"
      v-text="'3秒後にフェッチします...'"
    />
    <h2
      class="subtitle"
      v-text="'コメント一覧 ( ローカルステート, CSR )'"
    />
    <button
      type="button"
      class="button"
      v-text="'コメント一覧を取得する'"
      @click="fetchComments"
    />
    <ul
      v-if="comments"
      class="list"
    >
      <li
        v-for="comment in comments.data"
        :key="comment.id"
        class="listItem"
      >
        <p v-text="`id: ${comment.id}`" />
        <p v-text="comment.body" />
      </li>
    </ul>
    <p
      v-else
      class="text"
      v-text="'未取得です'"
    />
    <h2
      class="subtitle"
      v-text="'カテゴリ一覧 ( ローカルステート, SSR )'"
    />
    <ul class="list">
      <li
        v-for="categoy in categories.data"
        :key="categoy.id"
        class="listItem"
      >
        <p v-text="`id: ${categoy.id}`" />
        <p v-text="categoy.title" />
        <p v-text="categoy.description" />
      </li>
    </ul>
    <h2
      class="subtitle"
      v-text="'投稿一覧 ( ローカルステート, SSR )'"
    />
    <ul class="list">
      <li
        v-for="post in posts.data"
        :key="post.id"
        class="listItem"
      >
        <p v-text="`id: ${post.id}`" />
        <p v-text="post.title" />
        <p v-text="post.description" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
interface Data {
  categories: null | { data: { id: number, title: string, description: string }[] },
  posts: null | { data: { id: number, title: string, description: string }[] },
  comments: null | { data: { id: number, body: string }[] },
}
export default Vue.extend({
  async asyncData ({ app }: Context): Promise<object> {
    const [categories, posts] = await Promise.all([
      app.$repositories('categories').index(),
      app.$repositories('posts').index()
    ])
    return {
      categories: categories.data,
      posts: posts.data
    }
  },
  data (): Data {
    return {
      categories: null,
      posts: null,
      comments: null
    }
  },
  computed: {
    userDetailData (): any {
      return this.$accessor.api.me.userDetailData
    }
  },
  mounted () {
    // 3秒後にフェッチする
    setTimeout(() => {
      this.$accessor.api.me.fetchDetail()
    }, 5000)
  },
  methods: {
    async fetchComments (): Promise<void> {
      try {
        // FIXME: Property 'index' does not exist on type 'Function'.
        // @ts-ignore
        const response = await this.$repositories('comments').index()
        this.comments = response.data
      } catch (error) {
        console.log(error.response)
        throw error
      }
    }
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  padding: 30px;
  min-height: 100vh;
}
.title {
  font-size: 3rem;
  font-weight: bold;
  color: #35495e;
  display: block;
}
.subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  color: #526488;
  margin-top: 30px;
}
.list {
  list-style: none;
  padding-left: 0;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
}
.listItem {
  border: 1px solid #526488;
  border-radius: 4px;
  padding: 10px;
  width: calc(50% - 5px);
  min-width: calc(50% - 5px);
  margin: 10px 0 0 10px;
}
.listItem:nth-child(odd) {
  margin-left: 0;
}
.button {
  margin-top: 10px;
}
.text {
  margin-top: 10px;
}
</style>
