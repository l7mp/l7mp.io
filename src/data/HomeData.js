import HeroImage from '../assets/img/hero.svg'
import StunnerImage from '../assets/img/stunner.svg'

export const heroData = {
    title: `Moving WebRTC backend services to Kubernetes`,
    subtitle:
        'We assist you to deploy a containerized WebRTC infrastructure into Kubernetes and benefit from the unmatched lifecycle management features.',
    btnText: 'Learn more',
    href: '/#/services',
    image: HeroImage,
};

export const stunnerData = {
    title: 'A Kubernetes media gateway for WebRTC',
    subtitle: 'STUNner, our main product, is a Kubernetes gateway designed for a single purpose: ingesting all your real-time media streams into a Kubernetes cluster in a controlled and standards-compliant way. Expose a single public port to the Internet, cover all NAT-traversal needs with a simple and versatile STUN/TURN server, and monitor resource usage in real-time: STUNner catapults your WebRTC media services into the cloud-native era in an easy step',
    btnText: 'Learn more',
    href: '/#/products',
    alter_href: 'https://github.com/l7mp/stunner/blob/main/README.md',
    image: StunnerImage,
  };
