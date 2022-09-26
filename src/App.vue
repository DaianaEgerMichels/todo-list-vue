<template>
  <!-- Content -->
    <div class="px-3 py-10 md:px-10">
        <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">

            <!-- Todo spinner -->
            <TodoSpinner/>
            <!--/ Todo spinner -->

            <!-- Todo form -->
            <TodoFormAdd/>
            <!--/ Todo form -->

            <!--/ Todo items -->
            <TodoItems/>
            <!--/ Todo items -->

            <!-- Todo empty -->
            <TodoEmpty/>
            <!--/ Todo empty -->
        </div>
    </div>
    <!--/ Content -->
</template>

<script>
import TodoSpinner from './components/TodoSpinner.vue';
import TodoFormAdd from './components/TodoFormAdd.vue';
import TodoItems from './components/TodoItems.vue';
import TodoEmpty from './components/TodoEmpty.vue';
import axios from 'axios'

export default {
    name: "App",
    components: { TodoSpinner, TodoFormAdd, TodoItems, TodoEmpty },

    data() {
        return {
            todos: []
        }
    },

    //opção 01:
    // async created() {
    //     this.todos = await axios.get('http://localhost:3000/todos')
    //         .then((response)=>{
    //             response.data;
    //         })
    // }

    //opção 02:
    created() {
        axios.get('http://localhost:3000/todos')
            .then((response)=>{
                this.todos= response.data;
            })
    }


}
</script>

