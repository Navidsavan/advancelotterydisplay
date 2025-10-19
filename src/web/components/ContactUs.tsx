import React, { useState } from "react";
import InputField from "./InputField";
import "../styles/ContactUs.css";
import { US_STATES } from "../../data/statesData";




const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sellsLottery: "",
    state: "",
    usingSoftware: "",
    features: [] as string[],
    scheduleDemo: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const toggleFeature = (feature: string) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }));
  };

  const validate = () => {
    let newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <InputField
            label="Your Name*"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            error={errors.name}
          />
          <div className="input-row">
            <InputField
              label="Email ID*"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              error={errors.email}
            />
            <InputField
              label="Contact No*"
              type="text"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              error={errors.phone}
            />
          </div>

          {/* Lottery question */}
          <div className="form-group">
            <label className="question">
              Do you sell state lottery tickets? If yes, please select your state.
            </label>
            <div className="yes-no-group">
              {["Yes", "No"].map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`yes-no-btn ${formData.sellsLottery === option ? "active" : ""}`}
                  onClick={() => handleChange("sellsLottery", option)}
                >
                  {option}
                </button>
              ))}
            </div>
            {formData.sellsLottery === "Yes" && (
              <select
                className="state-dropdown"
                value={formData.state}
                onChange={(e) => handleChange("state", e.target.value)}
              >
                <option value="">Select your state</option>
                {US_STATES.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            )}
          </div>

          {/* Software usage */}
          <div className="form-group">
            <label className="question">Are you currently using any lottery management software?</label>
            <div className="yes-no-group">
              {["Yes", "No"].map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`yes-no-btn ${formData.usingSoftware === option ? "active" : ""}`}
                  onClick={() => handleChange("usingSoftware", option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="form-group">
            <label className="question">
              What features would you find most beneficial? (Select all that apply)
            </label>
            <div className="checkbox-grid">
              {[
                "Increase sales",
                "Better reporting",
                "Prevent theft",
                "Shorten closing time",
                "Improve productivity",
              ].map((feature) => (
                <label key={feature} className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={formData.features.includes(feature)}
                    onChange={() => toggleFeature(feature)}
                  />
                  {feature}
                </label>
              ))}
            </div>
          </div>

          {/* Demo */}
          <div className="form-group">
            <label className="question">Would you like to schedule a demo?</label>
            <div className="yes-no-group">
              {["Yes", "No"].map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`yes-no-btn ${formData.scheduleDemo === option ? "active" : ""}`}
                  onClick={() => handleChange("scheduleDemo", option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <textarea
            className="message-box"
            placeholder="Message..."
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
          />

          {/* Submit */}
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
