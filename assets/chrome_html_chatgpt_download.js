(() => {
  // Select all messages (inspect the page to confirm the correct selector)
  const messages = document.querySelectorAll('[data-message-author-role]');

  let htmlOutput = '';

  messages.forEach(msg => {
    const role = msg.getAttribute('data-message-author-role') || 'ChatGPT';
    const contentEl = msg.querySelector('.markdown'); // ChatGPT messages have .markdown for HTML content
    if (!contentEl) return; // skip empty messages

    // Wrap each message in a div with role label
    htmlOutput += `<div class="${role}" style="margin-bottom: 1em;">`;
    htmlOutput += `<strong>${role === 'user' ? 'User' : 'ChatGPT'}:</strong><br>`;
    htmlOutput += contentEl.innerHTML; // grab the raw HTML
    htmlOutput += `</div>\n`;
  });

  // Copy HTML to clipboard using Chrome console helper
  copy(htmlOutput);
  console.log('✅ HTML copied to clipboard!');
})();
