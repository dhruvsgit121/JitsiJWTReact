import React from 'react';

const JitsiMeetComponent = ({ roomName, jwtToken }) => {
  const containerStyle = {
    width: '100%',
    height: '100vh', // Adjust height as needed
  };

  const domain = 'meet.jit.si'; // Replace with your Jitsi Meet server domain
  const options = {
    roomName: roomName,
    jwt: jwtToken,
    parentNode: document.getElementById('jitsi-container'),
    configOverwrite: {
      prejoinPageEnabled: false,
    },
  };

  const api = new window.JitsiMeetExternalAPI(domain, options);

  return <div id="jitsi-container" style={containerStyle} />;
};

export default JitsiMeetComponent;
