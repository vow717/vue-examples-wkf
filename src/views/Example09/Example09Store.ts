import type { User ,Course} from "@/datasource/Types";
import { ref } from "vue";
const coursesS = ref<Course[]>([])
const userS = ref<User>({ name: 'BO', address: '925', level: 1 })

const store = {
  coursesS,
  userS
}

export const useExample09Store = () => {
  return store
}

