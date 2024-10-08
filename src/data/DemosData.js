import cloudretro from '../assets/img/examples/cloudretro.svg';
import edumeet from '../assets/img/examples/edumeet.png';
import elixir_webrtc from '../assets/img/examples/elixir_webrtc.svg';
import janus from '../assets/img/examples/janus.png';
import jitsi from '../assets/img/examples/jitsi.svg';
import kurento from '../assets/img/examples/kurento.png';
import livekit from '../assets/img/examples/livekit.svg';
import neko from '../assets/img/examples/neko.png';

export const demosData = {
    title: 'Live Demos',
    subtitle: 'Try our STUNner-based live demos running in the cloud.',
    repo_link: 'https://github.com/l7mp/demo-clusters',
    demos: [
        {
            name: 'Janus Demos',
	    image: janus,
            demo_link: 'https://janus.gcp-europe-central2.stunner.cc/',
	    doc_link: 'https://docs.l7mp.io/en/latest/examples/janus/'
        },
	{
            name: 'Edumeet',
	    image: edumeet,
            demo_link: 'https://edumeet.gcp-europe-central2.stunner.cc/',
	    doc_link: 'https://docs.l7mp.io/en/stable/examples/mediasoup/'
        },
	{
            name: 'N.eko',
	    image: neko,
            demo_link: 'https://neko.gcp-europe-central2.stunner.cc/',
	    doc_link: 'https://docs.l7mp.io/en/stable/examples/neko/'
        },
	{
            name: 'Elixir WebRTC Nexus',
	    image: elixir_webrtc,
            demo_link: 'https://nexus.gcp-europe-central2.stunner.cc/',
	    doc_link: 'https://docs.l7mp.io/en/latest/examples/elixir-webrtc/'
        },
	{
            name: 'Kurento One-to-One Call',
	    image: kurento,
            demo_link: 'https://one2one.gcp-europe-central2.stunner.cc/',
	    doc_link: 'https://docs.l7mp.io/en/stable/examples/kurento-one2one-call/'
        },
	{
            name: 'Kurento Magic Mirror',
	    image: kurento,
            demo_link: 'https://magicmirror.gcp-europe-central2.stunner.cc/',
	    doc_link: 'https://docs.l7mp.io/en/stable/examples/kurento-magic-mirror/'
        },
	{
            name: 'LiveKit Meet',
	    image: livekit,
            demo_link: 'https://livekit.gcp-europe-central2.stunner.cc/',
	    doc_link: 'https://docs.l7mp.io/en/stable/examples/livekit/'
        },
	{
            name: 'Jitsi Meet',
	    image: jitsi,
            demo_link: 'https://jitsi.gcp-europe-central2.stunner.cc/',
	    doc_link: 'https://docs.l7mp.io/en/stable/examples/jitsi/'
        },
	{
            name: 'CloudRetro',
	    image: cloudretro,
            demo_link: 'https://cloudretro.gcp-europe-central2.stunner.cc/',
	    doc_link: 'https://docs.l7mp.io/en/stable/examples/cloudretro/'
        },
    ]
};
