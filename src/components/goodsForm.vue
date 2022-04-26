<template>
    <form class="goods__form form-goods">
        <goods-field
            v-for="(field, name) in form.fields"
            :key="field.id"
            :field="field"
            v-model="form.fields[name].value"
            @formValidation="formValidation"
        >
        </goods-field>

        <button
            @click.prevent="addGood"
            class="form-goods__submit"
            :class="{ _success: form.isFormValid }"
            :disabled="!form.isFormValid"
            type="submit"
        >
            Добавить товар
        </button>
    </form>
</template>

<script>
import GoodsField from '@/components/goodsField.vue';
import { mapMutations } from 'vuex';

export default {
    components: { GoodsField },
    data() {
        return {
            form: {
                fields: {
                    name: {
                        id: 1,
                        name: 'Наименование товара',
                        placeholder: 'Введите наименование товара',
                        errors: {
                            required: {
                                text: 'Поле является обязательным',
                            },
                        },
                        fieldType: 'text',
                        isRequired: true,
                        isValid: false,
                        isBlur: false,
                        value: '',
                    },
                    content: {
                        id: 2,
                        name: 'Описание товара',
                        placeholder: 'Введите описание товара',
                        // errors: {
                        //     required: {
                        //         text: 'Поле является обязательным',
                        //     },
                        // },
                        fieldType: 'text',
                        isTextarea: true,
                        isRequired: false,
                        value: '',
                    },
                    img: {
                        id: 3,
                        name: 'Ссылка на изображение товара',
                        placeholder: 'Введите ссылку',
                        errors: {
                            required: {
                                text: 'Поле является обязательным',
                            },
                        },
                        fieldType: 'text',
                        isRequired: true,
                        isValid: false,
                        isBlur: false,
                        value: '',
                    },
                    price: {
                        id: 4,
                        name: 'Цена товара',
                        placeholder: 'Введите цену',
                        errors: {
                            required: {
                                text: 'Поле является обязательным',
                            },
                        },
                        fieldType: 'number',
                        isRequired: true,
                        isValid: false,
                        isBlur: false,
                        value: '',
                    },
                },
                isFormValid: false,
            },
        };
    },
    methods: {
        addGood() {
            const good = {
                id: Date.now(),
                url: 'javascript:void(0);',
                name: this.form.fields.name.value,
                content: this.form.fields.content.value,
                img: this.form.fields.img.value,
                price: this.form.fields.price.value,
            };
            this.setGood(good);
            this.clearForm();
        },
        clearForm() {
            for (const field of Object.values(this.form.fields)) {
                if ('isValid' in field) field.isValid = false;
                if ('isBlur' in field) field.isBlur = false;
                field.value = '';
            }

            this.form.isFormValid = false;
        },
        formValidation() {
            for (const field of Object.values(this.form.fields)) {
                if (!field.isRequired) continue;
                if (!field.isValid) {
                    this.form.isFormValid = false;
                    return;
                } else {
                    this.form.isFormValid = true;
                }
            }
        },
        ...mapMutations({
            setGood: 'goods/setGood',
        }),
    },
};
</script>

<style></style>
