import React from 'react';
import JitsiMeetComponent from './JitsiMeetComponent';

const App = () => {
  const roomName = 'myroom'; // Specify your room name
  const jwtToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqb2huZG9lIiwiY29udGV4dCI6IntcInVzZXJcIjp7XCJuYW1lXCI6XCJteXJvb21cIixcInJvbGVcIjpcIm1vZGVyYXRvclwifX0iLCJpYXQiOjE3MjExMjc3NDMsImV4cCI6MTcyMTEzMTM0M30.y-mfG90TZanKjrelEDUhU-9-cxoAZnO3_zxFDSOqiZyeFYb0GSe2ZgS2jJOx1M9RbNV0GOm8Ue9LBLd8iuDlbw'; // Replace with your generated JWT token

  return (
    <div className="App">
      <h1>Jitsi Meet Integration</h1>
      <JitsiMeetComponent roomName={roomName} jwtToken={jwtToken} />
    </div>
  );
};

export default App;
