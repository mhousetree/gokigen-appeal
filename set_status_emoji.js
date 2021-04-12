const request = require('request')
const emoji_list = [
    { text: 'めっちゃ元気', emoji: ':star-struck:' },
    { text: 'かなり元気', emoji: ':blush:' },
    { text: 'ふつう', emoji: ':slightly_smiling_face:' },
    { text: '元気ない', emoji: ':expressionless:' },
    { text: 'だめです', emoji: ':anguished:' },
];

module.exports = (req, level, redirect_uri) => {
    const code = req.query["code"];
    request({
        url: "https://slack.com/api/oauth.v2.access",
        method: "POST",
        form: {
            client_id: process.env.SLACK_CLIENT_ID,
            client_secret: process.env.SLACK_CLIENT_SECRET,
            code: code,
            redirect_uri: redirect_uri
        }
    }, (error, response, body) => {
        const param = JSON.parse(body);
        const access_token = param['access_token'];
        request("https://slack.com/api/auth.test", {
            method: "POST",
            form: {
                token: access_token
            }
        }, (error, response, body) => {
            const user = JSON.parse(body);
            request("https://slack.com/api/users.profile.set", {
                method: 'POST',
                form: {
                    token: access_token,
                    profile: JSON.stringify({
                        "status_text": emoji_list[5-level].text,
                        "status_emoji": emoji_list[5-level].emoji
                    })
                }
            }, (error, response, body) => {
            })
        })
    })
}