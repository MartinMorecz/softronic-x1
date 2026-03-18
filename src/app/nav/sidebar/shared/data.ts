export const data = {
    user: {
        name: 'MartinX',
        email: 'mrztechnologies@yahoo.com',
        avatar: '/assets/avatar.png',
    },
    navMain: [
        {
            title: 'Devices',
            url: './devices',
            icon: 'lucideSquareTerminal',
            isActive: true,
            items: [
                {
                    title: 'My Devices',
                    url: './devices',
                },
                {
                    title: 'Alerts',
                    url: '/alerts',
                },
                {
                    title: 'Settings',
                    url: '/settings',
                },
            ],
        },
        {
            title: 'Notifications',
            url: '.',
            icon: 'lucideBot',
            items: [
                {
                    title: 'Genesis',
                    url: '.',
                },
                {
                    title: 'Explorer',
                    url: '.',
                },
                {
                    title: 'Quantum',
                    url: '.',
                },
            ],
        },
        {
            title: 'Documentation',
            url: '.',
            icon: 'lucideBookOpen',
            items: [
                {
                    title: 'Introduction',
                    url: '.',
                },
                {
                    title: 'Get Started',
                    url: '.',
                },
                {
                    title: 'Tutorials',
                    url: '.',
                },
                {
                    title: 'Changelog',
                    url: '.',
                },
            ],
        },
        {
            title: 'Settings',
            url: '.',
            icon: 'lucideSettings2',
            items: [
                {
                    title: 'General',
                    url: '.',
                },
                {
                    title: 'Team',
                    url: '.',
                },
                {
                    title: 'Billing',
                    url: '.',
                },
                {
                    title: 'Limits',
                    url: '.',
                },
            ],
        },
    ],
    navSecondary: [
        {
            title: 'Support',
            url: 'support',
            icon: 'lucideLifeBuoy',
        },
        {
            title: 'Feedback',
            url: 'feedback',
            icon: 'lucideSend',
        },
    ],
    projects: [
        {
            name: 'Design Engineering',
            url: '.',
            icon: 'lucideFrame',
        },
        {
            name: 'Sales & Marketing',
            url: '.',
            icon: 'lucideChartPie',
        },
        {
            name: 'Travel',
            url: '.',
            icon: 'lucideMap',
        },
    ],
};