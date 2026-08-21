import {
  ContactFormSection,
  ContactInfoSection,
  ContactsHeader,
} from "@/components/features/contacts";

export default function Contacts() {
  return (
    <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <ContactsHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactInfoSection />
          <ContactFormSection />
        </div>
      </div>
    </div>
  );
}
