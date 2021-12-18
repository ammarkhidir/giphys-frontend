<template>
  <h1>Welcome to My Giphy Collection</h1>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="giphy in giphysTrending" :key="giphy.id">
        <img :src="giphy.images.original.url" class="card-img-top" >
        <div class="card-body">
          <button type="button" class="btn btn-primary btn-sm">Add to favourite</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Giphy',
  data () {
    return {
      giphysTrending: []
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
  }
}
</script>

<style >

</style>
