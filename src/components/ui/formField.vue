<template>
    <fieldset :class="{ _required: field.isRequired, _error: this.error }">
        <label for="field-name">{{ field.name }}</label>
        <input
            v-if="!field.isTextarea"
            :id="field.id"
            :placeholder="field.placeholder"
            v-model="value"
            @input="validation"
            type="text"
        />
        <textarea
            v-else
            :id="field.id"
            :placeholder="field.placeholder"
            v-model="value"
            type="text"
        ></textarea>
        <span v-if="this.error" class="form-goods__errors"
            >Поле является обязательным</span
        >
    </fieldset>
</template>

<script>
export default {
    name: 'form-field',
    components: {},
    data() {
        return {
            value: '',
            error: false,
        };
    },
    props: {
        field: {
            type: Object,
            required: true,
        },
    },
    methods: {
        validation(event) {
            this.error = !event.target.value;
        },
    },
};
</script>

<style>
</style>
