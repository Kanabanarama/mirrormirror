<template>
  <div>
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <router-link :to="link.to">{{ link.name }}</router-link>
      </li>
    </ul>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style scoped>
  ul {
    list-style: none;
    display: flex;
    padding: 0;
  }
  li {
    padding: 5px;
    border: 1px solid gray;
  }
  li a {
    text-decoration: none;
    color: gray;
  }
  li a:hover {
    color: lightgray;
  }
</style>

<script>
export default {
  data: () => ({
    links: [
      {
        name: 'Home',
        to: '/'
      },
      {
        name: 'Example',
        to: '/example'
      }
    ]
  })
}
</script>
