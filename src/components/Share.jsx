import React, { useState } from 'react';
import { FacebookShareButton, RedditShareButton, EmailShareButton,TwitterShareButton } from 'react-share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { TwitterIcon } from 'react-share';
import { RedditIcon } from 'react-share';
import { FacebookIcon } from 'react-share';
import { EmailIcon } from 'react-share';


const ShareButton = ({ data }) => {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const { title, text } = data; // Extract title and text from props
  const shareUrl = window.location.href; // Replace with your actual website URL

  const handleShareClick = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="relative">
      <button
        onClick={handleShareClick}
      >
        <FontAwesomeIcon icon={faPaperPlane} size="lg" />
      </button>

      {/* Modal */}
      {showModal && (
        <div className="absolute left-4 flex items-center justify-center z-50 bg-yellow-200">
            <div className="flex text-black">
              <FacebookShareButton url={shareUrl} quote={text}>
                <FacebookIcon/>
              </FacebookShareButton>
              <RedditShareButton url={shareUrl} title={title}>
                <RedditIcon/>
              </RedditShareButton>
              <EmailShareButton url={shareUrl} subject={title} body={text}>
                <EmailIcon/>
              </EmailShareButton>
              <TwitterShareButton url={shareUrl} subject={title} body={text}>
                <TwitterIcon/>
              </TwitterShareButton>
            </div>
          </div>
      )}
    </div>
  );
};

export default ShareButton;
