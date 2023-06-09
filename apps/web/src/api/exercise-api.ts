import { sendRequest } from './api';

const baseUrl: string = import.meta.env.VITE_EXERCISE_API_URL;

export interface Exercise {
    id: number;
    name: string;
    type: string;
    split: string;
}

export interface MuscleGroup {
    id: number;
    name: string;
}

export interface MuscleGroupWithExercises extends MuscleGroup {
    exercises: Exercise[];
}

export async function fetchExercises(token: string): Promise<Exercise[]> {
    const url = `${baseUrl}/exercises`;
    return await sendRequest<Exercise[]>(token, url, 'GET');
}

export async function fetchMuscleGroupWithExercises(token: string, id: number): Promise<MuscleGroupWithExercises> {
    const url = `${baseUrl}/muscle_groups/${id}`;
    return await sendRequest<MuscleGroupWithExercises>(token, url, 'GET');
}
