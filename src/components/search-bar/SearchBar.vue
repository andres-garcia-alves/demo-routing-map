<template>
    <div class="container">
        <input type="text" placeholder="Buscar lugares..." class="form-control" v-model="searchTerm">    
        <SearchResults />
    </div>
</template>

<script lang="ts" src="./SearchBar.ts" />

<style scoped>
.container {
    background-color: white;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px !important;
    left: 30px;
    max-height: calc(100vh - 160px);
    min-height: 50px;
    position: fixed;
    overflow-y: scroll;
    padding: 5px;
    top: 30px;
    width: 250px;
    z-index: 99;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
}
.container::-webkit-scrollbar { 
    display: none;  /* Safari & Chrome */
}
</style>
