<template>
    <h1>This is My Favourite Giphys</h1>
    <div class="container-fluid">
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col" v-for="giphy in giphysFavourites" :key="giphy.id">
          <img :src="giphy.link" class="card-img-top" >
          <div class="card-body">
            <label>{{giphy.title}}</label>
            <button type="button" class="btn btn-primary btn-sm" v-on:click="removeFavourite(giphy.id)">Remove</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'My Favourite Giphy',
  data () {
    return {
      giphysFavourites: []
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/giphys'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(gif => {
        this.giphysFavourites.push(gif)
      }))
      .catch(error => console.log('error', error))
  },
  methods: {
    reloadPage () {
      window.location.reload()
    },
    removeFavourite: async function (id) {
      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      }
      const url = 'https://ammarkhidir-webtechnologies.herokuapp.com/api/v1/giphys/' + id
      fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
      this.reloadPage()
    }
  }
}
</script>

<style >

</style>
