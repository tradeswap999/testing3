 const address = await ethereum.request({
     method: 'eth_requestAccounts'
 });

 if (!address) return;

 fetch('/auth', {
     method: 'POST',
     headers: {
         'Content-Type': 'application/json'
     },
     body: JSON.stringify({
         account,
     }),
 });