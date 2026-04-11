export default function WhatsAppButton() {
  const phoneNumber = "919925351966"; // +91 99253 51966
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20Opelion%20Global,%20I%20would%20like%20to%20inquire%20about%20your%20products.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 transition duration-300 hover:shadow-xl float-animation"
      aria-label="WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <img
        src="/whatsapp_icon.webp"
        alt="WhatsApp"
        className="h-[50px] w-[50px] object-cover"
      />
    </a>
  );
}
