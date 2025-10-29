<script>
  document.querySelectorAll(".tp-line").forEach((line, lineIndex) => {
    const text = line.textContent.trim();
    line.textContent = "";

    // Split line into span-wrapped letters
    text.split("").forEach((char, i) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.animationDelay = `${(i * 0.05) + (lineIndex * 0.5)}s`;
      line.appendChild(span);
    });
  });
</script>
