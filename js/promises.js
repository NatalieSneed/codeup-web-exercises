
(async function(){
    "use strict";

    const options = {
        method: 'GET',
        headers:
            {
                "Authorization": "GITHUB_API_KEY"

            }
    };


        function getGithubUsernames() {
            return fetch("https://api.github.com/users/", options)
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(function(error) {
                    console.warn("Error" + error);
                });
        }

})();

function getUserLastPushEvent(username) {
    return fetch(`https://api.github.com/users/${username}/events/public`,  options)
        .then(response => {
            return response.json();
        }).then(events=> {
            for(let event of events) {
                if (event.type === 'PushEvent') {
                    return event.created_at;
                }
            }
        });

    }
    console.log(await getUserLastPushEvent("NatalieSneed"));
