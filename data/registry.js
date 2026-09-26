/**
 * SevaCheck Kerala — Central Service Registry
 * Initializes window.SevaRegistry and handles modular service registration
 * for all 150 government services across category data modules.
 */

window.SevaRegistry = {
  services: [],
  register: function (items) {
    if (!Array.isArray(items)) {
      console.error("SevaRegistry: Expected array of services, got:", typeof items);
      return;
    }

    let added = false;

    items.forEach(item => {
      // Prevent duplicate service ID registration
      const exists = this.services.some(s => s.id === item.id);

      if (exists) {
        console.warn("SevaRegistry: Duplicate service ID ignored:", item.id);
      } else {
        this.services.push(item);
        added = true;
      }
    });

    // Notify the application whenever new services are registered
    if (added && typeof window.dispatchEvent === "function") {
      window.dispatchEvent(new CustomEvent("seva-registry-updated", {
        detail: { count: this.services.length }
      }));
    }
  }
};

// Backward compatibility bridge for script.js and existing data modules
window.services = window.SevaRegistry.services;
window.servicesData = window.SevaRegistry.services;
