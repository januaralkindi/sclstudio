<template>
 <div>
     <v-app>
        <Navbar/>
            <slot>
            </slot>
     </v-app>
 </div>
</template>

<script>
import Navbar from  '../components/Naviagtion'
export default {
    name: 'defaultLayout',
    components  : {
        Navbar
    }

}
</script>

<style>

</style>