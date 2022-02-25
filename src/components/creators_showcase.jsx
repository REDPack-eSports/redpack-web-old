import React from 'react'

import SectionHeader from './section_header'
import Creator from './creator'

const CreatorsShowcase = () => {
  const creators = [
    {
      name: "sebivnn",
      game: "Variety",	
      link: "https://www.youtube.com/channel/UCH9_0OUXxWgSyU7tYjEFPcQ",
      audience:	"1k",
      platform: "YouTube",
    },
    {
      name: "KingAndreY",
      game: "Variety",
      link: "https://www.youtube.com/c/KingAndreYOfficial",
      audience:	"8.5k",
      platform: "YouTube",
    },
    {
      name: "Gabriela Bucur",
      game: "Variety",
      link: "https://www.youtube.com/c/GabrielaBucur27",
      audience:	"1.8k",
      platform: "YouTube",
    },
    {
      name: "Andreiul",
      game: "Variety",
      link: "https://www.youtube.com/c/Tataie",
      audience:	"3.2k",
      platform: "YouTube",
    },
    {
      name: "Sevena",
      game: "Variety",	
      link: "https://www.youtube.com/user/7annasammy",
      audience:	"5.8k",
      platform: "YouTube",
    },
    {
      name: "Cristina Simion",
      game: "Variety",
      link: "https://www.youtube.com/c/CristinaSimion",
      audience:	"2.7k",
      platform: "YouTube",
    },
    {
      name: "Rzvhere",
      game: "Valorant",
      link: "https://www.twitch.tv/rzvfatherr",
      audience:	"150",
      platform: "Twitch",
    },
    {
      name: "Cristi YT",
      game: "Variety",
      link: "https://www.youtube.com/channel/UCdufO9-UE_89-DMu5UAAtwQ",
      audience:	"21.7k",
      platform: "YouTube",
    },
    {
      name: "Sebyn9",
      game: "Fortnite",	
      link: "https://www.youtube.com/c/sebyn9",
      audience:	"5.7k",
      platform: "YouTube",
    },
    {
      name: "fwulii",
      game: "CS:GO",
      link: "https://www.youtube.com/c/fwulii",
      audience:	"3.1k",
      platform: "YouTube",
    },
    {
      name: "awks",
      game: "CS:GO",
      link: "https://www.youtube.com/channel/UCX8q1SwiR-sDTvsQ71RY9Eg",
      audience:	"270",
      platform: "YouTube",
    },
    {
      name: "phrika",
      game: "CS:GO",
      link: "https://www.youtube.com/channel/UCZYWGpcD_MghYcz7BusdCdQ",
      audience:	"1.2k",
      platform: "YouTube",
    },
    {
      name: "Ghepardu",
      game: "Fortnite",	
      link: "https://www.youtube.com/c/Gheparduofficial",
      audience:	"4.5k",
      platform: "YouTube",
    },
    {
      name: "Uncagedd",
      game: "Valorant",	
      link: "https://www.twitch.tv/uncagedd",
      audience:	"150",
      platform: "Twitch",
    },
    {
      name: "17nikkkk",
      game: "Valorant",
      link: "https://www.twitch.tv/17nikkkk",
      audience:	"100",
      platform: "Twitch",
    },
    {
      name: "Mario673rl",
      game: "Rocket League",	
      link: "https://www.twitch.tv/mario673rl",
      audience:	"600",
      platform: "Twitch",
    },
    {
      name: "SwiFT YhaRo",
      game: "Rocket League",	
      link: "https://www.youtube.com/channel/UCROSmQAbxiZPv-A_1xPe62g",
      audience:	"150",
      platform: "YouTube",
    },
    {
      name: "Glack",
      game: "Fortnite",
      link: "https://www.youtube.com/channel/UCzS6nn_yw43YTxldueXMrBg",
      audience:	"850",
      platform: "YouTube",
    },
    {
      name: "Vasluianu",
      game: "Fortnite",
      link: "https://www.youtube.com/results?search_query=vasluianu+FN",
      audience:	"750",
      platform: "YouTube",
    },
    {
      name: "radicaL.",
      game: "FiveM",
      link: "https://www.youtube.com/channel/UCn2hNuMCbCav8zY28VtC3DQ",
      audience:	"4k",
      platform: "YouTube",
    },
    {
      name: "Miruna Antonia",
      game: "Variety",
      link: "https://www.youtube.com/c/MirunaAntonia",
      audience:	"10.5k",
      platform: "YouTube",
    },
    {
      name: "Haled",
      game: "Fortnite",
      link: "https://www.youtube.com/c/Haled",
      audience:	"5.2k",
      platform: "YouTube",
    },
    {
      name: "7kick",
      game: "CS:GO",
      link: "https://www.youtube.com/channel/UClttGh8dGCwGuT_LObb7-Sw",
      audience:	"1.6k",
      platform: "YouTube",
    },
    {
      name: "tudyla",
      game: "CS:GO",
      link: "https://www.youtube.com/c/tudyla",
      audience:	"2.8k",
      platform: "YouTube",
    },
    {
      name: "Remus",
      game: "League of Legends",	
      link: "https://www.youtube.com/c/RemusNeo",
      audience:	"93.7k",
      platform: "YouTube",
    },
    {
      name: "Adryaan",
      game: "CS:GO",
      link: "https://www.youtube.com/channel/UCIBuf_BxXAbOX64_jD5KLeg",
      audience:	"3.4k",
      platform: "YouTube",
    },
    {
      name: "cristinelu",
      game: "Fortnite",
      link: "https://www.youtube.com/c/Cristinelu11",
      audience:	"4.4k",
      platform: "YouTube",
    },
    {
      name: "KickerzD",
      game: "Valorant",
      link: "https://www.twitch.tv/kickerzd",
      audience:	"750",
      platform: "Twitch",
    },
    {
      name: "Y-Alaxin",
      game: "FreeFire",
      link: "https://www.youtube.com/channel/UCBE3MSIXx9mKxx_jbsH7j7w",
      audience:	"45.5k",
      platform: "YouTube",
    },
    {
      name: "ValyS",
      game: "Fortnite",
      link: "https://www.youtube.com/channel/UCFwSla38RLaxRpseUK-C5MA/videos?view=57",
      audience:	"2.8k",
      platform: "YouTube",
    },
    {
      name: "heavenache",
      game: "CS:GO",
      link: "https://www.youtube.com/channel/UCEPaxe08q1FwUbzcn3Ji92w",
      audience:	"23.8k",
      platform: "YouTube",
    },
  ]

  return (
    <div className="p-6 bg-black">
      <SectionHeader name="CREATORS"/>
      <div className="grid grid-cols-1 gap-3
                      sm:grid-cols-2
                      lg:grid-cols-3">
        {creators.map((creator) => (
          <Creator name={creator.name}
                   game={creator.game}
                   link={creator.link}
                   platform={creator.platform}
                   audience={creator.audience}
          />
        ))}
      </div>
    </div>
  )
}

export default CreatorsShowcase