(function() {
  const menu = document.getElementById("main-menu-nav");
  if (!menu) return;

  const items = Array.from(menu.querySelectorAll("li"));
  const newMenu = document.createElement("ul");
  newMenu.id = "main-menu-nav";
  newMenu.setAttribute("role", "menubar");

  let currentParent = null;
  let subMenu = null;

  items.forEach(item => {
    const a = item.querySelector("a");
    const text = a.textContent.trim();

    // Category headers: exact words without underscores
    const isCategory = a.getAttribute("href") === "#" && !text.startsWith("_");

    if (isCategory) {
      // Start a new group
      currentParent = document.createElement("li");
      currentParent.classList.add("has-sub");

      const newLink = a.cloneNode(true);
      newParentLink = document.createElement("a");
      newParentLink.setAttribute("href", "#");
      newParentLink.setAttribute("role", "menuitem");
      newParentLink.textContent = text;

      subMenu = document.createElement("ul");
      subMenu.classList.add("sub-menu", "m-sub");

      currentParent.appendChild(newParentLink);
      currentParent.appendChild(subMenu);
      newMenu.appendChild(currentParent);
    } else if (text.startsWith("_") && currentParent && subMenu) {
      // Sub-item: belongs to current category
      const subItem = document.createElement("li");
      const newSubLink = a.cloneNode(true);
      newSubLink.textContent = text.replace(/^_+/, ""); // remove underscores
      subItem.appendChild(newSubLink);
      subMenu.appendChild(subItem);
    } else {
      // Standalone top-level item
      const cleanItem = document.createElement("li");
      const newLink = a.cloneNode(true);
      newLink.textContent = text.replace(/^_+/, "");
      cleanItem.appendChild(newLink);
      newMenu.appendChild(cleanItem);
      currentParent = null; // reset grouping
      subMenu = null;
    }
  });

  // Replace original menu
  menu.parentNode.replaceChild(newMenu, menu);
})();
(function cloneMenuToMobile() {
  const desktopMenu = document.getElementById("main-menu-nav");
  const mobileContainer = document.querySelector(".mobile-menu");
  if (!desktopMenu || !mobileContainer) return;

  // Clone the entire menu structure
  const mobileMenu = desktopMenu.cloneNode(true);

  // Remove old ID to avoid duplication conflict
  mobileMenu.removeAttribute("id");

  // Add submenu toggles for mobile interaction
  const subMenus = mobileMenu.querySelectorAll(".has-sub");
  subMenus.forEach(subItem => {
    const toggle = document.createElement("div");
    toggle.className = "submenu-toggle";
    subItem.appendChild(toggle);
  });

  // Clear mobile container and add the new menu
  mobileContainer.innerHTML = "";
  mobileContainer.appendChild(mobileMenu);
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  mobileMenuToggle.addEventListener('click',()=>document.body.classList.toggle('nav-active'));
  Array.from(mobileContainer.querySelectorAll('.submenu-toggle')).forEach((st)=>{
    st.addEventListener('click',()=>{
        st.parentElement.classList.toggle('show');
        st.previousElementSibling.style.display=(st.previousElementSibling.style.display!='block')?'block':'none';
    });
  });
})();
document.body.innerHTML+=`<style>#main-menu .widget, #main-menu .widget > h3 {display: block;}</style>`;
