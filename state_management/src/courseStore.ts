import {create} from 'zustand'
import { devtools,persist } from 'zustand/middleware'

const courseStore=(set:any)=>({
    courses:[],
    addCourse:(course:any)=>{
        set((state:any)=>({
        courses:[course,...state.courses]
        }))
    },
    removeCourse:(courseId:string)=>{
    set((state:any)=>({
        courses:state.courses.filter(({c}:{c:{id:string}})=>c.id!==courseId)
    }))
    },
    toggleCourse:(courseId:string)=>{
        set((state:any)=>({
            courses:state.courses.map((course:any)=>course.id==courseId?{...course,complated:!course.complated}:course)
        }))
    }


})

const useCourseStore=create(devtools(
    persist(courseStore,{
        name:"courses",
    })
))
export default useCourseStore