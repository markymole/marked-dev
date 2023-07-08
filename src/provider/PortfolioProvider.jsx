import React, {createContext, useContext, useEffect, useState} from 'react';

//feauted
import MinindalSnippet from '../assets/snippets/minindal-snippet2.png'
import TranslatorSnippet from '../assets/snippets/translator-snippet2.png'

//
import BabybeastImg from '../assets/BB-2.png'
import Translator from '../assets/translator.png'
import Minindal from '../assets/minindal-white.png'
import CKS from '../assets/cks.jpg'
//artworks
import DArt1 from '../assets/artworks/DA-1.png';
import DArt2 from '../assets/artworks/DA-2.png';
import DArt3 from '../assets/artworks/DA-3.png';
import DArt4 from '../assets/artworks/DA-4.png';
import DArt5 from '../assets/artworks/DA-5.png';
import DArt7 from '../assets/artworks/DA-7.png';
import DArt6 from '../assets/artworks/DA-6.png';
import DArt8 from '../assets/artworks/DA-8.png';
import DArt9 from '../assets/artworks/DA-9.png';
import DArt11 from '../assets/artworks/DA-11.png';
import DArt12 from '../assets/artworks/DA-12.png';
import DArt13 from '../assets/artworks/DA-13.png';
import DArt15 from '../assets/artworks/DA-15.png';
import DArt17 from '../assets/artworks/DA-17.png';
import DArt19 from '../assets/artworks/DA-19.png';

const PortfolioContext = createContext({});

export const PortfolioProvider = ({ children }) => {
    const projects = [
        {
          id: 1,
          title: 'Minindal',
          description: 'The premier web application for faster searching of Kapampangan cuisines and delicacies! Our platform is an open directory that allows users to easily find local Kapampangan food businesses around them, as well as enables Kapampangan food business owners to apply for a listing.',
          case_study: 'I spearheaded the development of Minindal, a premier web application for searching Kapampangan cuisines. From planning to deployment, I managed the entire development process, including system design, coding, testing, and deployment. The result is a user-friendly platform that revolutionizes the way users discover local Kapampangan food businesses.',
          link: 'https://www.minindal.com/',
          type: 'web',
          technology: 'React JS,Laravel,Tailwind,MySQL,Google Maps API',
          image: Minindal,
          featured: true,
          featuredImage: MinindalSnippet,
        },
        {
          id: 2,
          title: 'Kapampangan Translator',
          description: "This web app was developed on the initiative of the Holy Angel University Center for Kapampangan Studies to address the common problem of non-Kapampangans to communicate to Kapampangan using the latter's language. It is interactive to encourage everyone to contribute to it and help expand its vocabulary, thus making it an endless work in progress.",
          case_study: 'As the sole developer for this project initiated by the Holy Angel University Center for Kapampangan Studies, I took on the responsibility of designing, developing, and deploying a web application to address the language barrier between non-Kapampangans and Kapampangans. The application aimed to create an interactive platform that encourages contribution and collaboration, facilitating the expansion of the Kapampangan vocabulary.',
          link: 'https://kapampangancenter.org/kapampangantranslator/',
          type: 'web',
          technology: 'PHP,Jquery,MySQL,Bootstrap',
          image: CKS,
          featured: true,
          featuredImage: TranslatorSnippet,
        },
        {
          id: 3,
          title: 'The One with Venomized Spiderme',
          description: "I am big fan of Spiderman and Venom. So I found some inspiration out of other artworks and I decided to put my face on Spiderman's head.",
          type: 'art',
          image: DArt5,
        },
      
        //Artworks
        {
          id: 4,
          title: 'The One with Mi Maria',
          description: "This artwork is one of my favorite as this artwork's subject and inspiration is no other than my love.",
          type: 'art',
          image: DArt13,
        }, {
          id: 5,
          title: 'The One with Manolo',
          description: 'To match the artwork I made for my love, I made another artwork.',
          type: 'art',
          image: DArt15,
        },
        {
          id: 6,
          title: 'Babybeast',
          description: 'BABYBEAST is a digital collectible game with an immersive and hand-crafted universe, that allows players to discover new digital beings and embark on the ultimate journey of NFT ownership.',
          link: 'https://babybeast.vercel.app',
          type: 'web',
          image: BabybeastImg,
        },
      
        
        // {
        //   id: 7,
        //   title: 'The One with the Glasses',
        //   description: 'My first ever vector art.',
        //   type: 'art',
        //   image: DArt1,
        // },
        // {
        //   id: 8,
        //   title: 'The One where I had tattoo',
        //   description: 'This art is inspired from Lil Wayne, my favorite rapper. I always wonder how I look like with tattoo on so I decided to create one.',
        //   type: 'art',
        //   image: DArt2,
        // },
        {
          id: 9,
          title: 'The One with Sherlock',
          description: 'Sherlock Holmes is one of my favorite TV series and even though I am not as smart as Sherlock, I somehow relate myself to him.',
          type: 'art',
          image: DArt8,
        },
      
        {
          id: 10,
          title: 'The One with The Woman',
          description: "The Woman, that's all there is to say.",
          type: 'art',
          image: DArt9,
        }, {
          id: 11,
          title: 'The One with Watson',
          description: 'To complete all my favorite characters in the Sherlock, John Watson is the final piece.',
          type: 'art',
          image: DArt11,
        },
        // {
        //   id: 12,
        //   title: "The One for Alicia's Birthday",
        //   description: "Well as the title says, it is for Alicia's birthday.",
        //   type: 'art',
        //   image: DArt17,
        // }, {
        //   id: 13,
        //   title: "The One for Maria's Birthday",
        //   description: "This art is for my Maria's birthday.",
        //   type: 'art',
        //   image: DArt19,
        // },
      
        // Add more projects as needed
    ];
    

    return <PortfolioContext.Provider value = {{ 
        projects
      }}>
      {children}
    </PortfolioContext.Provider>

};

export default PortfolioContext;
