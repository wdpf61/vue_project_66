import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { router } from './router'
import { createPinia } from 'pinia'
import { ApolloClients } from '@vue/apollo-composable'
import { apolloClient } from './appollo/apollo'



const app= createApp(App)

app.provide(ApolloClients, {
  default: apolloClient,
})

app.use(router).use(createPinia()).mount('#app')
