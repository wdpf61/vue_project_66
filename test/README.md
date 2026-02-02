npm install vue-router
 
const routes = [
    {
  path: '/admin',
  component: AdminLayout,
  children: [
    {
      path: 'dashboard',
      component: Dashboard
    },
    {
      path: 'users',
      component: Users
    }
  ]
},
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

createApp(App).use(router).mount('#app')

<router-view />


<router-link to="/about">About</router-link>
const route = useRoute()
console.log(route.params.id)


const router = useRouter()
router.push('/about')
router.push({ name: 'student', params: { id: 10 } })

api
npm i axios