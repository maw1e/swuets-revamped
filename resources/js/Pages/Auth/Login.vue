<script setup>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { Link } from '@inertiajs/vue3'

</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen">
        <div class="w-auto border-solid border-2 border-inherit rounded-xl p-4">
            <h1 class="text-5xl text-center mb-8">LOGIN</h1>
            <div class="flex flex-col">
            <InputText class="mb-4 w-96" type="text" v-model="value" placeholder="Email" />
            <InputText class="mb-4" type="password" v-model="value" placeholder="Password"/>
            <Button class="mb-6" label="LOGIN"/>
            <p>Don't have an account? <Link className="text-red-800" href="signup" as="button">Signup</Link> </p>
            </div>
        </div>
    </div>
</template>