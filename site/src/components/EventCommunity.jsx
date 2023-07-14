import React from 'react';
import Link from '@docusaurus/Link';
import Button from './Button';

function CommunityCard({ icon, title, CTA, buttonUrl, buttonText }) {
  return (
    <div className="border border-[#282828] rounded-sm p-8 w-full">
      <div className="flex flex-row justify-around">
        <img className="w-9 h-9 mr-6" src={icon} />
        <div>
          <h3 className="text-[#22f1ff]">{title}</h3>
          <p>{CTA}</p>
          <div className='padding-top--lg' />
          <Button label={buttonText} url={buttonUrl} colorDarkMode="cyan" isExternalLink="true" className="community-button "/>
        </div>
      </div>
    </div>
  );
}

function EventCommunity() {
  return (
    <div>
      <div className="community-card grid grid-cols-1 tablet:grid-cols-3 desktop:grid-cols-3 gap-4">
      <CommunityCard
          title="Discord"
          icon="/img/discord-icon.svg"
          CTA="Engage with fellow community members"
          buttonUrl="https://discord.gg/tbd"
          buttonText="Join"
        />
        <CommunityCard
          title="GitHub"
          icon="/img/github-icon.svg"
          CTA="Submit a PR or open an issue"
          buttonUrl="https://github.com/TBD54566975"
          buttonText="View"
        />
        <CommunityCard
          title="Docs"
          icon="/img/docs-task-list.svg"
          CTA="Dive into our APIs and learn more about Web5"
          buttonUrl="https://developer.tbd.website/docs/"
          buttonText="Learn More"
        />
      </div>
    </div>

  );
}

export default EventCommunity;
