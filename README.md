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

Here's how it works:

1.  **Offerer**:
    
    *   The peer initiating the connection (the offerer) creates an **offer**.
        
    *   The offerer sets this offer as its **local description** using setLocalDescription.
        
    *   The offerer then sends this offer to the remote peer.
        
2.  **Answerer**:
    
    *   The peer receiving the offer (the answerer) sets this offer as its **remote description** using setRemoteDescription.
        
    *   The answerer creates an **answer** in response to the offer.
        
    *   The answerer sets this answer as its **local description** using setLocalDescription.
        
    *   The answerer then sends this answer back to the offerer.
        
3.  **Offerer (continued)**:
    
    *   The offerer receives the answer and sets it as its **remote description** using setRemoteDescription.

Key Points:

*   **Offer**: The SDP created by the offerer.
    
    *   **Local Description** for the offerer.
        
    *   **Remote Description** for the answerer.
        
*   **Answer**: The SDP created by the answerer in response to the offer.
    
    *   **Local Description** for the answerer.
        
    *   **Remote Description** for the offerer.