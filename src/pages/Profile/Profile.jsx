import { useState } from "react";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { sanitizeText } from "../../utils/sanitize";
import { trackPrimaryAction } from "../../utils/analytics";
import { initialProfile } from "./profileData";
import "./profile.css";

function Profile() {
  const [form, setForm] = useState(initialProfile);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: sanitizeText(value),
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));

    setMessage("");
  }

  function validate() {
    const nextErrors = {};

    if (!form.firstName.trim()) {
      nextErrors.firstName = "First name is required.";
    }

    if (!form.lastName.trim()) {
      nextErrors.lastName = "Last name is required.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    } else if (!/^[+\d\s()-]{10,20}$/.test(form.phone)) {
      nextErrors.phone = "Enter a valid phone number.";
    }

    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setMessage("");

    setTimeout(() => {
      setLoading(false);
      setMessage("Profile updated successfully.");
      trackPrimaryAction();
    }, 800);
  }

  return (
    <section
      className="profile-page"
      aria-labelledby="profile-heading"
    >
      <header className="page-intro">
        <p className="page-eyebrow">Account</p>

        <h2 id="profile-heading">Profile</h2>

        <p>
          Manage the personal information associated with your
          frequent flyer account.
        </p>
      </header>

      <Card>
        <form
          className="profile-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="profile-grid">
            <Input
              id="profile-first-name"
              name="firstName"
              label="First name"
              value={form.firstName}
              error={errors.firstName}
              required
              autoComplete="given-name"
              onChange={handleChange}
            />

            <Input
              id="profile-last-name"
              name="lastName"
              label="Last name"
              value={form.lastName}
              error={errors.lastName}
              required
              autoComplete="family-name"
              onChange={handleChange}
            />

            <Input
              id="profile-email"
              name="email"
              type="email"
              label="Email address"
              value={form.email}
              error={errors.email}
              required
              autoComplete="email"
              onChange={handleChange}
            />

            <Input
              id="profile-phone"
              name="phone"
              type="tel"
              label="Phone number"
              value={form.phone}
              error={errors.phone}
              required
              autoComplete="tel"
              onChange={handleChange}
            />

            <Input
              id="profile-membership-id"
              name="membershipId"
              label="Membership ID"
              value={form.membershipId}
              disabled
              readOnly
            />
          </div>

          <div className="profile-actions">
            <Button
              type="submit"
              loading={loading}
              aria-label="Save profile changes"
            >
              Save Changes
            </Button>
          </div>
        </form>
      </Card>

      {message && (
        <div
          className="profile-message"
          role="status"
          aria-live="polite"
        >
          {message}
        </div>
      )}
    </section>
  );
}

export default Profile;