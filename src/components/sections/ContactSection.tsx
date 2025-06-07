import { PhoneIcon, EmailIcon, LocationIcon, FacebookIcon, InstagramIcon, TwitterIcon } from '../icons/index';
import { ContactForm } from '../ui';

interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
}

const ContactSection = () => {
  const contactInfo: ContactInfo[] = [
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: '07036041395 / 09044143821'
    },
    {
      icon: EmailIcon,
      label: 'Email',
      value: 'Facitesynergy@gmail.com'
    },
    {
      icon: LocationIcon,
      label: 'Head Office',
      value: 'No. 24 Ebitu Ukiwe St. Jabi, Beta Foundation Plaza Jabi, Suite 313B Second Floor'
    },
    {
      icon: LocationIcon,
      label: 'Enugu Office',
      value: '71 More House by Denten Street, Ogui Road, Enugu State'
    },
  ];

  const socialLinks: SocialLink[] = [
    {
      icon: FacebookIcon,
      href: 'https://www.facebook.com/facitesynergy',
      label: 'Facebook'
    },
    {
      icon: InstagramIcon,
      href: 'https://www.instagram.com/facitesynergy',
      label: 'Instagram'
    },
    {
      icon: TwitterIcon,
      href: 'https://twitter.com/facitesynergy',
      label: 'Twitter'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 mt-4">
            Have a question or ready to get started? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-blue-900 text-white p-3 rounded-lg">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{item.label}</p>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="font-semibold text-gray-900 mb-4">Follow us on social media</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-900 text-white p-2 rounded-lg hover:bg-blue-800 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;