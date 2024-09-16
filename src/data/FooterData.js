import { BsDiscord, BsGithub, BsLinkedin, BsTwitter, BsMedium, BsYoutube} from 'react-icons/bs';
import Logo from '../assets/img/logo.svg'

export const footerData = {
    logo: Logo,
    href: '/',
    email: 'info@l7mp.io',
    copyright: 'L7mp Technologies Kft.',
    about: [
        {
            name: 'L7mp',
            href: '/#/about'
        }
    ],
    followUs: [
        {
            name: 'Github',
            href: 'https://github.com/l7mp'
        },
        {
            name: 'Discord',
            href: 'https://discord.com/invite/DyPgEsbwzc'
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/company/l7mp-technologies/'
        },
        // {
        //     name: 'Twitter',
        //     href: 'https://twitter.com/L7mp1',
        // },
        {
            name: 'Medium',
            href: 'https://medium.com/l7mp-technologies',
        },
        {
            name: 'Youtube',
            href: 'https://www.youtube.com/@l7mptechnologies177/featured',
        }
    ],
    legal: [
        {
            name: 'Terms & Conditions',
            href: 'https://github.com/l7mp/stunner/blob/main/LICENSE'
        }
    ],
    icons: [
        {
            icon: BsLinkedin,
            href: 'https://www.linkedin.com/company/l7mp-technologies/'
        },
        {
            icon: BsGithub,
            href: 'https://github.com/l7mp'
        },
        {
            icon: BsDiscord,
            href: 'https://discord.com/invite/DyPgEsbwzc',
        },
        // {
        //     icon: BsTwitter,
        //     href: 'https://twitter.com/L7mp1',
        // },
        {
            icon: BsMedium,
            href: 'https://medium.com/l7mp-technologies',
        },
        {
            icon: BsYoutube,
            href: 'https://www.youtube.com/@l7mptechnologies177/featured',
        }
    ]
};
