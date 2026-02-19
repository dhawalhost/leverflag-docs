import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
    logo: <span>LeverFlag Documentation</span>,
    project: {
        link: 'https://github.com/dhawalhost/leverflag',
    },
    chat: {
        link: 'https://discord.com',
    },
    docsRepositoryBase: 'https://github.com/dhawalhost/leverflag',
    footer: {
        text: 'LeverFlag Documentation',
    },
    useNextSeoProps() {
        return {
            titleTemplate: '%s – LeverFlag',
        }
    },
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content="LeverFlag Documentation" />
            <meta property="og:description" content="Documentation for LeverFlag, a feature flag service built with Go." />
        </>
    ),
    sidebar: {
        defaultMenuCollapseLevel: 1,
        toggleButton: true,
    },
}

export default config
