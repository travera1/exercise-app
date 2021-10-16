import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Nutrition from '../views/Nutrition.vue'
import MealSchedule from '../views/MealSchedule.vue'
import RecipesAndMeals from '../views/RecipesAndMeals.vue'
import Progress from '../views/Progress.vue'
import WorkoutRoutines from '../views/WorkoutRoutines.vue'
import Goals from '../views/Goals.vue'
import Messages from '../views/Messages.vue'
import Friends from '../views/Friends.vue'
import AddFriends from '../views/AddFriends.vue'
import Reports from '../views/Reports.vue'
import Settings from '../views/Settings.vue'
import LogIn from '../views/LogIn.vue'
import SignUp from '../views/SignUp.vue'
import SignUpEmail from '../views/SignUpEmail.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nutrition',
    name: 'Nutrition',
    component: Nutrition
  },
  {
    path: '/mealschedule',
    name: 'MealSchedule',
    component: MealSchedule
  },
  {
    path: '/recipesandmeals',
    name: 'RecipesAndMeals',
    component: RecipesAndMeals
  },
  {
    path: '/progress',
    name: 'Progress',
    component: Progress
  },
  {
    path: '/workoutroutines',
    name: 'WorkoutRoutines',
    component: WorkoutRoutines
  },
  {
    path: '/goals',
    name: 'Goals',
    component: Goals
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages
  },
  {
    path: '/friends',
    name: 'Friends',
    component: Friends
  },
  {
    path: '/addfriends',
    name: 'AddFriends',
    component: AddFriends
  },
  {
    path: '/reports',
    name: 'Reports',
    component: Reports
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/signupwithemail',
    name: 'SignUpEmail',
    component: SignUpEmail
  },
  // catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
