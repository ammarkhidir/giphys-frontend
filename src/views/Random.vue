<template>
  <h1>Welcome to My Giphy Collection</h1>
  <button id="buttons" class = "btn btn-warning" v-on:click="showRandom()">Show random</button>
  <div class="container-fluid">
      <div class="col" v-for="giphy in giphysTrending" :key="giphy.id">
        <img :src="giphy.images.original.url" class="card-img-top" >
        <div class="card-body">
          <button type="button" class="btn btn-primary btn-sm" v-on:click="postFavourite(giphy.title,giphy.images.original.url)" >Add to favourite</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Random',
  data () {
    return {
      giphysTrending: [],
      gif: null
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch('https://api.giphy.com/v1/gifs/random?api_key=HqEpHAynGVJArw92TAO1Kp7nTiCdtsMI', requestOptions)
      .then(response => response.json())
      .then(result => this.giphysTrending.push(result.data))
      .catch(error => console.log('error', error))
  },
  methods: {
    showRandom: async function () {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      this.giphysTrending = []
      fetch('https://api.giphy.com/v1/gifs/random?api_key=HqEpHAynGVJArw92TAO1Kp7nTiCdtsMI', requestOptions)
        .then(response => response.json())
        .then(result => this.giphysTrending.push(result.data))
        .catch(error => console.log('error', error))
    },
    postFavourite: async function (title, link) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title, link: link }),
        redirect: 'follow'
      }
      fetch('http://localhost:8080/api/v1/giphys', requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
    }
  }
}

//
</script>

<style scoped>
body{
  background-color: cyan
}
img {
  display: block;
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  width: 30%;
  height: 50%;
}
.col{
  justify-content: center;
}
</style>
