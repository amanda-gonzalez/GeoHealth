import React, { useEffect } from 'react';

const VoiceflowChatWidget = ({ projectID, url, versionID }) => {
  useEffect(() => {
    const loadVoiceflowChat = () => {
      const script = document.createElement('script');
      script.onload = function() {
        window.voiceflow.chat.load({
          verify: { projectID },
          url,
          versionID
        });
      };
      script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
      script.type = "text/javascript";
      document.body.appendChild(script);
    };

    loadVoiceflowChat();

    return () => {
      // Clean up function to remove the script when the component unmounts
      const scriptElement = document.querySelector('script[src="https://cdn.voiceflow.com/widget/bundle.mjs"]');
      if (scriptElement) {
        scriptElement.remove();
      }
    };
  }, [projectID, url, versionID]);

  return null;
};

export default VoiceflowChatWidget;
