"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Playfair_Display } from "next/font/google";

export const dynamic = "force-dynamic";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function QuoteRequestPage() {
  const searchParams = useSearchParams();
  const [productName, setProductName] = useState("");
  const [packaging, setPackaging] = useState("");
  const [customPackaging, setCustomPackaging] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const product = searchParams.get("product");
    if (product) {
      setProductName(decodeURIComponent(product));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Build packaging value - combine with custom if selected
    let packagingValue = packaging;
    if (packaging === "Custom" && customPackaging) {
      packagingValue = `Custom: ${customPackaging}`;
    }

    const data = {
      productName: formData.get("productName")?.toString().trim() || "Pumpkin Seeds",
      quantity: formData.get("quantity")?.toString().trim(),
      incoterms: formData.get("incoterms")?.toString().trim(),
      packaging: packagingValue,
      productType: formData.get("tradeType")?.toString().trim(),
      companyName: formData.get("companyName")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      whatsappPhone: formData.get("whatsappPhone")?.toString().trim() || "",
      orderType: formData.get("orderType")?.toString().trim(),
      country: formData.get("country")?.toString().trim(),
      destinationPort: formData.get("destinationPort")?.toString().trim(),
      specificRequirements: formData.get("specificRequirements")?.toString().trim() || "",
    };

    // Validation
    if (
      !data.productName ||
      !data.quantity ||
      !data.incoterms ||
      !data.packaging ||
      !data.companyName ||
      !data.email ||
      !data.orderType ||
      !data.country ||
      !data.destinationPort ||
      (packaging === "Custom" && !customPackaging)
    ) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit quote request.");
      }

      // Google Analytics
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "quote_request_submit", {
          event_category: "Quote",
          event_label: "Quote Request Form",
          product: data.productName,
        });
      }

      setSuccessMessage(true);
      form.reset();
      setProductName("Pumpkin Seeds");
      setPackaging("");
      setCustomPackaging("");

      // Hide success message after 5 seconds
      setTimeout(() => setSuccessMessage(false), 5000);
    } catch (error) {
      console.error(error);
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#f7f2e8]">
      <Navbar />

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold tracking-widest text-[#D4AF37] mb-3">
              REQUEST A QUOTE
            </p>
            <h1
              className={`${playfair.className} text-[2.5rem] md:text-4xl font-semibold tracking-[0.02em] text-[#1f6b7a] mb-4`}
            >
              Get a Custom Quote
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto">
              Fill out the form below with your requirements and we'll provide you with
              a detailed quote tailored to your needs.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white border border-[#d9c7a1] shadow-lg p-8 md:p-10 rounded-[12px]">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Product Name - Auto-filled, Non-editable */}
              <div>
                <label className="block text-sm font-medium text-[#1f3c5b] mb-2">
                  Product <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="productName"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="e.g., White Quinoa, Pumpkin Seeds"
                  required
                  className="w-full bg-[#f5f5f5] text-black px-4 py-3 outline-none text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#1f6b7a] focus:bg-white"
                />
              </div>

              {/* Quantity Dropdown */}
              <div>
                <label className="block text-sm font-medium text-[#1f3c5b] mb-2">
                  Quantity <span className="text-red-500">*</span>
                </label>
                <select
                  name="quantity"
                  required
                  suppressHydrationWarning
                  style={{ color: "black" }}
                  className="w-full bg-[#f5f5f5] text-gray-400 px-4 py-3 outline-none text-sm focus:ring-2 focus:ring-[#1f6b7a] focus:bg-white"
                >
                  <option value="">Select quantity...</option>
                  <option value="20 FT Container">20 FT Container</option>
                  <option value="40 FT Container">40 FT Container</option>
                </select>
              </div>

              {/* Trade Requirements Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Incoterms */}
                <div>
                  <label className="block text-sm font-medium text-[#1f3c5b] mb-2">
                    Incoterms <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="incoterms"
                    required
                    suppressHydrationWarning
                    style={{ color: "black" }}
                    className="w-full bg-[#f5f5f5] text-gray-400 px-4 py-3 outline-none text-sm focus:ring-2 focus:ring-[#1f6b7a] focus:bg-white"
                  >
                    <option value="">Select...</option>
                    <option value="FOB">FOB</option>
                    <option value="CNF">CNF</option>
                    <option value="CIF">CIF</option>
                  </select>
                </div>

                {/* Packaging */}
                <div>
                  <label className="block text-sm font-medium text-[#1f3c5b] mb-2">
                    Packaging <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="packaging"
                    value={packaging}
                    onChange={(e) => setPackaging(e.target.value)}
                    required
                    suppressHydrationWarning
                    style={{ color: "black" }}
                    className="w-full bg-[#f5f5f5] text-gray-400 px-4 py-3 outline-none text-sm focus:ring-2 focus:ring-[#1f6b7a] focus:bg-white"
                  >
                    <option value="">Select...</option>
                    <option value="25kg Packaging">25kg Packaging</option>
                    <option value="50kg Packaging">50kg Packaging</option>
                    <option value="Bulk">Bulk</option>
                    <option value="Custom">Custom</option>
                  </select>
                  {packaging === "Custom" && (
                    <input
                      type="text"
                      placeholder="Enter your custom packaging details"
                      value={customPackaging}
                      onChange={(e) => setCustomPackaging(e.target.value)}
                      className="w-full bg-[#f5f5f5] text-black px-4 py-3 outline-none text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#1f6b7a] focus:bg-white mt-2"
                    />
                  )}
                </div>

                {/* Product Type */}
                <div>
                  <label className="block text-sm font-medium text-[#1f3c5b] mb-2">
                    Product Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="tradeType"
                    required
                    suppressHydrationWarning
                    style={{ color: "black" }}
                    className="w-full bg-[#f5f5f5] text-gray-400 px-4 py-3 outline-none text-sm focus:ring-2 focus:ring-[#1f6b7a] focus:bg-white"
                  >
                    <option value="">Select...</option>
                    <option value="Conventional">Conventional</option>
                    <option value="Organic">Organic</option>
                  </select>
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-sm font-medium text-[#1f3c5b] mb-2">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Your Company Name"
                  required
                  className="w-full bg-[#f5f5f5] text-black px-4 py-3 outline-none text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#1f6b7a] focus:bg-white"
                />
              </div>

              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-[#1f3c5b] mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    required
                    className="w-full bg-[#f5f5f5] text-black px-4 py-3 outline-none text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#1f6b7a] focus:bg-white"
                  />
                </div>

                {/* WhatsApp / Phone */}
                <div>
                  <label className="block text-sm font-medium text-[#1f3c5b] mb-2">
                    WhatsApp / Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    name="whatsappPhone"
                    placeholder="+1 (555) 123-4567"
                    className="w-full bg-[#f5f5f5] text-black px-4 py-3 outline-none text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#1f6b7a] focus:bg-white"
                  />
                </div>
              </div>

              {/* Order Type */}
              <div>
                <label className="block text-sm font-medium text-[#1f3c5b] mb-2">
                  Order Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="orderType"
                  required
                  style={{ color: "black" }}
                  className="w-full bg-[#f5f5f5] text-gray-400 px-4 py-3 outline-none text-sm focus:ring-2 focus:ring-[#1f6b7a] focus:bg-white"
                >
                  <option value="">Select order type...</option>
                  <option value="Trial Order">Trial Order</option>
                  <option value="Bulk Order">Bulk Order</option>
                  <option value="Long-Term Supply">Long-Term Supply</option>
                </select>
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium text-[#1f3c5b] mb-2">
                  Country <span className="text-red-500">*</span>
                </label>
                <select
                  name="country"
                  required
                  style={{ color: "black" }}
                  className="w-full bg-[#f5f5f5] text-gray-400 px-4 py-3 outline-none text-sm focus:ring-2 focus:ring-[#1f6b7a] focus:bg-white"
                >
                  <option value="">Select country...</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Belize">Belize</option>
                  <option value="Benin">Benin</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                  <option value="Botswana">Botswana</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Brunei">Brunei</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Canada">Canada</option>
                  <option value="Cape Verde">Cape Verde</option>
                  <option value="Central African Republic">Central African Republic</option>
                  <option value="Chad">Chad</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Congo">Congo</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="East Timor">East Timor</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="Gabon">Gabon</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Greece">Greece</option>
                  <option value="Grenada">Grenada</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guinea-Bissau">Guinea-Bissau</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hong Kong">Hong Kong</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="India">India</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Iran">Iran</option>
                  <option value="Iraq">Iraq</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Italy</option>
                  <option value="Ivory Coast">Ivory Coast</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japan">Japan</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kiribati">Kiribati</option>
                  <option value="Korea, North">Korea, North</option>
                  <option value="Korea, South">Korea, South</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Laos">Laos</option>
                  <option value="Latvia">Latvia</option>
                  <option value="Lebanon">Lebanon</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libya">Libya</option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Macau">Macau</option>
                  <option value="Macedonia">Macedonia</option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Mali">Mali</option>
                  <option value="Malta">Malta</option>
                  <option value="Marshall Islands">Marshall Islands</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Micronesia">Micronesia</option>
                  <option value="Moldova">Moldova</option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolia</option>
                  <option value="Montenegro">Montenegro</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Myanmar">Myanmar</option>
                  <option value="Namibia">Namibia</option>
                  <option value="Nauru">Nauru</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Norway">Norway</option>
                  <option value="Oman">Oman</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Palau">Palau</option>
                  <option value="Palestine">Palestine</option>
                  <option value="Panama">Panama</option>
                  <option value="Papua New Guinea">Papua New Guinea</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Peru">Peru</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Poland">Poland</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Romania">Romania</option>
                  <option value="Russia">Russia</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                  <option value="Saint Lucia">Saint Lucia</option>
                  <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                  <option value="Samoa">Samoa</option>
                  <option value="San Marino">San Marino</option>
                  <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Serbia">Serbia</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra Leone">Sierra Leone</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Slovakia">Slovakia</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Solomon Islands">Solomon Islands</option>
                  <option value="Somalia">Somalia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="South Sudan">South Sudan</option>
                  <option value="Spain">Spain</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Sudan">Sudan</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Swaziland">Swaziland</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Syria">Syria</option>
                  <option value="Taiwan">Taiwan</option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Togo">Togo</option>
                  <option value="Tonga">Tonga</option>
                  <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Turkmenistan">Turkmenistan</option>
                  <option value="Tuvalu">Tuvalu</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Emirates">United Arab Emirates</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Vanuatu">Vanuatu</option>
                  <option value="Vatican City">Vatican City</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </select>
              </div>

              {/* Destination Port */}
              <div>
                <label className="block text-sm font-medium text-[#1f3c5b] mb-2">
                  Destination Port <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="destinationPort"
                  placeholder="e.g., Port of Rotterdam, Port of Singapore"
                  required
                  className="w-full bg-[#f5f5f5] text-black px-4 py-3 outline-none text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#1f6b7a] focus:bg-white"
                />
              </div>

              {/* Specific Requirements */}
              <div>
                <label className="block text-sm font-medium text-[#1f3c5b] mb-2">
                  Specific Requirements (Optional)
                </label>
                <textarea
                  name="specificRequirements"
                  rows={4}
                  placeholder="Mention quality specs, certifications, target price, packaging preferences, etc."
                  className="w-full bg-[#f5f5f5] text-black px-4 py-3 outline-none text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#1f6b7a] focus:bg-white"
                ></textarea>
              </div>

              {/* Error Message */}
              {errorMessage && (
                <div className="p-4 bg-red-100 border border-red-400 rounded-md">
                  <p className="text-red-700 font-semibold text-sm">{errorMessage}</p>
                </div>
              )}

              {/* Success Message */}
              {successMessage && (
                <div className="p-4 bg-green-100 border border-green-400 rounded-md">
                  <p className="text-green-700 font-semibold text-sm">
                    ✓ Quote request submitted successfully! Our team will respond within 12 hours.
                  </p>
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-[#1f6b7a] px-6 py-3 text-base font-medium text-white transition hover:bg-[#15525c] disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Quote"}
                </button>
                <Link
                  href="/products"
                  className="flex-1 bg-gray-300 text-gray-800 px-6 py-3 text-base font-medium text-center transition hover:bg-gray-400"
                >
                  Back to Products
                </Link>
              </div>

              {/* Information Text */}
              <div className="text-center pt-4 border-t border-[#e0d4c4]">
                <p className="text-gray-600 text-sm">
                  Our team will respond within 12 hours with a tailored quotation.
                </p>
              </div>
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-sm">
              Have questions? Email us at{" "}
              <a
                href="mailto:sales@opelionglobal.com"
                className="text-[#1f6b7a] font-semibold hover:underline"
              >
                sales@opelionglobal.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
