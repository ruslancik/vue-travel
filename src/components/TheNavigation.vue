<template>
   <nav id="nav">
       <p class="logo">Vue Travel App</p>
     <ul class="nav-links">
         <li class="links">
             <router-link to='/'>Home</router-link>
         </li>
         <li class="links" v-for="destination in destinations" :key="destination.name">
             <router-link :to="{name: 'DestinationDetails', params: {slug: destination.slug}}">
                 {{destination.name}}
             </router-link>
         </li>
     </ul>
    </nav>
</template>

<script>
import store from '../store.js'
export default {
    data(){
        return {
            destinations : store.destinations,
        }
    }
}
</script>

<style scoped lang='scss'>
#nav {
  display:flex;
//   position: sticky;
//   top:0;
//   background: white;
//   z-index: 1;
//   border-bottom: grey;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 0 10px;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .nav-links {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  .links {
      padding-right: 20px;
      list-style: none;

      &:hover {
          text-decoration: underline;
          color: #42b983;
      }
  }

  .logo {
      font-size: 20px;
      color: #42b983;
      font-weight: bold;
  }
}
    
</style>