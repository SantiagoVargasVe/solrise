import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Project 1 Data
  await prisma.user.upsert({
    create: {
      id: "3c8b1d4e-6f3d-472b-9808-ac207a0575a1",
      email: "santiago@mail.com",
      first_name: "Santiago",
      last_name: "Gonzalez",
      wallet_address: "0x123456789",
      projects: {
        create: [
          {
            backers: 342,
            id: "7049b8b4-b3ad-46fe-b387-679b7d2ab10a",
            title: "Jewelry Emerald Collection",
            description:
              "A collection of jewelry made with emeralds from the mines of Muzo, Colombia",
            amount: 100000,
            funded: 32000,
            stages: {
              create: [
                {
                  amount: 10000,
                  title: "Design and Planning",
                  deadline: new Date(2026, 11, 1),
                  description: "Design and Planning of the jewelry collection",
                  stage_goals: {
                    create: [
                      {
                        title: "Aesthetic Design",
                        description: "Design of the jewelry collection",
                      },
                      {
                        title: "Planning",
                        description: "Planning of the jewelry collection",
                      },
                    ],
                  },
                },
              ],
            },
            images: {
              create: [
                {
                  url: "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/Gemini_Generated_Image%20(2).jpg",
                },
                {
                  url: "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/Gemini_Generated_Image%20(3).jpg",
                },
                {
                  url: "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/Gemini_Generated_Image%20(4).jpg",
                },
                {
                  url: "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/Gemini_Generated_Image.jpg",
                },
              ],
            },
            cover_image:
              "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/Gemini_Generated_Image%20(1).jpg",
          },
          {
            backers: 123,
            id: "7049b8b4-b3ad-46fe-b387-679b7d2ab10b",
            title: "Retail Store SKU Fruits",
            description: "Website  for a retail store that sells fruits",
            amount: 324000,
            funded: 10000,
            cover_image:
              "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/Gemini_Generated_Image%20(10).jpg",
            stages: {
              create: [
                {
                  amount: 10000,
                  title: "Hire a team",
                  deadline: new Date(2024, 11, 1),
                  description: "Hire a team to develop the website",
                  stage_goals: {
                    create: [
                      {
                        title: "Hire a team",
                        description: "Hire a team to develop the website",
                      },
                    ],
                  },
                },
                {
                  amount: 50000,
                  title: "Design and Planning",
                  deadline: new Date(2025, 11, 1),
                  description: "Design and Planning of the website",
                  stage_goals: {
                    create: [
                      {
                        title: "Design the website",
                        description: "Design the website",
                      },
                      {
                        title: "Planning the website",
                        description: "Planning the website",
                      },
                    ],
                  },
                },
                {
                  amount: 30000,
                  title: "Develop the website",
                  deadline: new Date(2026, 11, 1),
                  description: "Develop the website",
                  stage_goals: {
                    create: [
                      {
                        title: "Develop the website",
                        description: "Develop the website",
                      },
                    ],
                  },
                },
                {
                  amount: 500,
                  title: "Launch the website",
                  deadline: new Date(2027, 11, 1),
                  description: "Launch the website",
                  stage_goals: {
                    create: [
                      {
                        title: "Launch the website",
                        description: "Launch the website",
                      },
                    ],
                  },
                },
              ],
            },
            rewards: {
              create: [
                {
                  title: "Fruits",
                  description: "A basket of fruits",
                  amount: 200,
                  image:
                    "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/Gemini_Generated_Image%20(8).jpg",
                },
                {
                  title: "Fruits and Vegetables",
                  description: "A basket of fruits and vegetables",
                  amount: 500,
                  image:
                    "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/Gemini_Generated_Image%20(6).jpg",
                },
              ],
            },
            images: {
              create: [
                {
                  url: "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/Gemini_Generated_Image%20(8).jpg",
                },
                {
                  url: "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/Gemini_Generated_Image%20(7).jpg",
                },
                {
                  url: "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/Gemini_Generated_Image%20(6).jpg",
                },
                {
                  url: "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/Gemini_Generated_Image%20(5).jpg",
                },
                {
                  url: "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/Gemini_Generated_Image%20(12).jpg",
                },
              ],
            },
          },
          {
            id: "7049b8b4-b3ad-46fe-b387-679b7d2ab10c",
            amount: 20000,
            backers: 500,
            title: "Steering Wheel Luxury",
            cover_image:
              "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/seteringwheel1.jpg",
            description: "A luxury steering wheel for cars",
            funded: 5000,
            images: {
              create: [
                {
                  url: "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/seteringwheel2.jpg",
                },
                {
                  url: "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/seteringwheel3.jpg",
                },
                {
                  url: "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/seteringwheel4.jpg",
                },
                {
                  url: "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/seteringwheel5.jpg",
                },
              ],
            },
            stages: {
              create: [
                {
                  amount: 2000,
                  title: "Design and Planning",
                  deadline: new Date(2026, 11, 1),
                  description: "Design and Planning of the steering wheel",
                  stage_goals: {
                    create: [
                      {
                        title: "Aesthetic Design",
                        description: "Design of the steering wheel",
                      },
                      {
                        title: "Planning",
                        description: "Planning of the steering wheel",
                      },
                    ],
                  },
                },
                {
                  amount: 5000,
                  title: "Develop the steering wheel",
                  deadline: new Date(2027, 11, 1),
                  description: "Develop the steering wheel",
                  stage_goals: {
                    create: [
                      {
                        title: "Develop the steering wheel",
                        description: "Develop the steering wheel",
                      },
                    ],
                  },
                },
                {
                  amount: 500,
                  title: "Launch the steering wheel",
                  deadline: new Date(2028, 11, 1),
                  description: "Launch the steering wheel",
                  stage_goals: {
                    create: [
                      {
                        title: "Launch the steering wheel",
                        description: "Launch the steering wheel",
                      },
                    ],
                  },
                },
              ],
            },
            rewards: {
              create: [
                {
                  title: "Steering Wheel",
                  description: "A luxury steering wheel",
                  amount: 200,
                  image:
                    "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/seteringwheel2.jpg",
                },
              ],
            },
          },
          {
            id: "7049b8b4-b3ad-46fe-b387-679b7d2ab10d",
            amount: 52000,
            backers: 1000,
            cover_image:
              "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/back1.jpg",
            title: "Multi-Functional Backpack",
            description: "A multi-functional backpack for everyday use",
            funded: 20000,
            images: {
              create: [
                {
                  url: "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/back2.jpg",
                },
                {
                  url: "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/back3.jpg",
                },
                {
                  url: "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/back4.jpg",
                },
                {
                  url: "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/back5.jpg",
                },
              ],
            },
            stages: {
              create: [
                {
                  amount: 2000,
                  title: "Design and Planning",
                  deadline: new Date(2026, 11, 1),
                  description: "Design and Planning of the backpack",
                  stage_goals: {
                    create: [
                      {
                        title: "Aesthetic Design",
                        description: "Design of the backpack",
                      },
                      {
                        title: "Planning",
                        description: "Planning of the backpack",
                      },
                    ],
                  },
                },
                {
                  amount: 5000,
                  title: "Develop the backpack",
                  deadline: new Date(2027, 11, 1),
                  description: "Develop the backpack",
                  stage_goals: {
                    create: [
                      {
                        title: "Develop the backpack",
                        description: "Develop the backpack",
                      },
                    ],
                  },
                },
                {
                  amount: 500,
                  title: "Launch the backpack",
                  deadline: new Date(2028, 11, 1),
                  description: "Launch the backpack",
                  stage_goals: {
                    create: [
                      {
                        title: "Launch the backpack",
                        description: "Launch the backpack",
                      },
                    ],
                  },
                },
              ],
            },
            rewards: {
              create: [
                {
                  title: "Backpack",
                  description: "A multi-functional backpack",
                  amount: 200,
                  image:
                    "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/back2.jpg",
                },
              ],
            },
          },
          {
            id: "7049b8b4-b3ad-46fe-b387-679b7d2ab10e",
            amount: 20000,
            title: "Revolutional Phone Cases",
            backers: 1000,
            description: "A collection of phone cases",
            funded: 19000,
            cover_image:
              "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/case1.jpg",
            images: {
              create: [
                {
                  url: "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/case2.jpg",
                },
                {
                  url: "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/case3.jpg",
                },
                {
                  url: "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/case4.jpg",
                },
                {
                  url: "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/case5.jpg",
                },
              ],
            },
            stages: {
              create: [
                {
                  amount: 2000,
                  title: "Design and Planning",
                  deadline: new Date(2026, 11, 1),
                  description: "Design and Planning of the phone cases",
                  stage_goals: {
                    create: [
                      {
                        title: "Aesthetic Design",
                        description: "Design of the phone cases",
                      },
                      {
                        title: "Planning",
                        description: "Planning of the phone cases",
                      },
                    ],
                  },
                },
                {
                  amount: 5000,
                  title: "Develop the phone cases",
                  deadline: new Date(2027, 11, 1),
                  description: "Develop the phone cases",
                  stage_goals: {
                    create: [
                      {
                        title: "Develop the phone cases",
                        description: "Develop the phone cases",
                      },
                    ],
                  },
                },
                {
                  amount: 500,
                  title: "Launch the phone cases",
                  deadline: new Date(2028, 11, 1),
                  description: "Launch the phone cases",
                  stage_goals: {
                    create: [
                      {
                        title: "Launch the phone cases",
                        description: "Launch the phone cases",
                      },
                    ],
                  },
                },
              ],
            },
            rewards: {
              create: [
                {
                  title: "Phone Cases",
                  description: "A collection of phone cases",
                  amount: 200,
                  image:
                    "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/case2.jpg",
                },
              ],
            },
          },
          {
            id: "7049b8b4-b3ad-46fe-b387-679b7d2ab10f",
            amount: 15200,
            backers: 1000,
            cover_image:
              "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/dog1.jpg",
            title: "Dog toys ACME",
            description: "A collection of dog toys",
            funded: 10000,
            images: {
              create: [
                {
                  url: "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/dog2.jpg",
                },
                {
                  url: "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/dog3.jpg",
                },
                {
                  url: "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/dog4.jpg",
                },
                {
                  url: "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/dog5.jpg",
                },
              ],
            },
            stages: {
              create: [
                {
                  amount: 2000,
                  title: "Design and Planning",
                  deadline: new Date(2026, 11, 1),
                  description: "Design and Planning of the dog toys",
                  stage_goals: {
                    create: [
                      {
                        title: "Aesthetic Design",
                        description: "Design of the dog toys",
                      },
                      {
                        title: "Planning",
                        description: "Planning of the dog toys",
                      },
                    ],
                  },
                },
                {
                  amount: 5000,
                  title: "Develop the dog toys",
                  deadline: new Date(2027, 11, 1),
                  description: "Develop the dog toys",
                  stage_goals: {
                    create: [
                      {
                        title: "Develop the dog toys",
                        description: "Develop the dog toys",
                      },
                    ],
                  },
                },
                {
                  amount: 500,
                  title: "Launch the dog toys",
                  deadline: new Date(2028, 11, 1),
                  description: "Launch the dog toys",
                  stage_goals: {
                    create: [
                      {
                        title: "Launch the dog toys",
                        description: "Launch the dog toys",
                      },
                    ],
                  },
                },
              ],
            },
            rewards: {
              create: [
                {
                  title: "Dog toys",
                  description: "A collection of dog toys",
                  amount: 200,
                  image:
                    "https://rrczfslajmeuzdceqoif.supabase.co/storage/v1/object/public/images/dog2.jpg",
                },
              ],
            },
          },
        ],
      },
    },
    update: {},
    where: {
      wallet_address: "0x123456789",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
