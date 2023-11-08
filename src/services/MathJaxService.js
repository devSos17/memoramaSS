// MathJaxService.js or MathJaxService.ts

export default class MathJaxService {
  static renderMath(elementId, latex) {
    if (typeof MathJax === 'undefined') {
      // MathJax is not loaded yet, load it dynamically
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.onload = () => {
        MathJax.Hub.Config({
          tex2jax: { inlineMath: [['$', '$'], ['\\(', '\\)']] },
        });
        MathJax.Hub.Queue(['Typeset', MathJax.Hub, elementId]);
        MathJax.Hub.Register.StartupHook('End', () => {
          // MathJax is now fully loaded, render LaTeX
          MathJax.Hub.Queue(['Typeset', MathJax.Hub, elementId]);
        });
      };
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML';
      document.head.appendChild(script);
    } else {
      // MathJax is already loaded, render the math
      MathJax.Hub.Queue(['Typeset', MathJax.Hub, elementId]);
    }
  }
}
