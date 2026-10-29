// MOBILE DROPDOWN FIX — Click to open/close
const dropdownButtons = document.querySelectorAll('.nav-item > button');

dropdownButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const parent = btn.parentElement;
    const dropdown = parent.querySelector('.dropdown');

    // Close all other dropdowns
    document.querySelectorAll('.nav-item').forEach(item => {
      if (item !== parent) item.classList.remove('active');
    });

    // Toggle this one
    parent.classList.toggle('active');
  });
});

// Click outside to close
document.addEventListener('click', () => {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
  });
});