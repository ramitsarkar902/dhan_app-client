import React from "react";
import "./about.scss";
import AboutCard from "./aboutCard/AboutCard.jsx";

const aboutData = [
  {
    id: 1,
    icon: "https://s3-alpha-sig.figma.com/img/c6fa/5a51/bbc143c19fb9806562e4bee5a427c036?Expires=1655683200&Signature=HUblgCTEW4MeQfZOMmrV0w1buMnVZjWhxLIC0iy4LUzwh1nLnsF~0Ncr-JZUqjS1vmkrzDqQXbqcIVWHWGDjdl-yh~yjHy3isGZ6HQXYk638slayYZKCN9jWCokEe1bR~p5kBdPSnlrZFFgCfXj4UgoK7Lw-JVoYafeL-LQ78PJlFoJeG61yeRfVkIMs8PnTyOe8Bevba5~dTR3ov3SzBXDYjC4GaN50LsI8By43oQuhGbf7uLhhJMpXt-yUAMU3OqsAVIZFtm4r88VUS9keKsQ-MjG-DSjUZVNRqasVHhV78CwrmOWGuavxYqKNcF1ULXrlYlMD0OojWLP~vJVMzw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    title: "30 Minute Loan",
    description:
      "Get instant loans in just 15 minutes. Loan starting from ₹1000 to ₹5000000",
  },
  {
    id: 2,
    icon: "https://s3-alpha-sig.figma.com/img/e2fc/582d/2096f0b4e7862227677c818e02af8c80?Expires=1655683200&Signature=MKRXKhqrUVodAZLZRe94HYv2YW4m2B0XWL150NhrBbY22anG63oYH6u7VYWx6KlXzcz7MVPtTNhcJooPkF-ypNyerUlmNRRhn4zJF35QdvAfhmkYx-aZS4PWfAidjTR-vdfv4A0Ui2WpODIE13MEqB7Iq8CoZuHViJqaF2PkWevj4NN3s5AjFyAHWICH~NO-AvSqvYFbGrn0niaPH7MX1SjgdnvT6iGAS8boMtdOxHsccfDnh~OR9j67~W1DhgHnuUHCVf-n6ZHioEFHoJWAnAGLA3ZjjA3RoKikAUwURXZh6Mq4J~~RLCYJyCpAuhrGLctTrtbZ1xRb8p5U5T2V3A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    title: "Personal Loan",
    description:
      "We all need money. In order to cater to the lifestyles we lead, we need credit, more or less. ",
  },
  {
    id: 3,
    icon: "https://s3-alpha-sig.figma.com/img/1284/07fc/78159881afb5b2b39922c3114f490ee4?Expires=1655683200&Signature=BzTty1A-wmjjXirGvF6xQwaQLfjqPX3RoZ1usxhb-FoAxqqQ~SgEBOtegzcUsxuPpp-ZGqIMRJpv6zwwLH3LNCNowCe54SXq5wF4xWxJ9nQNZgJgpz353VLxRWZzoGJpdVd2kAeyLo~CPW4AoN-cGS98I50r-jiy94lAR8ZZcpcQppY8DfkSo3aQauQe6IpH3-ttxrF2CqTuA8voUGWpIg8Q8DMWlp2COAzJ-7Pp1R9VSkNht~cabTgUuyEeEyFuEZFwYc-Hf6rWMY3Cg9hN8u2WUqBpE4lRz6ABGVi2kcxFToXYOU-xcCtbPYjsi5r12BblGI8zFAqvy-3qxOJFBA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    title: "Business Loan",
    description:
      "In the last decade, start-up culture has seen an exponential boom and today,",
  },
  {
    id: 4,
    icon: "https://s3-alpha-sig.figma.com/img/1284/07fc/78159881afb5b2b39922c3114f490ee4?Expires=1655683200&Signature=BzTty1A-wmjjXirGvF6xQwaQLfjqPX3RoZ1usxhb-FoAxqqQ~SgEBOtegzcUsxuPpp-ZGqIMRJpv6zwwLH3LNCNowCe54SXq5wF4xWxJ9nQNZgJgpz353VLxRWZzoGJpdVd2kAeyLo~CPW4AoN-cGS98I50r-jiy94lAR8ZZcpcQppY8DfkSo3aQauQe6IpH3-ttxrF2CqTuA8voUGWpIg8Q8DMWlp2COAzJ-7Pp1R9VSkNht~cabTgUuyEeEyFuEZFwYc-Hf6rWMY3Cg9hN8u2WUqBpE4lRz6ABGVi2kcxFToXYOU-xcCtbPYjsi5r12BblGI8zFAqvy-3qxOJFBA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    title: "Home Loan",
    description: "There is no other comfort like the comfort of our own home.",
  },
  {
    id: 5,
    icon: "https://s3-alpha-sig.figma.com/img/c6fa/5a51/bbc143c19fb9806562e4bee5a427c036?Expires=1655683200&Signature=HUblgCTEW4MeQfZOMmrV0w1buMnVZjWhxLIC0iy4LUzwh1nLnsF~0Ncr-JZUqjS1vmkrzDqQXbqcIVWHWGDjdl-yh~yjHy3isGZ6HQXYk638slayYZKCN9jWCokEe1bR~p5kBdPSnlrZFFgCfXj4UgoK7Lw-JVoYafeL-LQ78PJlFoJeG61yeRfVkIMs8PnTyOe8Bevba5~dTR3ov3SzBXDYjC4GaN50LsI8By43oQuhGbf7uLhhJMpXt-yUAMU3OqsAVIZFtm4r88VUS9keKsQ-MjG-DSjUZVNRqasVHhV78CwrmOWGuavxYqKNcF1ULXrlYlMD0OojWLP~vJVMzw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    title: "Gold Loan",
    description:
      "Get instant loan against gold with safe and secure loan processing on the spot.",
  },
  {
    id: 6,
    icon: "https://s3-alpha-sig.figma.com/img/7c0e/959d/4abc201bfa0186e3b2cacf9b89691fe4?Expires=1655683200&Signature=ai2yegvIipq1w-l2ERHto~wY2mhByoKZ7L-uDtviFSVy5gz64JDSlAvscenlkzXZ0Bg4EDeiHPKVAPoHfa36YIk~nvGpHcOpkolMTsXkT7R8jFrquE-eOqA~rIVE7Bn~K3t0gM0csO2ruUNeK3JU3wjDgRU8j5S2cklHlX3YuiD0DpAmWUDbEBY161J7YNzV4w9AyYPpW1A7wswpGgi6jAhsBNICynP8F5UQDWVOj8QpuGfcZ3YMsODJ5BBscih2YBi8Rdhfd~e3kM9aBEVpZioiDet7BKB4kcdEPP7np7GCDSA93e9-mgBiDOjSCVAa3Z5qLEs5vU0RU5-PRUw0wQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    title: "Car Loan",
    description:
      "A car or any vehicle sometimes becomes a necessity when it comes to transportation or travel.",
  },
];
function About() {
  return (
    <div id="About" className=" about__wrapper app__container bg-white">
      <h1 className="text-center">
        We also get you the lowest interest rate loan offers from multiple Banks
        and NBFCs
      </h1>
      <div className="about__cards">
        {aboutData.map((loan) => (
          <AboutCard
            title={loan.title}
            icon={loan.icon}
            description={loan.description}
            key={loan.id}
          />
        ))}
        <div className="about__card-last">
          <img
            src="https://s3-alpha-sig.figma.com/img/94c1/9e58/b1d86805d7534f7a634a3d66ef20e577?Expires=1655683200&Signature=D33WPE7y2Djcyr3jwa5qNlWRvJmMQzZ8x3CYvdFuHdW1GAhVuaqCDjQwXDbPeq2l8Jvc9uEK-U5CglUnJSNt07OSO8eUfUkuJFPmb6hyBQOPd2WfEPlf8gkoY1xwigvgHzZ9CP5tHsaReP8teE-zmDP~zWjV0xIy7x3pMZ5GdJsjOjLgOuxe5XhER-xe5Vc26yKO6IG5vFdconcevQfAabnePAmqhC1qAHoyzb29e6mI9j4nvEDANWbGcpYRwJLyb-RaGacFn6fpT7mno9Y0PH0QHK65PnWchltKR62bU69rw1pMC-SiGaRs2HMPt8AsyR~yyTTP0W-fmk9oTQx2BA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt="shopping cart"
          />
          <div>
            <h2>Buy Now Plan Later </h2>
            <p>Comming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
