// Local storage enquiry management system for custom orders

export const getEnquiries = () => {
  try {
    const saved = localStorage.getItem('bsc_custom_enquiries');
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error("Error reading enquiries:", e);
  }
  return [
    {
      id: "enq-sample-1",
      customerName: "Mohammad Rashid (Sample Record)",
      mobile: "+91 9876543210",
      email: "rashid@example.com",
      modelCategory: "Gumbad Models",
      dimensions: "3 ft Base Diameter x 4 ft Height",
      preferredMaterial: "High-density thermocol with gold foil",
      lighting: "Warm golden internal LEDs with remote dimmer",
      quantity: 1,
      cityState: "Lucknow, Uttar Pradesh",
      budgetRange: "₹25,000 - ₹35,000",
      deliveryDate: "2026-11-15",
      designDescription: "Need a grand dome inspired by traditional Mughal architecture with scalloped chhatri columns.",
      referenceImageName: "dome_concept.jpg",
      createdAt: new Date().toISOString(),
      status: "New"
    }
  ];
};

export const saveEnquiry = (enquiryData) => {
  try {
    const existing = getEnquiries();
    const newRecord = {
      id: `enq-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: "New",
      ...enquiryData
    };
    const updated = [newRecord, ...existing];
    localStorage.setItem('bsc_custom_enquiries', JSON.stringify(updated));
    window.dispatchEvent(new Event('enquiries-updated'));
    return { success: true, record: newRecord };
  } catch (e) {
    console.error("Error saving enquiry:", e);
    return { success: false, error: e.message };
  }
};

export const updateEnquiryStatus = (id, newStatus) => {
  try {
    const existing = getEnquiries();
    const updated = existing.map(item => item.id === id ? { ...item, status: newStatus } : item);
    localStorage.setItem('bsc_custom_enquiries', JSON.stringify(updated));
    window.dispatchEvent(new Event('enquiries-updated'));
    return true;
  } catch (e) {
    console.error("Error updating enquiry status:", e);
    return false;
  }
};

export const deleteEnquiry = (id) => {
  try {
    const existing = getEnquiries();
    const updated = existing.filter(item => item.id !== id);
    localStorage.setItem('bsc_custom_enquiries', JSON.stringify(updated));
    window.dispatchEvent(new Event('enquiries-updated'));
    return true;
  } catch (e) {
    console.error("Error deleting enquiry:", e);
    return false;
  }
};
