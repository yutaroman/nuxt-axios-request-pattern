module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended'
    ],
    plugins: [],
    rules: {
        indent: ['error', 4], // 4スペースインデントでない箇所をエラーとする ( .editorconfig に合わせた )
        'vue/html-indent': ['error', 4] // 上記ルールを vue template 内にも適用
    }
}
