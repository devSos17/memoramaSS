<template>
  <div class="playing-card">
    <div class="card-front">
      <div class="latex-input">
        <input v-model="latex" placeholder="Enter LaTeX here" />
      </div>
    </div>
    <div class="card-back">
      <div id="latex-rendered" v-html="renderedLatex"></div>
    </div>
  </div>
</template>

<script>
import MathJaxService from '@/services/MathJaxService.js'; // Adjust the path as needed

export default {
  props: {
    initialLatex: String, // Input property to receive LaTeX content
  },
  data() {
    return {
      latex: this.initialLatex || '', // Initialize with the provided LaTeX or an empty string
      renderedLatex: '',
    };
  },
  watch: {
    latex(newLatex) {
      // When the LaTeX content changes, re-render it using MathJaxService
      this.renderedLatex = newLatex;
      MathJaxService.renderMath('latex-rendered');
    },
  },
  mounted() {
    // Render initial LaTeX content when the component is mounted
    this.renderedLatex = this.latex;
    MathJaxService.renderMath('latex-rendered');
  },
};
</script>

<style scoped>
/* Add CSS styling for your card component */
.playing-card {
  width: 200px;
  height: 300px;
  border: 1px solid #000;
  position: relative;
}
.card-front {
  background-color: white;
  padding: 10px;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-back {
  background-color: #888;
  position: absolute;
  width: 100%;
  height: 100%;
}
.latex-input {
  margin: 10px;
}
</style>
