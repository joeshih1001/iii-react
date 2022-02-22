import { FacebookShareButton, LineShareButton } from 'react-share';
import { FacebookIcon, LineIcon } from 'react-share';

function SocialShare(props) {
  const { url, round } = props;
  return (
    <>
      <FacebookShareButton url={url}>
        <FacebookIcon round={round} />
      </FacebookShareButton>

      <LineShareButton url={url}>
        <LineIcon round={round} />
      </LineShareButton>
    </>
  );
}

export default SocialShare;
