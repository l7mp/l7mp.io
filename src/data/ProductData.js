import cloudretro from '../assets/img/examples/cloudretro.svg';
import edumeet from '../assets/img/examples/edumeet.png';
import elixir_webrtc from '../assets/img/examples/elixir_webrtc.svg';
import janus from '../assets/img/examples/janus.png';
import jitsi from '../assets/img/examples/jitsi.svg';
import kurento from '../assets/img/examples/kurento.png';
import livekit from '../assets/img/examples/livekit.svg';
import mediasoup from '../assets/img/examples/mediasoup.png';
import neko from '../assets/img/examples/neko.png';

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
          name: 'Janus',
          logo: janus,
	  href: 'https://docs.l7mp.io/en/stable/examples/janus/',
        },
        {
          name: 'LiveKit',
          logo: livekit,
	  href: 'https://docs.l7mp.io/en/stable/examples/livekit/',
        },
	{
          name: 'mediasoup',
          logo: mediasoup,
	  href: 'https://docs.l7mp.io/en/stable/examples/mediasoup/',
        },
	{
          name: 'Edumeet',
          logo: edumeet,
	  href: 'https://github.com/l7mp/demo-clusters/tree/main/gcp-europe-central2/apps/edumeet',
        },
	{
          name: 'Elixir WebRTC',
          logo: elixir_webrtc,
	  href: 'https://github.com/l7mp/demo-clusters/tree/main/gcp-europe-central2/apps/elixir-webrtc-nexus',
        },
	{
          name: 'n.eko',
          logo: neko,
	  href: 'https://docs.l7mp.io/en/stable/examples/neko/',
        },
        {
          name: 'Kurento',
          logo: kurento,
	  href: 'https://docs.l7mp.io/en/stable/examples/kurento-one2one-call/',
        },
	{
          name: 'Jitsi',
          logo: jitsi,
	  href: 'https://docs.l7mp.io/en/stable/examples/jitsi/',
        },
        {
          name: 'CloudRetro',
          logo: cloudretro,
	  href: 'https://docs.l7mp.io/en/stable/examples/cloudretro/',
        }
    ]
};
