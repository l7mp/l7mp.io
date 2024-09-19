import ServiceImage from '../assets/img/services.svg';

export const servicesData = {
    image: ServiceImage,
    title: 'Our services',
    subtitle: '',
    services: [
        {
            title: 'Support',
            subtitle: 'We provide commercial support for running STUNner in your setup. For details, please get in touch with us via e-mail or Discord.',
            href: '/#/contact'
        },
        {
            title: 'Consulting',
            subtitle: 'We help you to build and run WebRTC services and more in Kubernetes. We are experts in both technologies and offer various IT consulting services to optimize your infrastructure, increase efficiency, and enhance security. Contact us for a customized solution that fits your business needs.',
            href: '/#/contact'
        },
        {
            title: 'On-demand Customization',
            subtitle: 'We deliver flexible WebRTC + Kubernetes solutions for your business needs. Our team provides customized IT solutions that adapt to your unique and changing business requirements. Contact us for proof of concept (PoC) design and development, integration, cloud solutions, etc.',
            href: '/#/contact'
        }
    ]
};
