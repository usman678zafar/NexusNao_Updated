export const metadata = {
  title: "Privacy Policy",
  description: "Nexusnao Privacy Policy.",
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-24 max-w-3xl">
      <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-8">Privacy Policy</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>Last updated: November 25, 2025</p>
        <p>
          This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
        </p>
        <h2>Collecting and Using Your Personal Data</h2>
        <h3>Types of Data Collected</h3>
        <h4>Personal Data</h4>
        <p>
          While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
        </p>
        <ul>
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Usage Data</li>
        </ul>
        {/* Add more legal text as needed */}
      </div>
    </div>
  )
}
