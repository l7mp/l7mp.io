import HeroImage from '../assets/img/hero.svg'
import StunnerImage from '../assets/img/stunner.svg'

export const heroData = {
    title: `Moving WebRTC backend services to Kubernetes`,
    subtitle:
        'Deploy a containerized WebRTC infrastructure into Kubernetes and benefit from the unmatched lifecycle management features',
    btnText: 'Learn more',
    href: '/#/about',
    image: HeroImage,
};

export const stunnerData = {
    title: 'A Kubernetes media gateway for WebRTC',
    subtitle: 'STUNner is a Kubernetes gateway designed for a single purpose; ingesting all you real-time media streams into a Kubernetes cluster in a controlled and standards-compliant way. Expose a single public port to the Internet, cover all NAT-traversal needs with a simple and versatile STUN/TURN server, and monitor resource usage in real time: STUNner catapults your WebRTC media services into the cloud-native era in an easy step.',
    btnText: 'Get started',
    href: 'https://github.com/l7mp/stunner',
    image: StunnerImage,
  };