<template>
<div>
    <v-toolbar class="navbar" flat dense height="124"> 
        <div class="navbar-content">
            <div class="navbar-logo">
                <img :src="logo">
            </div>
             <v-spacer></v-spacer>  
            <div class="navbar-menu">
                <div class="navbar-end">
                    <a class="navbar-item"> Home </a>
                    <a class="navbar-item"> Services </a>
                    <a class="navbar-item"> Products </a>
                    <a class="navbar-item"> Our Works </a>
                    <a class="navbar-item"> Contact Us </a>
                </div> 
            </div>
        </div>
    </v-toolbar>      
</div>
    
</template>
<script>
import {scl_logo_white } from '../assets/image/image'
export default {
    name : 'NavigationBar',
    data(){
        return {
            logo : scl_logo_white
        }
    }
}
</script>
<style lang="scss">

@import '~@/assets/style/variable/color';
.navbar {
    width: 100%;
    display: flex;
    padding : 0 10%;
    align-items: flex-end;
    position: fixed;
    z-index: 2;
    &-menu {
        flex-grow: 1;
        flex-shrink: 0;
        margin-bottom: 20px;
    }
    &-end {
        justify-content: flex-end;
        margin-left: auto;
        display: flex;
        a{
            display: flex;
            padding: 0 12px;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            color: #121212!important;
            letter-spacing: 0.5px;
        }

        a:hover {
            color:$scl_orange !important;
        }
    }

    &-item{
        display: flex;
        padding: 0 12px;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #121212;
        letter-spacing: 0.5px;
    }
    
    &-content {
        display: flex;
        width: 100%;
        align-items: flex-end;
    }
    &-logo {
        width: 132px;
        height: 124px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $scl_yellow;
        border-radius: 0px 0px 20px 0px;
    }
}

.v-toolbar__content{
    width: 100%;
}
</style>