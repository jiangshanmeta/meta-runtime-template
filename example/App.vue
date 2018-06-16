<template>
	<div id="app">
    <h3>Template code: </h3>
    <code v-html="template"></code>
    <br><br><br><br>
    <h3>As you can see, the v-runtime-template component has access to this component scope, and updates accordingly. </h3>    
    <input v-model="name"/> {{name}}
		<!-- <v-runtime-template :template="template"></v-runtime-template> -->
	</div>
</template>

<script>
import AppMessage from "./AppMessage";

export default {
  data: () => ({
    name: "Mellow",
    template: `
      <app-message>Hello {{ name }}!</app-message>
    `
  }),
  components: {
    AppMessage,
  }
}
</script>