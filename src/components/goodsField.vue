<template>
    <fieldset
        class="form-goods__field"
        :class="{
            _required: field.isRequired,
            _error: !field.isValid && field.isBlur,
        }"
    >
        <label :for="field.id">{{ field.name }}</label>
        <input
            v-if="!field.isTextarea"
            @input="checkField($event, field)"
            :value="modelValue"
            :id="field.id"
            :placeholder="field.placeholder"
            :type="field.fieldType"
        />
        <textarea
            v-else
            @input="checkField($event, field)"
            :value="modelValue"
            :id="field.id"
            :placeholder="field.placeholder"
            :type="field.fieldType"
        ></textarea>
        <span
            v-if="!field.isValid && field.isBlur"
            class="form-goods__errors"
            >{{ field.errors.required.text }}</span
        >
    </fieldset>
</template>

<script>
export default {
    methods: {
        checkField(event, model) {
            this.$emit('update:modelValue', event.target.value);

            if (event.target.value) {
                model.isValid = true;
                model.isBlur = false;
            } else {
                model.isValid = false;
                model.isBlur = true;
            }

            this.$emit('formValidation');
        },
    },
    props: {
        modelValue: String,
        field: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style>
</style>
