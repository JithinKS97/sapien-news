/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Masonry from "react-masonry-css";
import Link from "next/link";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const newsFeedArray = [
  {
    img: "RCPostalService.jpeg",
    title:
      "The Future for the Internationalization of Chinese Home Appliance Enterprises",
    description:
      "(MS) – Hisense’s future development should continue to focus on high-end products, but meanwhile expand its business-to-business (B2B) industry, says Zhou Houjian, the chairman of the Hisense Group.Hisense’s monthly revenue from the international markets has exceeded $800 million, which marks a great achievement. But, the company has yet to put more money in its research and development in the B2B industry. Zhou Houjian points out that going overseas in the B2B industry is a clear strategy of the Group to deal with uncertain business risks in the future.The Group now owns 54 overseas companies and offices, 11 research and development institutions, 18 industrial parks and production bases. Over the past many years, Hisense has gone from a little-known brand to one of the most popular Chinese brands among international consumers and has become a truly international brand.As a matter of fact, Hisense Group’s plan to set foot in the overseas B2B industry has long been clear. Since the beginning of this year, in the annual Canon Fair and the China Africa Economic & Trade Expo, the Group has debuted new lines of B2B products such as color ultrasound devices, smart transportation solutions and commercial display solutions.The overseas sales of Hisense commercial display products, increased by more than 240% in the first 10 months of 2021. Hisense commercial displays can now be seen in the Parc des Princes stadium in Paris, BP oil gas station in UK, KFC restaurants in Poland and the ice hockey arenas in Norway.In August of this year, Hisense Medical received a big order of medical displays from South Africa, a milestone in its overseas medical display business.Zhou says that next year, going overseas will become an even more important strategic development direction for Hisense’s B2B industry, which showcases the Group’s resolve in industrial transformation and upgrading. The Group will give key support in terms of human and financial resources. The acceleration of overseas B2B business expansion will catalyze Hisense technologies global influence.",
  },
  {
    img: "MSHisenseB2B.jpeg",
    title: "The U.S. Postal Service Is Fixable with Help from Congress",
    description: `(NewsUSA) – Whether it brings something as special as a handwritten card or something as necessary as medication, the U.S. Postal Service is the only institution capable of going the last mile to reach, serve, and tangibly link every American — but now it needs our help.In the shadow of COVID-19, demand for mail and appreciation for it surged. But then along came 2021, and our mail got slower, less reliable and more expensive.During my four terms in Congress, I advocated for a strong U.S. Postal Service. That’s because reliable mail is critical for our country. Nearly everywhere I go now, however, I hear people talking about their mail — even rent, bills, and prescription medications — being late and pricier to send.And as we head into the Christmas holiday, people across the country are legitimately wondering if presents will get to their destinations on time. That’s because in October, the up-to-three-day service standard for First-Class Mail rose to five days, with consumers across the country reporting even higher delivery waits.Why? The U.S. Postal Service has a 10-year plan in place not only to slow the mail but also to make it more expensive.In fact, the cost of first-class mail and "forever stamps" are increasing at an unprecedented rate for everyone. But even more concerning, charities and other nonprofits, magazines, community newspapers, and catalogs are facing even bigger postage hikes which could even drive them out of business.So, what can we do about it? Well, the Postal Service does have legitimate reasons to save money, but putting the squeeze on mail isn’t the right way to do it — especially if you consider that business-related mail generates 90% of Postal Service revenue.One answer lies in passing bipartisan federal legislation called The Postal Service Reform Act. It would guarantee six-day mail delivery while freeing the Postal Service from a 2006 law requiring it to set aside funds for retiree health benefits 75 years in advance — a huge liability that has added more than $40 billion in losses to the Postal Service’s balance sheetThe Postal Service Reform Act not only has bipartisan support, but it has also been approved by U.S. Postal Service leadership and labor unions. The legislation presents a rare opportunity for Congress to easily make a positive difference in the lives of all Americans — every voter, every family, and every business in the nation.Another way to fix the Postal Service is to keep massive rate increases from happening every few months. Higher postage drives more mail from the system, especially when combined with service delays and consumer complaints.Some might claim that private couriers like FedEx and UPS could replace the U.S. Postal Service, but that’s not true. The Postal Service is obligated to serve every American, no matter how remote. Now it’s our job to fix it — and make sure it can keep delivering for all of us. Kevin Yoder is a former Republican Congressman from Kansas who spent four terms serving in the U.S. House of Representatives. He is executive director of "Keep US Posted"-a campaign aimed at preserving the U.S. Postal Service. For more information, visit www.KeepUSPosted.org.`,
  },
  {
    img: "MWWOpiodEpidemic.jpeg",
    title:
      "COVID Remains Focus for Health Officials Despite Rise in Opioid Epidemic",
    description:
      "By Brad Bauer, Senior Vice President, Bamboo Health(MWW) – Understandably, COVID continues to be a high priority for healthcare workers, public officials and the media. However, it has also drawn attention away from the opioid epidemic. The Centers for Disease Control and Prevention (CDC) report that more than 100,000 people died of drug overdoses from April 2020 to April 2021, up almost 30% from the 78,000 deaths in the prior year.Of those deaths, more than two-thirds involved opioids. This astounding number exceeds the overdose death toll in any year since the opioid epidemic began in the 1990s and is the largest annual percentage increase since 1999, according to The Commonwealth Fund.It’s clear that healthcare providers, behavioral health professionals, and federal and state governments collectively must renew their focus on opioids. Not only does opioid addiction devastate communities and families, but it also exacts a huge toll on our economy.First, treatment services for substance use disorders such as opioid addiction need to be made more accessible and affordable to those who need it. Accessibility starts with helping to fund financially imperiled and resource-strapped treatment organizations to keep their doors open and services available. To that end, the Biden Administration in August announced $10.7 million in federal grants to enable state and regional networks of pediatric mental healthcare providers to integrate telehealth services into behavioral healthcare programs and substance abuse treatment. While that’s a start, more government investment in opioid treatment is critical.Second, we need to upgrade and expand crisis services to make these easily accessible to all in need. In July, the 988 initiative launches, establishing a new nationwide 3-digit number for people in crisis to connect with a mental health professionals and suicide prevention counselors. Beyond infrastructure needed to support this, such as mobile crisis teams, states must also invest in digital infrastructure necessary to ensure people can access care once they’ve contacted a crisis line.Third, we must integrate new treatment models such as telemedicine into care plans. This may require relaxing regulations governing the delivery of remote care. We know from our experience during the pandemic that telemedicine is effective, so it makes sense to permanently waive remote care restrictions so more people can get help to overcome mental health challenges and addiction.Finally, we must continue to use the powerful technologies already at our disposal to monitor the dispensing of prescribed opioids. State prescription drug monitoring programs (PDMPs) allow physicians and pharmacists to see a patient’s recent prescription history and make more informed decisions to keep patients safe. Providers are more aware of prescriptions and changes in prescription history to help reduce negative drug interactions, prevent opioid misuse, and reduce the risk of opioid-related harm.Bamboo Health’s NarxCare is a clinical decision support tool and care management technology application currently used in more than 30 states and jurisdictions. The platform helps prescribers and dispensers analyze controlled substance data from PDMPs to make more informed prescription-care decisions. NarxCare automatically analyzes PDMP data and then it provides an interactive visualization of prescription drug usage patterns along with use scores and an overdose risk score.NarxCare is designed to provide physicians and pharmacists with a tool to ensure highly addictive pain medication is prescribed accurately to those who need it, while also helping to identify patients who may need intervening steps.The opioid epidemic isn’t going away by itself. We must all focus on reducing the death and destruction caused by insidious and persistent addiction. It will take caring, commitment, cooperation, and the right tools and resources. It will be a tough fight, but it’s one we can win. ",
  },
  {
    img: "CMCryptoCurrency.jpeg",
    title: "Survey Shows Low Levels of Cryptocurrency Literacy",
    description: `(NewsUSA) -Cryptocurrency continues to expand through the global economy, but approximately 96% of Americans were unable to pass a quiz about the fundamentals of cryptocurrency, according to results of the inaugural Crypto Literacy Survey, part of a consumer education initiative from a coalition of key players in the digital currency industry.
The quiz consisted of 17 questions to assess knowledge in cryptocurrency, bitcoin, De-Fi, blockchain, mining, types of wallets, and non-fungible tokens (NFTs), as well as general feelings about digital currencies.
The quiz was developed by Cryptoliteracy.org, a coalition that includes Coinme, CoinDesk, and the Digital Currency Group. The coalition website launched in November in honor of the first annual Crypto Literacy Month, and includes complete results of the 2021 survey.
The survey and quiz were sent to 1,000 cryptocurrency or bitcoin-aware internet users in the United States, Mexico, and Brazil, balanced across age, gender, and education level (plus race/ethnicity in the U.S.). Similar to the low pass rate of 4% in the United States, 99% of Brazilian and Mexican participants did not pass the quiz.
However, according to the survey, 30% of Brazilians and 28% of Mexicans say they intend to buy or sell cryptocurrencies in the next six months, compared to 12% of Americans.
“Our industry needs to do more to improve crypto literacy throughout the world. By doing so, we can help people improve their lives by understanding how to utilize cryptocurrencies,” says Neil Bergquist, CEO and co-founder of Coinme.
“As a champion of equal and simple access to digital currencies, Coinme is proud to lead this effort in collaboration with key industry partners,” he adds.
Other key insights from the survey show that overall, cryptocurrency owners scored higher on the crypto-literacy quiz, and that most owners are younger, wealthier, and male.
In addition, younger generations in the United States are nearly three times more likely to use cryptocurrency as a means of payment, while older generations tend to view it as an investment.
Consumers around the world are invited to test their cryptocurrency literacy by taking the Crypto Literacy Quiz online. Scores will be privately emailed to participants, along with tailored courses provided by CoinDesk improve knowledge of cryptocurrency concepts.
Visit cryptoliteracy.org to learn more about cryptocurrencies, test your knowledge, challenge your friends, and to read complete results from the annual survey.
You can also join the social media conversation and follow CryptoLiteracy.org on Twitter, Facebook and Instagram.`,
  },
  {
    img: "RCCBreakoutMedia.jpeg",
    title: "Pioneering App Breaks the Mold on Social Media",
    description: `(NewsUSA) -In the crowded world of social media, many businesses, influencers, and nonprofit organizations are looking for new ways to be heard, without censorship and becoming the product for big tech’s complex revenue systems.Breakout, a new free audio app currently raising money via crowdfunding (https://breakoutsocial.com/investors/), represents a unique addition to the social media space that will let users not only connect and share without censorship, but also own and sell their own data.The Breakout platform’s features were designed to provide an audio social experience that is simple, predictable, and profitable.Users create a profile and can explore different Breakout Rooms, where people with similar interests can come together and share their ideas. Very soon Breakout will also be able to help connect users to companies that are interested in the user’s data, but the users retain control."All of the social media giants sell this data and they keep 100% of revenue, and the user has no say in the transaction," according to the company website."Further, users have no say about to whom that the data will be sold."Breakout allows users to own their own data, and choose what data to sell and at what price.Breakout can be used in many ways by businesses, social media influencers, and nonprofit organizations.
To boost a business. Breakout allows companies to get access to user data the right way for digital marketing initiatives, product planning, and budgeting purposes.
Companies also can LAO use the app for meetings by creating a verified, branded Breakout Room, which has no time limit. Businesses can even monetize their accounts indirectly, as generic data collected from their website "cookies" can be valuable in the global digital marketplace.
To increase fundraising. Non-profit organizations can find a friend in Breakout.
The app allows users to conduct live broadcasts with an in-app donation capture mechanism that helps overcome technical hurdles faced by other online broadcasts. Nonprofits can monetize the passively collected data as users engage with the nonprofit website through Breakout
To increase influence. Social media influencers want flexibility, fun, and also control over their ability to monetize their content.
Breakout’s unique B Vault data market exchange keeps data secure, and in the first quarter of 2022, an Influencer Marketplace will help influencers connect with potential sponsors.Also, Room Hosts (users, influencers, and brands) will be able to access the marketplace to connect and collaborate.Visit breakoutsocial.com/investors to learn more about Breakout’s value for business, social influence, fundraising, and investing.`,
  },
  {
    img: "EBTTransportation.jpeg",
    title: `Data Science: The Smart Technology You Don’t See`,
    description: `(NewsUSA) – Data and analytics touch our lives every day. Sometimes, it is in ways you see, such as when you log on to a video call, pay for your bus ticket or order your latte using your phone. Or view spending trends on your bank account using an app or website. Data analytics are also at work in ways you don’t see — ways that make your life easier, safer, more convenient, and more fun — especially when it comes to getting where you want to go. Indeed, data analytics are working tirelessly behind the scenes to help you reduce your travel time, make getting from point A to point B easier, manage traffic congestion, and create safer and more accessible ways to use public transit.
When you’re waiting to catch the bus to work, your phone app may tell you whether your ride is on schedule — and exactly how many minutes until the next buses arrive at your stop. Did you ever wonder how the apps know all this? When you visit a new city, do you use apps to figure out how to get from one landmark to the next — or your lunch stop along the way? Data analytics and smart apps make all this possible. Similarly, when winter weather hits and roads need to be cleared, data and analytics can help cities send extra drivers to harder hit areas needing to be cleared using real-time data, so you know when your street will be plowed.
And it’s not all about logistics. Smart technology helps improve many aspects of your daily life: your job, school, community center, parks, and all kinds of entertainment. Check out these examples of the hidden technology from EastBanc Technologies that facilitates daily tasks and activities — making your life just a bit easier.
TRANSITiQ: People want to have a clear view of all available travel options and predicted travel time, and cities want to increase accessibility and use of public transit. With TRANSITiQ and the power of data, users can see stations, routes, service alerts and even enable location-based push notifications. Notably, TRANSITiQ technology enables accurate prediction of arrival times to stops along transit routes. And by integrating Bluetooth Beacons, cities can help visually impaired users to safely navigate the transportation system. TRANSITiQ also gathers crucial business intelligence for municipalities, including performance reports and other relevant statistics.
CABiQ: Trying to hail a cab during rush hour, or after that night out, can be really frustrating. But with phone apps and other new smart tools at their disposal, operators and drivers can pinpoint hotspots and easily determine where and when to place their cars — thus optimizing services and helping passengers find their rides quicker. These tools leverage CABiQ technology to analyze historical and near-real-time data about vehicle locations and ride demand, enabling them to map underserved areas as well as popular destinations and pickup points. CABiQ not only benefits cab drivers and their customers; it also provides crucial information to cities to help them with regulation of local taxi services: A central feature of CABiQ is the ability to gather and report timely and accurate information about every trip to the municipality for analysis and enforcement.
SNOWiQ: Today’s unpredictable, and often extreme, winter weather demands a rapid response from busy cities whose residents expect roads to be plowed quickly and efficiently. Simply put, cities need to minimize the impact of inclement weather on daily commutes and doings. We’ve seen how Uber and Lyft have changed ride sharing. What if it were possible for cities to also be responsive to peak times and use contractors to shore up their fleet? With SNOWiQ, cities can optimize snow removal to reduce truck idling time and save money — and residents can know which routes have been cleared, which ones are next on the schedule, and when it’s safe to travel again.
FoodTruckIQ: Food trucks are all the rage. And for good reason. Many of the morsels concocted by these mobile eateries are innovative and positively delectable. So, when you hanker for your favorite food truck fare, how do you find it when its location moves? An app, of course. Behind the scenes, tech is working hard to help you make it easy to find your next lunch — whether it’s trekking cross-town to devour your favorite burrito or seeing what new trucks are parked by your work today. Tech can even help cities avoid turf wars that can happen over prime locations. How do such food truck apps come to be?
Food truck vendors submit logistical information to data scientists, who analyze the information and then share the processed data with developers who build and manage the apps. FoodTruckIQ is the brains behind your next mobile meal.
So the next time you head out to meet a friend at your favorite food truck, need to hail a cab or jump on a city bus, or need a plow to clear your snow-blanketed street, rest assured that data analytics will help make it happen. Smart technology is already everywhere, making daily life just a little bit more enjoyable.`,
  },
];

export default function NewsFeed({ setSelectedNews }: any) {
  const handleClick = (news: any) => () => {
    setSelectedNews(news);
  };

  return (
    <>
      <style>{style}</style>
      <div className="outer-container">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {newsFeedArray.map((news: any, index: number) => (
            <Link key={index} href="/news">
              <div className="news-item" onClick={handleClick(news)}>
                <img width="250px" src={`${news.img}`}></img>
                <h3 className="title">{news.title}</h3>
              </div>
            </Link>
          ))}
        </Masonry>
      </div>
    </>
  );
}

const style = `
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
    background: grey;
    margin-bottom: 30px;
  }
`;
