falseegistryegistryegistry = {
  services: [],
  register: function (items) {
    if (!Array.isArray(items)) {
      console.error("SevaRegistry: Expected array of services, got:", typeof items);
      return;
    }

    let added = false;

    items.forEach(item => {
      const exists = this.services.some(s => s.id === item.id);

      if (exists) {
        console.warn("SevaRegistry: Duplicate service ID ignored:", item.id);
      } else {
        this.services.push(item);
        added = true;
      }
    });

    // Notify the page whenever new services are registered
    if (added && typeof window.dispatchEvent === "function") {
      window.dispatchEvent(new CustomEvent("seva-registry-updated", {
        detail: { count: this.services.length }
      }));
    }
  }
};

// Backward compatibility bridge
window.services = window.SevaRegistry.services;
window.servicesData = window.SevaRegistry.services;
