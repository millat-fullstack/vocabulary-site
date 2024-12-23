<script>
function showPage(pageNumber) {
  // Hide all pages
  const pages = document.querySelectorAll(".vocabulary-page");
  pages.forEach(page => (page.style.display = "none"));

  // Show the selected page
  document.querySelector(`#page${pageNumber}`).style.display = "block";
}
</script>
