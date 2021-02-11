const PostsDummy = {
  data: [...Array(5)].map((_, i) => ({
    id: i + 1,
    title: `投稿一覧の${i + 1}番目のタイトルです`,
    description: `投稿一覧の${i + 1}番目の説明文です`
  }))
}
export default PostsDummy
