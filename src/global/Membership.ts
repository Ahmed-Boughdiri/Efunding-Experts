
interface LessonsProps {
    title: String,
    downloadedLink: String
}

interface CoursesContentProps {
    name: String,
    link: String,
    videos?: String[],
    title: String,
    content?: String[],
    type?: String,
    lessons?: LessonsProps[]
}

interface CoursesProps {
    title: String,
    courses: CoursesContentProps[],
}

export const courses:CoursesProps[] = [
    {
        title: "Welcome",
        courses: [
            {
                name: "WELCOME",
                link: "#!",
                videos: [
                    "eS9YSSpAs2M"
                ],
                title: "WELCOME TO THE TEAM",
                content: [
                    "Welcome on board! We’re delighted that you are joining us. We were impressed with your background and skills and we can’t wait to see you in action",
                    "We want to ensure that you feel comfortable and hit the ground running. Here’s some information to help you familiarize yourself with the company.",
                    "Efunding Experts is a group of Business and Subject matter experts dedicated to helping you and/or your organization grow and prosper through a variety of life-changing seminars and empowerment workshops. Our faculty/coaches are not just standup and talk experts, they give participants the opportunity to interact with them and fellow attendees throughout our educational sessions."
                ]
            },
            {
                name: "Mission and Vision Statement",
                link: "#!",
                videos: [
                    "NI7fuwB9Ijk"
                ],
                title: "Mission and Vision Statement",
                content: [
                    "Welcome on board! We’re delighted that you are joining us. We were impressed with your background and skills and we can’t wait to see you in action",
                    "We want to ensure that you feel comfortable and hit the ground running. Here’s some information to help you familiarize yourself with the company.",
                    "Efunding Experts is a group of Business and Subject matter experts dedicated to helping you and/or your organization grow and prosper through a variety of life-changing seminars and empowerment workshops. Our faculty/coaches are not just standup and talk experts, they give participants the opportunity to interact with them and fellow attendees throughout our educational sessions."
                ]
            },
        ]
    },
    {
        title: "Expectations to WIN!",
        courses: [
            {
                name: "Company Culture",
                link: "#!",
                videos: [
                    "wB62W6rnS-8"
                ],
                title: "Company Culture",
                content: [
                    "What we expect from you and what you can expect from us! ",
                ]
            },
            {
                name: "Goals!",
                link: "#!",
                videos: [
                    "JZ6GyOPu99U"
                ],
                title: "Goals!",
                content: [
                    "What we expect from you and what you can expect from us!  ",
                ]
            },
            {
                name: "Rules to be Successful!",
                link: "#!",
                videos: [
                    "eCyhfmZ3QdI"
                ],
                title: "Rules to be Successful!",
                content: [
                    "Alex Guillen shares the rules to be success here at Efunding Experts! ",
                ]
            },
            {
                name: "Our Expectations and Commitments",
                link: "#!",
                videos: [
                    "xHLroINeEYk"
                ],
                title: "Our Expectations and Commitments",
                content: [
                    "What we expect from you and what you can expect from us! ",
                ]
            },
        ]
    },
    {
        title: "Our Programs",
        courses: [
            {
                name: "Terminology in the Funding Industry",
                link: "#!",
                videos: [
                    "zWlOolyoCsQ"
                ],
                title: "Terminology in the Funding Industry",
                content: [
                    "Welcome on board! We’re delighted that you are joining us. We were impressed with your background and skills and we can’t wait to see you in action",
                    "We want to ensure that you feel comfortable and hit the ground running. Here’s some information to help you familiarize yourself with the company.",
                    "Efunding Experts is a group of Business and Subject matter experts dedicated to helping you and/or your organization grow and prosper through a variety of life-changing seminars and empowerment workshops. Our faculty/coaches are not just standup and talk experts, they give participants the opportunity to interact with them and fellow attendees throughout our educational sessions."
                ]
            },
            {
                name: "Funding Program Overview",
                link: "#!",
                videos: [
                    "o4iIRZRRmIo"
                ],
                title: "Funding Program Overview",
                content: [
                    "Welcome on board! We’re delighted that you are joining us. We were impressed with your background and skills and we can’t wait to see you in action",
                    "We want to ensure that you feel comfortable and hit the ground running. Here’s some information to help you familiarize yourself with the company.",
                    "Efunding Experts is a group of Business and Subject matter experts dedicated to helping you and/or your organization grow and prosper through a variety of life-changing seminars and empowerment workshops. Our faculty/coaches are not just standup and talk experts, they give participants the opportunity to interact with them and fellow attendees throughout our educational sessions."
                ]
            },
            {
                name: "Term Loans",
                link: "#!",
                videos: [
                    "C0NmUdazkpc"
                ],
                title: "Term Loans",
                content: [
                    "Welcome on board! We’re delighted that you are joining us. We were impressed with your background and skills and we can’t wait to see you in action",
                    "We want to ensure that you feel comfortable and hit the ground running. Here’s some information to help you familiarize yourself with the company.",
                    "Efunding Experts is a group of Business and Subject matter experts dedicated to helping you and/or your organization grow and prosper through a variety of life-changing seminars and empowerment workshops. Our faculty/coaches are not just standup and talk experts, they give participants the opportunity to interact with them and fellow attendees throughout our educational sessions."
                ]
            },
            {
                name: "Revenue Based Lines of Credit (LOC)",
                link: "#!",
                videos: [
                    "3g5quiQgJXA"
                ],
                title: "Revenue Based Lines of Credit (LOC)",
                content: [
                    "Welcome on board! We’re delighted that you are joining us. We were impressed with your background and skills and we can’t wait to see you in action",
                    "We want to ensure that you feel comfortable and hit the ground running. Here’s some information to help you familiarize yourself with the company.",
                    "Efunding Experts is a group of Business and Subject matter experts dedicated to helping you and/or your organization grow and prosper through a variety of life-changing seminars and empowerment workshops. Our faculty/coaches are not just standup and talk experts, they give participants the opportunity to interact with them and fellow attendees throughout our educational sessions."
                ]
            },
            {
                name: "Credit Repair",
                link: "#!",
                videos: [
                    "hPFUMHG90Go"
                ],
                title: "Credit Repair",
                content: [
                    "Welcome on board! We’re delighted that you are joining us. We were impressed with your background and skills and we can’t wait to see you in action",
                    "We want to ensure that you feel comfortable and hit the ground running. Here’s some information to help you familiarize yourself with the company.",
                    "Efunding Experts is a group of Business and Subject matter experts dedicated to helping you and/or your organization grow and prosper through a variety of life-changing seminars and empowerment workshops. Our faculty/coaches are not just standup and talk experts, they give participants the opportunity to interact with them and fellow attendees throughout our educational sessions."
                ]
            },
            {
                name: "Merchant Services (Credit Card Processing)",
                link: "#!",
                videos: [
                    "oUExjnkSHTQ"
                ],
                title: "Merchant Services (Credit Card Processing)",
                content: [
                    "Welcome on board! We’re delighted that you are joining us. We were impressed with your background and skills and we can’t wait to see you in action",
                    "We want to ensure that you feel comfortable and hit the ground running. Here’s some information to help you familiarize yourself with the company.",
                    "Efunding Experts is a group of Business and Subject matter experts dedicated to helping you and/or your organization grow and prosper through a variety of life-changing seminars and empowerment workshops. Our faculty/coaches are not just standup and talk experts, they give participants the opportunity to interact with them and fellow attendees throughout our educational sessions."
                ]
            },
            {
                name: "Collateralized Based Loans",
                link: "#!",
                videos: [
                    "Z5HQNzFBZlo"
                ],
                title: "Collateralized Based Loans",
                content: [
                    "Welcome on board! We’re delighted that you are joining us. We were impressed with your background and skills and we can’t wait to see you in action",
                    "We want to ensure that you feel comfortable and hit the ground running. Here’s some information to help you familiarize yourself with the company.",
                    "Efunding Experts is a group of Business and Subject matter experts dedicated to helping you and/or your organization grow and prosper through a variety of life-changing seminars and empowerment workshops. Our faculty/coaches are not just standup and talk experts, they give participants the opportunity to interact with them and fellow attendees throughout our educational sessions."
                ]
            },
            {
                name: "Q & A's Session",
                link: "#!",
                videos: [
                    "y3l17GDPyq4"
                ],
                title: "Q & A's Session",
                content: [
                    "Welcome on board! We’re delighted that you are joining us. We were impressed with your background and skills and we can’t wait to see you in action",
                    "We want to ensure that you feel comfortable and hit the ground running. Here’s some information to help you familiarize yourself with the company.",
                    "Efunding Experts is a group of Business and Subject matter experts dedicated to helping you and/or your organization grow and prosper through a variety of life-changing seminars and empowerment workshops. Our faculty/coaches are not just standup and talk experts, they give participants the opportunity to interact with them and fellow attendees throughout our educational sessions."
                ]
            },
        ]
    },
    {
        title: "Prospecting Success",
        courses: [
            {
                name: "Prospecting",
                link: "#!",
                videos: [
                    "u2dCj7VerHs"
                ],
                title: "Prospecting",
                content: [
                    "Facebook prospecting is important and here you will learn why and how you can start making money by finding deals on Facebook. ",
                ]
            },
            {
                name: "Prospecting on Linkedin",
                link: "#!",
                videos: [
                    "c38M0OzP0bk"
                ],
                title: "Prospecting on Linkedin",
                content: [
                    "Facebook prospecting is important and here you will learn why and how you can start making money by finding deals on Facebook. ",
                ]
            },
            {
                name: "Prospecting on Facebook",
                link: "#!",
                videos: [
                    "EoMwCgXOalg"
                ],
                title: "Prospecting on Facebook",
                content: [
                    "Facebook prospecting is important and here you will learn why and how you can start making money by finding deals on Facebook. ",
                ]
            },
            {
                name: "How to Request a Quote",
                link: "#!",
                videos: [
                    "pO3H6Vi-qL4"
                ],
                title: "How to Request a Quote",
                content: [
                    "Welcome on board! We’re delighted that you are joining us. We were impressed with your background and skills and we can’t wait to see you in action",
                    "We want to ensure that you feel comfortable and hit the ground running. Here’s some information to help you familiarize yourself with the company.",
                    "Efunding Experts is a group of Business and Subject matter experts dedicated to helping you and/or your organization grow and prosper through a variety of life-changing seminars and empowerment workshops. Our faculty/coaches are not just standup and talk experts, they give participants the opportunity to interact with them and fellow attendees throughout our educational sessions."
                ]
            },
        ]
    },
    {
        title: "Live Training & Webinars",
        courses: [
            {
                name: "Live Webinars: Funding ",
                link: "#!",
                videos: [
                    "G4U0qOq1CW0"
                ],
                title: "Live Webinars: Funding ",
                content: [
                    ""    
                ]
            },
            {
                name: "Live Webinar - Funding",
                link: "#!",
                videos: [
                    "BjXXqkINiVw"
                ],
                title: "Live Webinar - Funding",
                content: [
                    "Welcome on board! We’re delighted that you are joining us. We were impressed with your background and skills and we can’t wait to see you in action",
                    "We want to ensure that you feel comfortable and hit the ground running. Here’s some information to help you familiarize yourself with the company.",
                    "Efunding Experts is a group of Business and Subject matter experts dedicated to helping you and/or your organization grow and prosper through a variety of life-changing seminars and empowerment workshops. Our faculty/coaches are not just standup and talk experts, they give participants the opportunity to interact with them and fellow attendees throughout our educational sessions."
                ]
            },
            {
                name: "Live Interview - Funding",
                link: "#!",
                videos: [
                    "pOZzKjXqtCs"
                ],
                title: "Live Interview - Funding",
                content: [
                    "Welcome on board! We’re delighted that you are joining us. We were impressed with your background and skills and we can’t wait to see you in action",
                    "We want to ensure that you feel comfortable and hit the ground running. Here’s some information to help you familiarize yourself with the company.",
                    "Efunding Experts is a group of Business and Subject matter experts dedicated to helping you and/or your organization grow and prosper through a variety of life-changing seminars and empowerment workshops. Our faculty/coaches are not just standup and talk experts, they give participants the opportunity to interact with them and fellow attendees throughout our educational sessions."
                ]
            },
        ]
    },
    {
        title: "Mindset is EVERYTHING at Efunding Experts!",
        courses: [
            {
                name: "Creating the Right MINDSET to Win",
                link: "#!",
                videos: [
                    "ts2F9tCNLkc"
                ],
                title: "Creating the Right MINDSET to Win",
                content: [
                    "Creating the right mindset to win in business! ",
                ]
            },
            {
                name: "I'M THE ONE - Les Brown",
                link: "#!",
                videos: [
                    "-WL6DMzRZvc"
                ],
                title: "I'M THE ONE - Les Brown",
                content: [
                    "",
                ]
            },
            {
                name: "Mentor2Millions Program",
                link: "#!",
                type: "Download",
                title: "Lesson Title: Mentor2Millions Program",
                lessons: [
                    {
                        title: "The Inner Game & Leadership",
                        downloadedLink: "https://www.dropbox.com/sh/tw7fe4ehnoze994/AACKSM-DeksCpPoD93gEsVYIa"
                    },
                    {
                        title: "Customer Acquisition & the enrollment Proccess",
                        downloadedLink: "https://www.dropbox.com/sh/hq21a3m223hx7ga/AAASo5w1_bMH-LkxmEK4PFnza"
                    },
                    {
                        title: "Goal Setting & Time Management",
                        downloadedLink: "https://www.dropbox.com/sh/z7tku2udnjooj9m/AACkt2v2piAt8p01CmUceSRba"
                    },
                    {
                        title: "Power Presentations/Art of Closing",
                        downloadedLink: "https://www.dropbox.com/sh/25xy554h3enew8i/AAB33Um4P0n3mNTPLzfhfJS4a"
                    },
                ]
            },
            {
                name: "Work book",
                link: "#!",
                type: "Download",
                title: "Mentor2 Millions Work book",
                lessons: [
                    {
                        title: "The Inner Game & Leadership",
                        downloadedLink: "https://www.dropbox.com/s/mpobrwqitvqtlym/James%20D%20Workbook.pdf"
                    }
                ]
            },
            {
                name: "Take Charge of Your Life with Les Brown Part 1,2,3",
                link: "#!",
                videos: [
                    "0FrmnrZEd50",
                    "UKMCy8gld4A",
                    "3DxqzzQFRW8"
                ],
                title: "",
                content: [
                    "Les Brown has come up the hard way. He's risen from the ranks of poverty to become one of America's leading motivational speakers. Take Charge of your Life... with Les Brown, offers ways to overcome obstacles, challenges and negative relationships that stand in the way of making progress toward your dreams. He explains how to weather the tough times and make a commitment to happiness.",
                ]
            },
            {
                name: "Complete Success Downloads",
                link: "#!",
                type: "Download",
                title: "MP3 Downloads Success System",
                lessons: [
                    {
                        title: "Complete Success Downloads",
                        downloadedLink: "https://www.dropbox.com/sh/37a29hd80pt7vyh/AABqnGHXCv9dk4pZ2GTQSS6ea"
                    }
                ]
            },
        ]
    },
    {
        title: "Testimonials",
        courses: [
            {
                name: "Our Client Testimonials ",
                link: "#!",
                videos: [
                    "CY4V8qzL1oQ",
                    "CWFsNm3AFZc",
                    "7xLK0V0EQOk",
                    "e_Q6UftJDzg"
                ],
                title: "Our Client Testimonials",
                content: [
                    "Some of our client testimonials.",
                ]
            }
        ]
    },
]
