import axios from 'axios'
import { getToken } from './users-service'

const BASE_URL = 'https://fitnesslavia.herokuapp.com/api/v1/workouts'


const setOptions = () => {
    return{
    headers: {
        'Authorization': `Bearer ${ getToken() }`, 
        'Content-Type': 'application/json'
    }}
}

export const getWorkouts = async () => {
    try{
        const response = await axios.get(BASE_URL, setOptions())
        console.log('working????',response)
        return response
    } catch(e){
        console.log(e)
    }

}

export const createWorkout = async workoutDetails => {
    try {
        const createdWorkout = await axios.post(BASE_URL, workoutDetails, setOptions())
        return createdWorkout
    } catch (e){
        console.log(e)

    }
}