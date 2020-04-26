<template>
 <div>
     <v-app>
        <Navbar/>
            <slot>
            </slot>
        <Footer/>
     </v-app>
 </div>
</template>

<script>
import Navbar from  'components/Naviagtion'
import Footer from  'components/Footer'

export default {
    name: 'defaultLayout',
    components  : {
        Navbar,
        Footer
    }

}
</script>

<style>

</style>