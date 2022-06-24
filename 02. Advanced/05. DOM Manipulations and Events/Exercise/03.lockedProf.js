function lockedProfile() {

    document.querySelector('main').addEventListener('click', openProfile);


    function openProfile(event) {
        const profile = event.target.parentElement;
        const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;

        if (event.target.querySelectorAll('button')) {
            if (isActive) {
                if (event.target.textContent == 'Show more') {

                    profile.querySelector('div').style.display = 'block';
                    profile.querySelector('button').textContent = 'Hide it';
                } else if (event.target.textContent == 'Hide it') {

                    profile.querySelector('div').style.display = '';
                    profile.querySelector('button').textContent = 'Show more';

                }
            }
        }
        console.log('TODO...')
    }
}