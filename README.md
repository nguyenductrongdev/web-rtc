# Quick start
```
npm install
npm start
```

# Basic workflow:
- Offerer creates an RTCPeerConnection, gathers ICE candidates, and creates an offer.
- Offerer sets the local description to the offer and sends it to the answerer.
- Answerer receives the offer, sets it as the remote description, creates an answer, and sets it as the local description.
- Answerer sends the answer back to the offerer.
- Offerer receives the answer and sets it as the remote description.
- Both peers exchange ICE candidates to establish the connection.
