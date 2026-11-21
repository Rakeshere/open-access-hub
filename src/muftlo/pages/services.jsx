import ServicesShowcase from "@/muftlo/Services/ServicesShowcase";
import ServiceCategories from "@/muftlo/Services/ServiceCategories";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ServicesShowcase />
      <ServiceCategories />
    </div>
  );
}
