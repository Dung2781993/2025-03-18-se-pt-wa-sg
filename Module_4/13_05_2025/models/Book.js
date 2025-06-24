const { axios } = require("axios");

const book = {
  status: "OK",
  copyright:
    "Copyright (c) 2025 The New York Times Company. All Rights Reserved.",
  num_results: 15,
  last_modified: "2025-05-15T01:07:25Z",
  results: {
    bestsellers_date: "2025-05-10",
    books: [
      {
        age_group: "",
        amazon_product_url:
          "https://www.amazon.com/dp/1649378513?tag=thenewyorktim-20",
        article_chapter_link: "",
        asterisk: 0,
        author: "Devney Perry",
        book_image:
          "https://static01.nyt.com/bestsellers/images/9781649378514.jpg",
        book_image_height: 500,
        book_image_width: 309,
        book_review_link: "",
        book_uri: "nyt://book/5b727292-ea35-5694-b6ea-007a5cc60df0",
        buy_links: [
          {
            name: "Amazon",
            url: "https://www.amazon.com/dp/1649378513?tag=thenewyorktim-20",
          },
          {
            name: "Apple Books",
            url: "https://goto.applebooks.apple/9781649378514?at=10lIEQ",
          },
          {
            name: "Barnes & Noble",
            url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2Fshield-of-sparrows-devney-perry%2F1146581589%3Fean%3D9781649378514",
          },
          {
            name: "Books-A-Million",
            url: "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FShield-Sparrows-Deluxe-Limited%2FDevney-Perry%2F9781649378514",
          },
          {
            name: "Bookshop.org",
            url: "https://bookshop.org/a/3546/9781649378514",
          },
        ],
        contributor: "Devney Perry",
        contributor_note: "",
        created_date: "2025-05-14T22:32:47.148Z",
        dagger: 0,
        description:
          "A princess deals with various adversaries as she moves into the role she chooses for herself, not the one chosen for her.",
        first_chapter_link: "",
        isbns: [
          {
            isbn10: "",
            isbn13: "9781649378514",
          },
        ],
        price: "0.00",
        primary_isbn10: "",
        primary_isbn13: "9781649378514",
        publisher: "Red Tower",
        rank: 1,
        rank_last_week: 0,
        sunday_review_link: "",
        title: "Shield of Sparrows",
        updated_date: "2025-05-14T22:32:47.148Z",
        weeks_on_list: 1,
      },
      {
        age_group: "",
        amazon_product_url:
          "https://www.amazon.com/dp/059344129X?tag=thenewyorktim-20",
        article_chapter_link: "",
        asterisk: 0,
        author: "Emily Henry",
        book_image:
          "https://static01.nyt.com/bestsellers/images/9780593441299.jpg",
        book_image_height: 500,
        book_image_width: 331,
        book_review_link: "",
        book_uri: "nyt://book/9acef644-540c-598c-8d0b-abe49ecc78c0",
        buy_links: [
          {
            name: "Amazon",
            url: "https://www.amazon.com/dp/059344129X?tag=thenewyorktim-20",
          },
          {
            name: "Apple Books",
            url: "https://goto.applebooks.apple/9780593441299?at=10lIEQ",
          },
          {
            name: "Barnes and Noble",
            url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593441299",
          },
          {
            name: "Books-A-Million",
            url: "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FGREAT%2BBIG%2BBEAUTIFUL%2BLIFE%2FEmily%2BHenry%2F9780593441299",
          },
          {
            name: "Bookshop.org",
            url: "https://bookshop.org/a/3546/9780593441299",
          },
        ],
        contributor: "Emily Henry",
        contributor_note: "",
        created_date: "2025-05-14T15:39:06.735Z",
        dagger: 0,
        description:
          "A writer looking for her big break competes against a Pulitzer winner to tell the story of an octogenarian with a storied past.",
        first_chapter_link: "",
        isbns: [
          {
            isbn10: "",
            isbn13: "9780593441299",
          },
        ],
        price: "0.00",
        primary_isbn10: "",
        primary_isbn13: "9780593441299",
        publisher: "Berkley",
        rank: 2,
        rank_last_week: 1,
        sunday_review_link: "",
        title: "Great Big Beautiful Life",
        updated_date: "2025-05-14T15:39:06.735Z",
        weeks_on_list: 3,
      },
      {
        age_group: "",
        amazon_product_url:
          "https://www.amazon.com/dp/1982112824?tag=thenewyorktim-20",
        article_chapter_link: "",
        asterisk: 0,
        author: "Fredrik Backman",
        book_image:
          "https://static01.nyt.com/bestsellers/images/9781982112820.jpg",
        book_image_height: 500,
        book_image_width: 331,
        book_review_link: "",
        book_uri: "nyt://book/4129c15e-98d1-5301-b6ac-304f9bd76d18",
        buy_links: [
          {
            name: "Amazon",
            url: "https://www.amazon.com/dp/1982112824?tag=thenewyorktim-20",
          },
          {
            name: "Apple Books",
            url: "https://goto.applebooks.apple/9781982112820?at=10lIEQ",
          },
          {
            name: "Barnes & Noble",
            url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2Fmy-friends-fredrik-backman%2F1146129082%3Fean%3D9781982112820",
          },
          {
            name: "Books-A-Million",
            url: "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FMy-Friends%2FFredrik-Backman%2F9781982112820",
          },
          {
            name: "Bookshop.org",
            url: "https://bookshop.org/a/3546/9781982112820",
          },
        ],
        contributor: "Fredrik Backman",
        contributor_note: "",
        created_date: "2025-05-14T22:32:47.212Z",
        dagger: 0,
        description:
          "A young woman looks into the story behind a painting that was made 25 years ago and a small group of teens depicted in it; translated by Neil Smith.",
        first_chapter_link: "",
        isbns: [
          {
            isbn10: "",
            isbn13: "9781982112820",
          },
        ],
        price: "0.00",
        primary_isbn10: "",
        primary_isbn13: "9781982112820",
        publisher: "Atria",
        rank: 3,
        rank_last_week: 0,
        sunday_review_link: "",
        title: "My Friends",
        updated_date: "2025-05-14T22:32:47.212Z",
        weeks_on_list: 1,
      },
      {
        age_group: "",
        amazon_product_url:
          "https://www.amazon.com/dp/0593726987?tag=thenewyorktim-20",
        article_chapter_link: "",
        asterisk: 0,
        author: "Ashley Flowers with Alex Kiester",
        book_image:
          "https://static01.nyt.com/bestsellers/images/9780593726983.jpg",
        book_image_height: 500,
        book_image_width: 329,
        book_review_link: "",
        book_uri: "nyt://book/954cc0ef-abdd-5be0-997a-86271a10f667",
        buy_links: [
          {
            name: "Amazon",
            url: "https://www.amazon.com/dp/0593726987?tag=thenewyorktim-20",
          },
          {
            name: "Apple Books",
            url: "https://goto.applebooks.apple/9780593726983?at=10lIEQ",
          },
          {
            name: "Barnes & Noble",
            url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2Fthe-missing-half-ashley-flowers%2F1146133242%3Fean%3D9780593726983",
          },
          {
            name: "Books-A-Million",
            url: "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FMissing-Half%2FAshley-Flowers%2F9780593726983",
          },
          {
            name: "Bookshop.org",
            url: "https://bookshop.org/a/3546/9780593726983",
          },
        ],
        contributor: "Ashley Flowers with Alex Kiester",
        contributor_note: "",
        created_date: "2025-05-14T22:32:47.363Z",
        dagger: 0,
        description:
          "Years after their sisters went missing in a similar way, Nicole Monroe and Jenna Connor team up to search for them.",
        first_chapter_link: "",
        isbns: [
          {
            isbn10: "",
            isbn13: "9780593726983",
          },
        ],
        price: "0.00",
        primary_isbn10: "",
        primary_isbn13: "9780593726983",
        publisher: "Bantam",
        rank: 4,
        rank_last_week: 0,
        sunday_review_link: "",
        title: "The Missing Half",
        updated_date: "2025-05-14T22:32:47.363Z",
        weeks_on_list: 1,
      },
      {
        age_group: "",
        amazon_product_url:
          "https://www.amazon.com/dp/059387546X?tag=thenewyorktim-20",
        article_chapter_link: "",
        asterisk: 0,
        author: "Dani Francis",
        book_image:
          "https://static01.nyt.com/bestsellers/images/9780593875469.jpg",
        book_image_height: 500,
        book_image_width: 329,
        book_review_link: "",
        book_uri: "nyt://book/839b0eae-2fab-56d3-bbcb-4ec89bda514b",
        buy_links: [
          {
            name: "Amazon",
            url: "https://www.amazon.com/dp/059387546X?tag=thenewyorktim-20",
          },
          {
            name: "Apple Books",
            url: "https://goto.applebooks.apple/9780593875469?at=10lIEQ",
          },
          {
            name: "Barnes & Noble",
            url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2Fsilver-elite-dani-francis%2F1146138300%3Fean%3D9780593875469",
          },
          {
            name: "Books-A-Million",
            url: "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FSilver-Elite%2FDani-Francis%2F9780593875469",
          },
          {
            name: "Bookshop.org",
            url: "https://bookshop.org/a/3546/9780593875469",
          },
        ],
        contributor: "Dani Francis",
        contributor_note: "",
        created_date: "2025-05-14T22:32:47.289Z",
        dagger: 0,
        description:
          "Wren Darlington winds up in the elite training program of her enemy and finds it hard to resist their commanding officer, Cross Redden.",
        first_chapter_link: "",
        isbns: [
          {
            isbn10: "",
            isbn13: "9780593875469",
          },
        ],
        price: "0.00",
        primary_isbn10: "",
        primary_isbn13: "9780593875469",
        publisher: "Del Rey",
        rank: 5,
        rank_last_week: 0,
        sunday_review_link: "",
        title: "Silver Elite",
        updated_date: "2025-05-14T22:32:47.289Z",
        weeks_on_list: 1,
      },
      {
        age_group: "",
        amazon_product_url:
          "https://www.amazon.com/dp/0316569771?tag=thenewyorktim-20",
        article_chapter_link: "",
        asterisk: 0,
        author: "James Patterson and Maxine Paetro",
        book_image:
          "https://static01.nyt.com/bestsellers/images/9780316569774.jpg",
        book_image_height: 500,
        book_image_width: 323,
        book_review_link: "",
        book_uri: "nyt://book/5359c9f0-5081-52ee-b9b1-5f5a93a50b9a",
        buy_links: [
          {
            name: "Amazon",
            url: "https://www.amazon.com/dp/0316569771?tag=thenewyorktim-20",
          },
          {
            name: "Apple Books",
            url: "https://goto.applebooks.apple/9780316569774?at=10lIEQ",
          },
          {
            name: "Barnes and Noble",
            url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780316569774",
          },
          {
            name: "Books-A-Million",
            url: "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2F25%2BALIVE%2FJames%2BPatterson%2Band%2BMaxine%2BPaetro%2F9780316569774",
          },
          {
            name: "Bookshop.org",
            url: "https://bookshop.org/a/3546/9780316569774",
          },
        ],
        contributor: "James Patterson and Maxine Paetro",
        contributor_note: "",
        created_date: "2025-05-14T15:38:53.157Z",
        dagger: 0,
        description:
          "The 25th book in the Women’s Murder Club series. Lindsay Boxer’s former partner is the victim at a crime scene.",
        first_chapter_link: "",
        isbns: [
          {
            isbn10: "",
            isbn13: "9780316569774",
          },
        ],
        price: "0.00",
        primary_isbn10: "",
        primary_isbn13: "9780316569774",
        publisher: "Little, Brown",
        rank: 6,
        rank_last_week: 2,
        sunday_review_link: "",
        title: "25 Alive",
        updated_date: "2025-05-14T15:38:53.157Z",
        weeks_on_list: 2,
      },
      {
        age_group: "",
        amazon_product_url:
          "https://www.amazon.com/dp/1649374186?tag=thenewyorktim-20",
        article_chapter_link: "",
        asterisk: 0,
        author: "Rebecca Yarros",
        book_image:
          "https://static01.nyt.com/bestsellers/images/9781649374189.jpg",
        book_image_height: 500,
        book_image_width: 310,
        book_review_link: "",
        book_uri: "nyt://book/46da5746-7ecd-5010-881f-2da09ae5efc3",
        buy_links: [
          {
            name: "Amazon",
            url: "https://www.amazon.com/dp/1649374186?tag=thenewyorktim-20",
          },
          {
            name: "Apple Books",
            url: "https://goto.applebooks.apple/9781649374189?at=10lIEQ",
          },
          {
            name: "Barnes and Noble",
            url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781649374189",
          },
          {
            name: "Books-A-Million",
            url: "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FONYX%2BSTORM%2FRebecca%2BYarros%2F9781649374189",
          },
          {
            name: "Bookshop.org",
            url: "https://bookshop.org/a/3546/9781649374189",
          },
        ],
        contributor: "Rebecca Yarros",
        contributor_note: "",
        created_date: "2025-05-14T15:38:53.447Z",
        dagger: 0,
        description:
          "The third book in the Empyrean series. As enemies gain traction, Violet Sorrengail goes beyond the Aretian wards in search of allies.",
        first_chapter_link: "",
        isbns: [
          {
            isbn10: "",
            isbn13: "9781649374189",
          },
        ],
        price: "0.00",
        primary_isbn10: "",
        primary_isbn13: "9781649374189",
        publisher: "Red Tower",
        rank: 7,
        rank_last_week: 6,
        sunday_review_link: "",
        title: "Onyx Storm",
        updated_date: "2025-05-14T15:38:53.447Z",
        weeks_on_list: 16,
      },
      {
        age_group: "",
        amazon_product_url:
          "https://www.amazon.com/dp/B0DGY5F5JX?tag=thenewyorktim-20",
        article_chapter_link: "",
        asterisk: 0,
        author: "Jeneva Rose",
        book_image:
          "https://static01.nyt.com/bestsellers/images/9798874620936.jpg",
        book_image_height: 500,
        book_image_width: 437,
        book_review_link: "",
        book_uri: "nyt://book/0957dbf1-919e-5282-b184-4872a7e06b3a",
        buy_links: [
          {
            name: "Amazon",
            url: "https://www.amazon.com/dp/B0DGY5F5JX?tag=thenewyorktim-20",
          },
          {
            name: "Apple Books",
            url: "https://goto.applebooks.apple/9798874620936?at=10lIEQ",
          },
          {
            name: "Barnes and Noble",
            url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9798874620936",
          },
          {
            name: "Books-A-Million",
            url: "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FTHE%2BPERFECT%2BDIVORCE%2FJeneva%2BRose%2F9798874620936",
          },
          {
            name: "Bookshop.org",
            url: "https://bookshop.org/a/3546/9798874620936",
          },
        ],
        contributor: "Jeneva Rose",
        contributor_note: "",
        created_date: "2025-05-14T15:39:07.24Z",
        dagger: 0,
        description:
          "Around the time of the disappearance of a woman who had a one-night stand with the attorney Sarah Morgan’s new husband, police reopen the investigation into the murder of her first husband’s mistress.",
        first_chapter_link: "",
        isbns: [
          {
            isbn10: "",
            isbn13: "9798874620936",
          },
        ],
        price: "0.00",
        primary_isbn10: "",
        primary_isbn13: "9798874620936",
        publisher: "Blackstone",
        rank: 8,
        rank_last_week: 5,
        sunday_review_link: "",
        title: "The Perfect Divorce",
        updated_date: "2025-05-14T15:39:07.24Z",
        weeks_on_list: 4,
      },
      {
        age_group: "",
        amazon_product_url:
          "https://www.amazon.com/dp/0385550367?tag=thenewyorktim-20",
        article_chapter_link: "",
        asterisk: 0,
        author: "Percival Everett",
        book_image:
          "https://static01.nyt.com/bestsellers/images/9780385550369.jpg",
        book_image_height: 500,
        book_image_width: 333,
        book_review_link: "",
        book_uri: "nyt://book/5788b098-426a-5f2c-a318-475692df69ee",
        buy_links: [
          {
            name: "Amazon",
            url: "https://www.amazon.com/dp/0385550367?tag=thenewyorktim-20",
          },
          {
            name: "Apple Books",
            url: "https://goto.applebooks.apple/9780385550369?at=10lIEQ",
          },
          {
            name: "Barnes and Noble",
            url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780385550369",
          },
          {
            name: "Books-A-Million",
            url: "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FJAMES%2FPercival%2BEverett%2F9780385550369",
          },
          {
            name: "Bookshop.org",
            url: "https://bookshop.org/a/3546/9780385550369",
          },
        ],
        contributor: "Percival Everett",
        contributor_note: "",
        created_date: "2025-05-14T16:02:58.979Z",
        dagger: 0,
        description:
          "A reimagining of “Adventures of Huckleberry Finn” shines a different light on Mark Twain's classic, revealing new facets of the character of Jim.",
        first_chapter_link: "",
        isbns: [
          {
            isbn10: "",
            isbn13: "9780385550369",
          },
        ],
        price: "0.00",
        primary_isbn10: "",
        primary_isbn13: "9780385550369",
        publisher: "Doubleday",
        rank: 9,
        rank_last_week: 14,
        sunday_review_link: "",
        title: "James",
        updated_date: "2025-05-14T16:02:58.979Z",
        weeks_on_list: 45,
      },
      {
        age_group: "",
        amazon_product_url:
          "https://www.amazon.com/dp/1538759195?tag=thenewyorktim-20",
        article_chapter_link: "",
        asterisk: 0,
        author: "Abby Jimenez",
        book_image:
          "https://static01.nyt.com/bestsellers/images/9781538759196.jpg",
        book_image_height: 500,
        book_image_width: 328,
        book_review_link: "",
        book_uri: "nyt://book/eefaad10-a0d7-5fea-97d1-47619ad9c431",
        buy_links: [
          {
            name: "Amazon",
            url: "https://www.amazon.com/dp/1538759195?tag=thenewyorktim-20",
          },
          {
            name: "Apple Books",
            url: "https://goto.applebooks.apple/9781538759196?at=10lIEQ",
          },
          {
            name: "Barnes and Noble",
            url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781538759196",
          },
          {
            name: "Books-A-Million",
            url: "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FSAY%2BYOU%2527LL%2BREMEMBER%2BME%2FAb%2BJimenez%2F9781538759196",
          },
          {
            name: "Bookshop.org",
            url: "https://bookshop.org/a/3546/9781538759196",
          },
        ],
        contributor: "Abby Jimenez",
        contributor_note: "",
        created_date: "2025-05-14T15:38:53.666Z",
        dagger: 0,
        description:
          "Despite having a great date, Samantha asks a veterinarian to forget about her because her family is in crisis.",
        first_chapter_link: "",
        isbns: [
          {
            isbn10: "",
            isbn13: "9781538759196",
          },
        ],
        price: "0.00",
        primary_isbn10: "",
        primary_isbn13: "9781538759196",
        publisher: "Forever",
        rank: 10,
        rank_last_week: 9,
        sunday_review_link: "",
        title: "Say You'll Remember Me",
        updated_date: "2025-05-14T15:38:53.666Z",
        weeks_on_list: 6,
      },
      {
        age_group: "",
        amazon_product_url:
          "https://www.amazon.com/dp/1538742055?tag=thenewyorktim-20",
        article_chapter_link: "",
        asterisk: 0,
        author: "David Baldacci",
        book_image:
          "https://static01.nyt.com/bestsellers/images/9781538742051.jpg",
        book_image_height: 500,
        book_image_width: 331,
        book_review_link: "",
        book_uri: "nyt://book/d6d26dfb-ee33-5706-ba9a-85c729f5916a",
        buy_links: [
          {
            name: "Amazon",
            url: "https://www.amazon.com/dp/1538742055?tag=thenewyorktim-20",
          },
          {
            name: "Apple Books",
            url: "https://goto.applebooks.apple/9781538742051?at=10lIEQ",
          },
          {
            name: "Barnes and Noble",
            url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781538742051",
          },
          {
            name: "Books-A-Million",
            url: "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FSTRANGERS%2BIN%2BTIME%2FDavid%2BBaldacci%2F9781538742051",
          },
          {
            name: "Bookshop.org",
            url: "https://bookshop.org/a/3546/9781538742051",
          },
        ],
        contributor: "David Baldacci",
        contributor_note: "",
        created_date: "2025-05-14T15:39:07.169Z",
        dagger: 0,
        description:
          "In London in 1944, two teenagers dealing with the dangers of World War II form an alliance with a bookshop owner.",
        first_chapter_link: "",
        isbns: [
          {
            isbn10: "",
            isbn13: "9781538742051",
          },
        ],
        price: "0.00",
        primary_isbn10: "",
        primary_isbn13: "9781538742051",
        publisher: "Grand Central",
        rank: 11,
        rank_last_week: 7,
        sunday_review_link: "",
        title: "Strangers in Time",
        updated_date: "2025-05-14T15:39:07.169Z",
        weeks_on_list: 4,
      },
      {
        age_group: "",
        amazon_product_url:
          "https://www.amazon.com/dp/1649374178?tag=thenewyorktim-20",
        article_chapter_link: "",
        asterisk: 0,
        author: "Rebecca Yarros",
        book_image:
          "https://static01.nyt.com/bestsellers/images/9781649374172.jpg",
        book_image_height: 500,
        book_image_width: 309,
        book_review_link: "",
        book_uri: "nyt://book/d3c570c9-3c3a-5c8b-a740-85ea5e92bfc9",
        buy_links: [
          {
            name: "Amazon",
            url: "https://www.amazon.com/dp/1649374178?tag=thenewyorktim-20",
          },
          {
            name: "Apple Books",
            url: "https://goto.applebooks.apple/9781649374172?at=10lIEQ",
          },
          {
            name: "Barnes and Noble",
            url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781649374172",
          },
          {
            name: "Books-A-Million",
            url: "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FIRON%2BFLAME%2FRebecca%2BYarros%2F9781649374172",
          },
          {
            name: "Bookshop.org",
            url: "https://bookshop.org/a/3546/9781649374172",
          },
        ],
        contributor: "Rebecca Yarros",
        contributor_note: "",
        created_date: "2025-05-14T22:32:42.779Z",
        dagger: 0,
        description:
          "The second book in the Empyrean series. Violet Sorrengail’s next round of training under the new vice commandant might require her to betray the man she loves.",
        first_chapter_link: "",
        isbns: [
          {
            isbn10: "",
            isbn13: "9781649374172",
          },
        ],
        price: "0.00",
        primary_isbn10: "",
        primary_isbn13: "9781649374172",
        publisher: "Red Tower",
        rank: 12,
        rank_last_week: 11,
        sunday_review_link: "",
        title: "Iron Flame",
        updated_date: "2025-05-14T22:32:42.779Z",
        weeks_on_list: 79,
      },
      {
        age_group: "",
        amazon_product_url:
          "https://www.amazon.com/dp/166807818X?tag=thenewyorktim-20",
        article_chapter_link: "",
        asterisk: 0,
        author: "Clare Leslie Hall",
        book_image:
          "https://static01.nyt.com/bestsellers/images/9781668078181.jpg",
        book_image_height: 500,
        book_image_width: 329,
        book_review_link: "",
        book_uri: "nyt://book/bd78d61b-82fb-58ec-8990-46ca43146f2b",
        buy_links: [
          {
            name: "Amazon",
            url: "https://www.amazon.com/dp/166807818X?tag=thenewyorktim-20",
          },
          {
            name: "Apple Books",
            url: "https://goto.applebooks.apple/9781668078181?at=10lIEQ",
          },
          {
            name: "Barnes and Noble",
            url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781668078181",
          },
          {
            name: "Books-A-Million",
            url: "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FBROKEN%2BCOUNTRY%2FClare%2BLeslie%2BHall%2F9781668078181",
          },
          {
            name: "Bookshop.org",
            url: "https://bookshop.org/a/3546/9781668078181",
          },
        ],
        contributor: "Clare Leslie Hall",
        contributor_note: "",
        created_date: "2025-05-14T15:38:53.739Z",
        dagger: 0,
        description:
          "Beth must confront her past when the man she once loved as a teenager returns to the village with his son.",
        first_chapter_link: "",
        isbns: [
          {
            isbn10: "",
            isbn13: "9781668078181",
          },
        ],
        price: "0.00",
        primary_isbn10: "",
        primary_isbn13: "9781668078181",
        publisher: "Simon & Schuster",
        rank: 13,
        rank_last_week: 10,
        sunday_review_link: "",
        title: "Broken Country",
        updated_date: "2025-05-14T15:38:53.739Z",
        weeks_on_list: 10,
      },
      {
        age_group: "",
        amazon_product_url: "",
        article_chapter_link: "",
        asterisk: 0,
        author: "Florence Knapp",
        book_image:
          "https://static01.nyt.com/bestsellers/images/9780593833902.jpg",
        book_image_height: 0,
        book_image_width: 0,
        book_review_link: "",
        book_uri: "nyt://book/f3ebc6c1-d3c5-5986-b8de-db18a0c7336e",
        buy_links: [
          {
            name: "Apple Books",
            url: "https://goto.applebooks.apple/9780593833902?at=10lIEQ",
          },
          {
            name: "Barnes & Noble",
            url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2Fthe-names-florence-knapp%2F1146137738%3Fean%3D9780593833902",
          },
          {
            name: "Books-A-Million",
            url: "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FNames%2FFlorence-Knapp%2F9780593833902",
          },
          {
            name: "Bookshop.org",
            url: "https://bookshop.org/a/3546/9780593833902",
          },
        ],
        contributor: "Florence Knapp",
        contributor_note: "",
        created_date: "2025-05-14T22:32:42.86Z",
        dagger: 0,
        description:
          "Three alternate and alternating versions of Cora’s and her son’s lives are spun over several decades.",
        first_chapter_link: "",
        isbns: [
          {
            isbn10: "",
            isbn13: "9780593833902",
          },
        ],
        price: "0.00",
        primary_isbn10: "",
        primary_isbn13: "9780593833902",
        publisher: "Pamela Dorman",
        rank: 14,
        rank_last_week: 0,
        sunday_review_link: "",
        title: "The Names",
        updated_date: "2025-05-14T22:32:42.86Z",
        weeks_on_list: 1,
      },
      {
        age_group: "",
        amazon_product_url:
          "https://www.amazon.com/dp/1250178630?tag=thenewyorktim-20",
        article_chapter_link: "",
        asterisk: 0,
        author: "Kristin Hannah",
        book_image:
          "https://static01.nyt.com/bestsellers/images/9781250178633.jpg",
        book_image_height: 500,
        book_image_width: 333,
        book_review_link: "",
        book_uri: "nyt://book/9ce735af-71cf-5ff3-a367-43ee07e3fdd7",
        buy_links: [
          {
            name: "Amazon",
            url: "https://www.amazon.com/dp/1250178630?tag=thenewyorktim-20",
          },
          {
            name: "Apple Books",
            url: "https://goto.applebooks.apple/9781250178633?at=10lIEQ",
          },
          {
            name: "Barnes and Noble",
            url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250178633",
          },
          {
            name: "Books-A-Million",
            url: "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FTHE%2BWOMEN%2FKristin%2BHannah%2F9781250178633",
          },
          {
            name: "Bookshop.org",
            url: "https://bookshop.org/a/3546/9781250178633",
          },
        ],
        contributor: "Kristin Hannah",
        contributor_note: "",
        created_date: "2025-05-14T22:32:42.935Z",
        dagger: 0,
        description:
          "A nurse follows her brother to serve during the Vietnam War and returns to a divided America.",
        first_chapter_link: "",
        isbns: [
          {
            isbn10: "",
            isbn13: "9781250178633",
          },
        ],
        price: "0.00",
        primary_isbn10: "",
        primary_isbn13: "9781250178633",
        publisher: "St. Martin's",
        rank: 15,
        rank_last_week: 13,
        sunday_review_link: "",
        title: "The Women",
        updated_date: "2025-05-14T22:32:42.935Z",
        weeks_on_list: 66,
      },
    ],
    corrections: [],
    display_name: "Hardcover Fiction",
    list_id: 1,
    list_name: "Hardcover Fiction",
    list_name_encoded: "hardcover-fiction",
    normal_list_ends_at: 15,
    previous_published_date: "2025-05-07",
    published_date: "2025-05-14",
    published_date_description: "latest",
    updated: "WEEKLY",
    uri: "nyt://bestsellerslist/c7bfe417-77d6-57f0-9c73-4cd6595d4646",
  },
};

const API_KEY = `YYRTmuGHrdxW9AaXsNhXhNhApOa05QAG`;
const API_URL = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`;

const getAllBooks = async () => {
  // We will call the third party api and return data in here using async and await
  try {
    const response = await axios.get(API_URL);
    if (response && response?.data) {
      return response.data.results;
    }
    return null;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const getBookByBookTitle = (title) => {
  const bookList = book.results.books;
  return bookList.find((book) => book.title === title);
};

module.exports = { getAllBooks, getBookByBookTitle };
