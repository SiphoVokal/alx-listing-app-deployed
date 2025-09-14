
import axios from "axios";
import { useState } from "react";

type ConfirmationResponse = {
  bookingId: string;
  message: string;
};

export default function BookingForm() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmation, setConfirmation] = useState<ConfirmationResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post<ConfirmationResponse>("/api/bookings", formData);
       setConfirmation(response.data);
    } catch (error) {
      console.error("Booking error:", error);
      setError("Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />
      <input
        type="tel"
        name="phoneNumber"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />
      <input
        type="text"
        name="cardNumber"
        placeholder="Card Number"
        value={formData.cardNumber}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />
      <input
        type="text"
        name="expirationDate"
        placeholder="MM/YY"
        value={formData.expirationDate}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />
      <input
        type="text"
        name="cvv"
        placeholder="CVV"
        value={formData.cvv}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />
      <textarea
        name="billingAddress"
        placeholder="Billing Address"
        value={formData.billingAddress}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
      >
        {loading ? "Processing..." : "Confirm & Pay"}
      </button>

      {error && <p className="text-red-500">{error}</p>}

      {confirmation && (
      <p className="text-green-600">
        Booking confirmed! Ref: {confirmation.bookingId}
      </p>
      )}
    </form>
  );    
}