import { defineStore } from 'pinia'

export const datosStore = defineStore('datosStore',{
    state: ()=>({
        nombre: 'cristhian',
        apellido: 'villca mamani',
        edad: 45
    })
})