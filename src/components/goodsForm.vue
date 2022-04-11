<template>
    <form class="goods__form form-goods">
        <fieldset
            class="form-goods__field"
            :class="{
                _required: form.fields.name.isRequired,
                _error: !form.fields.name.isValid && form.fields.name.isEmpty,
            }"
        >
            <label for="field-name">Наименование товара</label>
            <input
                v-model="form.fields.name.value"
                id="field-name"
                placeholder="Введите наименование товара"
                type="text"
            />
            <span
                v-if="!form.fields.name.isValid && form.fields.name.isEmpty"
                class="form-goods__errors"
                >Поле является обязательным</span
            >
        </fieldset>
        <fieldset
            class="form-goods__field"
            :class="{
                _required: form.fields.content.isRequired,
            }"
        >
            <label for="field-content">Описание товара</label>
            <textarea
                v-model="form.fields.content.value"
                id="field-content"
                placeholder="Введите описание товара"
                type="text"
            ></textarea>
        </fieldset>
        <fieldset
            class="form-goods__field"
            :class="{
                _required: form.fields.img.isRequired,
                _error: !form.fields.img.isValid && form.fields.img.isEmpty,
            }"
        >
            <label for="field-img">Ссылка на изображение товара</label>
            <input
                v-model="form.fields.img.value"
                id="field-img"
                placeholder="Введите ссылку"
                type="text"
            />
            <span
                v-if="!form.fields.img.isValid && form.fields.img.isEmpty"
                class="form-goods__errors"
                >Поле является обязательным</span
            >
        </fieldset>
        <fieldset
            class="form-goods__field"
            :class="{
                _required: form.fields.price.isRequired,
                _error: !form.fields.price.isValid && form.fields.price.isEmpty,
            }"
        >
            <label for="field-price">Цена товара</label>
            <input
                v-model.number="form.fields.price.value"
                id="field-price"
                placeholder="Введите цену"
                type="number"
            />
            <span
                v-if="!form.fields.price.isValid && form.fields.price.isEmpty"
                class="form-goods__errors"
                >Поле является обязательным</span
            >
        </fieldset>

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
import { mapMutations } from "vuex";

export default {
    components: {},
    data() {
        return {
            form: {
                fields: {
                    name: {
                        isRequired: true,
                        isValid: false,
                        isEmpty: false,
                        value: "",
                    },
                    content: {
                        isRequired: false,
                        value: "",
                    },
                    img: {
                        isRequired: true,
                        isValid: false,
                        isEmpty: false,
                        value: "",
                    },
                    price: {
                        isRequired: true,
                        isValid: false,
                        isEmpty: false,
                        value: "",
                    },
                },
                isFormValid: false,
            },
        };
    },
    methods: {
        addGood(event) {
            const good = {
                id: Date.now(),
                name: this.form.fields.name.value,
                content: this.form.fields.content.value,
                img: this.form.fields.img.value,
                price: this.form.fields.price.value,
            };
            this.setGood(good);
            event.target.form.reset();
        },
        ...mapMutations({
            setGood: "goods/setGood",
        }),
    },
    // Явно не лучший способ валидации, но другой я пока не приумал :(
    watch: {
        "form.fields.name.value": {
            handler(newValue) {
                if (newValue) {
                    this.form.fields.name.isValid = true;
                    this.form.fields.name.isEmpty = false;
                } else {
                    this.form.fields.name.isValid = false;
                    this.form.fields.name.isEmpty = true;
                }
            },
        },
        "form.fields.img.value": {
            handler(newValue) {
                if (newValue) {
                    this.form.fields.img.isValid = true;
                    this.form.fields.img.isEmpty = false;
                } else {
                    this.form.fields.img.isValid = false;
                    this.form.fields.img.isEmpty = true;
                }
            },
        },
        "form.fields.price.value": {
            handler(newValue) {
                if (newValue) {
                    this.form.fields.price.isValid = true;
                    this.form.fields.price.isEmpty = false;
                } else {
                    this.form.fields.price.isValid = false;
                    this.form.fields.price.isEmpty = true;
                }
            },
        },
        form: {
            handler(newValue) {
                for (const field of Object.values(newValue.fields)) {
                    if (!field.isRequired) continue;
                    if (!field.isValid) {
                        this.form.isFormValid = false;
                        return;
                    } else {
                        this.form.isFormValid = true;
                    }
                }
            },
            deep: true,
        },
    },
};
</script>

<style></style>
