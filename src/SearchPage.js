import React from 'react';
import "./SearchPage.css";
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';


function Searchpage() {
  return (
    <div className='searchPage'>
        <div className="searchPage__filter">
          <TuneIcon />
          <h2>FILTER</h2>
        </div>
        <hr /> 

    <ChannelRow 
    image="https://scontent.fskp2-1.fna.fbcdn.net/v/t1.6435-9/61927342_2315000205253366_5345764232178696192_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=NM2t-sNfhtQAX8cDvau&_nc_ht=scontent.fskp2-1.fna&oh=00_AfDvu07Wj1eh3WeEMckQ-2suGkjrkWtdlCF0xLZhuo-U4w&oe=63D7811D"
    channel="BurhanShbni"
    verified
    subs="659K"
    noOfVideos={392}
    description="You can find awesome programmer asdsdasdassadasadasdadsa asdasdasdadas sadasd"
    />
     <hr />
    
    <VideoRow 
    views="1.4M" 
    subs="659K"
    description="Do you Want a free  " 
    timestamp="1 yers ago" 
    channel="burhanShbni" 
    title="Let's build a youtube clone project" 
    image="https://siberbasin.net/wp-content/uploads/2021/02/youtube-profil-fotografi-degistirme-1024x576.jpg"
    />
    <VideoRow 
    views="1.4M" 
    subs="659K"
    description="Do you Want a free  " 
    timestamp="1 yers ago" 
    channel="burhanShbni" 
    title="Let's build a youtube clone project" 
    image="https://siberbasin.net/wp-content/uploads/2021/02/youtube-profil-fotografi-degistirme-1024x576.jpg"
    />
    <VideoRow 
    views="1.4M" 
    subs="659K"
    description="Do you Want a free  " 
    timestamp="1 yers ago" 
    channel="burhanShbni" 
    title="Let's build a youtube clone project" 
    image="https://siberbasin.net/wp-content/uploads/2021/02/youtube-profil-fotografi-degistirme-1024x576.jpg"
    />

    </div>
  )
}

export default Searchpage;