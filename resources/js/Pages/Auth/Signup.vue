<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { Link } from '@inertiajs/vue3';
</script>

<template>
   <div class="flex flex-col items-center justify-center min-h-screen">
        <div class="w-auto border-solid border-2 border-inherit rounded-xl p-6">
            <h1 class="text-5xl text-center mb-8">SIGNUP</h1>
            <div class="flex flex-col">
            <InputText class="mb-4 w-96" type="text" v-model="value" placeholder="Email" />
            <InputText class="mb-4 w-96" type="text" v-model="value" placeholder="First Name" />
            <InputText class="mb-4 w-96" type="text" v-model="value" placeholder="Middle Name" />
            <InputText class="mb-4 w-96" type="text" v-model="value" placeholder="Last Name" />
            <InputText class="mb-4" type="password" v-model="value" placeholder="Password"/>
            <InputText class="mb-4" type="password" v-model="value" placeholder="Confirm Password"/>
            <Button class="mb-6" label="SIGNUP"/>
            <p>Already have an account? <Link className="text-red-800" href="/" as="button">Login</Link> </p>
            </div>
        </div>
    </div>
</template>