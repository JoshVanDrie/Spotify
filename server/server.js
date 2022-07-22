const express = require('express');
const SpotifyWebAPI = requipre('spotify-web-api-node');
const app = express();

app.post('/login',  (req, res) => {
    const code = req.body.code
    const spotifyAPI = new SpotifyWebAPI({
        redirectUri: "http:localhost:3000",
        clientID: "a4e42116aebe439ba7da7017b523a679",
        clientSecret: "0939846db45e4cfdb7e921f9d8098d8c"
    })

    spotifyAPI.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch(() => {
        res.sendStatus(400)
    })
})
