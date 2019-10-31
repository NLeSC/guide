module.exports = {
    title: 'NLeSC Guide',
    themeConfig: {
        base: '/guide/',
        logo: '/assets/img/NleSc.png',
        searchPlaceholder: 'Search...',
        nav: [
            { text: 'eSC', link: 'https://esciencecenter.nl/' },
            { text: 'Twitter', link: 'https://twitter.com/esciencecenter', href: '/assets/img/twit.png' },
            { text: 'Linkedin', link: 'https://www.linkedin.com/company/netherlands-escience-center' },
        ],
        sidebar: [
            ['/', 'Home'],
            ['/introduction.md', 'Introduction'],

            {
                title: 'Best practices',   // required
                sidebarDepth: 0,    // optional, defaults to 1
                children: [
                    ['/best_practices/overview.md', 'Best practices'],
                    ['/best_practices/checklist.md', 'Checklist'],
                    ['/best_practices/version_control.md', 'Version Control'],
                    ['/best_practices/code_quality.md', 'Code Quality'],
                    ['/best_practices/code_review.md', 'Code Review'],
                    ['/best_practices/licensing.md', 'Licensing'],
                    ['/best_practices/communication.md', 'Communication'],
                    ['/best_practices/testing.md', 'Testing'],
                    ['/best_practices/releases.md', 'Releases'],
                    ['/best_practices/documentation.md', 'Documentation'],
                    ['/best_practices/standards.md', 'Standards'],
                    ['/best_practices/language_guides/languages_overview.md', 'Languages Guides'],
                    {
                        title: ' ',   // required
                        sidebarDepth: 0,    // optional, defaults to 1
                        collapsable: false, // optional, defaults to true
                        children: [
                            ['/best_practices/language_guides/java.md', 'Java'],
                            ['/best_practices/language_guides/javascript.md', 'JavaScript and TypeScript'],
                            ['/best_practices/language_guides/python.md', 'Python'],
                            ['/best_practices/language_guides/opencl_cuda.md', 'Opencl and CUDA'],
                            ['/best_practices/language_guides/r.md', 'R'],
                            ['/best_practices/language_guides/ccpp.md', 'C and C++'],
                            ['/best_practices/language_guides/fortran.md', 'Fortran'],
                        ]
                    }
                ]
            },
            {
                title: 'Intellectual Property and Licensing',   // required
                sidebarDepth: 0,    // optional, defaults to 1
                children: [
                    ['/intellectual_property_and_licensing/intellectual_property_overview.md', 'Intellectual Property and Licensing'],
                    ['/intellectual_property_and_licensing/summary.md', 'Executive summary'],
                    ['/intellectual_property_and_licensing/about_the_law.md', 'About the Law'],
                    ['/intellectual_property_and_licensing/trademarks.md', 'Trademarks'],
                    ['/intellectual_property_and_licensing/trade_secrets_patents.md', 'Trade Secrets and Patents'],
                    ['/intellectual_property_and_licensing/database_rights.md', 'Database Rights'],
                    ['/intellectual_property_and_licensing/copyright.md', 'Copyright'],
                    ['/intellectual_property_and_licensing/software_licenses.md', 'Software Licenses'],
                    ['/intellectual_property_and_licensing/examples_libraries.md', 'Examples: Using Libraries'],
                    ['/intellectual_property_and_licensing/more_examples.md', 'More Eexamples'],
                ]
            },
            {
                title: 'Publishing',   // required
                sidebarDepth: 0,    // optional, defaults to 1
                children: [
                    ['/citable_software/publishing_results.md', 'Publishing'],
                    ['/citable_software/making_software_citable.md', 'Making software citable'],
                    ['/citable_software/conferences_journals_workshops.md', 'e-Science Conferences, Journals, and Workshops'],
                ]
            },
            ['/CONTRIBUTING.md', 'Contributing to this Guide'],
            {
                title: 'NLeSC specific',   // required
                sidebarDepth: 0,    // optional, defaults to 1
                children: [
                    ['/chapter_owners.md', 'Chapter Owners'],
                    ['/nlesc_specific/e-infrastructure/e-infrastructure.md', 'Access to (Dutch)e-infrastructure'],
                    ['/nlesc_specific/e-infrastructure/das5.md', 'DAS-5'],
                    ['/nlesc_specific/projects/project_overview.md', 'Projects'],
                    ['/nlesc_specific/projects/new_project.md', 'new Project()'],
                    ['/nlesc_specific/projects/kickoff_meeting.md', 'Kickoff Meeting'],
                    ['/nlesc_specific/projects/project_planning.md', 'Project Planning'],
                    ['/nlesc_specific/projects/project_reviews.md', 'Project Reviews'],
                    ['/nlesc_specific/projects/communication.md', 'Communication'],
                    ['/nlesc_specific/projects/end_of_a_project.md', 'End of a Project'],
                    ['/nlesc_specific/checklist.md', 'Checklist'],
                    ['/nlesc_specific/checklist_matrix.md', 'Development stages matrix'],
                    ['/nlesc_specific/checklist/checklist_prototype.md', 'Prototype phase'],
                    ['/nlesc_specific/checklist/checklist_prerelease.md', 'Prerelease phase'],
                    ['/nlesc_specific/checklist/checklist_mature.md', 'Mature phase'],
                ]
            }
        ],
        smoothScroll: true,
        // Assumes GitHub. Can also be a full GitLab url.
        repo: 'vuejs/vuepress',
        // Customising the header label
        // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
        repoLabel: 'Edit!',

        // Optional options for generating "Edit this page" link

        // if your docs are in a different repo from your main project:
        docsRepo: 'vuejs/vuepress',
        // if your docs are not at the root of the repo:
        docsDir: 'docs',
        // if your docs are in a specific branch (defaults to 'master'):
        docsBranch: 'master',
        // defaults to false, set to true to enable
        editLinks: true,
        // custom text for edit link. Defaults to "Edit this page"
        editLinkText: 'Help us improve this page!',
        lastUpdated: 'Last Updated', // string | boolean
    }
}