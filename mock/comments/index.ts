const CommentsDummy = {
    data: [...Array(10)].map((_, i) => ({
        id: i + 1,
        body: `${i + 1}番目のコメントです。${i + 1}番目のコメントです。${i + 1}番目のコメントです。${i + 1}番目のコメントです。${i + 1}番目のコメントです。`
    }))
}
export default CommentsDummy
