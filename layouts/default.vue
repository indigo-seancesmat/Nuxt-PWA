<template>
  <div>
    <nav class="nav">
      <img src="https://cdn.onlinewebfonts.com/svg/img_129504.png" />
      <a href="/">HOME</a>
    </nav>
    <nuxt />
  </div>
</template>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #000022;
  color: #fff;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background: tomato;
  img {
    max-width: 60px;
  }
  a {
    font-weight: bold;
    font-family: Helvetica, sans-serif;
    color: #fff;
    text-decoration: none;
    font-size: 28px;
  }
}
</style>
