<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { Link } from '@inertiajs/vue3';
import { useForm } from '@inertiajs/vue3'
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const signupForm = useForm({
    email: null,
    firstName: null,
    middleName: null,
    lastName: null,
    password: null,
    password_confirmation: null,
});

const submit = () => {
  signupForm.post(route('signup'), {
    onSuccess: () => {
        toast.add({ severity: 'success', summary: 'Success', detail: 'Signup Successfully!', life: 3000 });
    },
    onError: () => {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Signup Failed', life: 3000 });
    }
  })
}
</script>

<template>
    <Toast />
   <div class="flex flex-col items-center justify-center min-h-screen">
        <div class="w-auto border-solid border-2 border-inherit rounded-xl p-6">
            <h1 class="text-5xl text-center mb-8">SIGNUP</h1>
                <form @submit.prevent="submit">
                    <div class="flex flex-col">
                        <InputText class="mb-4 w-96" type="text" v-model="signupForm.email" placeholder="Email" />
                        <InputText class="mb-4 w-96" type="text" v-model="signupForm.firstName" placeholder="First Name" />
                        <InputText class="mb-4 w-96" type="text" v-model="signupForm.middleName" placeholder="Middle Name" />
                        <InputText class="mb-4 w-96" type="text" v-model="signupForm.lastName" placeholder="Last Name" />
                        <InputText class="mb-4" type="password" v-model="signupForm.password" placeholder="Password"/>
                        <InputText class="mb-4" type="password" v-model="signupForm.password_confirmation" placeholder="Confirm Password"/>
                        <Button type="submit" class="mb-6" label="SIGNUP"/>
                        <p>Already have an account? <Link className="text-red-800" :href="route('login')" as="button">Login</Link> </p>
                    </div>
                </form>
        </div>
    </div>
</template>