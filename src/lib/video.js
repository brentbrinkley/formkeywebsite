import { writable } from 'svelte/store'

// null = modal closed; a YouTube video id string = modal open with that video
export const videoId = writable(null)
