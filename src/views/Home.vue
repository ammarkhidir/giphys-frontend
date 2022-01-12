<template>
  <h1>Welcome to My Giphy Collection</h1>
  <div>
    <button id="buttonReload" class="btn btn-secondary" v-on:click="reloadPage" >Reload</button>
    <input  v-model="message" placeholder="Search" id="search" v-on:keyup.enter="showSearch">
    <button id="buttons" class="btn btn-outline-success my-2 my-sm-0"  v-on:click="showSearch" >Search</button>
  </div>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="giphy in giphysTrending" :key="giphy.id">
        <img :src="giphy.images.original.url" class="card-img-top">
        <div class="card-body">
          <button type="button" class="btn btn-primary btn-sm" v-on:click="postFavourite(giphy.title,giphy.images.original.url)">Add to favourite</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      message: '',
      giphysTrending: [],
      favouriteGif: null
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=HqEpHAynGVJArw92TAO1Kp7nTiCdtsMI', requestOptions)
      .then(response => response.json())
      .then(result => result.data.forEach(gif => {
        this.giphysTrending.push(gif)
      }))
      .catch(error => console.log('error', error))
  },
  methods: {
    showSearch: async function () {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      this.giphysTrending = []
      const url = 'https://api.giphy.com/v1/gifs/search?api_key=HqEpHAynGVJArw92TAO1Kp7nTiCdtsMI&q=' + this.message
      fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => result.data.forEach(gif => {
          this.giphysTrending.push(gif)
        }))
        .catch(error => console.log('error', error))
    },
    postFavourite: async function (title, link) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title, link: link }),
        redirect: 'follow'
      }
      fetch(process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/giphys', requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
    },
    reloadPage () {
      window.location.reload()
    }
  }
}

//
</script>

<style scoped>
body{
  background-color: mediumvioletred;
}
img {
  display: block;
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  width: 100%;
  height: 80%;
}
#search{
  width: 50%;
}
input{
  margin-left: 10px;
  margin-right: 10px;
  height: 37px;
}
</style>
