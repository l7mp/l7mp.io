import RGaborImg from '../../src/assets/img/members/rgabor.jpg';
import MPeterImg from '../../src/assets/img/members/mpeter.png';
import LTamasImg from '../../src/assets/img/members/ltamas.png';
import NMateImg from '../../src/assets/img/members/nmate.png';
import VRichardImg from '../../src/assets/img/members/vrichard.png';
import DKornelImg from '../../src/assets/img/members/dkornel.png';

export const blogDataHeader = {
    title: 'Our blog',
    subtitle: 'We\'re excited to share our insights, updates, and thought leadership on all things technology with you.'
};

export const blogData = [
    {
        type: 'Article',
        publishDate: '2023. 03. 23.',
        title: 'Use of TURN in WebRTC Revisited: It may be more useful than you thought',
        subtitle: 'The TURN protocol is one of those annoyances that WebRTC critically depends on yet very few actually understand (another example is SDP).',
        publisher: 'Gábor Rétvári',
        publisherImg: RGaborImg,
        href: 'https://medium.com/l7mp-technologies/use-of-turn-in-webrtc-revisited-it-may-be-more-useful-than-you-thought-856059fd27a3'
    },
    {
        type: 'Article',
        publishDate: '2023. 02. 01.',
        title: 'Kubernetes: The next step for WebRTC',
        subtitle: 'An article about the relationship between WebRTC and Kubernetes.',
        publisher: 'Máté Nagy',
        publisherImg: NMateImg,
        href: 'https://medium.com/l7mp-technologies/kubernetes-the-next-step-for-webrtc-fb8d8a33f24e'
    },
    {
        type: 'Tutorial',
        publishDate: '2022. 11. 23.',
        title: 'Video-conferencing with Jitsi',
        subtitle: 'This document guides you through the installation of Jitsi into Kubernetes, when it is used together with the STUNner WebRTC media gateway.',
        publisher: 'Richárd Váradi',
        publisherImg: VRichardImg,
        href: 'https://github.com/l7mp/stunner/tree/main/examples/jitsi'
    },
    {
        type: 'Tutorial',
        publishDate: '2022. 11. 04.',
        title: 'Video-conferencing with LiveKit',
        subtitle: 'This document guides you through the installation of LiveKit into Kubernetes, when it is used together with the STUNner WebRTC media gateway.',
        publisher: 'Kornél Dávid',
        publisherImg: DKornelImg,
        href: 'https://github.com/l7mp/stunner/tree/main/examples/livekit'
    },
    {
        type: 'Tutorial',
        publishDate: '2022. 10. 27.',
        title: 'Performance Benchmarking',
        subtitle: 'With the help of this guide you are able to take performance measurments in your setup using STUNner. Both running STUNner locally (outside of Kubernetes) and running STUNner in Kubernetes can be evaluated.',
        publisher: 'Kornél Dávid',
        publisherImg: DKornelImg,
        href: 'https://github.com/l7mp/stunner/tree/main/examples/benchmark'
    },
    {
        type: 'Tutorial',
        publishDate: '2022. 09. 27.',
        title: 'Using Neko with STUNner',
        subtitle: 'This guide shows how you can use Neko inside a Kubernetes cluster, using STUNner as a WebRTC gateway. Neko uses WebRTC to stream a desktop inside of a docker container to your browser. However, integrating Neko into Kubernetes is far from trivial.',
        publisher: 'Péter Megyesi',
        publisherImg: MPeterImg,
        href: 'https://github.com/l7mp/stunner/tree/main/examples/neko'
    },
    {
        type: 'Tutorial',
        publishDate: '2022. 08. 23.',
        title: 'Magic mirror with Kurento and STUNner',
        subtitle: 'This is the Kurento Magic mirror demo, adopted for STUNner and Kubernetes. The demo shows a basic WebRTC loopback server with some media processing added: the application uses computer vision and augmented reality techniques to add a funny hat on top of faces.',
        publisher: 'Máté Nagy',
        publisherImg: NMateImg,
        href: 'https://github.com/l7mp/stunner/tree/main/examples/kurento-magic-mirror'
    },
    {
        type: 'Tutorial',
        publishDate: '2022. 07. 28.',
        title: 'Headless deployment: Direct one to one video call via STUNner',
        subtitle: 'This tutorial showcases the headless deployment model of STUNner, that is, when WebRTC clients connect to each other directly via STUNner, without going through a media server.',
        publisher: 'Gábor Rétvári',
        publisherImg: RGaborImg,
        href: 'https://github.com/l7mp/stunner/tree/main/examples/direct-one2one-call'
    },
    {
        type: 'Tutorial',
        publishDate: '2022. 07. 28.',
        title: 'One to one video call with Kurento via STUNner',
        subtitle: 'This tutorial demonstrates the media-plane deployment model of STUNner, that is, when WebRTC clients connect to each other via the Kurento media server deployed into Kubernetes. The media servers are exposed to clients via a STUNner gateway.',
        publisher: 'Gábor Rétvári',
        publisherImg: RGaborImg,
        href: 'https://github.com/l7mp/stunner/tree/main/examples/kurento-one2one-call'
    },
    {
        type: 'Tutorial',
        publishDate: '2022. 07. 28.',
        title: 'Open a tunnel via STUNner',
        subtitle: 'This tutorial shows how to tunnel an external connection via STUNner to a UDP service deployed into Kubernetes. The tutorial can also be used to quickly check a STUNner installation.',
        publisher: 'Gábor Rétvári',
        publisherImg: RGaborImg,
        href: 'https://github.com/l7mp/stunner/tree/main/examples/simple-tunnel'
    },
    {
        type: 'Tutorial',
        publishDate: '2022. 07. 22.',
        title: 'Cloud-gaming in Kubernetes with CloudRetro',
        subtitle: 'In this demo, we will install CloudRetro into a Kubernetes cluster. In this demo, we use STUNner to establish the UDP media streams between clients and the CloudRetro media servers deployed into Kubernetes.',
        publisher: 'Bálint Bombitz',
        publisherImg: 'https://avatars.githubusercontent.com/u/74309145?v=4',
        href: 'https://github.com/l7mp/stunner/tree/main/examples/cloudretro'
    },
];