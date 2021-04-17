/*
 * Mailchimp AJAX form submit VanillaJS
 * Vanilla JS
 * Author: Michiel Vandewalle
 * Github author: https://github.com/michiel-vandewalle
 * Github project: https://github.com/michiel-vandewalle/Mailchimp-AJAX-form-submit-vanillaJS
 */

export const sub = (e) => {
    e.preventDefault();
    
    // Check for spam
    if(e.target.querySelector('#js-validate-robot').value !== '') { return false }

    // Get url for mailchimp
    var url = e.target.action.replace('/post?', '/post-json?');

    // Add form data to object
    var data = '';
    var inputs = e.target.querySelectorAll('#js-form-inputs input');
    for (var i = 0; i < inputs.length; i++) {
        data += '&' + inputs[i].name + '=' + encodeURIComponent(inputs[i].value);
    }

    // Create & add post script to the DOM
    var script = document.createElement('script');
    script.src = url + data;
    document.body.appendChild(script);

    // Callback function
    var callback = 'callback';
    window[callback] = function(data) {

        // Remove post script from the DOM
        delete window[callback];
        document.body.removeChild(script);

        // Display response message
        document.getElementById('js-subscribe-response').innerHTML = data.msg
    };
}