// import images
import jitsi from '../assets/img/examples/jitsi.svg';
import livekit from '../assets/img/examples/livekit.svg';
import mediasoup from '../assets/img/examples/mediasoup.png';
import kurento from '../assets/img/examples/kurento.png';
import neko from '../assets/img/examples/neko.png';
import cloudretro from '../assets/img/examples/cloudretro.svg';

export const stunnerOperatorData = {
    title: 'STUNner Gateway operator',
    subtitle: 'The open-source STUNner Kubernetes Gateway Operator utilizes the Kubernetes Gateway API and STUNner data plane to fully configure WebRTC ingress gateway via Kubernetes control plane. Currently in development, it supports a subset of the Gateway API - Gateway, GatewayClass, and UDPRoute resources.',
    btnText: 'Learn more',
    href: 'https://github.com/l7mp/stunner-gateway-operator/blob/main/README.md'
};

export const productDescriptionData = {
    title: 'Use it with mainstream media servers',
    subtitle: 'Set up and start using STUNner with your preferred media server in 5 minutes. The integration is simple and straightforward. Whether you are looking to improve the management of your WebRTC media services or want to switch from a manual workflow to fully automated cloud-native Kubernetes lifecycle management, STUNner offers a convenient and efficient solution. Seamless and tested integration with popular media servers such as Jitsi, LiveKit, Kurento, mediasoup, n.eko, and CloudRetro is just one of the many reasons why STUNner is the ideal choice for your WebRTC media needs.',
    examples_href: 'https://github.com/l7mp/stunner/tree/main/docs/examples',
    btnText: 'Read the docs',
    servers: [
        {
          name: 'Jitsi',
          logo: jitsi,
          href: 'https://jitsi.org/',
        },
        {
          name: 'LiveKit',
          logo: livekit,
          href: 'https://livekit.io/',
        },
	{
          name: 'mediasoup',
          logo: mediasoup,
          href: 'https://mediasoup.org/',
        },
	{
          name: 'n.eko',
          logo: neko,
          href: 'https://neko.m1k1o.net/#/?id=neko',
        },
        {
          name: 'Kurento',
          logo: kurento,
          href: 'https://doc-kurento.readthedocs.io/en/latest/',
        },
        {
          name: 'CloudRetro',
          logo: cloudretro,
          href: 'https://cloudretro.io/',
        }
    ]
};
