
(function() {
  // create button element
  const elem = document.createElement('button');
  // add id to button
  elem.setAttribute('id', 'LeverCopyEmail');
  // add text to button
  elem.innerText = 'Copy';
  // style button
  elem.style.cssText = 'display:block; background:#00a1dc;color:white;border:none;border-radius:5px;padding:5px 10px;';
  // get the content-link classes in the lever page
  const contentLink = document.getElementsByClassName('content-link');
  let linkContent;

  // loop through the content-link class elements on the page
  for (let link in contentLink) {
    // find the link that contains the '@' sign to target the email address
    if (contentLink[link].getAttribute('href').includes('@')) {
      linkContent = contentLink[link];
      linkContent.parentElement.appendChild(elem);

      // add an event listener to the copy button to copy the email address on click
      document.getElementById('LeverCopyEmail').addEventListener('click', function(e){
        // prevent the button default
        e.preventDefault();
        // get the email text
        const text = linkContent.innerText;
        // capture the email address to clipboard
        const input = document.createElement('input');
        input.style.position = 'fixed';
        input.style.opacity = 0;
        input.value = text;
        document.body.appendChild(input);
        input.select();
        document.execCommand('Copy');
        document.body.removeChild(input);
      });
    }
  }
})();