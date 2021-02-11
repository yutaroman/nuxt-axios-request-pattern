const CategoriesDummy = {
  data: [...Array(3)].map((_, i) => ({
    id: i + 1,
    title: `カテゴリ一覧の${i + 1}番目のカテゴリ名です`,
    description: `カテゴリ一覧の${i + 1}番目の説明文です`
  }))
}
export default CategoriesDummy
