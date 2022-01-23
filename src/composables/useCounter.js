import { ref } from "vue";

const useCounter = () => {


    const counter = ref(5)

    // Solo se ponen las funciones aqui siempre y cuando se vaya a hacer una referencia a la misma, si no no


    return {
        counter,

        decrease: () => counter.value--,
        increase: () => counter.value++

    }

}

export default useCounter