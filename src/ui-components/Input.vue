<template>
    <div class="form-group">
        <label :for="id" class="sr-only">{{ label }}</label>
        <input :type="type" 
               :id="id" 
               :placeholder="placeholder" 
               class="form-control mb-2" 
               :required="rules.required"
               :pattern="rules.pattern"
               :minlength="rules.minlength"
               :maxlength="rules.maxlength"
               :autofocus="rules.autofocus" 
               @input="updateInput"
               :value="modelValue"
        />
    </div>
</template>
<script>
export default {
    name : 'Input',
    props:{
        label: String,
        type: String,
        placeholder: String,
        id: {
            type: String,
            default: 'FormInput'
        },
        rules: {
            type: Object,
            default: () => ({})
        },
        modelValue: [String, Number],
        
    },
    methods: {  
        updateInput(e) {
            this.$emit('update:modelValue', e.target.value)
        },
    },

}
</script>
<style>
    
</style>